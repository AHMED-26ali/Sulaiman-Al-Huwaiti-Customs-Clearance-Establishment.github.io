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

