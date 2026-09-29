import { Truck, Ship, Plane, FileText, Clock, Shield, Users, Globe, Package, Calculator, Building, Award, Heart, Lightbulb, Rocket, Settings, Phone, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "التخليص الجمركي الشامل",
      description: "خدمات تخليص جمركي متكاملة لجميع أنواع البضائع مع ضمان السرعة والدقة في إنهاء الإجراءات والفسح الفوري"
    },
    {
      icon: Truck,
      title: "النقل والترانزيت الدولي",
      description: "إنهاء إجراءات البضائع العابرة (الترانزيت) ومتابعة نقلها عبر المنافذ الحدودية والموانئ وفق الأنظمة الجمركية"
    },
    {
      icon: Ship,
      title: "التخليص الجمركي البحري",
      description: "إنهاء كافة إجراءات الفسح والتخليص الجمركي للحاويات والبضائع الواردة والصادرة عبر الموانئ البحرية بالمملكة"
    },
    {
      icon: Plane,
      title: "التخليص الجمركي الجوي",
      description: "فسح جمركي فوري للشحنات الجوية عبر مطارات المملكة مع مطابقة المستندات والمواصفات بدقة عالية"
    },
    {
      icon: Clock,
      title: "خدمة 24/7",
      description: "فريق عمل جمركي ميداني متاح على مدار الساعة لمتابعة إنهاء المعاملات الجمركية في أي وقت"
    },
    {
      icon: Shield,
      title: "متابعة السلامة والفسح الجمركي",
      description: "متابعة دقيقة لسلامة المعاملات وإنهاء متطلبات الفسح والإفراج الجمركي بأعلى درجات الأمان والموثوقية"
    },
    {
      icon: Users,
      title: "الاستشارات الجمركية",
      description: "استشارات متخصصة في الأنظمة واللوائح الجمركية وبنود التعريفة واشتراطات الاستيراد والتصدير بالمملكة"
    },
    {
      icon: Globe,
      title: "تسهيل إجراءات التجارة الدولية",
      description: "تسهيل وإنهاء إجراءات الاستيراد والتصدير عبر كافة المنافذ والموانئ الجمركية السعودية بكفاءة وسرعة"
    },
    {
      icon: Package,
      title: "إنهاء أذونات التسليم والمناولة",
      description: "استلام أذونات التسليم ومتابعة فحص ومعاينة البضائع وتسهيل خروجها من ساحات الموانئ والمنافذ"
    },
    {
      icon: Calculator,
      title: "حساب الرسوم الجمركية",
      description: "حساب دقيق للرسوم والضرائب الجمركية وبنود التعريفة الجمركية مع توضيح مفصل لكافة التكاليف النظامية"
    },
    {
      icon: Building,
      title: "خدمات الشركات والمؤسسات",
      description: "حلول تخليص جمركي مخصصة لكبرى الشركات والمستوردين مع خطط متابعة دورية وتقارير فورية"
    },
    {
      icon: Award,
      title: "ضمان الجودة والاعتماد",
      description: "مؤسسة مرخصة ومعتمدة رسمياً تضمن إنهاء المعاملات الجمركية وفق أعلى معايير الجودة والأنظمة"
    },
    {
      icon: Heart,
      title: "المتابعة الميدانية المباشرة",
      description: "فريق ميداني حاضر في ساحات الجمارك لتقديم الدعم والمتابعة المباشرة لكافة مراحل الفسح"
    },
    {
      icon: Lightbulb,
      title: "حلول جمركية متخصصة",
      description: "تجاوز المعوقات الجمركية وتقديم حلول نظامية سريعة للشحنات الخاصة والبضائع ذات المواصفات المحددة"
    },
    {
      icon: Rocket,
      title: "سرعة الفسح والإفراج",
      description: "تسريع دورة الإفراج الجمركي للبضائع لتفادي أي رسوم أرضيات أو غرامات تأخير في الموانئ والمنافذ"
    },
    {
      icon: Settings,
      title: "المنصات والأنظمة الجمركية",
      description: "إتقان كامل لمنصات الفسح والربط الإلكتروني (منصة فسح، سابر، هيئة الزكاة والضريبة والجمارك)"
    },
    {
      icon: Phone,
      title: "التواصل والتحديث الفوري",
      description: "إشعار العملاء لحظة بلحظة بحالة البيان الجمركي ومراحل التفتيش والفسح حتى استلام البضاعة"
    },
    {
      icon: Zap,
      title: "السرعة في الإنجاز",
      description: "التزام بالمواعيد المحددة مع إنهاء الإجراءات والبيانات الجمركية في وقت قياسي وبأمان تام"
    },
    {
      icon: Target,
      title: "الدقة وتصنيف البنود",
      description: "دقة متناهية في تصنيف بنود البضائع وتطبيق الإعفاءات الجمركية المستحقة لتوفير التكاليف نظامياً"
    },
    {
      icon: Globe,
      title: "خدمات الترانزيت الدولي",
      description: "إنهاء إجراءات الترانزيت ونقل البضائع العابرة بين المنافذ الحدودية والموانئ بدقة والتزام كامل بالتعليمات الجمركية"
    }
  ];

  return (
    <section id="services" className="py-20 text-white relative overflow-hidden section-transparent">
      {/* Enhanced Interactive Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-xl animate-float-services-slow interactive-orb-services"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-xl animate-float-services-medium interactive-orb-services"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-full blur-lg animate-float-services-fast interactive-orb-services"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full blur-lg animate-float-services-reverse interactive-orb-services"></div>
        <div className="absolute bottom-1/3 left-1/2 w-28 h-28 bg-gradient-to-br from-red-500/30 to-pink-500/30 rounded-full blur-xl animate-float-services-diagonal interactive-orb-services"></div>
        <div className="absolute top-10 right-10 w-36 h-36 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-full blur-2xl animate-spin-slow interactive-orb-services"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/5 right-1/5 w-14 h-14 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 transform rotate-45 animate-rotate-services-slow interactive-shape-services"></div>
        <div className="absolute bottom-1/5 left-1/4 w-10 h-20 bg-gradient-to-br from-purple-400/40 to-pink-400/40 animate-rotate-services-medium interactive-shape-services"></div>
        <div className="absolute top-3/5 right-1/6 w-18 h-18 bg-gradient-to-br from-green-400/40 to-lime-400/40 rounded-full animate-rotate-services-fast interactive-shape-services" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-2/5 left-1/6 w-12 h-12 bg-gradient-to-br from-orange-400/40 to-red-400/40 animate-rotate-services-reverse interactive-shape-services"></div>
        
        {/* Particle system */}
        <div className="absolute top-16 left-16 w-3 h-3 bg-blue-300/70 rounded-full animate-particle-services-1 interactive-particle-services"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-green-300/70 rounded-full animate-particle-services-2 interactive-particle-services"></div>
        <div className="absolute bottom-40 left-40 w-4 h-4 bg-purple-300/70 rounded-full animate-particle-services-3 interactive-particle-services"></div>
        <div className="absolute bottom-16 right-16 w-3 h-3 bg-yellow-300/70 rounded-full animate-particle-services-4 interactive-particle-services"></div>
        <div className="absolute top-2/3 right-16 w-2 h-2 bg-pink-300/70 rounded-full animate-particle-services-5 interactive-particle-services"></div>
        <div className="absolute bottom-2/3 left-16 w-4 h-4 bg-cyan-300/70 rounded-full animate-particle-services-6 interactive-particle-services"></div>
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="servicesGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="servicesGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M0,80 Q250,40 500,80 T1000,80" stroke="url(#servicesGrad1)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M0,200 Q300,120 600,200 T1200,200" stroke="url(#servicesGrad2)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" values="1000,0;0,1000;1000,0" dur="9s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow-blue">
            خدماتنا المتميزة
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            خدمات التخليص الجمركي والترانزيت وإنهاء كافة إجراءات الفسح الجمركي للشحنات والبضائع الواردة والصادرة بدقة وسرعة فائقة عبر كافة موانئ ومنافذ المملكة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              className={`card-advanced ${
                index % 6 === 0 ? 'card-gradient-blue' : 
                index % 6 === 1 ? 'card-gradient-purple' : 
                index % 6 === 2 ? 'card-gradient-green' : 
                index % 6 === 3 ? 'card-gradient-cyan' : 
                index % 6 === 4 ? 'card-gradient-pink' : 'card-gradient-orange'
              } pulse-on-hover stagger-${(index % 6) + 1} float-animation`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="p-6 text-center">
                <div className={`icon-container-advanced mx-auto mb-6 ${
                  index % 6 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                  index % 6 === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 
                  index % 6 === 2 ? 'bg-gradient-to-br from-green-500 to-green-600' : 
                  index % 6 === 3 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600' : 
                  index % 6 === 4 ? 'bg-gradient-to-br from-pink-500 to-pink-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'
                } animated-border`}>
                  <service.icon className="h-6 w-6 text-white relative z-10" />
                </div>
                <h2 className={`text-xl font-bold mb-4 ${
                  index % 6 === 0 ? 'text-blue-300 text-glow-blue' : 
                  index % 6 === 1 ? 'text-purple-300 text-glow-purple' : 
                  index % 6 === 2 ? 'text-green-300 text-glow-green' : 
                  index % 6 === 3 ? 'text-cyan-300' : 
                  index % 6 === 4 ? 'text-pink-300' : 'text-orange-300'
                }`}>
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-services-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(25px, -25px) rotate(90deg) scale(1.1); }
          50% { transform: translate(-15px, -35px) rotate(180deg) scale(0.9); }
          75% { transform: translate(-35px, 15px) rotate(270deg) scale(1.05); }
        }
        
        @keyframes float-services-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-30px, 20px) rotate(120deg) scale(1.15); }
          66% { transform: translate(20px, -30px) rotate(240deg) scale(0.85); }
        }
        
        @keyframes float-services-fast {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(35px, -40px) rotate(180deg) scale(1.2); }
        }
        
        @keyframes float-services-reverse {
          0%, 100% { transform: translate(0, 0) rotate(360deg) scale(1); }
          50% { transform: translate(-40px, 30px) rotate(180deg) scale(0.8); }
        }
        
        @keyframes float-services-diagonal {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(20px, 20px) rotate(45deg) scale(1.1); }
          50% { transform: translate(-20px, -20px) rotate(90deg) scale(0.9); }
          75% { transform: translate(-30px, 30px) rotate(135deg) scale(1.05); }
        }
        
        @keyframes rotate-services-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-services-medium {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes rotate-services-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-services-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes particle-services-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(40px, -20px) scale(1.4); opacity: 1; }
          50% { transform: translate(80px, 10px) scale(0.8); opacity: 0.5; }
          75% { transform: translate(60px, 35px) scale(1.2); opacity: 0.8; }
        }
        
        @keyframes particle-services-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          33% { transform: translate(-35px, 25px) scale(1.3); opacity: 1; }
          66% { transform: translate(50px, -15px) scale(0.9); opacity: 0.7; }
        }
        
        @keyframes particle-services-3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: translate(-65px, -35px) scale(1.4) rotate(180deg); opacity: 1; }
        }
        
        @keyframes particle-services-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(-25px, -12px) scale(0.7); opacity: 0.4; }
          75% { transform: translate(40px, 20px) scale(1.2); opacity: 1; }
        }
        
        @keyframes particle-services-5 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
          50% { transform: translate(45px, -30px) scale(1.1) rotate(360deg); opacity: 1; }
        }
        
        @keyframes particle-services-6 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          33% { transform: translate(30px, 15px) scale(1.3); opacity: 1; }
          66% { transform: translate(-20px, -25px) scale(0.8); opacity: 0.5; }
        }
        
        .animate-float-services-slow { animation: float-services-slow 14s ease-in-out infinite; }
        .animate-float-services-medium { animation: float-services-medium 11s ease-in-out infinite; }
        .animate-float-services-fast { animation: float-services-fast 7s ease-in-out infinite; }
        .animate-float-services-reverse { animation: float-services-reverse 16s ease-in-out infinite; }
        .animate-float-services-diagonal { animation: float-services-diagonal 13s ease-in-out infinite; }
        .animate-rotate-services-slow { animation: rotate-services-slow 18s linear infinite; }
        .animate-rotate-services-medium { animation: rotate-services-medium 13s linear infinite; }
        .animate-rotate-services-fast { animation: rotate-services-fast 9s linear infinite; }
        .animate-rotate-services-reverse { animation: rotate-services-reverse 15s linear infinite; }
        .animate-particle-services-1 { animation: particle-services-1 11s linear infinite; }
        .animate-particle-services-2 { animation: particle-services-2 9s linear infinite; }
        .animate-particle-services-3 { animation: particle-services-3 15s linear infinite; }
        .animate-particle-services-4 { animation: particle-services-4 7s linear infinite; }
        .animate-particle-services-5 { animation: particle-services-5 13s linear infinite; }
        .animate-particle-services-6 { animation: particle-services-6 10s linear infinite; }
        
        /* Mouse interaction effects */
        .interactive-orb-services:hover {
          transform: scale(1.4) !important;
          filter: blur(6px) brightness(1.6);
          transition: all 0.3s ease;
        }
        
        .interactive-shape-services:hover {
          transform: scale(1.3) rotate(90deg) !important;
          filter: brightness(1.5);
          transition: all 0.3s ease;
        }
        
        .interactive-particle-services:hover {
          transform: scale(2.5) !important;
          opacity: 1 !important;
          filter: brightness(2.2);
          transition: all 0.2s ease;
        }
        
        .interactive-service-card:hover {
          transform: translateY(-8px) scale(1.05) rotate(2deg) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .interactive-service-icon:hover {
          transform: scale(1.2) rotate(15deg);
          filter: brightness(1.3);
        }
      `}</style>
    </section>
  );
}