import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { ArrowLeft, Star, Zap, Shield, ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// Lazy loading للـ ThreeBackground
const ThreeBackground = lazy(() => import('@/components/effects/ThreeBackground'));

interface GalleryItem {
  url: string;
  title: string;
  category: string;
  desc: string;
  tag: string;
}

const images: GalleryItem[] = [
  {
    url: "https://i.pinimg.com/236x/c6/b4/7d/c6b47d402669f4e2b3151f00e443f500.jpg",
    title: "شحن وتفريغ الحاويات البحرية",
    category: "الموانئ والشحن البحري",
    desc: "مناولة احترافية وتخليص فوري للبضائع بميناء ضبا وميناء جدة الإسلامي وميناء الدمام",
    tag: "شحن بحري",
  },
  {
    url: "https://i.pinimg.com/236x/92/ad/16/92ad162aa3532505cd8c58ff678e65f4.jpg",
    title: "أسطول الترانزيت والنقل الدولي",
    category: "النقل والترانزيت الدولي",
    desc: "شاحنات حديثة ومجهزة لنقل البضائع العابرة للحدود بأمان وسرعة فائقة",
    tag: "ترانزيت دولي",
  },
  {
    url: "https://i.pinimg.com/236x/37/ed/b4/37edb45c6bbb6b6bf286b31745ffb3ff.jpg",
    title: "فسح جمركي إلكتروني فوري",
    category: "التخليص الجمركي الفوري",
    desc: "دقة وسرعة في استخراج أذونات الفسح الجمركي وتدقيق الوثائق عبر منصة سابر وفسح",
    tag: "فسح فوري",
  },
  {
    url: "https://i.pinimg.com/236x/07/a5/bc/07a5bc3bc6d4afdcc406e7c6077cec72.jpg",
    title: "المنافذ الحدودية والمستودعات",
    category: "المنافذ واللوجستيات",
    desc: "تواجد دائم في المنافذ البرية الحيوية (البطحاء، الحديثة، والدرة) على مدار الساعة",
    tag: "منافذ برية",
  },
  {
    url: "https://i.pinimg.com/236x/e3/4a/94/e34a94f99a52db11dc9fe05b4ad098c6.jpg",
    title: "إدارة سلاسل الإمداد ومشاريع نيوم",
    category: "الخدمات اللوجستية المتكاملة",
    desc: "حلول تخليص وترانزيت استراتيجية تدعم مشاريع رؤية 2030 ومنطقة نيوم الكبرى",
    tag: "مشاريع نيوم",
  },
];

// دالة مساعدة للحصول على حجم الصورة المناسب حسب الجهاز
const getImageSize = (url: string, size: 'thumb' | 'side' | 'main' | 'full', isMobile: boolean) => {
  const sizeMap = isMobile 
    ? { thumb: '75x', side: '150x', main: '236x', full: '400x' }  // أحجام أصغر للموبايل
    : { thumb: '150x', side: '236x', main: '400x', full: '736x' }; // أحجام عادية للديسكتوب
  return url.replace(/\/\d+x\//, `/${sizeMap[size]}/`);
};

// Hook للكشف عن الجهاز دون التسبب في إعادة تدفق إلزامي (Forced Reflow)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 767px)').matches || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false;
  });
  
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  
  return isMobile;
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handleNext();
      if (e.key === 'ArrowRight') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen]);

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goTo = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 'next' : 'prev');
    setCurrentIndex(idx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="home" className="min-h-screen text-white relative overflow-hidden pt-16 section-transparent">
      {/* تعطيل ThreeBackground على الموبايل لتوفير الأداء */}
      {!isMobile && (
        <Suspense fallback={null}>
          <ThreeBackground enabled={true} />
        </Suspense>
      )}

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-300">رواد التخليص الجمركي في السعودية</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-normal text-center lg:text-right">
                <span className="block text-white mb-2">سليمان الحويطي</span>
                <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center lg:text-right">
                نقدم خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية في جميع أنحاء المملكة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm rounded-xl p-3 hover:bg-blue-500/20 transition-all duration-300 border border-blue-400/20">
                  <Star className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm">خبرة +15 سنة</span>
                </div>
                <div className="flex items-center gap-3 bg-purple-500/10 backdrop-blur-sm rounded-xl p-3 hover:bg-purple-500/20 transition-all duration-300 border border-purple-400/20">
                  <Zap className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm">خدمة 24/7</span>
                </div>
                <div className="flex items-center gap-3 bg-orange-500/10 backdrop-blur-sm rounded-xl p-3 hover:bg-orange-500/20 transition-all duration-300 border border-orange-400/20">
                  <Shield className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm">موثوقية عالية</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105"
                onClick={() => navigate('/services')}
              >
                <span className="flex items-center">
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-3 h-5 w-5" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="!bg-transparent !hover:bg-transparent border-2 border-cyan-400/50 hover:border-cyan-300 text-cyan-300 hover:text-cyan-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                تواصل معنا
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 animate-fade-in-left">
            <div 
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-[440px] mx-auto flex flex-col items-center select-none" 
              dir="ltr"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* إطار العرض الرئيسي بنسبة 3:4 (Portrait Aspect Ratio) */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/20 bg-slate-950 group">
                {/* خلفية جمالية متوهجة */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>

                {/* الصورة المعروضة بجودة عالية وترانزيشن هادئ */}
                <img
                  key={currentIndex}
                  src={getImageSize(images[currentIndex].url, 'main', isMobile)}
                  alt={images[currentIndex].title}
                  width={isMobile ? 236 : 400}
                  height={isMobile ? 315 : 533}
                  className="relative w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 animate-fade-in"
                  loading={currentIndex === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
                />

                {/* تدرج لوني سينمائي لحماية وضوح النصوص */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/40 pointer-events-none"></div>

                {/* شريط الإجراءات العلوي المدمج (Glass Header Overlay) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
                  {/* أزرار التحكم والخيارات */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="p-2.5 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-300 transition-all duration-300 shadow-md"
                      aria-label="عرض بالحجم الكامل"
                      title="تكبير الصورة ملء الشاشة"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2.5 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-emerald-400/50 text-white hover:text-emerald-300 transition-all duration-300 shadow-md"
                      aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل تلقائي'}
                      title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل العرض التلقائي'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* شارة التوثيق والترقيم */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/20 shadow-md">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-xs font-bold text-white tracking-wider font-mono">
                      {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* أزرار التنقل السلس الجانبية */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-white/20 hover:bg-emerald-500/20 hover:border-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center text-white hover:text-emerald-300 opacity-80 group-hover:opacity-100 shadow-lg"
                  aria-label="الصورة السابقة"
                  title="السابق"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center text-white hover:text-cyan-300 opacity-80 group-hover:opacity-100 shadow-lg"
                  aria-label="الصورة التالية"
                  title="التالي"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* لوحة المعلومات السفلية المدمجة (Bottom Info Overlay) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20" dir="rtl">
                  <div className="space-y-1.5 mb-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>{images[currentIndex].category}</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-white drop-shadow-md leading-tight">
                      {images[currentIndex].title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-300 line-clamp-2 leading-relaxed">
                      {images[currentIndex].desc}
                    </p>
                  </div>

                  {/* شريط التقدم الزمني المقسم (Segmented Progress Bars) */}
                  <div className="grid grid-cols-5 gap-1.5 pt-2">
                    {images.map((_, idx) => {
                      const isActive = idx === currentIndex;
                      const isPassed = idx < currentIndex;
                      return (
                        <div
                          key={idx}
                          onClick={() => goTo(idx)}
                          className="h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer transition-all duration-300 hover:h-2"
                          title={`الانتقال إلى ${images[idx].tag}`}
                        >
                          <div
                            className={`h-full transition-all duration-300 ${
                              isActive
                                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                                : isPassed
                                ? 'bg-emerald-400/70'
                                : 'bg-transparent'
                            }`}
                            style={{
                              width: isActive ? (isPlaying ? '100%' : '100%') : isPassed ? '100%' : '0%',
                              animation: isActive && isPlaying ? 'progress 4.5s linear' : 'none',
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* شريط توثيق واعتماد المؤسسة في الأسفل */}
              <div 
                className="mt-4 w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-lg" 
                dir="rtl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">ترخيص رسمي معتمد للتخليص والترانزيت</p>
                    <p className="text-[11px] text-gray-400">تغطية مباشرة لموانئ ضبا، جدة، نيوم وكافة منافذ المملكة</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>فسح جمركي فوري</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-emerald-500/20 transition-all duration-300 border border-emerald-400/30 hover:scale-105 hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">2000+</div>
            <div className="text-sm font-medium text-gray-300">عميل راضي</div>
          </div>
          <div className="text-center bg-violet-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-violet-500/20 transition-all duration-300 border border-violet-400/30 hover:scale-105 hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">80000+</div>
            <div className="text-sm font-medium text-gray-300">معاملة مكتملة</div>
          </div>
          <div className="text-center bg-amber-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-amber-500/20 transition-all duration-300 border border-amber-400/30 hover:scale-105 hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">9</div>
            <div className="text-sm font-medium text-gray-300">فروع ومواقع</div>
          </div>
          <div className="text-center bg-rose-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-rose-500/20 transition-all duration-300 border border-rose-400/30 hover:scale-105 hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-sm font-medium text-gray-300">سنة خبرة</div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          {/* رأس النافذة المنبثقة */}
          <div className="w-full flex items-center justify-between z-20" dir="rtl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                {images[currentIndex].category}
              </span>
              <span className="text-sm font-bold text-white font-mono">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/25 transition-all duration-300 text-white"
              aria-label="إغلاق"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* أزرار التنقل بالصورة الكبيرة */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/25 hover:scale-110 active:scale-95 transition-all duration-300 z-20 text-white"
            aria-label="السابق"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/25 hover:scale-110 active:scale-95 transition-all duration-300 z-20 text-white"
            aria-label="التالي"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>

          {/* مساحة الصورة الكبيرة والتفاصيل */}
          <div
            className="relative max-w-5xl max-h-[68vh] w-full flex flex-col items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getImageSize(images[currentIndex].url, 'full', isMobile)}
              alt={images[currentIndex].title}
              className="max-w-full max-h-[60vh] object-contain rounded-2xl shadow-2xl ring-1 ring-white/20"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-4 text-center max-w-2xl px-4" dir="rtl">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                {images[currentIndex].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                {images[currentIndex].desc}
              </p>
            </div>
          </div>

          {/* شريط المصغرات السريع داخل النافذة المنبثقة */}
          <div 
            className="w-full max-w-lg flex items-center justify-center gap-2 py-2 px-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 z-20"
            dir="rtl"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'ring-2 ring-emerald-400 scale-105 shadow-md shadow-emerald-500/30 opacity-100' 
                    : 'opacity-40 hover:opacity-80'
                }`}
                title={img.title}
              >
                <img src={getImageSize(img.url, 'thumb', isMobile)} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </section>
  );
}
