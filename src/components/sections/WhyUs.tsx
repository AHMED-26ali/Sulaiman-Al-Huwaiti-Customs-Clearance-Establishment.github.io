import { CheckCircle, Star, Shield, Clock, Users, Award, Zap, Globe, Heart, Lightbulb, Target, TrendingUp, Phone, Settings, Building, Truck, Calculator, Package, Rocket, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WhyUs() {
  const advantages = [
    {
      icon: Star,
      title: "خبرة تزيد عن 15 سنة",
      description: "خبرة واسعة ومتراكمة في مجال التخليص الجمركي والشحن الدولي"
    },
    {
      icon: Shield,
      title: "موثوقية وأمان عالي",
      description: "ضمان سلامة البضائع وحفظ حقوق العملاء بأعلى معايير الأمان"
    },
    {
      icon: Clock,
      title: "خدمة 24/7 طوال العام",
      description: "فريق عمل متاح على مدار الساعة لضمان استمرارية الخدمة"
    },
    {
      icon: Users,
      title: "فريق متخصص ومدرب",
      description: "كوادر مؤهلة ومدربة على أحدث الأنظمة والقوانين الجمركية"
    },
    {
      icon: Award,
      title: "جودة معتمدة ومضمونة",
      description: "التزام بأعلى معايير الجودة مع ضمان رضا العملاء"
    },
    {
      icon: Zap,
      title: "سرعة في الإنجاز",
      description: "إنجاز المعاملات في أسرع وقت ممكن مع الحفاظ على الدقة"
    },
    {
      icon: Globe,
      title: "شبكة عالمية واسعة",
      description: "علاقات قوية مع شركاء دوليين في جميع أنحاء العالم"
    },
    {
      icon: Heart,
      title: "خدمة عملاء متميزة",
      description: "اهتمام شخصي بكل عميل وتقديم الدعم الكامل"
    },
    {
      icon: Lightbulb,
      title: "حلول مبتكرة ومرنة",
      description: "تطوير حلول مخصصة لتلبية احتياجات كل عميل"
    },
    {
      icon: Target,
      title: "دقة في التنفيذ",
      description: "اهتمام بأدق التفاصيل لضمان تنفيذ مثالي للمعاملات"
    },
    {
      icon: TrendingUp,
      title: "تطوير مستمر",
      description: "استثمار مستمر في التكنولوجيا والتدريب لتحسين الخدمات"
    },
    {
      icon: Phone,
      title: "تواصل مباشر وسهل",
      description: "قنوات تواصل متعددة لضمان الوصول السريع والمباشر"
    },
    {
      icon: Settings,
      title: "أنظمة متطورة",
      description: "استخدام أحدث التقنيات والأنظمة الإلكترونية المتطورة"
    },
    {
      icon: Building,
      title: "مواقع استراتيجية",
      description: "فروع في أهم المواقع والمنافذ الحدودية الرئيسية"
    },
    {
      icon: Truck,
      title: "أسطول نقل حديث",
      description: "أسطول متطور من وسائل النقل المجهزة بأحدث التقنيات"
    },
    {
      icon: Calculator,
      title: "أسعار تنافسية",
      description: "أسعار عادلة ومنافسة مع شفافية كاملة في التكاليف"
    },
    {
      icon: Package,
      title: "تنوع في الخدمات",
      description: "مجموعة شاملة من الخدمات تلبي جميع احتياجات العملاء"
    },
    {
      icon: CheckCircle,
      title: "سجل نجاح مميز",
      description: "تاريخ حافل بالنجاحات وآلاف العملاء الراضين عن خدماتنا"
    },
    {
      icon: Rocket,
      title: "رؤية مستقبلية طموحة",
      description: "خطط توسع استراتيجية لتطوير الخدمات ومواكبة رؤية المملكة 2030 في تطوير القطاع اللوجستي"
    },
    {
      icon: FileText,
      title: "شفافية كاملة في المعاملات",
      description: "توثيق دقيق لجميع العمليات مع تقارير مفصلة وشفافية كاملة في التعامل مع العملاء وتقديم المعلومات"
    }
  ];

  return (
    <section id="why-us" className="py-20 text-white relative overflow-hidden section-transparent">
      {/* خلفية متحركة محسنة */}
      <div className="absolute inset-0">
        {/* كرات متحركة كبيرة */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float-mega-slow"></div>
        <div className="absolute top-32 -right-40 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-float-mega-medium"></div>
        <div className="absolute -bottom-40 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl animate-float-mega-fast"></div>
        <div className="absolute bottom-32 -right-32 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-float-mega-reverse"></div>
        <div className="absolute top-1/2 left-1/5 w-[280px] h-[280px] bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-float-mega-diagonal"></div>
        <div className="absolute top-20 right-1/4 w-[260px] h-[260px] bg-gradient-to-br from-teal-300/20 to-green-300/20 rounded-full blur-3xl animate-float-mega-spiral"></div>
        
        {/* كرات متحركة متوسطة */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-purple-400/25 rounded-full animate-particle-mega-1 blur-sm"></div>
        <div className="absolute top-1/3 right-1/5 w-20 h-20 bg-blue-400/25 rounded-full animate-particle-mega-2 blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-green-400/25 rounded-full animate-particle-mega-3 blur-sm"></div>
        <div className="absolute top-1/2 right-1/6 w-22 h-22 bg-yellow-400/25 rounded-full animate-particle-mega-4 blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/3 w-26 h-26 bg-indigo-400/25 rounded-full animate-particle-mega-5 blur-sm"></div>
        <div className="absolute top-3/4 left-1/4 w-18 h-18 bg-teal-400/25 rounded-full animate-particle-mega-6 blur-sm"></div>
        
        {/* جسيمات صغيرة سريعة */}
        <div className="absolute top-24 left-24 w-10 h-10 bg-purple-500/50 rounded-full animate-sparkle-mega-fast"></div>
        <div className="absolute top-48 right-48 w-8 h-8 bg-blue-500/50 rounded-full animate-sparkle-mega-medium"></div>
        <div className="absolute bottom-40 left-40 w-12 h-12 bg-green-500/50 rounded-full animate-sparkle-mega-slow"></div>
        <div className="absolute top-96 right-32 w-9 h-9 bg-yellow-500/50 rounded-full animate-sparkle-mega-fast"></div>
        <div className="absolute bottom-56 right-96 w-11 h-11 bg-indigo-500/50 rounded-full animate-sparkle-mega-medium"></div>
        <div className="absolute top-112 left-96 w-7 h-7 bg-teal-500/50 rounded-full animate-sparkle-mega-slow"></div>
        
        {/* مجسمات هندسية */}
        <div className="absolute top-1/5 left-1/5 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rotate-45 animate-rotate-slow blur-sm"></div>
        <div className="absolute top-4/5 right-1/5 w-20 h-20 bg-gradient-to-br from-green-400/30 to-blue-400/30 animate-rotate-medium blur-sm" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-1/5 left-4/5 w-18 h-18 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full animate-rotate-fast blur-sm"></div>
        <div className="absolute top-3/5 right-2/5 w-14 h-28 bg-gradient-to-br from-purple-400/30 to-pink-400/30 animate-rotate-reverse blur-sm"></div>
        
        {/* خطوط SVG محسنة */}
        <svg className="absolute inset-0 w-full h-full opacity-12" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="whyUsLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="whyUsLineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,120 Q250,60 500,120 T1000,120" stroke="url(#whyUsLineGrad1)" strokeWidth="4" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1200;1200,0;0,1200" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M0,280 Q350,180 700,280 T1400,280" stroke="url(#whyUsLineGrad2)" strokeWidth="3" fill="none">
            <animate attributeName="stroke-dasharray" values="1200,0;0,1200;1200,0" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M0,440 Q200,340 400,440 T800,440" stroke="url(#whyUsLineGrad1)" strokeWidth="3" fill="none">
            <animate attributeName="stroke-dasharray" values="0,800;800,0;0,800" dur="12s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-title-glow">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto animate-fade-in-delayed">
            نتميز بالعديد من المزايا التي تجعلنا الخيار الأمثل لخدمات التخليص الجمركي
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className={`card-advanced ${
                index % 4 === 0 ? 'card-gradient-blue' : 
                index % 4 === 1 ? 'card-gradient-purple' : 
                index % 4 === 2 ? 'card-gradient-green' : 'card-gradient-cyan'
              } pulse-on-hover stagger-${(index % 4) + 1} float-animation`}
              style={{
                animationDelay: `${index * 120}ms`
              }}
            >
              <div className="p-6 text-center">
                <div className={`icon-container-advanced mx-auto mb-6 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                  index % 4 === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 
                  index % 4 === 2 ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-cyan-500 to-cyan-600'
                } animated-border`}>
                  <advantage.icon className="h-6 w-6 text-white relative z-10" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  index % 4 === 0 ? 'text-blue-300 text-glow-blue' : 
                  index % 4 === 1 ? 'text-purple-300 text-glow-purple' : 
                  index % 4 === 2 ? 'text-green-300 text-glow-green' : 'text-cyan-300'
                }`}>
                  {advantage.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-mega-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(50px, -50px) rotate(90deg) scale(1.15); }
          50% { transform: translate(-30px, -60px) rotate(180deg) scale(0.85); }
          75% { transform: translate(-60px, 30px) rotate(270deg) scale(1.05); }
        }
        
        @keyframes float-mega-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-55px, 45px) rotate(120deg) scale(1.2); }
          66% { transform: translate(45px, -55px) rotate(240deg) scale(0.8); }
        }
        
        @keyframes float-mega-fast {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(60px, -70px) rotate(180deg) scale(1.25); }
        }
        
        @keyframes float-mega-reverse {
          0%, 100% { transform: translate(0, 0) rotate(360deg) scale(1); }
          50% { transform: translate(-65px, 55px) rotate(180deg) scale(0.75); }
        }
        
        @keyframes float-mega-diagonal {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(45px, 45px) rotate(45deg) scale(1.1); }
          50% { transform: translate(-45px, -45px) rotate(90deg) scale(0.9); }
          75% { transform: translate(-55px, 55px) rotate(135deg) scale(1.05); }
        }
        
        @keyframes float-mega-spiral {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(40px, -20px) rotate(90deg) scale(1.1); }
          50% { transform: translate(0, -40px) rotate(180deg) scale(0.9); }
          75% { transform: translate(-40px, -20px) rotate(270deg) scale(1.05); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
        
        .animate-float-mega-slow { animation: float-mega-slow 20s ease-in-out infinite; }
        .animate-float-mega-medium { animation: float-mega-medium 16s ease-in-out infinite; }
        .animate-float-mega-fast { animation: float-mega-fast 12s ease-in-out infinite; }
        .animate-float-mega-reverse { animation: float-mega-reverse 24s ease-in-out infinite; }
        .animate-float-mega-diagonal { animation: float-mega-diagonal 18s ease-in-out infinite; }
        .animate-float-mega-spiral { animation: float-mega-spiral 22s ease-in-out infinite; }
        
        @keyframes card-entrance {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-card-entrance {
          animation: card-entrance 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}