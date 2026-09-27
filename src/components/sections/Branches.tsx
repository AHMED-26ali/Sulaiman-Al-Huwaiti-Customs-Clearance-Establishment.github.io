import { MapPin, Ship, Truck, Anchor, Landmark, ExternalLink } from 'lucide-react';

export default function Branches() {
  const branches = [
    {
      name: 'ميناء جدة الإسلامي',
      description: 'الميناء الأكبر والأهم على ساحل البحر الأحمر، يربط بين ثلاث قارات ويعد الشريان الرئيسي لدخول البضائع لمنطقة مكة المكرمة والمشاعر المقدسة.',
      icon: Ship,
      location: 'مدينة جدة - منطقة مكة المكرمة',
      type: 'ميناء بحري',
      color: 'from-orange-500 to-red-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=ميناء+جدة+الإسلامي'
    },
    {
      name: 'ميناء نيوم (جمرك ضبا)',
      description: 'يُعد أقرب ميناء سعودي لقناة السويس ودول حوض البحر المتوسط، ويمثل المحرك اللوجستي الرئيسي لمشاريع نيوم العملاقة والتجارة العالمية.',
      icon: Ship,
      location: 'محافظة ضبا - منطقة تبوك',
      type: 'ميناء بحري',
      color: 'from-blue-400 to-blue-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=ميناء+ضبا+التجاري'
    },
    {
      name: 'ميناء الملك عبدالعزيز (الدمام)',
      description: 'الميناء الرئيسي للمملكة على الخليج العربي، وبوابة دخول البضائع للمنطقة الشرقية والوسطى، مجهز بأحدث التقنيات لمناولة كافة أنواع الشحنات.',
      icon: Anchor,
      location: 'مدينة الدمام - المنطقة الشرقية',
      type: 'ميناء بحري',
      color: 'from-cyan-400 to-cyan-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=ميناء+الملك+عبدالعزيز+بالدمام'
    },
    {
      name: 'ميناء ينبع التجاري',
      description: 'ميناء استراتيجي يخدم منطقة المدينة المنورة، ويتميز بقدرات عالية في مناولة البضائع العامة والمعدات الثقيلة المرتبطة بالصناعات التحويلية.',
      icon: Ship,
      location: 'مدينة ينبع - منطقة المدينة المنورة',
      type: 'ميناء بحري',
      color: 'from-sky-400 to-sky-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=ميناء+ينبع+التجاري'
    },
    {
      name: 'منفذ الحديثة (Crossing)',
      description: 'أكبر وأهم منفذ بري في المملكة والشرق الأوسط، يربط المملكة بالأردن وسوريا وتركيا، ويعد البوابة الرئيسية لحركة الشحن البري مع بلاد الشام وأوروبا.',
      icon: Truck,
      location: 'منطقة الجوف - الحدود الشمالية',
      type: 'منفذ بري',
      color: 'from-emerald-400 to-emerald-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=منفذ+الحديثة+الحدودي'
    },
    {
      name: 'منفذ البطحاء (Crossing)',
      description: 'الحلقة اللوجستية الوحيدة التي تربط المملكة بدولة الإمارات العربية المتحدة، ويشهد حركة تجارية ضخمة للشحنات الصادرة والواردة والترانزيت.',
      icon: Truck,
      location: 'محافظة العديد - المنطقة الشرقية',
      type: 'منفذ بري',
      color: 'from-red-400 to-red-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=منفذ+البطحاء+الحدودي'
    },
    {
      name: 'منفذ جسر الملك فهد',
      description: 'يربط بين مدينة الخبر ومملكة البحرين، ويعد شرياناً حيوياً للتجارة البينية والسياحة، مع تقديم خدمات تخليص جمركي سريعة للشحنات التجارية.',
      icon: Landmark, 
      location: 'الخبر - المنطقة الشرقية',
      type: 'جسر بري',
      color: 'from-yellow-400 to-orange-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=جسر+الملك+فهد'
    },
    {
      name: 'منفذ السلوى (Crossing)',
      description: 'المنفذ البري الوحيد الذي يربط المملكة بدولة قطر، ويقوم بدور محوري في تسهيل التبادل التجاري ونقل المنتجات الوطنية والسلع الأساسية.',
      icon: Truck,
      location: 'محافظة العديد - المنطقة الشرقية',
      type: 'منفذ بري',
      color: 'from-purple-400 to-purple-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=منفذ+سلوى+الحدودي'
    },
    {
      name: 'منفذ الدرة (Crossing)',
      description: 'يقع في محافظة حقل على خليج العقبة، ويربط المملكة بالأردن، مخصص لخدمة حركة الركاب والشحن البري الخفيف والمتوسط في شمال المملكة.',
      icon: MapPin,
      location: 'محافظة حقل - منطقة تبوك',
      type: 'منفذ بري',
      color: 'from-green-400 to-green-600',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=منفذ+الدرة+الحدودي+حقل'
    }
  ];

  return (
    <section id="branches" className="py-20 text-white relative overflow-hidden section-transparent" dir="rtl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow interactive-orb-branches"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-reverse interactive-orb-branches"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-title-glow">فروعنا وشبكة خدماتنا</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نتواجد استراتيجياً في كافة الموانئ والمنافذ الحدودية الحيوية لضمان تقديم خدمات التخليص الجمركي والترانزيت بأعلى مستويات السرعة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => {
            const IconComponent = branch.icon;
            return (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 float-animation flex flex-col justify-between" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${branch.color} shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-md bg-white/10 text-gray-200">
                      {branch.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">{branch.name}</h3>

                  {/* نص الموقع داخل الكرت: قابل للنقر ويحول المستخدم مباشرة إلى الموقع الصحيح للميناء أو المنفذ */}
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-cyan-300 text-xs mb-3 inline-flex items-center justify-end gap-1.5 transition-all group cursor-pointer w-full py-1 px-2 rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20"
                    title={`عرض موقع ${branch.name} على الخريطة`}
                  >
                    <span className="text-[11px] text-cyan-400/80 group-hover:text-cyan-300 font-medium">
                      (انقر لعرض الموقع على الخريطة)
                    </span>
                    <span className="group-hover:underline font-medium">{branch.location}</span>
                    <MapPin className="h-3.5 w-3.5 text-blue-400 group-hover:text-cyan-300 group-hover:scale-125 transition-transform flex-shrink-0" />
                  </a>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {branch.description}
                  </p>
                </div>

                {/* زر مخصص ومباشر لفتح موقع الميناء / المنفذ على الخريطة */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/50 py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all group cursor-pointer"
                    title={`فتح موقع ${branch.name} على خرائط Google`}
                  >
                    <MapPin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>عرض الموقع الصحيح للمنفذ على الخريطة</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400/70" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .float-animation { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes title-glow { 0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.3); } 50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6); } }
        .animate-title-glow { animation: title-glow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
