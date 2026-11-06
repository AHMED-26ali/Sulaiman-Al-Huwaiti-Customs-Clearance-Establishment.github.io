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

  it('should filter contacts when a specific person is requested and return all 4 for general requests', async () => {
    const { filterRequestedContacts } = await import('../api/chat');

    // Specific requests
    const sulaimanResult = filterRequestedContacts('أريد رقم سليمان الحويطي');
    assert.equal(sulaimanResult.length, 1);
    assert.equal(sulaimanResult[0].name, 'سليمان الحويطي');

    const ahmedResult = filterRequestedContacts('ممكن أتكلم مع أحمد علي بخصوص العمليات؟');
    assert.equal(ahmedResult.length, 1);
    assert.equal(ahmedResult[0].name, 'أحمد علي');

    const ibrahimResult = filterRequestedContacts('أريد جوال إبراهيم جمعة للمتابعة الميدانية');
    assert.equal(ibrahimResult.length, 1);
    assert.equal(ibrahimResult[0].name, 'إبراهيم جمعة');

    const alaaResult = filterRequestedContacts('محتاج رقم علاء جاد للاستشارة');
    assert.equal(alaaResult.length, 1);
    assert.equal(alaaResult[0].name, 'علاء جاد');

    // General or "all" requests: MUST return all 4
    const allResult = filterRequestedContacts('أعطني أرقام التواصل كلها');
    assert.equal(allResult.length, 4);

    const officeResult = filterRequestedContacts('أرقام المكتب');
    assert.equal(officeResult.length, 4);

    const teamResult = filterRequestedContacts('أريد الاتصال بفريق العمل');
    assert.equal(teamResult.length, 4);
  });
});

describe('Sulaiman Al-Huwaiti AI Assistant - Branding Assets & SEO Verification', () => {
  it('should verify branding image assets exist and have non-zero file sizes', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');

    const logoPath = path.resolve('public/branding/logo.png');
    assert.ok(fs.existsSync(logoPath), 'public/branding/logo.png must exist');
    assert.ok(fs.statSync(logoPath).size > 1000, 'logo.png must be a valid image file');

    const ogImagePath = path.resolve('public/branding/og-image.png');
    assert.ok(fs.existsSync(ogImagePath), 'public/branding/og-image.png must exist');
    assert.ok(fs.statSync(ogImagePath).size > 1000, 'og-image.png must be generated and valid');

    const faviconIco = path.resolve('public/favicon.ico');
    assert.ok(fs.existsSync(faviconIco), 'public/favicon.ico must exist');
    assert.ok(fs.statSync(faviconIco).size > 0, 'favicon.ico must not be empty');

    const manifestPath = path.resolve('public/site.webmanifest');
    assert.ok(fs.existsSync(manifestPath), 'public/site.webmanifest must exist');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    assert.equal(manifest.name, 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت');
    assert.ok(manifest.icons.length >= 2, 'manifest must define icons');
  });

  it('should verify index.html links to the new official logo and og-image', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const html = fs.readFileSync(path.resolve('index.html'), 'utf8');

    assert.ok(html.includes('/branding/og-image.png'), 'index.html must reference /branding/og-image.png');
    assert.ok(html.includes('/branding/logo.png'), 'index.html must reference /branding/logo.png');
    assert.ok(html.includes('favicon.ico'), 'index.html must reference favicon.ico');
    assert.ok(html.includes('apple-touch-icon.png'), 'index.html must reference apple-touch-icon.png');
    assert.ok(html.includes('site.webmanifest'), 'index.html must link to site.webmanifest');
    assert.ok(!html.includes('i.pinimg.com'), 'index.html must not contain Pinterest image URLs');
  });

  it('should verify the logo has NO black circular background, border ring, or forced circle clipping', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');

    // Header check
    const headerCode = fs.readFileSync(path.resolve('src/components/Header.tsx'), 'utf8');
    assert.ok(!headerCode.includes('rounded-full object-cover border-2 border-[#D8B980]'), 'Header logo must not have circular border ring');
    assert.ok(!headerCode.includes('bg-[#1C1C1B]'), 'Header logo must not have black background');
    assert.ok(headerCode.includes('object-contain'), 'Header logo must use object-contain for transparent rendering');

    // Footer check
    const footerCode = fs.readFileSync(path.resolve('src/components/Footer.tsx'), 'utf8');
    assert.ok(!footerCode.includes('rounded-full object-cover border border-[#D8B980]'), 'Footer logo must not have circular border');
    assert.ok(footerCode.includes('object-contain'), 'Footer logo must use object-contain');

    // WelcomeScreen check
    const welcomeCode = fs.readFileSync(path.resolve('src/components/WelcomeScreen.tsx'), 'utf8');
    assert.ok(!welcomeCode.includes('rounded-full object-cover shadow-2xl bg-[#1C1C1B]'), 'WelcomeScreen logo must not have black circle');
    assert.ok(welcomeCode.includes('object-contain'), 'WelcomeScreen logo must use object-contain');

    // index.html prerender shell check
    const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8');
    assert.ok(!indexHtml.includes('border-radius:9999px;object-fit:cover;border:2px solid rgba(216,185,128,0.7);background:#1C1C1B;'), 'index.html prerender logo must not have black circular background');
  });

  it('should verify contact cards display names only without any job titles or badges', async () => {
    const fs = await import('node:fs');
    const path = await import('node:path');

    const cardCode = fs.readFileSync(path.resolve('src/components/ai-chat/ContactCard.tsx'), 'utf8');
    assert.ok(!cardCode.includes('{contact.role}'), 'ContactCard must not display contact.role');
    assert.ok(!cardCode.includes('المقر الرئيسي'), 'ContactCard must not display HQ badge');
    assert.ok(!cardCode.includes('معتمد'), 'ContactCard must not display accreditation badge');
    assert.ok(cardCode.includes('{contact.name}'), 'ContactCard must display contact name');
    assert.ok(cardCode.includes('اتصال مباشر'), 'ContactCard must provide direct call button');
    assert.ok(cardCode.includes('واتساب'), 'ContactCard must provide WhatsApp button when verified');
  });
});

describe('Sulaiman Al-Huwaiti AI Assistant - 30 Daily Messages & Persistent Quota Enforcement', () => {
  it('should enforce exactly 30 messages per day with persistent disk-backed storage', async () => {
    const { checkRateLimit, recordDailySuccess, MAX_DAILY_MESSAGES, RATE_LIMIT_FILE } = await import('../api/chat');
    const fs = await import('node:fs');

    assert.equal(MAX_DAILY_MESSAGES, 30, 'Daily limit constant must be exactly 30');

    const testClientId = `test_visitor_quota_${Date.now()}`;

    // 1. New visitor receives exactly 30 available messages
    const initialStatus = checkRateLimit(testClientId);
    assert.equal(initialStatus.allowed, true);
    assert.equal(initialStatus.remainingDaily, 30, 'New visitor must receive exactly 30 remaining messages');

    // 2. Consume 30 messages
    for (let i = 0; i < 30; i++) {
      recordDailySuccess(testClientId);
    }

    // 3. 31st check MUST be rejected
    const blockedStatus = checkRateLimit(testClientId);
    assert.equal(blockedStatus.allowed, false, '31st message must be blocked');
    assert.equal(blockedStatus.reason, 'daily_limit_reached');
    assert.equal(blockedStatus.remainingDaily, 0);

    // 4. Verify disk persistence: the record must be persisted to RATE_LIMIT_FILE
    assert.ok(fs.existsSync(RATE_LIMIT_FILE), 'RATE_LIMIT_FILE must exist on disk for persistence');
    const diskContent = JSON.parse(fs.readFileSync(RATE_LIMIT_FILE, 'utf8'));
    assert.ok(diskContent[testClientId], 'Client usage record must be stored on disk');
    assert.equal(diskContent[testClientId].dailyCount, 30, 'Stored dailyCount must equal 30');
  });
});
