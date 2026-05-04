import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 space-x-reverse group cursor-pointer">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/7f/12/80/7f1280df00efb23c191881da5c430049.jpg"
                alt="شعار مؤسسة سليمان الحويطي"
                className="h-16 w-16 rounded-full object-cover border-2 border-cyan-400/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-300 group-hover:shadow-lg group-hover:shadow-cyan-400/50"
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
            </div>
            <div className="text-right">
              <h1 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-all duration-500">
                مؤسسة سليمان الحويطي
              </h1>
              <p className="text-sm md:text-base text-cyan-200 group-hover:text-cyan-100 transition-all duration-500">
                للتخليص الجمركي والترانزيت
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 space-x-reverse">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
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
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-cyan-300 transition-all duration-300 p-3 rounded-xl hover:bg-cyan-400/20"
            aria-label="menu"
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
            <nav className="flex flex-col py-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
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
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}