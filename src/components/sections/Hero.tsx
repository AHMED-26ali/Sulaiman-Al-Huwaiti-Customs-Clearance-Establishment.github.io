// في الجزء الخاص بالـ gallery، هنشيل الـ side images ونخلي الصورة الرئيسية بس

<div className="relative w-full max-w-3xl mx-auto" dir="ltr">
  {/* Background glow */}
  <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-60 animate-pulse"></div>

  {/* Main image only - من غير صور جانبية */}
  <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
    <div className="relative w-full max-w-2xl z-20 group">
      <div className="rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/20">
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
          <img
            key={currentIndex}
            src={getImageSize(images[currentIndex], 'main')}
            alt={`خدمات التخليص الجمركي - صورة ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-700 ease-out"
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={currentIndex === 0 ? 'high' : 'auto'}
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
                <h2 className="text-base md:text-lg font-bold text-white">
                  خدمات التخليص الجمركي والترانزيت
                </h2>
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

    {/* Navigation arrows */}
    <button
      onClick={handlePrev}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="السابق"
    >
      <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-300" />
    </button>
    <button
      onClick={handleNext}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="التالي"
    >
      <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-300" />
    </button>
  </div>

  {/* Thumbnails strip - موجود زي ما هو */}
  <div
    ref={thumbnailsRef}
    dir="ltr"
    className="mt-6 flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-1 justify-center"
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
        <img 
          src={getImageSize(img, 'thumb')}
          alt="" 
          className="w-full h-full object-cover" 
          loading="lazy"
          decoding="async"
          width={80}
          height={64}
        />
        {idx === currentIndex && (
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent"></div>
        )}
      </button>
    ))}
  </div>

  {/* Dot indicators */}
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
