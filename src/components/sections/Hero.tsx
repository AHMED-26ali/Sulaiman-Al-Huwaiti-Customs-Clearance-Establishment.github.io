import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Star, Zap, Shield, ChevronLeft, ChevronRight, Play, Pause, Maximize2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import ThreeBackground from '@/components/effects/ThreeBackground';

export default function Hero() {
  const images = [
    "https://i.pinimg.com/736x/10/00/a8/1000a89b5f57ba2118f823884f23dd01.jpg",
    "https://i.pinimg.com/736x/44/8b/87/448b879530978dd4dff3683357562267.jpg",
    "https://i.pinimg.com/736x/08/0b/f7/080bf7d23fe74366fbd7a0f93b3ebda1.jpg",
    "https://i.pinimg.com/736x/13/2d/87/132d87a87454d05f2970f127b806cd74.jpg",
    "https://i.pinimg.com/736x/8d/2c/0e/8d2c0ebb452eda5260c8e4c728bee04a.jpg",
    "https://i.pinimg.com/736x/69/e2/69/69e2696213e925c713b67a38dd796619.jpg",
    "https://i.pinimg.com/736x/39/54/09/395409b14b2ef732c1909231c6d6e60c.jpg",
    "https://i.pinimg.com/736x/72/14/1c/72141cd1f1de867d006bd74e64e40299.jpg",
    "https://i.pinimg.com/736x/96/b1/40/96b1401f36348d55779a1246f7b2a809.jpg",
    "https://i.pinimg.com/736x/17/73/f8/1773f8f358b2fb3360b67169dd536385.jpg",
    "https://i.pinimg.com/1200x/85/b5/96/85b5966c6b37f156b91335bac4262983.jpg",
    "https://i.pinimg.com/1200x/2f/8a/dc/2f8adc9602309ad71b5b90bfe1893257.jpg",
    "https://i.pinimg.com/1200x/53/cb/b2/53cbb26aefdc506c7d2d978e675be67e.jpg",
    "https://i.pinimg.com/1200x/b2/80/3a/b2803a9b719efca9dabbfed307c062a5.jpg",
    "https://i.pinimg.com/1200x/64/c5/ec/64c5ec9259622dbd7d2bc0036678b6ee.jpg",
    "https://i.pinimg.com/1200x/28/21/ac/2821ac050143da4ec61f6f0c75b0b2be.jpg",
    "https://i.pinimg.com/736x/e1/ad/29/e1ad29604916676e9afe96c0eb077d2d.jpg",
    "https://i.pinimg.com/736x/e0/45/c7/e045c7ee2b3c886016db8f5c89721390.jpg",
    "https://i.pinimg.com/1200x/9d/57/47/9d5747c43997b50774de8b6ec450adfa.jpg",
    "https://i.pinimg.com/736x/24/9b/cf/249bcf9ebf45f49f79f10d462cc3a0b4.jpg",
    "https://i.pinimg.com/736x/31/be/b4/31beb43bc4f4fe6858df36de2c7acde9.jpg",
    "https://i.pinimg.com/736x/7f/19/fd/7f19fd90ee55a370e0b552886a445838.jpg",
    "https://i.pinimg.com/736x/dc/4b/4f/dc4b4fd304c9f371d9e281824c556908.jpg",
    "https://i.pinimg.com/736x/0b/b4/93/0bb493c3bf38e9c8232c4e6fc9049a5e.jpg",
    "https://i.pinimg.com/736x/5a/30/09/5a30091f054b60f3a930b756112efa5e.jpg",
    "https://i.pinimg.com/736x/a3/63/8b/a3638b705ae5dfa35b31284a93f71b60.jpg",
    "https://i.pinimg.com/736x/20/bb/c7/20bbc710cbc1cefa3250dc8dede0195d.jpg",
    "https://i.pinimg.com/1200x/8d/3c/10/8d3c10fb9dd41480a09f5baa50dc8a66.jpg",
    "https://i.pinimg.com/736x/1e/d0/d4/1ed0d47c5174794d97d5cf4ffe8e759a.jpg",
    "https://i.pinimg.com/736x/52/fa/1e/52fa1e5af83f30d9f8b3abaef66da4ec.jpg",
    "https://i.pinimg.com/1200x/ab/22/b2/ab22b29f59135071c31a7a58fe7e543d.jpg",
    "https://i.pinimg.com/736x/b1/06/86/b1068640d04e24604769dc6130f21189.jpg",
    "https://i.pinimg.com/1200x/14/7f/d0/147fd06865daf64022dc1a12ad9120c9.jpg",
    "https://i.pinimg.com/736x/20/90/2b/20902b5703c6e31aed23870a0f343054.jpg",
    "https://i.pinimg.com/736x/96/e5/f8/96e5f8db92e2962cd7745c3f49cdabb6.jpg",
    "https://i.pinimg.com/1200x/62/bd/01/62bd01ef13bd46b44a5309afa93a9e9f.jpg",
    "https://i.pinimg.com/736x/36/10/a4/3610a4a3335963ee54500b3ad0b90529.jpg",
    "https://i.pinimg.com/736x/3f/73/fa/3f73fa178153a88f089985e42ae98830.jpg",
    "https://i.pinimg.com/736x/a9/5f/e6/a95fe6bf1291eaca742fff2029ae096a.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Auto-play
  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, lightboxOpen, images.length]);

  // Scroll thumbnails to active (horizontal only, without affecting page scroll)
  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const activeThumb = container.querySelector(`[data-index="${currentIndex}"]`) as HTMLElement;
      if (activeThumb) {
        // Calculate horizontal scroll position manually to avoid affecting page scroll
        const containerRect = container.getBoundingClientRect();
        const thumbRect = activeThumb.getBoundingClientRect();
        const offset =
          thumbRect.left -
          containerRect.left -
          containerRect.width / 2 +
          thumbRect.width / 2;
        container.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handleNext();
      if (e.key === 'ArrowRight') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setDirection(idx > currentIndex ? 'next' : 'prev');
    setCurrentIndex(idx);
  };

  // Compute side images (prev/next) for 3D coverflow effect
  const prevIdx = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIdx = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <section id="home" className="min-h-screen text-white relative overflow-hidden pt-16 section-transparent">
      <ThreeBackground enabled={true} />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Content - Left side (2/5) */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-300">رواد التخليص الجمركي في السعودية</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-right">
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

          {/* Professional Image Gallery - Right side (3/5) */}
          <div className="lg:col-span-3 animate-fade-in-left">
            <div className="relative w-full max-w-2xl mx-auto" dir="ltr">
              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-60 animate-pulse"></div>

              {/* Main showcase - 3D coverflow */}
              <div className="relative h-[440px] md:h-[520px] flex items-center justify-center perspective-1000">
                {/* Previous image (side) */}
                <button
                  onClick={handlePrev}
                  className="absolute left-0 md:left-4 w-[28%] h-[70%] rounded-2xl overflow-hidden opacity-40 hover:opacity-70 transition-all duration-500 cursor-pointer group z-10"
                  style={{
                    transform: 'perspective(1200px) rotateY(25deg) translateX(-10%) scale(0.85)',
                    filter: 'blur(1px) brightness(0.6)',
                  }}
                  aria-label="الصورة السابقة"
                >
                  <img
                    src={images[prevIdx]}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </button>

                {/* Main image */}
                <div className="relative w-[60%] h-full z-20 group">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/20 ring-offset-4 ring-offset-transparent">
                    {/* Frame gradient border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/40 via-green-400/40 to-purple-400/40 p-[2px]">
                      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
                        <img
                          key={currentIndex}
                          src={images[currentIndex]}
                          alt={`خدمات التخليص الجمركي - صورة ${currentIndex + 1}`}
                          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                            direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                          }`}
                          loading={currentIndex < 3 ? 'eager' : 'lazy'}
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none"></div>

                        {/* Top badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                          <span className="text-xs font-bold text-white tracking-wider">
                            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Fullscreen button */}
                        <button
                          onClick={() => setLightboxOpen(true)}
                          className="absolute top-4 left-4 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                          aria-label="عرض بالحجم الكامل"
                        >
                          <Maximize2 className="w-4 h-4 text-white" />
                        </button>

                        {/* Bottom info */}
                        <div className="absolute bottom-0 left-0 right-0 p-5" dir="rtl">
                          <div className="flex items-end justify-between gap-3">
                            <div>
                              <p className="text-xs text-cyan-300 font-medium mb-1 tracking-wider">معرض</p>
                              <h3 className="text-base md:text-lg font-bold text-white">
                                خدمات التخليص الجمركي والترانزيت
                              </h3>
                            </div>
                            <button
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="flex-shrink-0 p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                              aria-label={isPlaying ? 'إيقاف' : 'تشغيل'}
                            >
                              {isPlaying ? (
                                <Pause className="w-4 h-4 text-white" />
                              ) : (
                                <Play className="w-4 h-4 text-white" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                          <div
                            key={currentIndex}
                            className="h-full bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400"
                            style={{
                              animation: isPlaying ? 'progress 4s linear' : 'none',
                              width: isPlaying ? '100%' : `${((currentIndex + 1) / images.length) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next image (side) */}
                <button
                  onClick={handleNext}
                  className="absolute right-0 md:right-4 w-[28%] h-[70%] rounded-2xl overflow-hidden opacity-40 hover:opacity-70 transition-all duration-500 cursor-pointer group z-10"
                  style={{
                    transform: 'perspective(1200px) rotateY(-25deg) translateX(10%) scale(0.85)',
                    filter: 'blur(1px) brightness(0.6)',
                  }}
                  aria-label="الصورة التالية"
                >
                  <img
                    src={images[nextIdx]}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
                </button>

                {/* Nav arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:-left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                  aria-label="السابق"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:-right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                  aria-label="التالي"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-300" />
                </button>
              </div>

              {/* Thumbnails strip */}
              <div
                ref={thumbnailsRef}
                dir="ltr"
                className="mt-6 flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-1"
                style={{ scrollbarWidth: 'none' }}
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    data-index={idx}
                    onClick={() => goTo(idx)}
                    className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-500 ${
                      idx === currentIndex
                        ? 'w-20 h-16 ring-2 ring-cyan-400 ring-offset-2 ring-offset-transparent scale-110 shadow-lg shadow-cyan-500/50'
                        : 'w-16 h-14 opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    aria-label={`عرض الصورة ${idx + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                    {idx === currentIndex && (
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Dot indicators (first 8 for compactness) */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {images.slice(0, Math.min(images.length, 10)).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === currentIndex % 10
                        ? 'w-8 bg-gradient-to-r from-cyan-400 to-green-400'
                        : 'w-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`الصورة ${idx + 1}`}
                  />
                ))}
                {images.length > 10 && (
                  <span className="text-xs text-white/50 mr-2">+{images.length - 10}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 z-10"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 z-10"
            aria-label="السابق"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 z-10"
            aria-label="التالي"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>

          <div
            className="relative max-w-6xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`صورة ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20">
              <span className="text-sm font-bold text-white">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
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
        .perspective-1000 { perspective: 1200px; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
