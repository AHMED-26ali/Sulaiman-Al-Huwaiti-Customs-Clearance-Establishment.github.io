import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';

// إضافة StrictMode لاكتشاف المشاكل في development
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// تسجيل الـ Service Worker بشكل متأخر وغير حاجب بعد اكتمال التحميل
if (typeof window !== 'undefined' && 'serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    } else {
      setTimeout(() => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      }, 1000);
    }
  });
}
