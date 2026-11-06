import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleChatRequest } from './api/chat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '1mb' }));

  const rawVersion = process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.GIT_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    process.env.COMMIT_REF ||
    process.env.VITE_APP_VERSION ||
    'v2026.04.1';
  const appVersion = String(rawVersion).substring(0, 12);
  const buildTime = new Date().toISOString();

  const sendVersionInfo = (req: express.Request, res: express.Response) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
      version: appVersion,
      buildTime,
      chatSchemaVersion: 2,
      service: 'Sulaiman Al-Huwaiti AI Assistant'
    });
  };

  // API Routes
  app.get('/api/version', sendVersionInfo);
  app.get('/version.json', sendVersionInfo);

  app.post('/api/chat', (req, res) => {
    handleChatRequest(req, res);
  });

  app.get('/api/health', (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.json({
      status: 'ok',
      service: 'مساعد سليمان الحويطي للتخليص الجمركي الذكي',
      version: appVersion,
      model: (process.env.GEMINI_MODEL === 'gemini-2.5-flash-lite' ? 'gemini-3.5-flash-lite' : process.env.GEMINI_MODEL) || 'gemini-3.5-flash-lite',
      timestamp: new Date().toISOString()
    });
  });

  if (!isProduction) {
    // Vite Dev Server middleware mode for AI Studio dev environment
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[AI Studio] Server active on http://0.0.0.0:${PORT} (Mode: ${isProduction ? 'Production' : 'Development'})`);
  });
}

startServer().catch((err) => {
  console.error('[AI Studio] Server failed to start:', err);
  process.exit(1);
});
