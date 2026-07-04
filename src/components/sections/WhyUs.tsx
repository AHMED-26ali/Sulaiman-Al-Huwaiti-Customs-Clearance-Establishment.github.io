import { CheckCircle, Star, Shield, Clock, Users, Award, Zap, Globe, Heart, Lightbulb, Target, TrendingUp, Phone, Settings, Building, Truck, Calculator, Package, Rocket, FileText } from 'lucide-react';

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
      {/* خلفية محسّنة - تقليل الأنيميشن من 25 إلى 5 فقط */}
      <div className="absolute inset-0">
        {/* كرتين متحركتين بس بدل 6 */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-32 -right-40 w-[350px] h-[350px] bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-float-medium"></div>
        
        {/* جسيمين صغيرين بس بدل 6 */}
        <div className="absolute top-24 left-24 w-10 h-10 bg-purple-500/50 rounded-full animate-sparkle-slow"></div>
        <div className="absolute bottom-40 left-40 w-12 h-12 bg-green-500/50 rounded-full animate-sparkle-medium"></div>
        
        {/* مجسم هندسي واحد بس بدل 4 */}
        <div className="absolute top-1/5 left-1/5 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rotate-45 animate-rotate-slow blur-sm"></div>
        
        {/* خط SVG واحد بس بدل 3 */}
        <svg className="absolute inset-0 w-full h-full opacity-12" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="whyUsLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,120 Q250,60 500,120 T1000,120" stroke="url(#whyUsLineGrad1)" strokeWidth="4" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1200;1200,0;0,1200" dur="8s" repeatCount="1" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
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
              } pulse-on-hover`}
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
                  index % 4 === 0 ? 'text-blue-300' : 
                  index % 4 === 1 ? 'text-purple-300' : 
                  index % 4 === 2 ? 'text-green-300' : 'text-cyan-300'
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
        /* أنيميشن مبسّطة - شغالة مرة واحدة بس */
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
        }
        
        @keyframes sparkle-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes sparkle-medium {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        .animate-float-slow { 
          animation: float-slow 20s ease-in-out infinite;
          will-change: transform;
        }
        .animate-float-medium { 
          animation: float-medium 16s ease-in-out infinite;
          will-change: transform;
        }
        .animate-sparkle-slow { 
          animation: sparkle-slow 3s ease-in-out infinite;
          will-change: opacity, transform;
        }
        .animate-sparkle-medium { 
          animation: sparkle-medium 4s ease-in-out infinite;
          will-change: opacity, transform;
        }
        .animate-rotate-slow { 
          animation: rotate-slow 30s linear infinite;
          will-change: transform;
        }
        
        /* احترام تفضيلات المستخدم */
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow,
          .animate-float-medium,
          .animate-sparkle-slow,
          .animate-sparkle-medium,
          .animate-rotate-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
