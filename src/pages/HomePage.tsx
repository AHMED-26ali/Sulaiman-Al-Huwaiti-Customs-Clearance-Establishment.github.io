import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Star, MapPin, BookOpen, Phone } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/Footer';

export default function HomePage() {
  const sectionCards = [
    {
      id: 'services',
      label: 'خدماتنا',
      description: 'حلول متكاملة للتخليص الجمركي والترانزيت',
      icon: Briefcase,
      path: '/services',
      gradient: 'from-purple-600 to-pink-600',
      glow: 'rgba(147,51,234,0.6)',
    },
    {
      id: 'why-us',
      label: 'لماذا نحن',
      description: 'خبرة وموثوقية لا تضاهى',
      icon: Star,
      path: '/why-us',
      gradient: 'from-pink-600 to-red-500',
      glow: 'rgba(236,72,153,0.6)',
    },
    {
      id: 'branches',
      label: 'فروعنا',
      description: 'حضور واسع في جميع المنافذ السعودية',
      icon: MapPin,
      path: '/branches',
      gradient: 'from-orange-500 to-amber-500',
      glow: 'rgba(251,146,60,0.6)',
    },
    {
      id: 'blog',
      label: 'المدونة',
      description: 'آخر الأخبار والمقالات',
      icon: BookOpen,
      path: '/blog',
      gradient: 'from-indigo-600 to-blue-600',
      glow: 'rgba(99,102,241,0.6)',
    },
    {
      id: 'contact',
      label: 'تواصل معنا',
      description: 'نحن هنا لخدمتكم 24/7',
      icon: Phone,
      path: '/contact',
      gradient: 'from-red-600 to-rose-500',
      glow: 'rgba(239,68,68,0.6)',
    },
  ];

  return (
    <div className="min-h-screen section-seamless">
      <Hero />

      {/* Section Navigation Cards */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              استكشف أقسام الموقع
            </h2>
            <p className="text-xl text-cyan-200">
              اضغط على أي قسم للانتقال إليه بصفحة مستقلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.id}
                  to={card.path}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:border-white/30"
                  style={{
                    boxShadow: `0 0 0 ${card.glow}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 40px ${card.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 transparent`;
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {card.label}
                    </h3>

                    <p className="text-white/70 mb-6 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="flex items-center text-cyan-300 group-hover:text-cyan-100 transition-all duration-300">
                      <span className="font-semibold ml-2">الانتقال للقسم</span>
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}