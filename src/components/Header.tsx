import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { 
      id: 'home', 
      label: 'الرئيسية',
      color: 'cyan',
      glowColor: 'rgba(34,211,238,0.8)',
      hoverColor: 'text-cyan-300',
      bgColor: 'bg-cyan-400/20'
    },
    { 
      id: 'services', 
      label: 'خدماتنا',
      color: 'purple',
      glowColor: 'rgba(147,51,234,0.8)',
      hoverColor: 'text-purple-300',
      bgColor: 'bg-purple-400/20'
    },
    { 
      id: 'why-us', 
      label: 'لماذا نحن',
      color: 'pink',
      glowColor: 'rgba(236,72,153,0.8)',
      hoverColor: 'text-pink-300',
      bgColor: 'bg-pink-400/20'
    },
    { 
      id: 'branches', 
      label: 'فروعنا',
      color: 'orange',
      glowColor: 'rgba(251,146,60,0.8)',
      hoverColor: 'text-orange-300',
      bgColor: 'bg-orange-400/20'
    },
    { 
      id: 'blog', 
      label: 'المدونة',
      color: 'indigo',
      glowColor: 'rgba(99,102,241,0.8)',
      hoverColor: 'text-indigo-300',
      bgColor: 'bg-indigo-400/20'
    },
    { 
      id: 'contact', 
      label: 'تواصل معنا',
      color: 'red',
      glowColor: 'rgba(239,68,68,0.8)',
      hoverColor: 'text-red-300',
      bgColor: 'bg-red-400/20'
    }
  ];

  return (
    <>
      <style jsx>{`
        .neon-pulse {
          animation: neonPulse 2s ease-in-out infinite;
        }
        
        .neon-float {
          animation: neonFloat 3s ease-in-out infinite;
        }
        
        .interactive-glow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .interactive-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .interactive-glow:hover::before {
          left: 100%;
        }
        
        .ripple-effect {
          position: relative;
          overflow: hidden;
        }
        
        .ripple-effect::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .ripple-effect:hover::after {
          width: 300px;
          height: 300px;
        }
        
        @keyframes neonPulse {
          0%, 100% {
            text-shadow: 
              0 0 5px currentColor,
              0 0 10px currentColor,
              0 0 15px currentColor,
              0 0 20px currentColor;
          }
          50% {
            text-shadow: 
              0 0 2px currentColor,
              0 0 5px currentColor,
              0 0 8px currentColor,
              0 0 12px currentColor;
          }
        }
        
        @keyframes neonFloat {
          0%, 100% {
            transform: translateY(0px);
            box-shadow: 0 0 20px currentColor;
          }
          50% {
            transform: translateY(-5px);
            box-shadow: 0 5px 25px currentColor;
          }
        }
        
        .magnetic-effect {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .magnetic-effect:hover {
          transform: scale(1.05) translateY(-2px);
        }
      `}</style>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg shadow-cyan-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Advanced Interactive Effects */}
            <div className="flex items-center space-x-4 space-x-reverse group cursor-pointer magnetic-effect">
              <div className="relative neon-float">
                <img 
                  src="https://i.pinimg.com/736x/7f/12/80/7f1280df00efb23c191881da5c430049.jpg" 
                  alt="شعار مؤسسة سليمان الحويطي" 
                  className="h-16 w-16 rounded-full object-cover border-3 border-cyan-400/60 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl group-hover:border-cyan-300 group-hover:shadow-cyan-400/70"
                />
                <div className="absolute inset-0 rounded-full bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-cyan-300/50 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 rounded-full border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-spin"></div>
              </div>
              <div className="text-right">
                <h1 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-all duration-700 neon-pulse group-hover:scale-110">
                  مؤسسة سليمان الحويطي
                </h1>
                <p className="text-base text-cyan-200 group-hover:text-cyan-100 transition-all duration-700 group-hover:scale-105">
                  للتخليص الجمركي والترانزيت
                </p>
              </div>
            </div>

            {/* Desktop Navigation with Ultra Interactive Effects */}
            <nav className="hidden lg:flex items-center space-x-10 space-x-reverse">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-white/90 hover:${item.hoverColor} transition-all duration-500 font-semibold group px-4 py-3 rounded-xl interactive-glow ripple-effect magnetic-effect`}
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    transform: 'perspective(1000px) rotateX(0deg)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = `drop-shadow(0 0 15px ${item.glowColor}) drop-shadow(0 0 25px ${item.glowColor})`;
                    e.target.style.transform = 'perspective(1000px) rotateX(-10deg) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = 'drop-shadow(0 0 0px transparent)';
                    e.target.style.transform = 'perspective(1000px) rotateX(0deg) scale(1)';
                  }}
                >
                  <span className="relative z-20 transition-all duration-500">
                    {item.label}
                  </span>
                  
                  {/* Multiple Interactive Layers */}
                  <div className={`absolute inset-0 ${item.bgColor} opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 blur-sm`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-400/20 via-${item.color}-300/30 to-${item.color}-400/20 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-700`}></div>
                  
                  {/* Animated Border */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-${item.color}-400 via-${item.color}-300 to-${item.color}-500 group-hover:w-full transition-all duration-700 rounded-full`}
                       style={{
                         boxShadow: `0 0 10px ${item.glowColor}, 0 0 20px ${item.glowColor}`,
                       }}></div>
                  
                  {/* Glowing Border */}
                  <div className={`absolute inset-0 border-2 border-${item.color}-400/30 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500`}
                       style={{
                         boxShadow: `inset 0 0 20px ${item.glowColor}`,
                       }}></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className={`absolute top-1 left-1 w-1 h-1 bg-${item.color}-300 rounded-full animate-ping`}></div>
                    <div className={`absolute top-1 right-1 w-1 h-1 bg-${item.color}-400 rounded-full animate-pulse`} style={{animationDelay: '0.5s'}}></div>
                    <div className={`absolute bottom-1 left-1 w-1 h-1 bg-${item.color}-500 rounded-full animate-bounce`} style={{animationDelay: '1s'}}></div>
                    <div className={`absolute bottom-1 right-1 w-1 h-1 bg-${item.color}-300 rounded-full animate-ping`} style={{animationDelay: '1.5s'}}></div>
                  </div>
                </button>
              ))}
            </nav>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-cyan-300 transition-all duration-500 p-3 rounded-xl hover:bg-cyan-400/20 group relative magnetic-effect interactive-glow"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="h-7 w-7 transition-all duration-500 group-hover:rotate-180 group-hover:scale-125" />
                ) : (
                  <Menu className="h-7 w-7 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125" />
                )}
              </div>
              <div className="absolute inset-0 border-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500"
                   style={{
                     boxShadow: 'inset 0 0 20px rgba(34,211,238,0.3)',
                   }}></div>
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/15 backdrop-blur-lg border-b border-white/30 shadow-2xl shadow-cyan-500/20">
              <nav className="flex flex-col py-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-white hover:${item.hoverColor} hover:${item.bgColor} transition-all duration-500 font-semibold py-4 px-6 text-right group relative magnetic-effect interactive-glow`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: `slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = `drop-shadow(0 0 10px ${item.glowColor})`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'drop-shadow(0 0 0px transparent)';
                    }}
                  >
                    <span className="relative z-10 transition-all duration-500">
                      {item.label}
                    </span>
                    
                    {/* Mobile Interactive Elements */}
                    <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-0 bg-gradient-to-b from-${item.color}-400 to-${item.color}-600 group-hover:h-12 transition-all duration-500 rounded-full`}
                         style={{
                           boxShadow: `0 0 10px ${item.glowColor}`,
                         }}></div>
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${item.color}-400/10 to-${item.color}-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                    <div className="absolute inset-0 border-r-4 border-transparent group-hover:border-current opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(-30px) rotateY(-15deg);
            }
            to {
              opacity: 1;
              transform: translateX(0) rotateY(0deg);
            }
          }
        `}</style>
      </header>
    </>
  );
}