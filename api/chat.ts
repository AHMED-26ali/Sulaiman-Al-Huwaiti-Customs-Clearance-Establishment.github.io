import { GoogleGenAI } from '@google/genai';
import type { Request, Response } from 'express';
import fs from 'fs';
import {
  SYSTEM_KNOWLEDGE_PROMPT,
  OFFICIAL_CONTACTS
} from './siteKnowledge';

// Auto-load local environment variables if available in Node environment
try {
  const proc = process as any;
  if (typeof proc.loadEnvFile === 'function') {
    if (fs.existsSync('.env.local')) {
      proc.loadEnvFile('.env.local');
    }
    if (fs.existsSync('.env')) {
      proc.loadEnvFile('.env');
    }
  }
} catch {
  // Ignored if files are not present
}

// In-Memory Rate Limiting
interface RateLimitRecord {
  dailyCount: number;
  lastDailyReset: number;
  recentTimestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitRecord>();

const MAX_DAILY_MESSAGES = 15;
const MAX_BURST_MESSAGES = 5;
const BURST_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_MESSAGE_LENGTH = 1000;
const REQUEST_TIMEOUT_MS = 15000;

// Periodic cleanup of stale records (unref'd so it does not block process exit or tests)
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now - record.lastDailyReset > DAY_MS && record.recentTimestamps.length === 0) {
      rateLimitStore.delete(key);
    }
  }
}, 30 * 60 * 1000);

if (cleanupInterval && typeof cleanupInterval.unref === 'function') {
  cleanupInterval.unref();
}

function getClientIdentifier(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string'
    ? forwarded.split(',')[0].trim()
    : (Array.isArray(forwarded) ? forwarded[0] : req.socket?.remoteAddress) || '127.0.0.1';

  const clientSession = req.headers['x-session-id'];
  return typeof clientSession === 'string' && clientSession.length > 5
    ? `${ip}_${clientSession}`
    : ip;
}

function checkRateLimit(clientId: string): { allowed: boolean; reason?: string; remainingDaily: number } {
  const now = Date.now();
  let record = rateLimitStore.get(clientId);

  if (!record) {
    record = {
      dailyCount: 0,
      lastDailyReset: now,
      recentTimestamps: []
    };
    rateLimitStore.set(clientId, record);
  }

  if (now - record.lastDailyReset > DAY_MS) {
    record.dailyCount = 0;
    record.lastDailyReset = now;
  }

  record.recentTimestamps = record.recentTimestamps.filter(ts => now - ts < BURST_WINDOW_MS);

  if (record.dailyCount >= MAX_DAILY_MESSAGES) {
    return {
      allowed: false,
      reason: 'daily_limit_reached',
      remainingDaily: 0
    };
  }

  if (record.recentTimestamps.length >= MAX_BURST_MESSAGES) {
    return {
      allowed: false,
      reason: 'burst_limit_reached',
      remainingDaily: Math.max(0, MAX_DAILY_MESSAGES - record.dailyCount)
    };
  }

  return {
    allowed: true,
    remainingDaily: Math.max(0, MAX_DAILY_MESSAGES - record.dailyCount)
  };
}

function recordBurstAttempt(clientId: string): void {
  const now = Date.now();
  let record = rateLimitStore.get(clientId);
  if (!record) {
    record = {
      dailyCount: 0,
      lastDailyReset: now,
      recentTimestamps: []
    };
    rateLimitStore.set(clientId, record);
  }
  record.recentTimestamps.push(now);
}

function recordDailySuccess(clientId: string): void {
  const record = rateLimitStore.get(clientId);
  if (record) {
    record.dailyCount += 1;
  }
}

/**
 * Strict verification of explicit intent to request phone numbers or direct calling.
 * NEVER triggers on general queries (e.g. "مساعدة", "خدمات", "تخليص", "شحنة", "أوراق").
 * ONLY triggers when the visitor explicitly asks to call, speak with someone, or get a phone number.
 */
export function detectExplicitContactIntent(message: string): boolean {
  if (!message || typeof message !== 'string') return false;
  const text = message.trim().toLowerCase();

  // Exclude common phrases that contain "رقم" but are NOT phone numbers
  const isCustomsDocNumber = /(رقم\s+(البيان|الشحنة|الحاوية|السجل|البند|الرمز|الطلب|التتبع))/i.test(text);
  if (isCustomsDocNumber) {
    return false;
  }

  // Explicit patterns for asking for phone / mobile / office number
  const asksForPhoneNumber = /(رقم|ارقام|أرقام|نمرة|تليفون|جوال|هاتف|phone|mobile|number|call)/i.test(text) &&
    /(مكتب|مؤسسة|فرع|تواصل|اتصال|مسؤول|مسئول|سليمان|أحمد|ابراهيم|علاء|عندكم|لكم|بتاعكم|حقكم|اديني|عطني|هات|ممكن|عايز|ابغى|أبغى|اريد|أريد|phone\s*number|contact\s*number|call\s*(the\s*)?office)/i.test(text);

  // Explicit patterns for wanting to call or speak to a person
  const asksToCallOrSpeak = /((أكلم|اكلم|أتصل|اتصل|اتكلم|أتكلم|احاكي|أحاكي|أتواصل|اتواصل|تواصل)\s*(مع\s*|ب)?(مسؤول|مسئول|أحد|حد|شخص|سليمان|المكتب|المؤسسة|الإدارة|الادارة|ممثل|خدمة\s*العملاء))/i.test(text) ||
    /(عايز\s*اتصل|عايز\s*اكلم|عايز\s*أتصل|عايز\s*أكلم|ابغى\s*اتصل|أبغى\s*أكلم|اريد\s*الاتصال|ممكن\s*اتصل|ممكن\s*أكلم|can\s*i\s*call|speak\s*(with|to)\s*(someone|a\s*representative|the\s*office|sulaiman)|call\s*someone)/i.test(text);

  return asksForPhoneNumber || asksToCallOrSpeak;
}

/**
 * Normalizes conversation history into strictly alternating user/model turns
 * starting with a 'user' turn and ending with the current 'user' turn.
 * Prevents Gemini 400 INVALID_ARGUMENT errors.
 */
function buildAlternatingContents(
  rawHistory: Array<{ role: 'user' | 'model'; text: string }>,
  currentMessage: string
): Array<{ role: 'user' | 'model'; parts: { text: string }[] }> {
  const contents: Array<{ role: 'user' | 'model'; parts: { text: string }[] }> = [];

  const validItems = (rawHistory || [])
    .filter(h => h && typeof h.text === 'string' && h.text.trim().length > 0)
    .slice(-6);

  for (const item of validItems) {
    const role: 'user' | 'model' = item.role === 'model' ? 'model' : 'user';
    const text = item.text.trim().slice(0, MAX_MESSAGE_LENGTH);

    if (contents.length === 0) {
      // Must start with user
      if (role === 'user') {
        contents.push({ role: 'user', parts: [{ text }] });
      }
    } else {
      const lastRole = contents[contents.length - 1].role;
      if (lastRole !== role) {
        contents.push({ role, parts: [{ text }] });
      } else {
        // If identical role in sequence, merge text to maintain alternating structure
        contents[contents.length - 1].parts[0].text += '\n' + text;
      }
    }
  }

  // Ensure current user message is appended as a user turn
  const currentText = currentMessage.trim().slice(0, MAX_MESSAGE_LENGTH);
  if (contents.length === 0) {
    contents.push({ role: 'user', parts: [{ text: currentText }] });
  } else {
    const last = contents[contents.length - 1];
    if (last.role === 'user') {
      last.parts = [{ text: currentText }];
    } else {
      contents.push({ role: 'user', parts: [{ text: currentText }] });
    }
  }

  return contents;
}

export async function handleChatRequest(req: Request, res: Response): Promise<void> {
  // Enforce zero-caching for chat completions to prevent stale session replays
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    const clientId = getClientIdentifier(req);
    const { message, history } = req.body || {};

    // 1. Validation
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      res.status(400).json({
        error: 'يرجى كتابة رسالة لإرسالها.',
        code: 'EMPTY_MESSAGE',
        showContactCards: false
      });
      return;
    }

    const trimmedMessage = message.trim();

    // 2. Length Guardrail
    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      res.status(400).json({
        error: `عذراً، طول الرسالة تجاوز الحد الأقصى المسموح به (${MAX_MESSAGE_LENGTH} حرف). يرجى اختصار استفسارك.`,
        code: 'MESSAGE_TOO_LONG',
        showContactCards: false
      });
      return;
    }

    // 3. Rate Limiting
    const rateLimitStatus = checkRateLimit(clientId);
    if (!rateLimitStatus.allowed) {
      if (rateLimitStatus.reason === 'daily_limit_reached') {
        res.status(429).json({
          error: 'لقد استهلكت الحد الأقصى من الرسائل اليومية (15 رسالة). يرجى المحاولة غداً.',
          code: 'DAILY_LIMIT_EXCEEDED',
          showContactCards: false
        });
        return;
      } else {
        res.status(429).json({
          error: 'يرجى الانتظار دقيقة قبل إرسال رسائل جديدة (الحد الأقصى 5 رسائل خلال 10 دقائق).',
          code: 'BURST_LIMIT_EXCEEDED',
          showContactCards: false
        });
        return;
      }
    }

    // 4. API Key Check
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('[AI Chat Server] Error: GEMINI_API_KEY is not defined in environment variables.');
      res.status(503).json({
        error: 'خدمة المساعد الذكي تتطلب ضبط مفتاح GEMINI_API_KEY في السيرفر. يرجى إعادة المحاولة لاحقاً.',
        code: 'API_KEY_NOT_CONFIGURED',
        showContactCards: false
      });
      return;
    }

    // 5. Model Candidate List with intelligent fallback for availability
    let preferredModel = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';
    // Automatically migrate deprecated gemini-2.5-flash-lite to gemini-3.5-flash-lite
    if (preferredModel === 'gemini-2.5-flash-lite') {
      preferredModel = 'gemini-3.5-flash-lite';
    }

    const modelCandidates = Array.from(
      new Set([
        preferredModel,
        'gemini-3.5-flash-lite',
        'gemini-2.5-flash',
        'gemini-1.5-flash',
        'gemini-2.0-flash',
        'gemini-3.8-flash'
      ])
    );

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'sulaiman-alhuwaiti-customs-chat'
        }
      }
    });

    const normalizedContents = buildAlternatingContents(history, trimmedMessage);

    // Record burst attempt
    recordBurstAttempt(clientId);

    let replyText = '';
    let lastError: any = null;

    // Try candidates in order
    for (const modelName of modelCandidates) {
      try {
        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('REQUEST_TIMEOUT')), REQUEST_TIMEOUT_MS);
        });

        const apiPromise = ai.models.generateContent({
          model: modelName,
          contents: normalizedContents as any,
          config: {
            systemInstruction: SYSTEM_KNOWLEDGE_PROMPT,
            temperature: 0.3,
            maxOutputTokens: 800,
            safetySettings: [
              { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
              { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
              { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
              { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
            ]
          } as any
        });

        const response: any = await Promise.race([apiPromise, timeoutPromise]);

        if (response && response.text) {
          replyText = response.text;
          break;
        } else if (response && response.candidates && response.candidates[0]?.content?.parts?.[0]?.text) {
          replyText = response.candidates[0].content.parts[0].text;
          break;
        }
      } catch (candidateErr: any) {
        lastError = candidateErr;
        const errStr = String(candidateErr?.message || candidateErr);
        console.warn(`[AI Chat] Model ${modelName} call failed:`, errStr);

        const isModelUnavailable =
          errStr.includes('404') ||
          errStr.includes('NOT_FOUND') ||
          errStr.includes('not found') ||
          errStr.includes('no longer available') ||
          errStr.includes('is not supported');

        if (!isModelUnavailable) {
          // If error is authentication or rate limit, stop trying candidates
          break;
        }
      }
    }

    if (!replyText) {
      throw lastError || new Error('No response returned from Gemini.');
    }

    // Record usage on success
    recordDailySuccess(clientId);

    // Contact cards are ONLY displayed if the USER explicitly requested contact/phone
    const isExplicitContactRequest = detectExplicitContactIntent(trimmedMessage);

    res.status(200).json({
      reply: replyText.trim(),
      showContactCards: isExplicitContactRequest,
      contacts: isExplicitContactRequest ? OFFICIAL_CONTACTS : undefined,
      remainingDaily: Math.max(0, rateLimitStatus.remainingDaily - 1)
    });
  } catch (error: any) {
    const errorMsg = error?.message || String(error);
    console.error('[AI Chat Server] Execution failure:', errorMsg);

    const isTimeout = errorMsg.includes('REQUEST_TIMEOUT');
    const isRateLimit = errorMsg.includes('429') || errorMsg.includes('RESOURCE_EXHAUSTED');
    const isAuth = errorMsg.includes('401') || errorMsg.includes('403') || errorMsg.includes('API_KEY');

    let clientMessage = 'تعذر إرسال الرد حالياً. يرجى النقر على زر "إعادة المحاولة".';
    if (isTimeout) {
      clientMessage = 'استغرقت الاستجابة وقتاً أطول من المتوقع. يرجى النقر على "إعادة المحاولة".';
    } else if (isRateLimit) {
      clientMessage = 'تم تجاوز حصة الطلبات المتاحة حالياً. يرجى الانتظار قليلاً ثم إعادة المحاولة.';
    } else if (isAuth) {
      clientMessage = 'تعذر التحقق من صلاحية مفتاح الخدمة في السيرفر. يرجى مراجعة إعدادات السيرفر.';
    }

    res.status(500).json({
      error: clientMessage,
      code: isTimeout ? 'TIMEOUT' : isRateLimit ? 'QUOTA_EXCEEDED' : 'GEMINI_ERROR',
      showContactCards: false
    });
  }
}

/**
 * Default Vercel Serverless Function entry point
 */
export default async function handler(req: Request, res: Response) {
  // Always enforce zero-caching and JSON content-type
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Handle CORS Preflight if invoked externally
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-session-id');
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
    return;
  }

  try {
    await handleChatRequest(req, res);
  } catch (fatalErr: any) {
    console.error('[Vercel Serverless Fatal Exception]', fatalErr);
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.status(500).json({
        error: 'تعذر إرسال الرد حالياً. يرجى النقر على زر "إعادة المحاولة".',
        code: 'FATAL_SERVER_ERROR',
        showContactCards: false
      });
    }
  }
}
