import React from 'react';
import { MessageCircleMore, Sparkles, X } from 'lucide-react';
import './chat.css';

interface ChatLauncherProps {
  isOpen: boolean;
  onClick: () => void;
  hasUnread?: boolean;
}

/**
 * Presentation-only launcher. Chat state, messages, API, and behaviour remain unchanged.
 * No image assets, third-party fonts, or heavy animations.
 */
export default function ChatLauncher({ isOpen, onClick, hasUnread }: ChatLauncherProps) {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center gap-3" dir="rtl">
      {!isOpen && (
        <button
          type="button"
          onClick={onClick}
          className="ai-launcher-label hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full cursor-pointer"
          aria-label="تحدث مع مساعد سليمان الحويطي الذكي"
        >
          <span className="ai-launcher-online-dot" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#F6F4EF]">
            مساعد سليمان الحويطي الذكي
          </span>
          <span className="text-[10px] font-semibold text-[#D8B980] border border-[#D8B980]/30 rounded-full px-2 py-0.5" dir="ltr">
            AI 24/7
          </span>
        </button>
      )}

      <button
        type="button"
        onClick={onClick}
        className={`ai-launcher-button relative flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full cursor-pointer ${isOpen ? 'ai-launcher-button-open' : ''}`}
        aria-label={isOpen ? 'إغلاق المساعد الذكي' : 'فتح مساعد سليمان الحويطي الذكي'}
        aria-expanded={isOpen}
        title={isOpen ? 'إغلاق المساعد الذكي' : 'مساعد سليمان الحويطي الذكي'}
      >
        <span className="ai-launcher-button-inner" aria-hidden="true">
          {isOpen ? (
            <X className="h-6 w-6 text-[#F6F4EF]" strokeWidth={1.9} />
          ) : (
            <span className="relative inline-flex items-center justify-center">
              <MessageCircleMore className="h-7 w-7 md:h-8 md:w-8 text-[#E9CA91]" strokeWidth={1.9} />
              <Sparkles className="absolute -top-1.5 -right-2 h-3.5 w-3.5 text-[#F9DC9F]" strokeWidth={2} />
            </span>
          )}
        </span>
        {!isOpen && (
          <span className="ai-launcher-status" aria-label={hasUnread ? 'توجد رسائل غير مقروءة' : 'المساعد متاح'} />
        )}
      </button>
    </div>
  );
}
