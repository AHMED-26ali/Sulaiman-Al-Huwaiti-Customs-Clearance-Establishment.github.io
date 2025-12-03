import { MapPin, Ship, Truck, Plane, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Branches() {
  const branches = [
    {
      name: 'فرع ضبا',
      description: 'يقع على الساحل الغربي للمملكة العربية السعودية، ضمن محافظة ضبا في منطقة تبوك، ويبعد حوالي 35 كم غرب المحافظة. أقرب ميناء سعودي إلى قناة السويس ودول حوض البحر المتوسط؛ حيث المسافة حوالي 253 بحريّة إلى قناة السويس، ويُعد نقطة عبور مميزة لسفن التجارة العالمية.',
      icon: Ship,
      location: 'محافظة ضبا - منطقة تبوك',
      type: 'ميناء بحري',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'فرع الدرة',
      description: 'يقع في محافظة حقل، شمال منطقة تبوك، على خليج العقبة، ويبعد حوالي 11 كم عن محافظة حقل السعودية. يربط السعودية مع الأردن؛ المنفذ هو أحد المعابر الوظيفية بينهم، ويُستخدم لحركة الركاب والشحن البري.',
      icon: Truck,
      location: 'محافظة حقل - منطقة تبوك',
      type: 'منفذ بري',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'فرع السلوي',
      description: 'في الجزء الشرقي من المملكة، محافظة العديد، وهو المنفذ البري الوحيد مع دولة قطر. يبعد عن الرياض نحو 460 كم، وعن الدوحة نحو 90 كم.',
      icon: Truck,
      location: 'محافظة العديد - المنطقة الشرقية',
      type: 'منفذ بري',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'جسر الملك فهد',
      description: 'جسر بحري بطول حوالي 25 كيلومترًا وعرض حوالي 23.2 مترًا، يربط بين مدينة الخبر السعودية وجزيرة الجسرة في مملكة البحرين. يسهل الحركة البرية بين البلدين، ويساهم في التجارة، السياحة، والزيارات العائلية، كما يعتبر إنجازًا هندسيًا له أثر اقتصادي واجتماعي كبير في الخليج.',
      icon: Ship,
      location: 'الخبر - المنطقة الشرقية',
      type: 'جسر بحري',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'فرع البطحاء',
      description: 'يقع في محافظة العديد بالمنطقة الشرقية، هو المنفذ البري الوحيد مع دولة الإمارات العربية المتحدة. يبعد عن الرياض حوالي 450-500 كم، وعن أبوظبي حوالي 350-370 كم تقريبًا. يعتبر حلقة وصل بريّة رئيسية بين السعودية والإمارات، له دور كبير في التجارة البينية وحركة الأشخاص، ويعمل على تخفيف الضغط على المنافذ الأخرى في المنطقة الشرقية.',
      icon: Truck,
      location: 'محافظة العديد - المنطقة الشرقية',
      type: 'منفذ بري',
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'فروع جديدة قريبًا',
      description: 'بخبرة طويلة في مجال التخليص الجمركي وخدمات الاستيراد والتصدير، نعمل دائمًا على تسهيل أعمالكم وتسريع إجراءاتكم. قريبًا سنكون أقرب إليكم! نعلن عن خططنا لافتتاح فروع جديدة لتغطية مناطق أكثر وتقديم خدماتنا بشكل أسرع وأفضل. تابعونا لمعرفة مواقع الفروع الجديدة قريبًا.',
      icon: Sparkles,
      location: 'مناطق جديدة في المملكة',
      type: 'قريبًا',
      color: 'from-yellow-400 to-orange-600',
      isComingSoon: true
    }
  ];

  return (
    <section id="branches" className="py-20 text-white relative overflow-hidden section-transparent">
      {/* Enhanced Interactive Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* كرات متحركة كبيرة مع تفاعل الماوس */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow interactive-orb-branches"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-medium interactive-orb-branches"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-fast interactive-orb-branches"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float-reverse interactive-orb-branches"></div>
        
        {/* أشكال هندسية متفاعلة */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 transform rotate-45 animate-rotate-slow interactive-shape-branches"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-24 bg-gradient-to-br from-purple-400/40 to-pink-400/40 animate-rotate-medium interactive-shape-branches"></div>
        <div className="absolute top-3/4 right-1/6 w-20 h-20 bg-gradient-to-br from-green-400/40 to-emerald-400/40 rounded-full animate-rotate-fast interactive-shape-branches" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        
        {/* جسيمات متحركة صغيرة */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-particle-1 opacity-60 interactive-particle-branches"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-particle-2 opacity-60 interactive-particle-branches"></div>
        <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-purple-400 rounded-full animate-particle-3 opacity-60 interactive-particle-branches"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-particle-4 opacity-60 interactive-particle-branches"></div>
        <div className="absolute bottom-1/3 right-1/2 w-4 h-4 bg-pink-400 rounded-full animate-particle-5 opacity-60 interactive-particle-branches"></div>
        
        {/* خطوط متحركة */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="branchesGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="branchesGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q300,100 600,200 T1200,200" stroke="url(#branchesGrad1)" strokeWidth="2" fill="none" className="animate-draw-line">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M0,400 Q400,300 800,400 T1600,400" stroke="url(#branchesGrad2)" strokeWidth="2" fill="none" className="animate-draw-line-reverse">
            <animate attributeName="stroke-dasharray" values="1000,0;0,1000;1000,0" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-title-glow">فروعنا</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-delayed">
            نخدمكم عبر شبكة واسعة من الفروع المتخصصة في أهم المنافذ الحدودية والموانئ في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => {
            const IconComponent = branch.icon;
            
            return (
              <div 
                key={index} 
                className={`card-advanced ${
                  index % 3 === 0 ? 'card-gradient-blue' : 
                  index % 3 === 1 ? 'card-gradient-purple' : 'card-gradient-green'
                } pulse-on-hover stagger-${(index % 3) + 1} float-animation ${
                  branch.isComingSoon ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="p-6 text-right">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`icon-container-advanced ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                      index % 3 === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-green-500 to-green-600'
                    } animated-border`}>
                      <IconComponent className="h-6 w-6 text-white relative z-10" />
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        index % 3 === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                        index % 3 === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gradient-to-r from-green-500 to-green-600'
                      } text-white shadow-md`}>
                        {branch.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${
                    index % 3 === 0 ? 'text-blue-300 text-glow-blue' : 
                    index % 3 === 1 ? 'text-purple-300 text-glow-purple' : 'text-green-300 text-glow-green'
                  }`}>
                    {branch.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {branch.location}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {branch.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* Mouse interaction effects */
        .interactive-orb-branches:hover {
          transform: scale(1.3) !important;
          filter: blur(2xl) brightness(1.5);
          transition: all 0.3s ease;
        }
        
        .interactive-shape-branches:hover {
          transform: scale(1.2) rotate(90deg) !important;
          filter: brightness(1.4);
          transition: all 0.3s ease;
        }
        
        .interactive-particle-branches:hover {
          transform: scale(2) !important;
          opacity: 1 !important;
          filter: brightness(2);
          transition: all 0.2s ease;
        }
        
        .interactive-branch-card:hover {
          transform: translateY(-12px) scale(1.05) rotate(3deg) !important;
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(90deg); }
          50% { transform: translate(-10px, -30px) rotate(180deg); }
          75% { transform: translate(-30px, 10px) rotate(270deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 15px) rotate(120deg); }
          66% { transform: translate(15px, -25px) rotate(240deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -40px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(360deg); }
          50% { transform: translate(-35px, 25px) rotate(180deg); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-medium {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes rotate-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -50px) scale(1.2); }
          50% { transform: translate(200px, 30px) scale(0.8); }
          75% { transform: translate(150px, 80px) scale(1.1); }
        }
        
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-80px, 60px) scale(1.3); }
          66% { transform: translate(120px, -40px) scale(0.9); }
        }
        
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-150px, -80px) scale(1.4) rotate(180deg); }
        }
        
        @keyframes particle-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-60px, -30px) scale(0.7); }
          75% { transform: translate(90px, 50px) scale(1.2); }
        }
        
        @keyframes particle-5 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(110px, -70px) scale(1.1) rotate(360deg); }
        }
        
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(139, 92, 246, 0.3); }
        }
        
        @keyframes card-entrance {
          0% { opacity: 0; transform: translateY(100px) rotateX(90deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes wave-1 {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }
        
        @keyframes wave-2 {
          0% { transform: translateX(100%) skewX(15deg); }
          100% { transform: translateX(-100%) skewX(15deg); }
        }
        
        @keyframes sparkle-1 {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
        
        @keyframes sparkle-2 {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          33% { opacity: 1; transform: scale(1) rotate(120deg); }
          66% { opacity: 0.5; transform: scale(1.1) rotate(240deg); }
        }
        
        @keyframes sparkle-3 {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          25% { opacity: 0.7; transform: scale(0.8) rotate(90deg); }
          75% { opacity: 1; transform: scale(1.3) rotate(270deg); }
        }
        
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 10s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 14s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-rotate-medium { animation: rotate-medium 15s linear infinite; }
        .animate-rotate-fast { animation: rotate-fast 10s linear infinite; }
        .animate-particle-1 { animation: particle-1 15s linear infinite; }
        .animate-particle-2 { animation: particle-2 12s linear infinite; }
        .animate-particle-3 { animation: particle-3 18s linear infinite; }
        .animate-particle-4 { animation: particle-4 10s linear infinite; }
        .animate-particle-5 { animation: particle-5 16s linear infinite; }
        .animate-title-glow { animation: title-glow 3s ease-in-out infinite; }
        .animate-card-entrance { animation: card-entrance 0.8s ease-out forwards; opacity: 0; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-wave-1 { animation: wave-1 3s ease-in-out infinite; }
        .animate-wave-2 { animation: wave-2 3s ease-in-out infinite 1.5s; }
        .animate-sparkle-1 { animation: sparkle-1 2s ease-in-out infinite; }
        .animate-sparkle-2 { animation: sparkle-2 2.5s ease-in-out infinite 0.5s; }
        .animate-sparkle-3 { animation: sparkle-3 3s ease-in-out infinite 1s; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1s ease-out 0.5s forwards; opacity: 0; }
      `}</style>
    </section>
  );
}