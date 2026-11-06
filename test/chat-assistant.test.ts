import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  OFFICIAL_CONTACTS,
  HEADQUARTERS_INFO,
  OFFICIAL_BRANCHES,
  CORE_SERVICES,
  REQUIRED_DOCUMENTS,
  SYSTEM_KNOWLEDGE_PROMPT
} from '../src/shared/siteKnowledge';
import { detectExplicitContactIntent } from '../server/chatHandler';

describe('Sulaiman Al-Huwaiti AI Assistant - Knowledge & Strict Contact Intent', () => {
  it('should have all 4 official contact persons with verified phones', () => {
    assert.equal(OFFICIAL_CONTACTS.length, 4);

    const names = OFFICIAL_CONTACTS.map(c => c.name);
    assert.ok(names.includes('سليمان الحويطي'));
    assert.ok(names.includes('أحمد علي'));
    assert.ok(names.includes('إبراهيم جمعة'));
    assert.ok(names.includes('علاء جاد'));

    for (const c of OFFICIAL_CONTACTS) {
      assert.match(c.phone, /^\+9665\d{8}$/);
    }
  });

  it('should have accurate headquarters information in Duba', () => {
    assert.equal(HEADQUARTERS_INFO.plusCode, '8PX4+PRC');
    assert.ok(HEADQUARTERS_INFO.address.includes('ضبا'));
    assert.ok(HEADQUARTERS_INFO.address.includes('طريق الملك عبدالعزيز'));
  });

  it('should cover all 9 strategic ports and border crossings', () => {
    assert.equal(OFFICIAL_BRANCHES.length, 9);
  });

  it('should strictly detect explicit contact requests only', () => {
    // Explicit requests: MUST return TRUE
    assert.equal(detectExplicitContactIntent('عايز رقم المكتب'), true);
    assert.equal(detectExplicitContactIntent('أبغى أتواصل مع مسؤول'), true);
    assert.equal(detectExplicitContactIntent('ممكن أكلم سليمان الحويطي؟'), true);
    assert.equal(detectExplicitContactIntent('عايز أتصل بحد من المؤسسة'), true);
    assert.equal(detectExplicitContactIntent('اديني رقم التليفون'), true);
    assert.equal(detectExplicitContactIntent('Can I call the office?'), true);
    assert.equal(detectExplicitContactIntent('I want to speak with someone'), true);
    assert.equal(detectExplicitContactIntent('هات رقم الجوال حقكم'), true);

    // General queries: MUST return FALSE (Never show contact cards!)
    assert.equal(detectExplicitContactIntent('السلام عليكم'), false);
    assert.equal(detectExplicitContactIntent('إيه الخدمات اللي بتقدموها؟'), false);
    assert.equal(detectExplicitContactIntent('عندي شحنة وعايز أخلصها'), false);
    assert.equal(detectExplicitContactIntent('ما الأوراق المطلوبة للتخليص؟'), false);
    assert.equal(detectExplicitContactIntent('أين يقع ميناء جدة الإسلامي؟'), false);
    assert.equal(detectExplicitContactIntent('ما هو رقم البيان الجمركي؟'), false);
    assert.equal(detectExplicitContactIntent('استفسار عن رقم الشحنة والحاوية'), false);
    assert.equal(detectExplicitContactIntent('شكراً جزيلاً مع السلامة'), false);
    assert.equal(detectExplicitContactIntent('How do I track my shipment?'), false);
  });

  it('should verify system instructions enforce natural persona and strict guardrails', () => {
    assert.ok(SYSTEM_KNOWLEDGE_PROMPT.includes('NATURAL CUSTOMER SERVICE AGENT'));
    assert.ok(SYSTEM_KNOWLEDGE_PROMPT.includes('حظر المنافسين'));
    assert.ok(SYSTEM_KNOWLEDGE_PROMPT.includes('عدم اختراع أسعار'));
    assert.ok(SYSTEM_KNOWLEDGE_PROMPT.includes('لا تكرر التحية'));
    assert.ok(SYSTEM_KNOWLEDGE_PROMPT.includes('حظر المرفقات'));
  });
});

describe('Sulaiman Al-Huwaiti AI Assistant - Versioning & Stale Data Purge', () => {
  // Mock Storage helper
  class MockStorage {
    private store = new Map<string, string>();

    get length() {
      return this.store.size;
    }

    key(index: number) {
      return Array.from(this.store.keys())[index] || null;
    }

    getItem(key: string) {
      return this.store.get(key) || null;
    }

    setItem(key: string, value: string) {
      this.store.set(key, value);
    }

    removeItem(key: string) {
      this.store.delete(key);
    }

    clear() {
      this.store.clear();
    }
  }

  it('should selectively purge chat data while strictly preserving other website storage', async () => {
    const { purgeStaleChatData, VERSION_STORAGE_KEY } = await import('../src/version');

    const mockLocal = new MockStorage();
    const mockSession = new MockStorage();

    // Populate unrelated website keys
    mockLocal.setItem('theme_preference', 'dark');
    mockLocal.setItem('user_language', 'ar');
    mockLocal.setItem('cookie_consent', 'true');

    // Populate old chat keys
    mockLocal.setItem('alhuwaiti_chat_history', JSON.stringify([{ id: 'old1', text: 'محادثة سابقة قديمة' }]));
    mockLocal.setItem('alhuwaiti_chat_draft', 'مسودة');
    mockLocal.setItem(VERSION_STORAGE_KEY, 'v1.0.0');

    mockSession.setItem('alhuwaiti_session_id', 'session_12345');
    mockSession.setItem('alhuwaiti_chat_history', JSON.stringify([{ id: 'old2', text: 'جلسة سابقة' }]));
    mockSession.setItem('unrelated_session_token', 'token_xyz');

    // Attach mock storages to global
    (globalThis as any).localStorage = mockLocal;
    (globalThis as any).sessionStorage = mockSession;

    // Purge for a new deployment v2.0.0
    purgeStaleChatData('v2.0.0');

    // 1. Unrelated keys MUST be preserved intact
    assert.equal(mockLocal.getItem('theme_preference'), 'dark');
    assert.equal(mockLocal.getItem('user_language'), 'ar');
    assert.equal(mockLocal.getItem('cookie_consent'), 'true');
    assert.equal(mockSession.getItem('unrelated_session_token'), 'token_xyz');

    // 2. Chat keys MUST be completely removed
    assert.equal(mockLocal.getItem('alhuwaiti_chat_history'), null);
    assert.equal(mockLocal.getItem('alhuwaiti_chat_draft'), null);
    assert.equal(mockSession.getItem('alhuwaiti_session_id'), null);
    assert.equal(mockSession.getItem('alhuwaiti_chat_history'), null);

    // 3. Version key MUST be updated to v2.0.0
    assert.equal(mockLocal.getItem(VERSION_STORAGE_KEY), 'v2.0.0');
  });

  it('should detect version changes and avoid clearing if version matches', async () => {
    const { verifyAndSyncVersion, VERSION_STORAGE_KEY } = await import('../src/version');

    const mockLocal = new MockStorage();
    const mockSession = new MockStorage();
    (globalThis as any).localStorage = mockLocal;
    (globalThis as any).sessionStorage = mockSession;

    // First visit: no stored version -> triggers purge and records version
    const firstCheck = verifyAndSyncVersion('v2026.04.1');
    assert.equal(firstCheck, true);
    assert.equal(mockLocal.getItem(VERSION_STORAGE_KEY), 'v2026.04.1');

    // Normal page refresh on the SAME version -> does NOT purge
    mockSession.setItem('alhuwaiti_chat_history', 'current_session_data');
    const sameVersionCheck = verifyAndSyncVersion('v2026.04.1');
    assert.equal(sameVersionCheck, false);
    assert.equal(mockSession.getItem('alhuwaiti_chat_history'), 'current_session_data');

    // Next deployment with NEW version -> triggers purge
    const newDeploymentCheck = verifyAndSyncVersion('v2026.05.0');
    assert.equal(newDeploymentCheck, true);
    assert.equal(mockSession.getItem('alhuwaiti_chat_history'), null);
    assert.equal(mockLocal.getItem(VERSION_STORAGE_KEY), 'v2026.05.0');
  });
});

describe('Sulaiman Al-Huwaiti AI Assistant - Serverless Function API & Error Resilience', () => {
  it('should return 405 Method Not Allowed on non-POST requests with JSON error', async () => {
    const handler = (await import('../api/chat')).default;
    let statusCode = 0;
    let jsonBody: any = null;
    const req: any = { method: 'GET', headers: {} };
    const res: any = {
      setHeader: () => {},
      status: (code: number) => { statusCode = code; return res; },
      json: (data: any) => { jsonBody = data; return res; }
    };
    await handler(req, res);
    assert.equal(statusCode, 405);
    assert.equal(typeof jsonBody.error, 'string');
  });

  it('should handle CORS OPTIONS preflight cleanly with 204', async () => {
    const handler = (await import('../api/chat')).default;
    let statusCode = 0;
    let ended = false;
    const req: any = { method: 'OPTIONS', headers: {} };
    const res: any = {
      setHeader: () => {},
      status: (code: number) => { statusCode = code; return res; },
      end: () => { ended = true; }
    };
    await handler(req, res);
    assert.equal(statusCode, 204);
    assert.equal(ended, true);
  });

  it('should reject empty or missing messages with 400 JSON and showContactCards=false', async () => {
    const { handleChatRequest } = await import('../api/chat');
    let statusCode = 0;
    let jsonBody: any = null;
    const req: any = {
      method: 'POST',
      headers: {},
      body: { message: '' }
    };
    const res: any = {
      setHeader: () => {},
      status: (code: number) => { statusCode = code; return res; },
      json: (data: any) => { jsonBody = data; return res; }
    };
    await handleChatRequest(req, res);
    assert.equal(statusCode, 400);
    assert.equal(jsonBody.showContactCards, false);
    assert.equal(jsonBody.code, 'EMPTY_MESSAGE');
  });

  it('should reject messages exceeding length limit with 400 JSON', async () => {
    const { handleChatRequest } = await import('../api/chat');
    let statusCode = 0;
    let jsonBody: any = null;
    const req: any = {
      method: 'POST',
      headers: {},
      body: { message: 'أ'.repeat(1050) }
    };
    const res: any = {
      setHeader: () => {},
      status: (code: number) => { statusCode = code; return res; },
      json: (data: any) => { jsonBody = data; return res; }
    };
    await handleChatRequest(req, res);
    assert.equal(statusCode, 400);
    assert.equal(jsonBody.code, 'MESSAGE_TOO_LONG');
    assert.equal(jsonBody.showContactCards, false);
  });

  it('should reject requests gracefully when GEMINI_API_KEY is missing without crashing or leaking secrets', async () => {
    const { handleChatRequest } = await import('../api/chat');
    const originalKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    let statusCode = 0;
    let jsonBody: any = null;
    const req: any = {
      method: 'POST',
      headers: { 'x-session-id': 'test_unique_key_check' },
      body: { message: 'السلام عليكم' }
    };
    const res: any = {
      setHeader: () => {},
      status: (code: number) => { statusCode = code; return res; },
      json: (data: any) => { jsonBody = data; return res; }
    };

    try {
      await handleChatRequest(req, res);
      assert.equal(statusCode, 503);
      assert.equal(jsonBody.code, 'API_KEY_NOT_CONFIGURED');
      assert.equal(jsonBody.showContactCards, false);
      assert.ok(jsonBody.error.includes('GEMINI_API_KEY'));
    } finally {
      if (originalKey) {
        process.env.GEMINI_API_KEY = originalKey;
      }
    }
  });
});

describe('Sulaiman Al-Huwaiti AI Assistant - Automated Regression Protection & Serverless ESM Resolution', () => {
  it('should successfully import and initialize api/chat with zero missing module errors', async () => {
    const chatModule = await import('../api/chat');
    assert.equal(typeof chatModule.default, 'function', 'Default export must be the serverless handler function');
    assert.equal(typeof chatModule.handleChatRequest, 'function', 'handleChatRequest must be exported');
    assert.equal(typeof chatModule.detectExplicitContactIntent, 'function', 'detectExplicitContactIntent must be exported');
  });

  it('should ensure api/chat has ZERO relative file imports to prevent Vercel ESM resolution crashes', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const chatTsPath = path.resolve('api/chat.ts');
    const content = fs.readFileSync(chatTsPath, 'utf8');

    // Check that there are no relative imports like from './...' or from '../...'
    const relativeImportRegex = /from\s+['"]\.\.?\/[^'"]+['"]/g;
    const matches = content.match(relativeImportRegex) || [];
    assert.equal(
      matches.length,
      0,
      `api/chat.ts must not have relative imports which break Vercel ESM. Found: ${matches.join(', ')}`
    );
  });

  it('should ensure api/siteKnowledge.ts does not exist to prevent redundant Vercel endpoints and ESM confusion', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const siteKnowledgeInApi = path.resolve('api/siteKnowledge.ts');
    assert.equal(
      fs.existsSync(siteKnowledgeInApi),
      false,
      'api/siteKnowledge.ts must be deleted from api/ so Vercel does not generate an orphaned endpoint'
    );
  });

  it('should ensure knowledge in api/chat is 100% synchronized with src/shared/siteKnowledge', async () => {
    const apiChat = await import('../api/chat');
    const shared = await import('../src/shared/siteKnowledge');

    assert.deepEqual(apiChat.OFFICIAL_CONTACTS, shared.OFFICIAL_CONTACTS);
    assert.deepEqual(apiChat.HEADQUARTERS_INFO, shared.HEADQUARTERS_INFO);
    assert.deepEqual(apiChat.OFFICIAL_BRANCHES, shared.OFFICIAL_BRANCHES);
    assert.deepEqual(apiChat.CORE_SERVICES, shared.CORE_SERVICES);
    assert.deepEqual(apiChat.REQUIRED_DOCUMENTS, shared.REQUIRED_DOCUMENTS);
    assert.equal(apiChat.SYSTEM_KNOWLEDGE_PROMPT, shared.SYSTEM_KNOWLEDGE_PROMPT);
  });

  it('should ensure vercel.json rewrites exclude /api/ routes to prevent SPA HTML interception', async () => {
    const fs = await import('node:fs');
    const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
    const rewrites = vercelConfig.rewrites || [];

    const spaRewrite = rewrites.find((r: any) => r.destination === '/index.html');
    assert.ok(spaRewrite, 'vercel.json must define a SPA rewrite to /index.html');
    assert.ok(
      spaRewrite.source.includes('api/'),
      'The SPA rewrite rule must explicitly exclude api/ so /api/chat is not rewritten to HTML'
    );
  });

  it('should verify contact intent detection on English phrases as well', async () => {
    const { detectExplicitContactIntent } = await import('../api/chat');
    assert.equal(detectExplicitContactIntent('I want to contact your team.'), true);
    assert.equal(detectExplicitContactIntent('Can I call your office?'), true);
    assert.equal(detectExplicitContactIntent('Give me your phone number'), true);
    assert.equal(detectExplicitContactIntent('Where are your branches?'), false);
    assert.equal(detectExplicitContactIntent('What documents are needed for customs?'), false);
  });
});



