import { useState } from 'react';
import { Building, Mail, MapPin, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const termsContent = `الشروط والأحكام

الخاصة بمؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت

1. التعريفات

المؤسسة: مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت.

العميل: أي شخص طبيعي أو اعتباري يتعامل مع المؤسسة لغرض التخليص الجمركي أو خدمات الترانزيت.

البضاعة: جميع الشحنات أو الطرود أو المنتجات التي يطلب العميل تخليصها أو نقلها عبر المؤسسة.

2. نطاق الخدمة

تقوم المؤسسة بإنهاء جميع الإجراءات الجمركية المتعلقة بالبضائع وفق الأنظمة والتعليمات المعمول بها في المملكة.

تشمل الخدمات: التخليص الجمركي، إصدار التصاريح، متابعة معاملات الجهات الحكومية، وخدمات الترانزيت.

المؤسسة غير مسؤولة عن أي خدمات لم يتم الاتفاق عليها خطياً مسبقاً.

3. التزامات العميل

تزويد المؤسسة بجميع المستندات والأوراق الرسمية المطلوبة للتخليص الجمركي بشكل صحيح وكامل (فواتير، بوليصة شحن، شهادات منشأ، تصاريح...).

الالتزام بسداد الرسوم الجمركية والضرائب والغرامات إن وجدت.

دفع أتعاب التخليص والرسوم الإدارية المتفق عليها مع المؤسسة.

تحمل المسؤولية القانونية الكاملة عن صحة البيانات المقدمة للمؤسسة.

4. التزامات المؤسسة

الالتزام بإنهاء إجراءات التخليص بأقصى سرعة ممكنة حسب القوانين والأنظمة.

المحافظة على سرية بيانات العميل والمستندات المقدمة.

إخطار العميل بأي عقبات أو متطلبات إضافية تخص البضاعة أثناء التخليص أو النقل.

5. المسؤولية القانونية

المؤسسة غير مسؤولة عن أي تأخير ينتج عن إجراءات الجهات الحكومية أو شركات النقل أو شركات الشحن.

المؤسسة غير مسؤولة عن فقدان أو تلف البضائع الناتج عن النقل أو التخزين أو أسباب خارجة عن إرادتها.

لا تتحمل المؤسسة أي غرامات أو رسوم إضافية ناتجة عن أخطاء أو إغفال في المستندات المقدمة من العميل.

6. الرسوم والمدفوعات

يتم تحديد أجور التخليص والترانزيت بموجب اتفاق مسبق بين المؤسسة والعميل.

يلتزم العميل بسداد كامل الرسوم المستحقة قبل استلام البضاعة أو فور المطالبة بها.

للمؤسسة الحق في حجز المستندات أو البضائع لحين سداد كافة المستحقات المالية.

7. تسوية النزاعات

في حال نشوء أي خلاف، يتم حله ودياً قدر الإمكان.

في حال تعذر الحل الودي، يتم اللجوء إلى الجهات القضائية المختصة في المملكة العربية السعودية.

8. أحكام عامة

تحتفظ المؤسسة بحق تعديل هذه الشروط والأحكام في أي وقت، ويتم إشعار العميل بالتعديلات عند الحاجة.

التعامل مع المؤسسة يعني موافقة العميل الكاملة على هذه الشروط والأحكام.`;

  const privacyContent = `سياسة الخصوصية

الخاصة بمؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت

1. جمع المعلومات

تقوم المؤسسة بجمع المعلومات الأساسية من العملاء مثل الاسم، رقم الهوية أو السجل التجاري، أرقام الاتصال، البريد الإلكتروني، والمستندات اللازمة للتخليص الجمركي.

يتم جمع هذه المعلومات فقط لغرض تقديم الخدمات الجمركية والترانزيت.

2. استخدام المعلومات

تُستخدم بيانات العملاء فقط لإنهاء الإجراءات الجمركية، التواصل بشأن المعاملات، وتقديم خدمات الدعم.

لا يتم استخدام بيانات العملاء لأي أغراض تسويقية إلا بعد الحصول على موافقة خطية أو إلكترونية مسبقة.

3. حفظ وأمن المعلومات

تلتزم المؤسسة بحماية بيانات العملاء باستخدام أنظمة وإجراءات مناسبة للحفاظ على سريتها.

يُسمح بالوصول إلى البيانات فقط من قبل الموظفين المخولين والمرتبطين مباشرة بالخدمات المقدمة.

4. مشاركة المعلومات

لا تتم مشاركة بيانات العملاء مع أي جهة خارجية إلا في الحالات التالية:

إذا كان ذلك مطلوبًا بموجب القوانين والأنظمة في المملكة.

مشاركة البيانات مع الجهات الحكومية ذات العلاقة بعملية التخليص الجمركي.

بعد موافقة العميل الخطية المسبقة.

5. حقوق العميل

للعميل الحق في طلب مراجعة أو تصحيح بياناته المسجلة لدى المؤسسة.

للعميل الحق في طلب حذف بياناته بعد انتهاء العلاقة التعاقدية، ما لم تكن هناك التزامات نظامية أو قانونية تتطلب الاحتفاظ بها.

6. التعديلات على سياسة الخصوصية

تحتفظ المؤسسة بحق تعديل سياسة الخصوصية هذه في أي وقت وفقًا لمتطلبات العمل أو التحديثات النظامية.

سيتم إشعار العملاء بأي تعديلات جوهرية على هذه السياسة.

7. التواصل

في حال وجود أي استفسار أو طلب يتعلق بالخصوصية، يمكن التواصل مع المؤسسة عبر بيانات الاتصال الرسمية.`;

  return (
    <>
      <footer className="text-white py-16 section-transparent footer-3d-container relative">
        {/* 3D Shapes Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating 3D Shapes */}
          <div className="shape-3d" style={{ top: '10%', left: '5%', width: '80px', height: '80px', animationDelay: '0s' }}></div>
          <div className="shape-3d" style={{ top: '20%', right: '10%', width: '60px', height: '60px', animationDelay: '1s' }}></div>
          <div className="shape-3d" style={{ bottom: '30%', left: '15%', width: '70px', height: '70px', animationDelay: '2s' }}></div>
          <div className="shape-3d" style={{ bottom: '10%', right: '20%', width: '50px', height: '50px', animationDelay: '3s' }}></div>
          
          {/* 3D Cube */}
          <div className="shape-cube absolute" style={{ top: '15%', left: '25%' }}></div>
          <div className="shape-cube absolute" style={{ bottom: '20%', right: '30%' }}></div>
          
          {/* Pyramid */}
          <div className="shape-pyramid absolute" style={{ top: '40%', right: '15%' }}></div>
          <div className="shape-pyramid absolute" style={{ bottom: '40%', left: '10%' }}></div>
          
          {/* Spheres */}
          <div className="shape-sphere absolute" style={{ top: '25%', left: '40%' }}></div>
          <div className="shape-sphere absolute" style={{ bottom: '25%', right: '40%' }}></div>
          
          {/* Diamonds */}
          <div className="shape-diamond absolute" style={{ top: '35%', right: '25%' }}></div>
          <div className="shape-diamond absolute" style={{ bottom: '35%', left: '30%' }}></div>
          
          {/* Hexagons */}
          <div className="shape-hexagon absolute" style={{ top: '50%', left: '20%' }}></div>
          <div className="shape-hexagon absolute" style={{ bottom: '50%', right: '25%' }}></div>
          
          {/* Floating Particles */}
          {Array.from({ length: 20 }, (_, i) => (
            <div 
              key={i}
              className="floating-particle" 
              style={{ 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            ></div>
          ))}
          
          {/* Light Beams */}
          {Array.from({ length: 8 }, (_, i) => (
            <div 
              key={i}
              className="light-beam" 
              style={{ 
                left: `${10 + i * 12}%`, 
                bottom: '0',
                animationDelay: `${i * 1}s`
              }}
            ></div>
          ))}
          
          {/* Glowing Orbs */}
          {Array.from({ length: 12 }, (_, i) => (
            <div 
              key={i}
              className="glowing-orb" 
              style={{ 
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`, 
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Building className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">سليمان الحويطي</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                مؤسسة متخصصة في التخليص الجمركي والترانزيت مع خبرة تزيد عن 15 سنة في خدمة عملائنا الكرام
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><a href="#services" title="اطلع على خدماتنا المتميزة في التخليص الجمركي" className="text-gray-300 hover:text-white transition-colors">خدماتنا</a></li>
                <li><a href="#branches" title="تعرف على مواقع فروعنا في المملكة" className="text-gray-300 hover:text-white transition-colors">فروعنا</a></li>
                <li><a href="#why-us" title="اكتشف لماذا نحن الخيار الأفضل" className="text-gray-300 hover:text-white transition-colors">لماذا نحن</a></li>
                <li><a href="#blog" title="اقرأ آخر أخبار ومقالات التخليص الجمركي" className="text-gray-300 hover:text-white transition-colors">المدونة</a></li>
                <li><a href="#contact" title="تواصل معنا للحصول على استشارة مجانية" className="text-gray-300 hover:text-white transition-colors">تواصل معنا</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">خدماتنا الرئيسية</h4>
              <ul className="space-y-2 text-gray-300">
                <li>التخليص الجمركي</li>
                <li>النقل والترانزيت</li>
                <li>الشحن البحري والجوي</li>
                <li>الاستشارات التجارية</li>
                <li>إدارة المخازن</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400">معلومات التواصل</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">المملكة العربية السعودية - تبوك - ضبا</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">alebawani.ksa@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">متاح 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت. جميع الحقوق محفوظة.
              </p>
              <div className="flex space-x-6 space-x-reverse">
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  الشروط والأحكام
                </button>
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  سياسة الخصوصية
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-right">الشروط والأحكام</DialogTitle>
          </DialogHeader>
          <div className="mt-4 text-right leading-relaxed whitespace-pre-line">
            {termsContent}
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Modal */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-right">سياسة الخصوصية</DialogTitle>
          </DialogHeader>
          <div className="mt-4 text-right leading-relaxed whitespace-pre-line">
            {privacyContent}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}