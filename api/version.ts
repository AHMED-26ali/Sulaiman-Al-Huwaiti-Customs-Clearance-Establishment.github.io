import type { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  // Enforce zero-caching so clients and CDNs never store stale version replies
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).end();
    return;
  }

  const rawVersion = process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.GIT_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    process.env.COMMIT_REF ||
    process.env.VITE_APP_VERSION ||
    'v2026.04.1';
  const appVersion = String(rawVersion).substring(0, 12);

  res.status(200).json({
    version: appVersion,
    buildTime: new Date().toISOString(),
    chatSchemaVersion: 2,
    service: 'Sulaiman Al-Huwaiti AI Assistant'
  });
}
