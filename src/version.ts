/**
 * Version Management and Cache-Busting Utility for Sulaiman Al-Huwaiti AI Assistant
 *
 * Ensures each deployment runs strictly with fresh chat state and isolates chat
 * storage without affecting any other site configurations or preferences.
 */

// Storage key for keeping track of the loaded app version
export const VERSION_STORAGE_KEY = 'alhuwaiti_chat_app_version';

// Chat-specific storage prefixes/keys to be cleared on version mismatch
export const CHAT_STORAGE_KEYS = [
  'alhuwaiti_chat_history',
  'alhuwaiti_session_id',
  'alhuwaiti_chat_cache',
  'alhuwaiti_rate_limit_state',
  'alhuwaiti_chat_messages',
  'alhuwaiti_chat_draft'
];

/**
 * Computes build version identifier based on CI environment variables or fallback.
 */
export function getBuildVersion(): string {
  const env = (typeof process !== 'undefined' && process.env) ? process.env : {};
  const sha = env.VERCEL_GIT_COMMIT_SHA ||
    env.GIT_COMMIT_SHA ||
    env.GITHUB_SHA ||
    env.COMMIT_REF ||
    env.VITE_APP_VERSION;

  if (sha && typeof sha === 'string') {
    return sha.substring(0, 12);
  }

  // Fallback to static release tag for consistent hashing if no Git SHA
  return 'v2026.04.1';
}

/**
 * Purges all chat-specific data from localStorage, sessionStorage, and IndexedDB
 * WITHOUT affecting any unrelated website data or user preferences.
 */
export function purgeStaleChatData(newVersion?: string): void {
  try {
    // 1. Clear known keys from sessionStorage
    for (const key of CHAT_STORAGE_KEYS) {
      try {
        sessionStorage.removeItem(key);
      } catch {
        // ignore
      }
    }

    // 2. Iterate sessionStorage and remove any key with alhuwaiti_chat_ prefix
    try {
      const sessionKeys: string[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const k = sessionStorage.key(i);
        if (k && (k.startsWith('alhuwaiti_chat_') || k.startsWith('alhuwaiti_session_'))) {
          sessionKeys.push(k);
        }
      }
      for (const k of sessionKeys) {
        sessionStorage.removeItem(k);
      }
    } catch {
      // ignore
    }

    // 3. Clear known keys from localStorage (except the version marker)
    try {
      const localKeys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (
          k &&
          k !== VERSION_STORAGE_KEY &&
          (k.startsWith('alhuwaiti_chat_') || k.startsWith('alhuwaiti_session_') || CHAT_STORAGE_KEYS.includes(k))
        ) {
          localKeys.push(k);
        }
      }
      for (const k of localKeys) {
        localStorage.removeItem(k);
      }
    } catch {
      // ignore
    }

    // 4. Update stored version in localStorage
    if (newVersion) {
      try {
        localStorage.setItem(VERSION_STORAGE_KEY, newVersion);
      } catch {
        // ignore
      }
    }

    // 5. Clean any potential IndexedDB chat database
    if (typeof window !== 'undefined' && window.indexedDB && typeof window.indexedDB.deleteDatabase === 'function') {
      try {
        window.indexedDB.deleteDatabase('alhuwaiti_chat_db');
      } catch {
        // ignore
      }
    }

    console.log(`[AI Chat Versioning] Stale chat data purged successfully. Active version: ${newVersion || 'reset'}`);
  } catch (err) {
    console.warn('[AI Chat Versioning] Error during chat data purge:', err);
  }
}

/**
 * Checks if the stored client version differs from the active version.
 * If there is a mismatch, stale chat data is purged and true is returned.
 */
export function verifyAndSyncVersion(activeVersion: string): boolean {
  try {
    const storage = typeof localStorage !== 'undefined' ? localStorage : null;
    if (!storage) return false;

    const storedVersion = storage.getItem(VERSION_STORAGE_KEY);
    if (!storedVersion || storedVersion !== activeVersion) {
      console.log(`[AI Chat Versioning] Version mismatch detected (Stored: ${storedVersion || 'none'}, Active: ${activeVersion}). Initializing purge.`);
      purgeStaleChatData(activeVersion);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

/**
 * Queries the server to check if a newer version has been deployed.
 * Uses cache-busting headers and query parameters to guarantee a fresh check.
 */
export async function fetchRemoteVersion(): Promise<{ version: string; buildTime?: string } | null> {
  try {
    const res = await fetch(`/version.json?t=${Date.now()}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      },
      cache: 'no-store'
    });

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.version === 'string') {
        return data;
      }
    }
  } catch {
    // If version.json is unreachable, try fallback /api/version
    try {
      const apiRes = await fetch(`/api/version?t=${Date.now()}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        },
        cache: 'no-store'
      });
      if (apiRes.ok) {
        const data = await apiRes.json();
        if (data && typeof data.version === 'string') {
          return data;
        }
      }
    } catch {
      // offline or server unavailable
    }
  }
  return null;
}
