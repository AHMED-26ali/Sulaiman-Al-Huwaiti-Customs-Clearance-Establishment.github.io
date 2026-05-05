import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  Star,
  MapPin,
  BookOpen,
  Phone,
  CheckCircle2,
  Ship,
  Plane,
  Truck,
  FileText,
  ShieldCheck,
  Clock,
  Award,
  Users,
  Target,
  TrendingUp,
  Package,
  Globe,
  Headphones,
  Quote,
  MessageCircle,
} from 'lucide-react';
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

  const featuredServices = [
    {
      icon: Ship,
      title: 'التخليص الجمركي البحري',
      description: 'خدمات تخليص جمركي متكاملة عبر جميع الموانئ البحرية السعودية بأعلى كفاءة وأسرع وقت.',
      color: 'from-blue-500 to-cyan-500',
      features: ['ميناء جدة الإسلامي', 'ميناء الملك عبدالعزيز', 'ميناء جازان'],
    },
    {
      icon: Plane,
      title: 'التخليص الجوي',
      description: 'تخليص جمركي سريع للشحنات الجوية في جميع المطارات الدولية بالمملكة مع متابعة لحظية.',
      color: 'from-purple-500 to-pink-500',
      features: ['مطار الملك خالد', 'مطار الملك عبدالعزيز', 'مطار الملك فهد'],
    },
    {
      icon: Truck,
      title: 'النقل البري والترانزيت',
      description: 'خدمات ترانزيت وعبور بري للبضائع عبر المنافذ الحدودية مع دول مجلس التعاون والأردن.',
      color: 'from-orange-500 to-red-500',
      features: ['منفذ البطحاء', 'منفذ الحديثة', 'منفذ الخفجي'],
    },
    {
      icon: FileText,
      title: 'الاستشارات الجمركية',
      description: 'فريق خبراء يقدم استشارات متخصصة في التعرفة الجمركية والإجراءات واللوائح المحدثة.',
      color: 'from-emerald-500 to-teal-500',
      features: ['تصنيف البضائع', 'التعرفة الجمركية', 'المطابقة والاشتراطات'],
    },
    {
      icon: Package,
      title: 'التخزين والمناولة',
      description: 'خدمات تخزين آمنة ومناولة احترافية للبضائع في مستودعات مجهزة بأحدث المعايير.',
      color: 'from-amber-500 to-yellow-500',
      features: ['مستودعات آمنة', 'مناولة احترافية', 'نظام تتبع متكامل'],
    },
    {
      icon: Globe,
      title: 'الشحن الدولي',
      description: 'حلول شحن عالمية من وإلى جميع دول العالم بأسعار تنافسية وخدمة متميزة.',
      color: 'from-indigo-500 to-violet-500',
      features: ['شبكة وكلاء عالمية', 'أسعار تنافسية', 'تغطية شاملة'],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'استلام المستندات',
      description: 'نستلم كافة المستندات اللازمة للشحنة ونراجعها بدقة من فريق مختص.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'الفحص والتدقيق',
      description: 'تدقيق البيانات والتحقق من التعرفة الجمركية والاشتراطات المطبقة.',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'الإجراءات الجمركية',
      description: 'إنجاز كافة الإجراءات الجمركية والدفع الإلكتروني للرسوم المستحقة.',
      icon: CheckCircle2,
    },
    {
      step: '04',
      title: 'التسليم النهائي',
      description: 'استلام البضاعة وتوصيلها للعميل بأسرع وقت ممكن مع ضمان السلامة.',
      icon: Package,
    },
  ];

  const features = [
    {
      icon: Clock,
      title: 'سرعة في الإنجاز',
      description: 'إنجاز المعاملات بأسرع وقت ممكن دون تأخير',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-400/30',
    },
    {
      icon: Award,
      title: 'جودة معتمدة',
      description: 'شهادات جودة ومعايير عالمية في الخدمة',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-400/30',
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'كوادر مؤهلة وخبيرة في المجال الجمركي',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-400/30',
    },
    {
      icon: Target,
      title: 'دقة متناهية',
      description: 'دقة في تصنيف البضائع وحساب الرسوم',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-400/30',
    },
    {
      icon: TrendingUp,
      title: 'أسعار تنافسية',
      description: 'أفضل الأسعار مع جودة عالية في الخدمة',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-400/30',
    },
    {
      icon: Headphones,
      title: 'دعم 24/7',
      description: 'خدمة عملاء متواصلة على مدار الساعة',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-400/30',
    },
  ];

  const testimonials = [
    {
      name: 'أحمد الشمري',
      role: 'مدير شركة استيراد',
      text: 'خدمة ممتازة واحترافية عالية. تعاملت معهم منذ سنوات ولم يخيبوا ظني أبداً. السرعة والدقة في العمل لا مثيل لها.',
      rating: 5,
    },
    {
      name: 'محمد العتيبي',
      role: 'رجل أعمال',
      text: 'فريق عمل متميز وخبرة طويلة في مجال التخليص الجمركي. أنجزوا معاملاتي بسرعة قياسية وبأسعار منافسة جداً.',
      rating: 5,
    },
    {
      name: 'فهد القحطاني',
      role: 'مدير لوجستيات',
      text: 'أفضل مؤسسة تخليص جمركي تعاملت معها. الشفافية والمتابعة اللحظية والتواصل المستمر يجعلها الخيار الأول.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen section-seamless">
      <Hero />

      {/* ========== من نحن - About ========== */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-sm font-medium text-green-300">من نحن</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                <span className="text-white">رواد صناعة</span>{' '}
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  التخليص الجمركي
                </span>{' '}
                <span className="text-white">في المملكة</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                مؤسسة <span className="text-green-400 font-bold">سليمان الحويطي للتخليص الجمركي والترانزيت</span> من
                أعرق المؤسسات المتخصصة في مجال التخليص الجمركي في المملكة العربية السعودية. نمتلك خبرة تمتد لأكثر من
                <span className="text-cyan-400 font-bold"> 15 عاماً </span>
                في تقديم خدمات تخليص جمركي احترافية تجمع بين السرعة والدقة والموثوقية.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                نفتخر بشبكة واسعة من الفروع تغطي أهم المنافذ البرية والبحرية والجوية في المملكة، مدعومة بفريق عمل
                متميز من الخبراء والمختصين الذين يعملون على مدار الساعة لإنجاز معاملات عملائنا بأعلى معايير الجودة.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-green-500/20 border border-green-400/30">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">رؤيتنا</h4>
                    <p className="text-sm text-gray-400">الريادة في خدمات التخليص الجمركي</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/30">
                    <Target className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">رسالتنا</h4>
                    <p className="text-sm text-gray-400">تقديم خدمة متميزة بكل احترافية</p>
                  </div>
                </div>
              </div>

              <Link
                to="/why-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105"
              >
                <span>تعرف علينا أكثر</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>

            {/* Visual side - Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md border border-green-400/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-500">
                  <Award className="w-10 h-10 text-green-400 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm text-green-300">سنة خبرة</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-500">
                  <Users className="w-10 h-10 text-cyan-400 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">2000+</div>
                  <div className="text-sm text-cyan-300">عميل راضٍ</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md border border-purple-400/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-500">
                  <Package className="w-10 h-10 text-purple-400 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">80K+</div>
                  <div className="text-sm text-purple-300">معاملة مكتملة</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-md border border-orange-400/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-500">
                  <MapPin className="w-10 h-10 text-orange-400 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">9</div>
                  <div className="text-sm text-orange-300">فروع ومواقع</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== الخدمات المميزة ========== */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 mb-4">
              <Briefcase className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium text-purple-300">خدماتنا المميزة</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              حلول شاملة <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">لجميع احتياجاتك</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نقدم باقة متكاملة من الخدمات اللوجستية والجمركية المصممة لتلبية جميع متطلبات عملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-500 hover:scale-105 hover:border-white/30 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              <span>عرض جميع الخدمات</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== مراحل العمل ========== */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 mb-4">
              <Target className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-300">آلية العمل</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              كيف <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">نعمل؟</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              منهجية عمل واضحة ومنظمة لضمان إنجاز معاملاتك بكل سهولة وسرعة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-500/5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <span className="text-5xl font-black bg-gradient-to-br from-cyan-400/30 to-blue-400/30 bg-clip-text text-transparent">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== لماذا تختارنا - المميزات ========== */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 mb-4">
              <Star className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-medium text-amber-300">لماذا تختارنا؟</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              مميزات تجعلنا <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">الخيار الأفضل</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نتميز بمجموعة من المزايا التنافسية التي تجعلنا الخيار المفضل لعملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`${feature.bg} backdrop-blur-md border rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/10 group-hover:scale-110 transition-transform duration-500">
                      <Icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== آراء العملاء ========== */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-sm border border-rose-400/30 mb-4">
              <MessageCircle className="w-4 h-4 text-rose-300" />
              <span className="text-sm font-medium text-rose-300">آراء عملائنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ماذا يقول <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">عملاؤنا</span> عنا؟
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              شهادات حقيقية من عملائنا الكرام تعكس جودة خدماتنا والتزامنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-rose-400/30 hover:bg-rose-500/5 group"
              >
                <Quote className="absolute top-4 left-4 w-10 h-10 text-rose-400/20 group-hover:text-rose-400/40 transition-colors" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm">{t.text}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Section Navigation Cards ========== */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              استكشف أقسام <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">الموقع</span>
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

                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA Section ========== */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-cyan-600/20 backdrop-blur-xl border border-green-400/30 p-8 md:p-16">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Headphones className="w-4 h-4 text-green-300" />
                <span className="text-sm font-medium text-green-200">تواصل معنا اليوم</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                هل تحتاج إلى خدمات{' '}
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  تخليص جمركي احترافية؟
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                فريقنا المتخصص جاهز لمساعدتك على مدار الساعة. احصل على استشارة مجانية واكتشف كيف يمكننا
                تسهيل إجراءاتك الجمركية.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>تواصل معنا الآن</span>
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl !bg-transparent !hover:bg-transparent border-2 border-cyan-400/50 hover:border-cyan-300 text-cyan-300 hover:text-cyan-100 font-semibold transition-all duration-300"
                >
                  <span>تصفح خدماتنا</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>

              <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-6 h-6 text-green-400" />
                  <div className="text-right">
                    <div className="text-sm text-gray-400">متاحون</div>
                    <div className="font-bold text-white">24/7</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  <div className="text-right">
                    <div className="text-sm text-gray-400">استشارة</div>
                    <div className="font-bold text-white">مجانية</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                  <div className="text-right">
                    <div className="text-sm text-gray-400">رد خلال</div>
                    <div className="font-bold text-white">15 دقيقة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}