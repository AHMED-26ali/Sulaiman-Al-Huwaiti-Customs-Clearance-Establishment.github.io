/**
 * Bridge file to maintain compatibility with existing imports
 * Canonical implementation is now in api/chat.ts for Vercel Serverless Function compatibility.
 */
export {
  handleChatRequest,
  detectExplicitContactIntent
} from '../api/chat';
