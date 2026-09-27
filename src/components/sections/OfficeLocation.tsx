import { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Clock, 
  Phone, 
  Mail, 
  Building2, 
  Copy, 
  Check, 
  Compass, 
  Car, 
  ShieldCheck, 
  MessageCircle,
  Share2
} from 'lucide-react';

interface OfficeLocationProps {
  className?: string;
  showTitle?: boolean;
}

export default function OfficeLocation({ className = '', showTitle = true }: OfficeLocationProps) {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const plusCode = '8PX4+PRC';
  const fullAddress = '8PX4+PRC، طريق الملك عبدالعزيز (بجوار شركة البسام للشحن)، ضبا 49312، المملكة العربية السعودية';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=8PX4%2BPRC%D8%8C%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%85%D9%84%D9%83%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D8%8C%20%D8%B6%D8%A8%D8%A7%2049312';
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=8PX4%2BPRC%D8%8C%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%85%D9%84%D9%83%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D8%8C%20%D8%B6%D8%A8%D8%A7%2049312';
  const embedMapUrl = 'https://maps.google.com/maps?q=8PX4%2BPRC%D8%8C%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D9%85%D9%84%D9%83%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D8%8C%20%D8%B6%D8%A8%D8%A7%2049312&hl=ar&z=16&output=embed';

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="office-location" className={`relative py-16 md:py-24 text-white overflow-hidden ${className}`} dir="rtl">
      {/* تأثيرات إضاءة خلفية احترافية */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4 shadow-sm">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>مقرنا الرئيسي في ضبا - بوابة نيوم</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              موقع المكتب على <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">الخريطة</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              يسعدنا استقبالكم في مقر مؤسسة سليمان الحويطي الرئيسي بمحافظة ضبا، الواقع على طريق الملك عبدالعزيز الحيوي بالقرب من الميناء.
            </p>
          </div>
        )}

        {/* كرت الحاوية الرئيسي الفاخر */}
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/95 border border-cyan-500/20 hover:border-cyan-500/40 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl transition-all duration-500 relative overflow-hidden">
          {/* إشعاع علوي خفيف */}
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* ===================== الجانب الأيمن: الخريطة التفاعلية ===================== */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 min-h-[380px] md:min-h-[460px] flex-grow">
                {/* الإطار المضمن للخريطة */}
                <iframe
                  title="موقع مكتب مؤسسة سليمان الحويطي للتخليص الجمركي"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[380px] md:min-h-[460px] border-0"
                  style={{ filter: 'contrast(1.05) saturate(1.15)' }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                {/* شريط معلومات يطفو فوق الخريطة */}
                <div className="absolute top-3 right-3 left-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                  <div className="bg-slate-950/85 backdrop-blur-md border border-cyan-400/30 text-white text-xs px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg pointer-events-auto">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-semibold text-cyan-200">المقر الرئيسي - ضبا</span>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900/90 hover:bg-cyan-600/90 text-white text-xs px-3 py-1.5 rounded-xl border border-white/20 transition-all flex items-center gap-1.5 shadow-lg pointer-events-auto cursor-pointer"
                  >
                    <span>فتح ملء الشاشة</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* شارة الرمز الجغرافي السريع (Plus Code) في أسفل الخريطة */}
                <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-xs flex items-center gap-2 shadow-lg">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-gray-300">الرمز الجغرافي:</span>
                  <span className="font-mono text-cyan-300 font-bold" dir="ltr">{plusCode}</span>
                </div>
              </div>

              {/* أزرار سريعة أسفل الخريطة */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>بدء الاتجاهات والملاحة للمكتب (GPS)</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/15 text-gray-200 hover:text-white font-semibold py-3 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-all border border-white/10 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>فتح في تطبيق خرائط Google</span>
                </a>
              </div>
            </div>

            {/* ===================== الجانب الأيسر: تفاصيل المقر والوصول ===================== */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                {/* اسم المؤسسة وشارة الاعتماد */}
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>مؤسسة مرخصة ومعتمدة من هيئة الزكاة والضريبة والجمارك</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  مؤسسة سليمان الحويطي للتخليص الجمركي
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                  مقرنا مجهز بكافة الوسائل التقنية وفريق عمل ميداني متخصص لخدمتكم ومتابعة كافة العمليات الجمركية والترانزيت لحظة بلحظة.
                </p>

                {/* كروت تفاصيل العنوان وبيانات الوصول */}
                <div className="space-y-3">
                  {/* العنوان الوطني المعتمد */}
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 flex-shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs text-gray-400 font-medium mb-1">العنوان الوطني الدقيق:</div>
                        <p className="text-sm font-semibold text-white leading-snug">
                          طريق الملك عبدالعزيز (بجوار شركة البسام للشحن)، ضبا 49312، المملكة العربية السعودية
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={handleCopyAddress}
                            className="text-xs text-cyan-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            {copiedAddress ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">تم نسخ العنوان!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>نسخ العنوان</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* الرمز الجغرافي Plus Code */}
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
                          <Compass className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 font-medium">الرمز الجغرافي المباشر (Plus Code):</div>
                          <div className="text-sm font-bold text-white font-mono" dir="ltr">
                            {plusCode}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={handleCopyPlusCode}
                        className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white text-xs flex items-center gap-1 transition-all cursor-pointer"
                        title="نسخ الرمز الجغرافي للبحث الفوري في الخرائط"
                      >
                        {copiedPlusCode ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">تم النسخ</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>نسخ الرمز</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* مميزات الموقع وسهولة الوصول */}
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-300 mb-2">
                      <Car className="w-4 h-4 text-cyan-400" />
                      <span>معلومات وسهولة الوصول:</span>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-1.5 pr-1">
                      <li className="flex items-center gap-2 text-white font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span className="bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-500/20">
                          معلم مميز: بجوار شركة البسام للشحن مباشرةً
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>موقع استراتيجي على طريق الملك عبدالعزيز التجاري الرئيسي.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>قريب جداً من ميناء ضبا التجاري وبوابة مشاريع نيوم.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>تتوفر مواقف سيارات مخصصة لراحة المراجعين والعملاء.</span>
                      </li>
                    </ul>
                  </div>

                  {/* ساعات العمل */}
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">ساعات عمل المكتب واستقبال الطلبات:</div>
                      <p className="text-xs text-white font-semibold mt-0.5 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                        <span>24 ساعة على مدار الأسبوع (طوال أيام الأسبوع 24/7)</span>
                      </p>
                      <p className="text-[11px] text-cyan-300 mt-1">
                        * خدمات واستشارات التخليص الجمركي واستقبال المعاملات على مدار الساعة دون توقف.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* أزرار الاتصال والتواصل المباشر مع فرع ضبا */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/966559586786?text=${encodeURIComponent('السلام عليكم، أرغب في استفسار أو طلب استشارة جمركية')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-emerald-500/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل عبر واتساب المكتب</span>
                </a>

                <a
                  href="tel:+966559586786"
                  className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl text-xs md:text-sm flex items-center justify-center gap-2 transition-all border border-white/10 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>اتصال مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
