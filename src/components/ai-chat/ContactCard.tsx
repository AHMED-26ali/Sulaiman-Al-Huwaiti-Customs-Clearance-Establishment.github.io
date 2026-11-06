import { useState } from 'react';
import { Phone, Copy, Check, MessageSquare, User } from 'lucide-react';
import type { ContactPerson } from '@/shared/siteKnowledge';

interface ContactCardProps {
  contact: ContactPerson;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(contact.phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasWhatsApp = Boolean(contact.whatsapp && contact.whatsapp.trim().length > 0);
  const waUrl = hasWhatsApp
    ? `https://wa.me/${contact.whatsapp?.trim()}?text=${encodeURIComponent('السلام عليكم ورحمة الله، أتواصل معكم بخصوص استفسار جمركي.')}`
    : undefined;

  return (
    <div className="bg-[#1C1C1B]/95 border border-[#D8B980]/35 hover:border-[#D8B980]/70 rounded-2xl p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-[#D8B980]/10 text-white my-2.5">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D8B980]/20 to-[#A9834B]/30 border border-[#D8B980]/40 flex items-center justify-center flex-shrink-0 text-[#D8B980]">
          <User className="w-4 h-4" />
        </div>
        <h4 className="font-bold text-white text-sm md:text-base">{contact.name}</h4>
      </div>

      <div className="bg-[#262624] border border-[#D8B980]/20 rounded-xl px-3 py-2 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#D8B980]" />
          <span className="font-mono text-xs md:text-sm text-[#F6F4EF] tracking-wider font-semibold" dir="ltr">
            {contact.displayPhone || contact.phone}
          </span>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          aria-label={`نسخ رقم ${contact.name}`}
          className="text-xs text-[#D8B980] hover:text-white bg-[#D8B980]/10 hover:bg-[#D8B980]/25 px-2 py-1 rounded-md transition-all flex items-center gap-1 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-[11px]">تم النسخ</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px]">نسخ</span>
            </>
          )}
        </button>
      </div>

      <div className={`grid ${hasWhatsApp ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
        <a
          href={`tel:${contact.phone}`}
          className="bg-gradient-to-r from-[#D8B980] via-[#C9A96E] to-[#A9834B] hover:from-[#E4C894] hover:to-[#B99258] text-[#1C1C1B] font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md hover:shadow-[#D8B980]/30 active:scale-[0.98] cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 fill-[#1C1C1B]" />
          <span>اتصال مباشر</span>
        </a>

        {hasWhatsApp && waUrl && (
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2A2A28] hover:bg-[#343430] text-[#F6F4EF] hover:text-white border border-[#D8B980]/30 font-medium py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>واتساب</span>
          </a>
        )}
      </div>
    </div>
  );
}
