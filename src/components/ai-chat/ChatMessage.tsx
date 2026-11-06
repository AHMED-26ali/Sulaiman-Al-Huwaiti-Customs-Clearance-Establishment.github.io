import React, { useState } from 'react';
import { Copy, Check, Sparkles, User } from 'lucide-react';
import ContactCard from './ContactCard';
import type { ContactPerson } from '@/shared/siteKnowledge';

export interface MessageData {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  showContactCards?: boolean;
  contacts?: ContactPerson[];
  isError?: boolean;
}

interface ChatMessageProps {
  message: MessageData;
  onRetry?: () => void;
}

export default function ChatMessage({ message, onRetry }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);
  const isUser = message.sender === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe formatting for basic markdown (bold, lists, paragraphs)
  const formatText = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Bold replacement
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-inherit">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      // Bullet lists
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pr-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B980] mt-2 flex-shrink-0" />
            <span className="flex-1 leading-relaxed">{formattedParts}</span>
          </div>
        );
      }

      // Empty line / paragraph gap
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="leading-relaxed mb-1">
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div
      className={`flex flex-col mb-4 animate-message-enter ${
        isUser ? 'items-end' : 'items-start'
      }`}
    >
      <div
        className={`flex items-end gap-2 max-w-[92%] sm:max-w-[85%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {/* Avatar badge */}
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs shadow-md border ${
            isUser
              ? 'bg-[#2A2A28] border-[#706B63]/40 text-[#D8B980]'
              : 'bg-gradient-to-br from-[#D8B980] to-[#A9834B] border-[#D8B980] text-[#1C1C1B]'
          }`}
          aria-hidden="true"
        >
          {isUser ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5 fill-[#1C1C1B]" />}
        </div>

        {/* Message Bubble */}
        <div
          className={`relative rounded-2xl px-4 py-3 shadow-lg transition-all ${
            isUser
              ? 'bg-[#1C1C1B] border border-[#D8B980]/30 text-white rounded-br-xs'
              : message.isError
              ? 'bg-[#2A1818] border border-red-500/40 text-red-100 rounded-bl-xs'
              : 'bg-[#F6F4EF] text-[#1C1C1B] border border-[#D8B980]/40 rounded-bl-xs'
          }`}
        >
          {/* Header indicator inside assistant bubble */}
          {!isUser && (
            <div className="flex items-center justify-between gap-3 pb-1 mb-1.5 border-b border-[#1C1C1B]/10 text-[11px] font-semibold text-[#706B63]">
              <span className="flex items-center gap-1 text-[#A9834B]">
                <Sparkles className="w-3 h-3 text-[#A9834B]" />
                مساعد سليمان الحويطي
              </span>
              <button
                onClick={handleCopy}
                title="نسخ الرد"
                type="button"
                className="opacity-70 hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-[#1C1C1B]/5"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
          )}

          {/* Text Content */}
          <div className="text-xs sm:text-sm font-normal selection:bg-[#D8B980]/30 selection:text-black">
            {formatText(message.text)}
          </div>

          {/* Retry Button if error */}
          {message.isError && onRetry && (
            <div className="mt-2 pt-2 border-t border-red-500/20">
              <button
                onClick={onRetry}
                type="button"
                className="text-xs font-semibold text-[#D8B980] hover:text-white bg-[#1C1C1B] px-3 py-1.5 rounded-lg border border-[#D8B980]/40 transition-colors"
              >
                إعادة المحاولة
              </button>
            </div>
          )}

          {/* Contact Cards Attachment */}
          {message.contacts && message.contacts.length > 0 && (
            <div className="mt-3 pt-2 border-t border-black/10">
              <div className="text-[11px] font-bold text-[#A9834B] mb-1.5 flex items-center gap-1.5">
                <span>أرقام التواصل الرسمية المعتمدة للمكتب:</span>
              </div>
              <div className="space-y-2">
                {message.contacts.map((contact, i) => (
                  <ContactCard key={i} contact={contact} />
                ))}
              </div>
            </div>
          )}

          {/* Timestamp */}
          <div
            className={`text-[10px] mt-1.5 flex items-center gap-1 ${
              isUser ? 'text-[#706B63] justify-end' : 'text-[#706B63] justify-start'
            }`}
          >
            <span>{message.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
