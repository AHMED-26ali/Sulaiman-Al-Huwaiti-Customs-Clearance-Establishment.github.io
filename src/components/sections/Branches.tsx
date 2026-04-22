import { MapPin, Ship, Truck, Plane, Sparkles, Anchor, Bridge } from 'lucide-react';

export default function Branches() {
  const branches = [
    {
      name: 'ميناء نيوم (جمرك ضبا)',
      description: 'يُعد أقرب ميناء سعودي لقناة السويس ودول حوض البحر المتوسط، ويمثل المحرك اللوجستي الرئيسي لمشاريع نيوم العملاقة والتجارة العالمية.',
      icon: Ship,
      location: 'محافظة ضبا - منطقة تبوك',
      type: 'ميناء بحري',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'ميناء الملك عبدالعزيز (الدمام)',
      description: 'الميناء الرئيسي للمملكة على الخليج العربي، وبوابة دخول البضائع للمنطقة الشرقية والوسطى، مجهز بأحدث التقنيات لمناولة كافة أنواع الشحنات.',
      icon: Anchor,
      location: 'مدينة الدمام - المنطقة الشرقية',
      type: 'ميناء بحري',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      name: 'ميناء ينبع التجاري',
      description: 'ميناء استراتيجي يخدم المنطقة المدينة المنورة، ويتميز بقدرات عالية في مناولة البضائع العامة والمعدات الثقيلة المرتبطة بالصناعات التحويلية.',
      icon: Ship,
      location: 'مدينة ينبع - منطقة المدينة المنورة',
      type: 'ميناء بحري',
      color: 'from-sky-400 to-sky-600'
    },
    {
      name: 'منفذ الحديثة (Crossing)',
      description: 'أكبر وأهم منفذ بري في المملكة والشرق الأوسط، يربط المملكة بالأردن وسوريا وتركيا، ويعد البوابة الرئيسية لحركة الشحن البري مع بلاد الشام وأوروبا.',
      icon: Truck,
      location: 'منطقة الجوف - الحدود الشمالية',
      type: 'منفذ بري',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      name: 'منفذ البطحاء (Crossing)',
      description: 'الحلقة اللوجستية الوحيدة التي تربط المملكة بدولة الإمارات العربية المتحدة، ويشهد حركة تجارية ضخمة للشحنات الصادرة والواردة والترانزيت.',
      icon: Truck,
      location: 'محافظة العديد - المنطقة الشرقية',
      type: 'منفذ بري',
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'منفذ جسر الملك فهد',
      description: 'يربط بين مدينة الخبر ومملكة البحرين، ويعد شرياناً حيوياً للتجارة البينية والسياحة، مع تقديم خدمات تخليص جمركي سريعة للشحنات التجارية.',
      icon: Bridge,
      location: 'الخبر - المنطقة الشرقية',
      type: 'جسر بري',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'منفذ السلوى (Crossing)',
      description: 'المنفذ البري الوحيد الذي يربط المملكة بدولة قطر، ويقوم بدور محوري في تسهيل التبادل التجاري ونقل المنتجات الوطنية والسلع الأساسية.',
      icon: Truck,
      location: 'محافظة العديد - المنطقة الشرقية',
      type: 'منفذ بري',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'منفذ الدرة (Crossing)',
      description: 'يقع في محافظة حقل على خليج العقبة، ويربط المملكة بالأردن، مخصص لخدمة حركة الركاب والشحن البري الخفيف والمتوسط في شمال المملكة.',
      icon: MapPin,
      location: 'محافظة حقل - منطقة تبوك',
      type: 'منفذ بري',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="branches" className="py-20 text-white relative overflow-hidden section-transparent">
      {/* الخلفية التفاعلية كما هي في كودك الأصلي */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow interactive-orb-branches"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-medium interactive-orb-branches"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-fast interactive-orb-branches"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float-reverse interactive-orb-branches"></div>
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 Q300,100 600,200 T1200,200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-title-glow">فروعنا وشبكة خدماتنا</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delayed">
            نتواجد استراتيجياً في كافة الموانئ والمنافذ الحدودية الحيوية لضمان تقديم خدمات التخليص الجمركي والترانزيت بأعلى مستويات السرعة والاحترافية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {branches.map((branch, index) => {
            const IconComponent = branch.icon;
            
            return (
              <div 
                key={index} 
                className={`card-advanced p-6 text-right pulse-on-hover float-animation bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${branch.color} shadow-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-md bg-white/10 text-gray-200 border border-white/10">
                    {branch.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {branch.name}
                </h3>
                
                <p className="text-blue-400 text-xs mb-3 flex items-center justify-end gap-1">
                  {branch.location} <MapPin className="h-3 w-3" />
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {branch.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Styles - نفس الـ Styles الموجودة في كودك */}
      <style jsx>{`
        .text-glow-blue { text-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
        .float-animation { animation: float-card 6s ease-in-out infinite; }
        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
        }
        .animate-title-glow { animation: title-glow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
