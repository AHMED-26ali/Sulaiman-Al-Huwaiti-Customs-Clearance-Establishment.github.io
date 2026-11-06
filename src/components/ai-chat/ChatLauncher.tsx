import React from 'react';
import { X } from 'lucide-react';
import './chat.css';

interface ChatLauncherProps {
  isOpen: boolean;
  onClick: () => void;
  hasUnread?: boolean;
}

export default function ChatLauncher({ isOpen, onClick, hasUnread }: ChatLauncherProps) {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center gap-3" dir="rtl">
      {/* Tooltip / Badge for Desktop */}
      {!isOpen && (
        <button
          onClick={onClick}
          className="hidden md:flex items-center gap-2 bg-[#1C1C1B]/95 text-white border border-[#D8B980]/40 px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md hover:border-[#D8B980] hover:scale-105 transition-all duration-300 group cursor-pointer"
          aria-label="تحدث مع مساعد سليمان الحويطي الذكي"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-bold shimmer-gold-text">
            مساعد سليمان الحويطي الذكي
          </span>
          <span className="text-[10px] bg-[#D8B980]/20 text-[#D8B980] px-1.5 py-0.5 rounded-full font-mono">
            AI 24/7
          </span>
        </button>
      )}

      {/* Main Bespoke 3D Golden AI Core Launcher Button */}
      <button
        onClick={onClick}
        type="button"
        aria-label={isOpen ? 'إغلاق المساعد الذكي' : 'فتح مساعد سليمان الحويطي الذكي'}
        aria-expanded={isOpen}
        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl cursor-pointer ${
          isOpen
            ? 'bg-[#1C1C1B] border border-[#D8B980] rotate-90 scale-95'
            : 'bg-[#1C1C1B] border-2 border-[#D8B980]/70 hover:border-[#D8B980] hover:scale-110 animate-gold-breathe'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#D8B980] transition-transform duration-300 -rotate-90" />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            {/* Outer Concentric Geometric Ring (Clockwise) */}
            <svg
              className="absolute inset-0 w-full h-full animate-gold-orbit-1 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="url(#goldGradientLauncher1)"
                strokeWidth="1.8"
                strokeDasharray="18 10 32 14"
                strokeLinecap="round"
                opacity="0.85"
              />
              <defs>
                <linearGradient id="goldGradientLauncher1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D8B980" />
                  <stop offset="50%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#A9834B" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Concentric Geometric Ring (Counter-Clockwise) */}
            <svg
              className="absolute inset-0 w-full h-full animate-gold-orbit-2 pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="36"
                stroke="url(#goldGradientLauncher2)"
                strokeWidth="1.2"
                strokeDasharray="8 12 18 8"
                strokeLinecap="round"
                opacity="0.7"
              />
              <defs>
                <linearGradient id="goldGradientLauncher2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#A9834B" />
                  <stop offset="70%" stopColor="#D8B980" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
            </svg>

            {/* 3D Realistic Golden Metallic AI Core */}
            <div className="relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#FFF5DC] via-[#D8B980] to-[#7B5927] shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_0_12px_rgba(216,185,128,0.7)] flex items-center justify-center animate-core-pulse">
              {/* Core Facet Reflection */}
              <div className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-white/70 blur-[0.5px]"></div>

              {/* Diamond Emblem Symbol */}
              <svg
                className="w-4 h-4 text-[#1C1C1B] drop-shadow-sm"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 9.5L12 22L22 9.5L12 2Z" />
              </svg>
            </div>

            {/* Live Beacon Notification Dot */}
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#1C1C1B]"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
}
