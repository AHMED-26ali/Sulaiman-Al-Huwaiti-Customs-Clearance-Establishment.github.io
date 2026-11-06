import { GoogleGenAI } from '@google/genai';
import type { Request, Response } from 'express';

/**
 * Self-Contained Knowledge Base & Serverless Function for Sulaiman Al-Huwaiti AI Assistant
 * Zero external relative module imports to guarantee 100% reliability in Vercel Production ESM.
 */

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  displayPhone: string;
  whatsapp?: string;
  isPrimary?: boolean;
}

export interface BranchInfo {
  name: string;
  type: string;
  location: string;
  description: string;
  keyRole: string;
}

export const OFFICIAL_CONTACTS: ContactPerson[] = [
  {
    name: "سليمان الحويطي",
    role: "المدير العام والمؤسس",
    phone: "+966559586786",
    displayPhone: "055 958 6786",
    whatsapp: "966559586786",
    isPrimary: true
  },
  {
    name: "أحمد علي",
    role: "مسؤول العمليات والمتابعة الجمركية (الرقم الموحد)",
    phone: "+966551046758",
    displayPhone: "055 104 6758",
    whatsapp: "966537063709"
  },
  {
    name: "إبراهيم جمعة",
    role: "مسؤول التخليص الميداني والمتابعة",
    phone: "+966509457627",
    displayPhone: "050 945 7627",
    whatsapp: "966509457627"
  },
  {
    name: "علاء جاد",
    role: "مستشار ومسؤول التخليص الجمركي",
    phone: "+966553992052",
    displayPhone: "055 399 2052",
    whatsapp: "966553992052"
  }
];

export const HEADQUARTERS_INFO = {
  name: "مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت",
  englishName: "Sulaiman Al-Huwaiti Customs Clearance & Transit Establishment",
  accreditation: "مرخصة ومعتمدة رسمياً من هيئة الزكاة والضريبة والجمارك (ZATCA) في المملكة العربية السعودية",
  address: "طريق الملك عبدالعزيز (بجوار شركة البسام للشحن)، حي المقيطع، ضبا 49312، منطقة تبوك، المملكة العربية السعودية",
  plusCode: "8PX4+PRC",
  coordinates: {
    lat: 27.3512,
    lng: 35.6948
  },
  email: "alebawani.k.s.a@hotmail.com",
  workingHours: "متاح 24/7 على مدار الساعة طوال أيام الأسبوع لخدمة كافة المعاملات والاستشارات",
  experience: "أكثر من 15 عاماً من الخبرة والاحترافية في التخليص الجمركي والترانزيت",
  coverage: "تغطية شاملة لجميع موانئ ومنافذ ومطارات المملكة العربية السعودية ودول الجوار"
};

export const OFFICIAL_BRANCHES: BranchInfo[] = [
  {
    name: "ميناء جدة الإسلامي",
    type: "ميناء بحري",
    location: "مدينة جدة - منطقة مكة المكرمة",
    description: "الميناء الأكبر والأهم على ساحل البحر الأحمر، والشريان اللوجستي الرئيسي لدخول البضائع لكافة مناطق المملكة والمنطقة الغربية.",
    keyRole: "فسح الحاويات والبضائع العامة والصادرة والواردة وخدمات الترانزيت."
  },
  {
    name: "ميناء نيوم (جمرك ضبا)",
    type: "ميناء بحري",
    location: "محافظة ضبا - منطقة تبوك",
    description: "أقرب ميناء سعودي لقناة السويس ودول حوض البحر الأبيض المتوسط، والمحرك اللوجستي الرئيسي لمشاريع نيوم العملاقة والتجارة الإقليمية.",
    keyRole: "التخليص البحري للبضائع والمعدات الثقيلة وسفن الدحرجة (Ro-Ro) والشاحنات والترانزيت الدولي."
  },
  {
    name: "ميناء الملك عبدالعزيز (الدمام)",
    type: "ميناء بحري",
    location: "مدينة الدمام - المنطقة الشرقية",
    description: "الميناء الرئيسي للمملكة على الخليج العربي، وبوابة دخول الشحنات للمنطقة الشرقية والوسطى والعاصمة الرياض.",
    keyRole: "تخليص الحاويات، الشحنات الكيميائية والصناعية، والمعدات والمواد الاستهلاكية."
  },
  {
    name: "ميناء ينبع التجاري",
    type: "ميناء بحري",
    location: "مدينة ينبع - منطقة المدينة المنورة",
    description: "ميناء استراتيجي يخدم منطقة المدينة المنورة والصناعات التحويلية ومشاريع الطاقة والصناعة.",
    keyRole: "مناولة البضائع العامة والمعدات والمواد الخام والفسح السريع."
  },
  {
    name: "منفذ الحديثة الحدودي",
    type: "منفذ بري",
    location: "منطقة الجوف - الحدود الشمالية",
    description: "أكبر وأهم منفذ بري في الشرق الأوسط، يربط المملكة بالأردن وسوريا وتركيا وأوروبا.",
    keyRole: "تخليص الشاحنات والبرادات والبضائع الترانزيت الواردة والصادرة براً."
  },
  {
    name: "منفذ البطحاء الحدودي",
    type: "منفذ بري",
    location: "محافظة العديد - المنطقة الشرقية",
    description: "المنفذ والشريان البري الحيوي الذي يربط المملكة العربية السعودية بدولة الإمارات العربية المتحدة.",
    keyRole: "حركة تجارية كبرى للشاحنات والترانزيت والواردات والصادرات الإماراتية والسعودية."
  },
  {
    name: "منفذ جسر الملك فهد",
    type: "جسر ومنفذ بري",
    location: "مدينة الخبر - المنطقة الشرقية",
    description: "يربط بين المملكة العربية السعودية ومملكة البحرين للشحنات التجارية والتبادل الاقتصادي البيني.",
    keyRole: "تخليص البضائع السريعة والشحنات التجارية والترانزيت بين البلدين."
  },
  {
    name: "منفذ السلوى الحدودي",
    type: "منفذ بري",
    location: "محافظة العديد - المنطقة الشرقية",
    description: "المنفذ البري الاستراتيجي الذي يربط المملكة بدولة قطر.",
    keyRole: "تسهيل التبادل التجاري ونقل المنتجات الوطنية والسلع والترانزيت."
  },
  {
    name: "منفذ الدرة الحدودي",
    type: "منفذ بري",
    location: "محافظة حقل - منطقة تبوك",
    description: "يقع على خليج العقبة ويربط شمال المملكة بالمملكة الأردنية الهاشمية.",
    keyRole: "خدمة حركة الركاب والشحن البري الخفيف والمتوسط وشمال المملكة."
  }
];

export const CORE_SERVICES = [
  "التخليص الجمركي الشامل (بحري، بري، جوي) لكافة أنواع البضائع الواردة والصادرة في جميع موانئ ومنافذ المملكة.",
  "خدمات الترانزيت الدولي وإنهاء إجراءات البضائع العابرة ونقلها بين المنافذ الحدودية والموانئ بدقة والتزام كامل بالأنظمة.",
  "الربط والتعامل الاحترافي مع المنصات الجمركية الإلكترونية الرسمية (منصة فسح Fasah، منصة سابر Saber، هيئة الزكاة والضريبة والجمارك ZATCA).",
  "الاستشارات الجمركية المتخصصة في الأنظمة واللوائح وبنود التعريفة الجمركية (HS Code) واشتراطات الاستيراد والتصدير.",
  "متابعة السلامة والفسح الجمركي الفوري لتسريع خروج الشحنات وتفادي غرامات التأخير ورسوم الأرضيات في الموانئ والمنافذ.",
  "استلام أذونات التسليم ومتابعة الفحص والمعاينة والمختبرات وسحب العينات بوجود فريق ميداني متخصص.",
  "حساب دقيق للرسوم والضرائب الجمركية وتطبيق الإعفاءات النظامية المستحقة للعملاء.",
  "خدمة عملاء ومتابعة ميدانية على مدار الساعة 24/7 وتحديثات فورية لحالة المعاملة لحظة بلحظة."
];

export const REQUIRED_DOCUMENTS = [
  "بوليصة الشحن (Bill of Lading للشحن البحري، أو Air Waybill للشحن الجوي، أو بيان الشحن البري CMR).",
  "الفاتورة التجارية الأصلية المصدقة والموضح بها تفاصيل الأسعار وقيم البضائع.",
  "شهادة المنشأ الرسمية (Certificate of Origin).",
  "بيان التعبئة المفصل (Packing List) بأوزان وكميات وأعداد الطرود والطرود الجزئية.",
  "التفويض الجمركي الإلكتروني عبر منصة فسح (Fasah) لصالح مؤسسة سليمان الحويطي للتخليص الجمركي.",
  "شهادات المطابقة والاعتماد (مثل شهادات منصة سابر Saber أو هيئة الغذاء والدواء SFDA إذا كانت البضاعة تتطلب ذلك).",
  "السجل التجاري والرمز الجمركي للمستورد أو المصدر مسجل في هيئة الزكاة والضريبة والجمارك."
];

export const SYSTEM_KNOWLEDGE_PROMPT = `
أنت "مساعد سليمان الحويطي الذكي" (Sulaiman Al-Huwaiti AI Assistant)، موظف خدمة عملاء وخبير تخليص جمركي محترف يمثل "مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت" في المملكة العربية السعودية.

## أسلوب وشخصية الرد (NATURAL CUSTOMER SERVICE AGENT):
1. تحدث كأنك موظف خدمة عملاء حقيقي ومحترف: ودود، لبق، واضح ومباشر، دون تكرار عبارات روبوتية أو ديباجات محفوظة.
2. أجب مباشرة على سؤال العميل فقط، ولا تقدم شروحاً طويلة أو معلومات لم يطلبها.
3. لا تكرر التحية أو الترحيب في كل رسالة؛ إذا حياك العميل (مثل "السلام عليكم") رد التحية بأدب، أما في سياق الحوار المستمر فأجب مباشرة.
4. لا تسرد قائمة جميع خدمات المؤسسة أو الموانئ إلا إذا سألك العميل صراحة مثل "ما هي خدماتكم؟" أو "إيه الخدمات اللي بتقدموها؟".
5. عندما يسأل العميل عن شحنة دون تفاصيل كافية (مثل "عندي شحنة وعايز أخلصها")، رحب به باقتضاب واسأله سؤالاً توضيحياً قصيراً مثل: "أهلاً بك، يسعدنا خدمتك. هل الشحنة واردة أم صادرة؟ ومن أي منفذ أو ميناء؟".
6. عندما يسأل عن الأوراق المطلوبة، وضح له المستندات الأساسية (الفاتورة، بوليصة الشحن، شهادة المنشأ، التفويض الجمركي عبر منصة فسح، وسابر إن لزم) واسأله عن نوع البضاعة لتأكيد أي اشتراطات خاصة.
7. لا تقدم معلومات غير مؤكدة أو مختلقة؛ وإذا كانت معلومة غير منشورة في الموقع، وضح ذلك بأدب واقترح عليه التواصل مع المكتب.

## معلومات المؤسسة المعتمدة (الحقائق الحصرية):
- اسم المؤسسة: مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت (Sulaiman Al-Huwaiti Customs Clearance & Transit Establishment).
- المقر الرئيسي: طريق الملك عبدالعزيز (بجوار شركة البسام للشحن)، حي المقيطع، محافظة ضبا 49312، منطقة تبوك، المملكة العربية السعودية.
- الرمز الجغرافي (Plus Code): 8PX4+PRC
- البريد الإلكتروني: alebawani.k.s.a@hotmail.com
- ساعات العمل: متاح 24/7 على مدار الساعة طوال أيام الأسبوع لخدمة كافة المعاملات والاستشارات.
- الاعتماد: مؤسسة مرخصة ومعتمدة رسمياً من هيئة الزكاة والضريبة والجمارك (ZATCA) في السعودية بخبرة تزيد عن 15 عاماً.
- الفروع والمنافذ المغطاة:
  1. ميناء جدة الإسلامي (بحري)
  2. ميناء نيوم - جمرك ضبا (بحري)
  3. ميناء الملك عبدالعزيز بالدمام (بحري)
  4. ميناء ينبع التجاري (بحري)
  5. منفذ الحديثة (بري - الأردن وبلاد الشام وأوروبا)
  6. منفذ البطحاء (بري - الإمارات)
  7. منفذ جسر الملك فهد (جسر بري - البحرين)
  8. منفذ السلوى (بري - قطر)
  9. منفذ الدرة (بري - حقل/الأردن)
- فريق العمل ومسؤولو التواصل المعتمدون:
  * سليمان الحويطي (المدير العام والمؤسس): 0559586786 (+966559586786)
  * أحمد علي (مسؤول العمليات والمتابعة / الرقم الموحد): 0551046758 (+966551046758) - واتساب: 966537063709
  * إبراهيم جمعة (التخليص والمتابعة الميدانية): 0509457627 (+966509457627)
  * علاء جاد (مستشار ومسؤول التخليص): 0553992052 (+966553992052)
- الخدمات: التخليص الجمركي الشامل (بحري/بري/جوي)، الترانزيت الدولي للبضائع العابرة، الاستشارات الجمركية وتصنيف بنود التعريفة الجمركية، إنهاء أذونات التسليم ومتابعة الفحص والمعاينة في الموانئ، والربط عبر منصة فسح وسابر وهيئة الزكاة والضريبة والجمارك.

## القواعد الصارمة والإلزامية (STRICT GUARDRAILS):
1. الاختصاص الحصري: تجيب فقط عن خدمات مؤسسة سليمان الحويطي، التخليص الجمركي، الترانزيت، المنافذ والموانئ، وإجراءات الاستيراد والتصدير في السعودية.
2. حظر المنافسين حظراً تاماً: ممنوع منعاً باتاً ذكر أو ترشيح أي شركة تخليص جمركي منافسة مهما كان السؤال؛ وضح بأدب أنك ممثل مؤسسة سليمان الحويطي ويسعدك شرح خدماتها.
3. عدم اختراع أسعار: الرسوم الجمركية تختلف نظامياً حسب كود البند (HS Code)، وأتعاب التخليص تقدم بدقة وعروض مخصصة بعد الاطلاع على بوليصة الشحن ونوع الشحنة.
4. اللغات واللهجات: افهم وأجب بنفس لغة ولهجة العميل تلقائياً (السعودية، المصرية، الخليجية، الفصحى، الإنجليزية) بأسلوب مهني ولبق.
5. الخروج عن الاختصاص: إذا كان السؤال خارج التخليص الجمركي ومؤسسة سليمان الحويطي، اعتذر باختصار وأعد الحوار لمجال التخليص الجمركي.
6. حظر المرفقات: لا تطلب أو تقبل رفع ملفات أو صور أو تسجيلات صوتية.
`;

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
    /(عايز\s*اتصل|عايز\s*اكلم|عايز\s*أتصل|عايز\s*أكلم|ابغى\s*اتصل|أبغى\s*أكلم|اريد\s*الاتصال|ممكن\s*اتصل|ممكن\s*أكلم|can\s*i\s*call|speak\s*(with|to)\s*(someone|a\s*representative|the\s*office|sulaiman)|call\s*someone|want\s*to\s*contact|contact\s*your\s*team)/i.test(text);

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
      if (role === 'user') {
        contents.push({ role: 'user', parts: [{ text }] });
      }
    } else {
      const lastRole = contents[contents.length - 1].role;
      if (lastRole !== role) {
        contents.push({ role, parts: [{ text }] });
      } else {
        contents[contents.length - 1].parts[0].text += '\n' + text;
      }
    }
  }

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

    // 5. Model Candidate List with intelligent fallback for availability (preferring free-tier flash-lite models)
    const configuredModel = process.env.GEMINI_MODEL;
    const defaultModel = 'gemini-2.5-flash-lite';
    const primaryModel = configuredModel || defaultModel;

    const modelCandidates = Array.from(
      new Set([
        primaryModel,
        'gemini-2.5-flash-lite',
        'gemini-2.5-flash',
        'gemini-2.0-flash'
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

    let clientMessage = 'عذرًا، حدث خطأ مؤقت أثناء معالجة رسالتك. يُرجى إعادة المحاولة.';
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
        error: 'عذرًا، حدث خطأ مؤقت أثناء معالجة رسالتك. يُرجى إعادة المحاولة.',
        code: 'FATAL_SERVER_ERROR',
        showContactCards: false
      });
    }
  }
}
