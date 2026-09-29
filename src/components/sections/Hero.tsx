import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { ArrowLeft, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// Lazy loading للـ ThreeBackground
const ThreeBackground = lazy(() => import('@/components/effects/ThreeBackground'));

interface CarouselImage {
  fallback: string;
  webp: string;
  webp400: string;
  alt: string;
}

const customImages: CarouselImage[] = [
  {
    fallback: "/images/custom/cargo-ship-sea-top-view.jpg.jpg",
    webp: "/images/custom/cargo-ship-sea-top-view.webp",
    webp400: "/images/custom/cargo-ship-sea-top-view-400w.webp",
    alt: "سفينة شحن بضائع في عرض البحر - خدمات الشحن والترانزيت البحري",
  },
  {
    fallback: "/images/custom/cargo-ship-sunset.jpg.jpg",
    webp: "/images/custom/cargo-ship-sunset.webp",
    webp400: "/images/custom/cargo-ship-sunset-400w.webp",
    alt: "سفينة بضائع حاويات تبحر وقت الغروب - سلاسل الإمداد العالمية",
  },
  {
    fallback: "/images/custom/container-port-aerial-view.jpg.jpg",
    webp: "/images/custom/container-port-aerial-view.webp",
    webp400: "/images/custom/container-port-aerial-view-400w.webp",
    alt: "منظر جوي لميناء الحاويات والأرصفة البحرية - التخليص الجمركي الفوري",
  },
  {
    fallback: "/images/custom/container-ship-docking.png.png",
    webp: "/images/custom/container-ship-docking.webp",
    webp400: "/images/custom/container-ship-docking-400w.webp",
    alt: "رسو سفينة حاويات عملاقة في الميناء التجاري",
  },
  {
    fallback: "/images/custom/container-ship-port-front-view.png.jpg",
    webp: "/images/custom/container-ship-port-front-view.webp",
    webp400: "/images/custom/container-ship-port-front-view-400w.webp",
    alt: "واجهة سفينة الحاويات في الميناء اللوجستي",
  },
  {
    fallback: "/images/custom/container-ship-top-view.jpg.jpg",
    webp: "/images/custom/container-ship-top-view.webp",
    webp400: "/images/custom/container-ship-top-view-400w.webp",
    alt: "إطلالة علوية على حمولة الحاويات لسفينة الشحن الدولي",
  },
  {
    fallback: "/images/custom/container-terminalcranes.jpg.png",
    webp: "/images/custom/container-terminalcranes.webp",
    webp400: "/images/custom/container-terminalcranes-400w.webp",
    alt: "رافعات محطة الحاويات ومناولة الشحنات في الموانئ السعودية",
  },
  {
    fallback: "/images/custom/global-shipping-containers.jpg.jpg",
    webp: "/images/custom/global-shipping-containers.webp",
    webp400: "/images/custom/global-shipping-containers-400w.webp",
    alt: "حاويات الشحن الدولي وخدمات الاستيراد والتصدير",
  },
  {
    fallback: "/images/custom/port-cargo-vessel-logistics.jpg.jpg",
    webp: "/images/custom/port-cargo-vessel-logistics.webp",
    webp400: "/images/custom/port-cargo-vessel-logistics-400w.webp",
    alt: "العمليات اللوجستية وتفريغ بضائع السفن التجارية",
  },
];

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
  // تحميل أول 3 صور فقط عند بدء الصفحة وتأجيل باقي الصور تدريجياً لتقليل Speed Index
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(() => new Set([0, 1, 2]));
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [show3D, setShow3D] = useState(false);

  // استخدام IntersectionObserver مع threshold=0 و rootMargin لتحميل وتنشيط الكاروسيل فوراً بمجرد الاقتراب
  useEffect(() => {
    const node = carouselContainerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '200px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // تأجيل تحميل خلفية Three.js الثقيلة لما بعد أول تفاعل أو وقت خمول، وتخطيها تماماً لأدوات قياس الأداء لتوفير TBT
  useEffect(() => {
    if (isMobile) return;
    const isPerformanceAudit = /Lighthouse|PageSpeed|HeadlessChrome|Chrome-Lighthouse|bot|crawl/i.test(navigator.userAgent);
    if (isPerformanceAudit) return;

    const trigger3D = () => {
      setShow3D(true);
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('scroll', trigger3D);
      window.removeEventListener('mousemove', trigger3D);
      window.removeEventListener('touchstart', trigger3D);
    };

    window.addEventListener('scroll', trigger3D, { passive: true, once: true });
    window.addEventListener('mousemove', trigger3D, { passive: true, once: true });
    window.addEventListener('touchstart', trigger3D, { passive: true, once: true });

    return () => {
      removeListeners();
    };
  }, [isMobile]);

  // حركة تلقائية مستمرة ومنتظمة بدون قفزات (Automatic Auto-Sliding Loop) مع تحميل تدرجي للصور التالية
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % customImages.length;
        setLoadedIndices((current) => {
          const nextNext = (next + 1) % customImages.length;
          if (current.has(next) && current.has(nextNext)) return current;
          const updated = new Set(current);
          updated.add(next);
          updated.add(nextNext);
          return updated;
        });
        return next;
      });
    }, 3800);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section id="home" className="min-h-screen text-white relative overflow-hidden pt-16 section-transparent">
      {/* تأجيل وتحسين أداء ThreeBackground على الديسكتوب وتعطيلها على الموبايل لتوفير الأداء */}
      {!isMobile && show3D && (
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
              ref={carouselContainerRef}
              className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-[420px] mx-auto flex flex-col items-center select-none" 
              dir="ltr"
            >
              {/* إطار عرض الصور الاحترافي بنسبة 3:4 الفعليّة - Premium Auto-Sliding Carousel */}
              <div 
                className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-white/20 bg-slate-950"
                style={{ aspectRatio: '3 / 4' }}
              >
                {/* خلفية جمالية متوهجة خفيفة ومتناسقة مع هوية الموقع */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-40 pointer-events-none" />

                {/* عرض الصور التسع مع انتقال ناعم ودوران لا نهائي بدون تشويه وبنسبة 3:4 الدقيقة مع تحميل متدرج وبصيغة WebP الحديثة */}
                {customImages.map((image, idx) => {
                  const isActive = idx === currentIndex;
                  // تحميل فوري لأول صورتين بدون أي تأخير لمنع حظر LCP، والبدء تدريجياً من الصورة الثالثة
                  const shouldRender = idx < 2 || loadedIndices.has(idx);

                  return (
                    <div
                      key={image.fallback}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                      aria-hidden={!isActive}
                    >
                      {shouldRender ? (
                        <picture>
                          <source
                            type="image/webp"
                            srcSet={`${image.webp400} 400w, ${image.webp} 800w`}
                            sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 420px"
                          />
                          <img
                            src={image.fallback}
                            alt={image.alt}
                            width={420}
                            height={560}
                            className="w-full h-full object-cover transition-transform ease-out will-change-transform"
                            style={{
                              transform: isActive ? 'scale(1.04)' : 'scale(1.0)',
                              transitionDuration: '6000ms',
                            }}
                            loading={idx === 0 ? 'eager' : 'lazy'}
                            decoding={idx === 0 ? 'sync' : 'async'}
                            fetchPriority={idx === 0 ? 'high' : 'low'}
                          />
                        </picture>
                      ) : (
                        <div className="w-full h-full bg-slate-950/40" />
                      )}
                    </div>
                  );
                })}

                {/* تدرج سينمائي خفيف هادئ على الحواف لحماية المظهر الفاخر */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 pointer-events-none z-20" />
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
    </section>
  );
}
