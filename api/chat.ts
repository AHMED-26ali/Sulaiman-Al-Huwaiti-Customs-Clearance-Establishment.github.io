import type { Request, Response } from 'express';
import { handleChatRequest } from '../server/chatHandler';

export default async function handler(req: Request, res: Response) {
  // Handle CORS Preflight if invoked externally
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-session-id');
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
    return;
  }

  await handleChatRequest(req, res);
}
