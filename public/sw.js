// Service Worker for Sulaiman Al-Huwaiti Customs Clearance App
const CACHE_NAME = 'alhuwaiti-cache-v3';
const STATIC_ASSETS = [
  '/',
  '/',
  '/index.html',
  '/branding/logo.png',
  '/branding/logo.webp',
  '/branding/og-image.png',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/site.webmanifest',
  '/images/custom/cargo-ship-sea-top-view-400w.webp',
  '/images/custom/cargo-ship-sea-top-view.webp',
  '/images/custom/cargo-ship-sea-top-view.jpg.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Bypass service worker for .well-known, ai-catalog, ard, llms.txt, API requests, and version check
  if (
    url.pathname.startsWith('/.well-known/') ||
    url.pathname.startsWith('/api/') ||
    url.pathname.includes('ai-catalog') ||
    url.pathname.includes('ard') ||
    url.pathname === '/llms.txt' ||
    url.pathname === '/version.json'
  ) {
    return;
  }

  // Cache-first for images, css, js, fonts
  if (
    event.request.destination === 'image' ||
    event.request.destination === 'style' ||
    event.request.destination === 'script' ||
    event.request.destination === 'font' ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/branding/') ||
    url.pathname.startsWith('/assets/')
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Network-first for other requests
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
