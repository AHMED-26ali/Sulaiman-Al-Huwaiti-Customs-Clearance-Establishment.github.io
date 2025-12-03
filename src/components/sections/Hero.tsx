import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeBackground from '@/components/effects/ThreeBackground';

export default function Hero() {
  // مصفوفة الصور الأصلية التي أرسلها المستخدم
  const images = [
    // الصور الأصلية
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
    // الصور الجديدة المضافة
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
    "https://i.pinimg.com/736x/a9/5f/e6/a95fe6bf1291eaca742fff2029ae096a.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // التمرير التلقائي للصور - بدون إيقاف
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // تغيير الصورة كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDiscoverServices = () => {
    console.log('تم النقر على زر اكتشف خدماتنا');
    
    // البحث عن قسم الخدمات بطرق متعددة
    let servicesSection = document.getElementById('services');
    
    if (!servicesSection) {
      servicesSection = document.querySelector('[id="services"]');
    }
    
    if (!servicesSection) {
      servicesSection = document.querySelector('section[id*="service"]');
    }
    
    if (!servicesSection) {
      servicesSection = document.querySelector('.services');
    }
    
    if (!servicesSection) {
      // البحث عن أي عنصر يحتوي على كلمة "خدمات"
      const allElements = document.querySelectorAll('*');
      for (const element of allElements) {
        if (element.textContent && element.textContent.includes('خدماتنا المتميزة')) {
          servicesSection = element.closest('section') || element;
          break;
        }
      }
    }
    
    console.log('قسم الخدمات الموجود:', servicesSection);
    
    if (servicesSection) {
      console.log('تم العثور على قسم الخدمات، الانتقال إليه...');
      // إضافة تأخير قصير للتأكد من التحديث
      setTimeout(() => {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100);
    } else {
      console.log('لم يتم العثور على قسم الخدمات، التمرير لأسفل...');
      // إذا لم يوجد، انتقل إلى القسم التالي
      const nextSection = document.querySelector('section:nth-of-type(2)');
      if (nextSection) {
        console.log('تم العثور على القسم التالي، الانتقال إليه...');
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('التمرير لأسفل بمقدار ارتفاع الشاشة...');
        // كحل أخير، انتقل لأسفل بمقدار ارتفاع الشاشة
        window.scrollBy({
          top: window.innerHeight * 0.8,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="min-h-screen text-white relative overflow-hidden pt-16 section-transparent">
      {/* 3D Background - Always Enabled */}
      <ThreeBackground enabled={true} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              {/* العنوان الرئيسي - بسيط وأنيق */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-right">
                <span className="block text-white mb-2">
                  سليمان الحويطي
                </span>
                <span className="block text-green-400">
                  للتخليص الجمركي والترانزيت
                </span>
              </h1>

              {/* العنوان الفرعي - بسيط */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed text-center lg:text-right">
                مؤسسة رائدة في خدمات التخليص الجمركي والترانزيت في المملكة العربية السعودية
              </h2>
              
              {/* الوصف - بسيط */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center lg:text-right">
                نقدم خدمات التخليص الجمركي والترانزيت بأعلى معايير الجودة والاحترافية في جميع أنحاء المملكة
              </p>

              {/* Features - بسيط */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 space-x-reverse bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30">
                  <Star className="h-6 w-6 text-blue-400" />
                  <span className="font-semibold text-white">خبرة +15 سنة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-purple-500/20 backdrop-blur-sm rounded-xl p-4 hover:bg-purple-500/30 transition-all duration-300 border border-purple-400/30">
                  <Zap className="h-6 w-6 text-purple-400" />
                  <span className="font-semibold text-white">خدمة 24/7</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse bg-orange-500/20 backdrop-blur-sm rounded-xl p-4 hover:bg-orange-500/30 transition-all duration-300 border border-orange-400/30">
                  <Shield className="h-6 w-6 text-orange-400" />
                  <span className="font-semibold text-white">موثوقية عالية</span>
                </div>
              </div>
            </div>

            {/* Action Button - بسيط */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleDiscoverServices}
              >
                <span className="flex items-center">
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-3 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>

          {/* شاشة عرض الصور على شكل هاتف - مع تحسين جودة العرض */}
          <div className="animate-fade-in-left flex justify-center">
            <div className="relative">
              {/* إطار الهاتف - حجم أكبر */}
              <div className="relative bg-gray-900 rounded-[4rem] p-4 shadow-2xl border-4 border-gray-800">
                {/* الشاشة - حجم أكبر */}
                <div className="relative w-96 h-[700px] bg-black rounded-[3rem] overflow-hidden">
                  {/* الصورة الحالية - مع تحسين جودة العرض */}
                  <div className="relative w-full h-full">
                    <img
                      src={images[currentImageIndex]}
                      alt={`خدمات التخليص الجمركي والترانزيت - مؤسسة سليمان الحويطي ${currentImageIndex + 1}`}
                      title={`خدمات التخليص الجمركي والترانزيت في السعودية - صورة ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                      loading={currentImageIndex < 3 ? "eager" : "lazy"}
                      style={{
                        imageRendering: 'crisp-edges',
                        WebkitImageSmoothing: false,
                        imageSmoothing: false,
                        filter: 'contrast(1.1) saturate(1.1) brightness(1.05)'
                      }}
                    />
                  </div>

                  {/* مؤشر التقدم فقط */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div 
                      className="h-full bg-green-500 transition-all duration-300"
                      style={{ 
                        width: `${((currentImageIndex + 1) / images.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {/* الكاميرا الأمامية */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full"></div>
                
                {/* السماعة */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 translate-x-10 w-10 h-1.5 bg-gray-800 rounded-full"></div>
              </div>

              {/* تأثيرات الوهج حول الهاتف */}
              <div className="absolute -inset-6 bg-gradient-to-r from-green-400/10 via-blue-500/10 to-purple-400/10 rounded-[5rem] blur-2xl opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Stats Section - بسيط */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-emerald-500/30 transition-all duration-300 border border-emerald-400/30">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">2000+</div>
            <div className="text-sm font-medium text-gray-300">عميل راضي</div>
          </div>
          <div className="text-center bg-violet-500/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-violet-500/30 transition-all duration-300 border border-violet-400/30">
            <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-2">8000+</div>
            <div className="text-sm font-medium text-gray-300">معاملة مكتملة</div>
          </div>
          <div className="text-center bg-amber-500/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-amber-500/30 transition-all duration-300 border border-amber-400/30">
            <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">5</div>
            <div className="text-sm font-medium text-gray-300">فروع ومواقع</div>
          </div>
          <div className="text-center bg-rose-500/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-rose-500/30 transition-all duration-300 border border-rose-400/30">
            <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">15+</div>
            <div className="text-sm font-medium text-gray-300">سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}