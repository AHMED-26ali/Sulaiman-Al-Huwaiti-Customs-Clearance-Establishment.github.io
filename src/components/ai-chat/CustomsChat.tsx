import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Sparkles,
  RotateCcw,
  X,
  ShieldCheck
} from 'lucide-react';
import ChatMessage, { type MessageData } from './ChatMessage';
import ChatLauncher from './ChatLauncher';
import {
  VERSION_STORAGE_KEY,
  verifyAndSyncVersion,
  purgeStaleChatData,
  fetchRemoteVersion
} from '../../version';
import './chat.css';

const CURRENT_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : 'v2026.04.1';

const INITIAL_GREETING: MessageData = {
  id: 'welcome-msg',
  sender: 'assistant',
  text: `أهلًا وسهلًا بك في مؤسسة سليمان الحويطي للتخليص الجمركي ✨

كيف أقدر أساعدك اليوم؟`,
  timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
};

export default function CustomsChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [updateBanner, setUpdateBanner] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<MessageData[]>(() => {
    try {
      // Check if site version changed from previous deployment
      const wasVersionChanged = verifyAndSyncVersion(CURRENT_VERSION);
      if (wasVersionChanged) {
        return [INITIAL_GREETING];
      }

      // If version is identical, preserve the current session's conversation
      const saved = sessionStorage.getItem('alhuwaiti_chat_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return [INITIAL_GREETING];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [remainingDaily, setRemainingDaily] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const lastAttemptedMessageRef = useRef<string>('');

  // Generate or get anonymous session ID for rate limiting
  const getSessionId = () => {
    let sid = sessionStorage.getItem('alhuwaiti_session_id');
    if (!sid) {
      sid = 'session_' + Math.random().toString(36).substring(2, 12);
      sessionStorage.setItem('alhuwaiti_session_id', sid);
    }
    return sid;
  };

  // Check remote version when chat is opened to handle in-flight deployments seamlessly
  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    fetchRemoteVersion().then((remote) => {
      if (!isMounted || !remote?.version) return;

      const storedVersion = localStorage.getItem(VERSION_STORAGE_KEY);
      if (remote.version !== CURRENT_VERSION || (storedVersion && remote.version !== storedVersion)) {
        console.log(`[AI Chat] Remote deployment update detected: ${remote.version}. Purging stale conversation.`);
        purgeStaleChatData(remote.version);
        setMessages([INITIAL_GREETING]);
        setUpdateBanner(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  // Persist session history
  useEffect(() => {
    try {
      sessionStorage.setItem('alhuwaiti_chat_history', JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    if (text.length > 1000) {
      alert('عذراً، طول الرسالة لا يمكن أن يتجاوز 1000 حرف.');
      return;
    }

    lastAttemptedMessageRef.current = text;

    // Only add user message to list if it's a new message (not an in-place retry where it's already there)
    const isRetry = textToSend !== undefined;
    if (!isRetry) {
      const userMessage: MessageData = {
        id: 'usr_' + Date.now(),
        sender: 'user',
        text,
        timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, userMessage]);
    } else {
      // If retrying, remove previous error message
      setMessages((prev) => prev.filter((m) => !m.isError));
    }

    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare normalized history payload for API (exclude errors & initial welcome)
      const historyPayload = messages
        .filter((m) => !m.isError && m.id !== 'welcome-msg')
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          text: m.text
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'x-session-id': getSessionId()
        },
        cache: 'no-store',
        body: JSON.stringify({
          message: text,
          history: historyPayload
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'تعذر إرسال الرد حالياً. يرجى النقر على زر إعادة المحاولة.');
      }

      const assistantMessage: MessageData = {
        id: 'ast_' + Date.now(),
        sender: 'assistant',
        text: data.reply || 'تم استلام استفسارك بنجاح.',
        timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        showContactCards: Boolean(data.showContactCards),
        contacts: data.showContactCards ? data.contacts : undefined
      };

      if (typeof data.remainingDaily === 'number') {
        setRemainingDaily(data.remainingDaily);
      }

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: unknown) {
      const errorText = err instanceof Error ? err.message : 'تعذر إرسال الرد حالياً. يرجى إعادة المحاولة.';
      const errorMessage: MessageData = {
        id: 'err_' + Date.now(),
        sender: 'assistant',
        text: errorText,
        timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isError: true,
        showContactCards: false,
        contacts: undefined
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    if (window.confirm('هل ترغب في بدء محادثة جديدة ومسح السجل الحالي؟')) {
      purgeStaleChatData(CURRENT_VERSION);
      setMessages([INITIAL_GREETING]);
      setUpdateBanner(false);
    }
  };

  return (
    <>
      {/* Floating Bespoke Launcher */}
      <ChatLauncher isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {/* Main Chat Window */}
      {isOpen && (
        <div
          className="fixed z-50 bottom-24 left-4 sm:left-6 w-[calc(100vw-2rem)] sm:w-[430px] h-[min(650px,calc(100dvh-7.5rem))] flex flex-col rounded-3xl bg-[#1C1C1B] border border-[#D8B980]/50 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300 animate-message-enter"
          dir="rtl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-title"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#1C1C1B] via-[#2A2A28] to-[#1C1C1B] border-b border-[#D8B980]/30 px-4 py-3.5 flex items-center justify-between text-white flex-shrink-0">
            {/* Top gold shine accent */}
            <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#D8B980] to-transparent opacity-80" />

            <div className="flex items-center gap-3">
              {/* Mini Golden AI Core Emblem */}
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#D8B980] to-[#7B5927] p-0.5 flex items-center justify-center shadow-lg border border-[#D8B980]/70 flex-shrink-0 animate-gold-breathe">
                <div className="w-full h-full rounded-full bg-[#1C1C1B] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#D8B980] fill-[#D8B980]" />
                </div>
              </div>

              <div>
                <h3 id="chat-title" className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="shimmer-gold-text">مساعد سليمان الحويطي</span>
                  <span className="text-[10px] bg-[#D8B980]/15 text-[#D8B980] border border-[#D8B980]/30 px-1.5 py-0.2 rounded-full font-mono">
                    AI
                  </span>
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-[#F6F4EF]/70">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 font-medium">متصل الآن</span>
                  </span>
                  <span>•</span>
                  <span>خدمة 24/7</span>
                </div>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="بدء محادثة جديدة"
                type="button"
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="مسح المحادثة وبدء محادثة جديدة"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="إغلاق المحادثة"
                type="button"
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-300 hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="إغلاق نافذة المحادثة"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* New Version Alert Banner */}
          {updateBanner && (
            <div className="bg-[#D8B980]/15 border-b border-[#D8B980]/30 px-3.5 py-2 text-[11px] text-[#D8B980] flex items-center justify-between animate-fade-in flex-shrink-0">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D8B980] flex-shrink-0" />
                <span>تم تحديث المساعد الذكي إلى أحدث إصدار وبدء جلسة جديدة بنجاح ✨</span>
              </span>
              <button
                onClick={() => setUpdateBanner(false)}
                className="text-gray-400 hover:text-white p-1 transition-colors cursor-pointer"
                aria-label="إغلاق التنبيه"
                type="button"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 luxury-scrollbar space-y-2 bg-gradient-to-b from-[#1C1C1B] via-[#161615] to-[#121211]">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                onRetry={msg.isError ? () => handleSendMessage(lastAttemptedMessageRef.current) : undefined}
              />
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 py-2 px-3 rounded-2xl bg-[#F6F4EF] text-[#1C1C1B] border border-[#D8B980]/40 max-w-[80%] animate-message-enter shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#A9834B] animate-spin" />
                <span className="text-xs text-[#706B63] font-medium">
                  المساعد الذكي يكتب الرد...
                </span>
                <span className="flex gap-1 mr-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8B980] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8B980] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8B980] animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-[#1C1C1B] border-t border-[#D8B980]/30 p-3 flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="relative flex items-end gap-2 bg-[#262624] border border-[#D8B980]/30 focus-within:border-[#D8B980] rounded-2xl p-2 transition-all"
            >
              <textarea
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="اكتب استفسارك هنا..."
                rows={1}
                maxLength={1000}
                disabled={isLoading}
                aria-label="رسالة للمساعد الذكي"
                className="flex-1 bg-transparent border-0 text-white placeholder-[#706B63] text-xs sm:text-sm resize-none focus:outline-none focus:ring-0 max-h-24 py-1.5 px-2"
              />

              {/* Character Countdown when close to limit */}
              {inputMessage.length > 800 && (
                <span className="text-[10px] text-[#D8B980] px-1 font-mono">
                  {1000 - inputMessage.length}
                </span>
              )}

              {/* Send Button */}
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                aria-label="إرسال الرسالة"
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  inputMessage.trim() && !isLoading
                    ? 'bg-gradient-to-br from-[#D8B980] via-[#C9A96E] to-[#A9834B] text-[#1C1C1B] hover:shadow-lg hover:shadow-[#D8B980]/30 hover:scale-105 active:scale-95'
                    : 'bg-[#1C1C1B] text-[#706B63] cursor-not-allowed border border-[#706B63]/30'
                }`}
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-[#1C1C1B]/40 border-t-[#1C1C1B] rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4 -rotate-90 rtl:rotate-90" />
                )}
              </button>
            </form>

            {/* Footer Notice */}
            <div className="flex items-center justify-between text-[10px] text-[#706B63] mt-2 px-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#D8B980]" />
                مؤسسة معتمدة رسمياً من هيئة الزكاة والضريبة والجمارك
              </span>
              {remainingDaily !== null && (
                <span className="font-mono text-[#D8B980]">
                  المتبقي: {remainingDaily}/15
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
