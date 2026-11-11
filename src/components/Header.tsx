import { useState, useEffect } from 'react';
import { trackSiteInteraction } from '@/lib/siteAnalytics';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    if (path === '/contact') trackSiteInteraction('contact_cta_click', 'header');
    if (path === '/services') trackSiteInteraction('services_cta_click', 'header');
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      path: '/',
      label: 'الرئيسية',
      color: 'cyan',
      glowColor: 'rgba(34,211,238,0.8)',
      hoverColor: 'text-cyan-300',
      bgColor: 'bg-cyan-400/20',
    },
    {
      path: '/services',
      label: 'خدماتنا',
      color: 'purple',
      glowColor: 'rgba(147,51,234,0.8)',
      hoverColor: 'text-purple-300',
      bgColor: 'bg-purple-400/20',
    },
    {
      path: '/why-us',
      label: 'لماذا نحن',
      color: 'pink',
      glowColor: 'rgba(236,72,153,0.8)',
      hoverColor: 'text-pink-300',
      bgColor: 'bg-pink-400/20',
    },
    {
      path: '/branches',
      label: 'فروعنا',
      color: 'orange',
      glowColor: 'rgba(251,146,60,0.8)',
      hoverColor: 'text-orange-300',
      bgColor: 'bg-orange-400/20',
    },
    {
      path: '/blog',
      label: 'المدونة',
      color: 'indigo',
      glowColor: 'rgba(99,102,241,0.8)',
      hoverColor: 'text-indigo-300',
      bgColor: 'bg-indigo-400/20',
    },
    {
      path: '/contact',
      label: 'تواصل معنا',
      color: 'red',
      glowColor: 'rgba(239,68,68,0.8)',
      hoverColor: 'text-red-300',
      bgColor: 'bg-red-400/20',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg shadow-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 min-w-0 items-center justify-between gap-2 sm:gap-3">
          {/* Logo */}
          <Link to="/" className="group flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:flex-none">
            <div className="relative flex shrink-0 items-center justify-center">
              <picture className="brand-mark">
                <source type="image/webp" srcSet="/branding/logo-mark-96.webp 1x, /branding/logo-mark-192.webp 2x" />
                <img
                  src="/branding/logo.png"
                  alt="شعار مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت"
                  className="brand-mark-image h-[58px] w-[58px] object-contain sm:h-[68px] sm:w-[68px] lg:h-[72px] lg:w-[72px]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width={72}
                  height={72}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = "true";
                      target.parentElement?.querySelector("source")?.remove();
                      target.src = "/branding/logo.png";
                    }
                  }}
                />
              </picture>
            </div>
            <div className="min-w-0 text-right">
              <span className="block text-[13px] sm:text-base md:text-lg xl:text-xl font-bold leading-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                مؤسسة سليمان الحويطي
              </span>
              <p className="text-[10px] sm:text-xs md:text-sm xl:text-base leading-snug text-cyan-200 group-hover:text-cyan-100 transition-colors duration-300">
                للتخليص الجمركي والترانزيت
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="التنقل الرئيسي" className="hidden lg:flex items-center space-x-2 space-x-reverse">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleNavigate(item.path)}
                  className={`relative font-semibold px-4 py-3 rounded-xl transition-all duration-500 ${
                    isActive
                      ? `text-white ${item.bgColor}`
                      : `text-white/90 hover:${item.hoverColor}`
                  }`}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.filter = `drop-shadow(0 0 10px ${item.glowColor})`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.filter = 'drop-shadow(0 0 0px transparent)';
                  }}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600`}
                      style={{ boxShadow: `0 0 10px ${item.glowColor}` }}
                    ></div>
                  )}

                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 ${item.bgColor} opacity-0 hover:opacity-100 rounded-xl transition-all duration-300`}
                  ></div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-cyan-300 transition-all duration-300 p-3 rounded-xl hover:bg-cyan-400/20"
            aria-label={isMenuOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 transition-all duration-500 rotate-180" />
            ) : (
              <Menu className="h-7 w-7 transition-all duration-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/20 shadow-2xl">
            <nav id="mobile-navigation" aria-label="التنقل عبر الجوال" className="flex flex-col py-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleNavigate(item.path)}
                    className={`transition-all duration-300 font-semibold py-4 px-6 text-right relative ${
                      isActive
                        ? `text-white ${item.bgColor}`
                        : `text-white hover:${item.hoverColor} hover:${item.bgColor}`
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-l-full bg-gradient-to-b from-${item.color}-400 to-${item.color}-600`}
                        style={{ boxShadow: `0 0 8px ${item.glowColor}` }}
                      ></div>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
