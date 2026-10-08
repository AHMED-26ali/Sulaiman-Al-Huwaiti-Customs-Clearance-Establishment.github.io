import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const BASE_URL = 'https://sulaimanal-huwaiti.vercel.app';
const SITE_NAME = 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت';

// تفاصيل الـ SEO لكل صفحة
const PAGES_DATA = {
  '/services': {
    title: 'خدمات التخليص الجمركي والترانزيت | مؤسسة سليمان الحويطي',
    description: 'خدمات متكاملة في التخليص الجمركي الشامل للبضائع، النقل البري والترانزيت الدولي، الشحن البحري، والاستشارات الجمركية والتجارية في السعودية.',
    headerTitle: 'خدماتنا',
    headerSubtitle: 'حلول متكاملة للتخليص الجمركي والترانزيت',
    gradient: 'from-purple-600 via-pink-600 to-purple-800',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'خدمات التخليص الجمركي والترانزيت',
      'serviceType': 'تخليص جمركي وترانزيت وخدمات لوجستية',
      'provider': {
        '@type': 'ProfessionalService',
        'name': SITE_NAME,
        'url': BASE_URL,
        'telephone': '+966559586786',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'طريق الملك عبدالعزيز، حي المقيطع',
          'addressLocality': 'ضبا',
          'addressRegion': 'منطقة تبوك',
          'addressCountry': 'SA'
        }
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'المملكة العربية السعودية'
      },
      'description': 'خدمات متكاملة في التخليص الجمركي الشامل للبضائع، النقل البري والترانزيت الدولي، الشحن البحري، والاستشارات الجمركية والتجارية في السعودية.'
    },
    contentHtml: `
      <section class="py-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">باقة خدماتنا الجمركية واللوجستية</h2>
          <p class="text-gray-300 max-w-2xl mx-auto">نقدم حلولاً متكاملة لتسهيل حركة التجارة والاستيراد والتصدير عبر كافة المنافذ والموانئ السعودية.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-cyan-300 mb-2">التخليص الجمركي الشامل</h3>
            <p class="text-gray-300 text-sm leading-relaxed">خدمات تخليص جمركي متكاملة لجميع أنواع البضائع مع ضمان السرعة والدقة في إنهاء الإجراءات والفسح الفوري عبر منصة فسح وهيئة الزكاة والضريبة والجمارك.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-cyan-300 mb-2">النقل والترانزيت الدولي</h3>
            <p class="text-gray-300 text-sm leading-relaxed">إنهاء إجراءات البضائع العابرة (الترانزيت) ومتابعة نقلها عبر المنافذ الحدودية والموانئ وفق الأنظمة الجمركية المعتمدة مع دول الجوار.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-cyan-300 mb-2">التخليص الجمركي البحري</h3>
            <p class="text-gray-300 text-sm leading-relaxed">إنهاء كافة إجراءات الفسح والتخليص الجمركي للحاويات والبضائع العامة عبر ميناء جدة الإسلامي، ميناء نيوم وضبا، وميناء الملك عبدالعزيز بالدمام.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-cyan-300 mb-2">التخليص الجمركي الجوي</h3>
            <p class="text-gray-300 text-sm leading-relaxed">فسح جمركي فوري للشحنات الجوية عبر مطارات المملكة مع مطابقة المستندات والشهادات بدقة وسرعة فائقة.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-cyan-300 mb-2">الاستشارات والتعريفة الجمركية</h3>
            <p class="text-gray-300 text-sm leading-relaxed">استشارات متخصصة في تصنيف بنود التعريفة الجمركية، حساب الرسوم بدقة، وتطبيق الإعفاءات الجمركية المتاحة نظامياً لتقليل التكاليف.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-cyan-300 mb-2">المتابعة الميدانية على مدار الساعة 24/7</h3>
            <p class="text-gray-300 text-sm leading-relaxed">فريق عمل جمركي ميداني متواجد في ساحات الموانئ والمنافذ الحدودية لإنهاء الكشف والمعاينة وتسريع الإفراج الجمركي للبضائع.</p>
          </article>
        </div>
      </section>
    `
  },
  '/branches': {
    title: 'الموانئ والمنافذ الجمركية المعتمدة | مؤسسة سليمان الحويطي',
    description: 'تغطية جغرافية عبر أهم الموانئ والمنافذ السعودية: ميناء جدة الإسلامي، ميناء نيوم وضبا، ميناء الدمام، ميناء ينبع، ومنافذ الحديثة، البطحاء، جسر الملك فهد، سلوى والدرة.',
    headerTitle: 'فروعنا',
    headerSubtitle: 'حضور واسع في جميع المنافذ الحدودية والموانئ السعودية',
    gradient: 'from-orange-500 via-amber-500 to-orange-700',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'شبكة فروع وموانئ مؤسسة سليمان الحويطي للتخليص الجمركي',
      'description': 'قائمة بالموانئ البحرية والمنافذ البرية التي تغطيها خدمات مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت في المملكة العربية السعودية.',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'ميناء جدة الإسلامي - مكة المكرمة' },
        { '@type': 'ListItem', 'position': 2, 'name': 'ميناء نيوم وضبا التجاري - منطقة تبوك' },
        { '@type': 'ListItem', 'position': 3, 'name': 'ميناء الملك عبدالعزيز بالدمام - المنطقة الشرقية' },
        { '@type': 'ListItem', 'position': 4, 'name': 'ميناء ينبع التجاري - المدينة المنورة' },
        { '@type': 'ListItem', 'position': 5, 'name': 'منفذ الحديثة الحدودي - منطقة الجوف' },
        { '@type': 'ListItem', 'position': 6, 'name': 'منفذ البطحاء الحدودي - حدود الإمارات' },
        { '@type': 'ListItem', 'position': 7, 'name': 'منفذ جسر الملك فهد - الخبر والحدود مع البحرين' },
        { '@type': 'ListItem', 'position': 8, 'name': 'منفذ سلوى الحدودي - حدود قطر' },
        { '@type': 'ListItem', 'position': 9, 'name': 'منفذ الدرة بحقل - خليج العقبة وحدود الأردن' }
      ]
    },
    contentHtml: `
      <section class="py-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">شبكة التغطية الجمركية في المملكة</h2>
          <p class="text-gray-300 max-w-2xl mx-auto">نتواجد استراتيجياً في كافة الموانئ والمنافذ الحيوية لضمان سرعة الفسح الجمركي والترانزيت الدولي.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">ميناء جدة الإسلامي</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">الميناء الأكبر على ساحل البحر الأحمر، بوابة الشحن الرئيسية لمنطقة مكة المكرمة والمشاعر المقدسة.</p>
            <span class="inline-block text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">ميناء بحري</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">ميناء نيوم (جمرك ضبا)</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">أقرب ميناء سعودي لقناة السويس ودول حوض المتوسط، والمحرك اللوجستي الرئيسي لمشاريع نيوم العملاقة.</p>
            <span class="inline-block text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">ميناء بحري - بوابة نيوم</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">ميناء الملك عبدالعزيز (الدمام)</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">بوابة البضائع الرئيسية على الخليج العربي، ويخدم المنطقة الشرقية والوسطى بأحدث قدرات المناولة.</p>
            <span class="inline-block text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">ميناء بحري</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">ميناء ينبع التجاري</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">ميناء استراتيجي يخدم منطقة المدينة المنورة والصناعات التحويلية بكفاءة عالية في مناولة البضائع.</p>
            <span class="inline-block text-xs bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full border border-sky-500/30">ميناء بحري</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">منفذ الحديثة الحدودي</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">أكبر منفذ بري بالشرق الأوسط، يربط المملكة بالأردن والشام وأوروبا لحركة الشحن والترانزيت البري.</p>
            <span class="inline-block text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">منفذ بري</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">منفذ البطحاء الحدودي</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">الحلقة اللوجستية البرية التي تربط المملكة بدولة الإمارات العربية المتحدة لحركة التجارة والترانزيت.</p>
            <span class="inline-block text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30">منفذ بري</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">منفذ جسر الملك فهد</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">يربط بين الخبر ومملكة البحرين، ويشهد تدفقاً تجارياً للشحنات مع تخليص جمركي فوري.</p>
            <span class="inline-block text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/30">جسر بري</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">منفذ سلوى الحدودي</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">المنفذ البري الوحيد الرابط بين المملكة ودولة قطر، ويسهل حركة التبادل التجاري ونقل السلع.</p>
            <span class="inline-block text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">منفذ بري</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-amber-300 mb-2">منفذ الدرة (حقل)</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">يقع في حقل على خليج العقبة شمال المملكة، لخدمة الشحن البري والركاب بين السعودية والأردن.</p>
            <span class="inline-block text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full border border-green-500/30">منفذ بري</span>
          </article>
        </div>
      </section>
    `
  },
  '/why-us': {
    title: 'لماذا نحن | مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت',
    description: 'تعرف على مقومات الثقة لدى مؤسسة سليمان الحويطي: ترخيص معتمد، سرعة الفسح الجمركي، دقة الإجراءات، متابعة ميدانية 24/7، وشبكة واسعة تغطي منافذ المملكة.',
    headerTitle: 'لماذا نحن',
    headerSubtitle: 'خبرة وموثوقية تمتد لأكثر من 15 عاماً في قطاع التخليص الجمركي',
    gradient: 'from-pink-600 via-red-500 to-pink-800',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'لماذا نحن | مؤسسة سليمان الحويطي للتخليص الجمركي',
      'description': 'تعرف على مقومات الثقة والريادة لمؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت في السعودية.',
      'mainEntity': {
        '@type': 'ProfessionalService',
        'name': SITE_NAME,
        'url': BASE_URL,
        'telephone': '+966559586786',
        'foundingDate': '2009',
        'description': 'أكثر من 15 عاماً من الخبرة، وإنجاز أكثر من 80,000 معاملة جمركية ناجحة لأكثر من 2000 عميل في كافة منافذ المملكة.'
      }
    },
    contentHtml: `
      <section class="py-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">مقومات التميز والموثوقية</h2>
          <p class="text-gray-300 max-w-2xl mx-auto">نلتزم بتقديم أعلى مستويات الجودة والسرعة في إنهاء المعاملات الجمركية لحماية مصالح عملائنا وتوفير أوقاتهم وتكاليفهم.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div class="text-4xl font-extrabold text-pink-400 mb-2">15+</div>
            <div class="text-sm text-gray-300">سنة خبرة معتمدة</div>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div class="text-4xl font-extrabold text-cyan-400 mb-2">80,000+</div>
            <div class="text-sm text-gray-300">معاملة جمركية منجزة</div>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div class="text-4xl font-extrabold text-amber-400 mb-2">2,000+</div>
            <div class="text-sm text-gray-300">عميل ومستورد راضٍ</div>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div class="text-4xl font-extrabold text-emerald-400 mb-2">9</div>
            <div class="text-sm text-gray-300">موانئ ومنافذ مغطاة</div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-pink-300 mb-2">سرعة استثنائية في الفسح</h3>
            <p class="text-gray-300 text-sm leading-relaxed">إنهاء الإجراءات والبيانات الجمركية في زمن قياسي لتفادي رسوم الأرضيات وتأخير الحاويات في الموانئ.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-pink-300 mb-2">ترخيص رسمي واعتماد كامل</h3>
            <p class="text-gray-300 text-sm leading-relaxed">مؤسسة مرخصة من هيئة الزكاة والضريبة والجمارك ومسجلة في كافة المنصات المعتمدة (فسح، سابر، نافذة).</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-pink-300 mb-2">دقة متناهية في تصنيف البنود</h3>
            <p class="text-gray-300 text-sm leading-relaxed">حساب الرسوم الجمركية بدقة وتطبيق الإعفاءات النظامية دون أي غرامات أو أخطاء مستندية.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-pink-300 mb-2">دعم فني ومتابعة ميدانية 24/7</h3>
            <p class="text-gray-300 text-sm leading-relaxed">فريقنا الميداني متواجد دائماً للتعامل مع أي طارئ ومتابعة الشحنة لحظة بلحظة حتى وصولها لمستودع العميل.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-pink-300 mb-2">شفافية وتحديثات فورية</h3>
            <p class="text-gray-300 text-sm leading-relaxed">إشعار العميل بكل مرحلة تمر بها المعاملة بدءاً من استلام بوليصة الشحن وحتى الإفراج النهائي.</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-pink-300 mb-2">أسعار تنافسية وحلول مخصصة</h3>
            <p class="text-gray-300 text-sm leading-relaxed">باقات أسعار مدروسة تناسب كبرى الشركات والمستوردين وتمنحهم أعلى قيمة مقابل الخدمة.</p>
          </article>
        </div>
      </section>
    `
  },
  '/blog': {
    title: 'المدونة الجمركية ودليل الاستيراد والتصدير | مؤسسة سليمان الحويطي',
    description: 'مقالات وإرشادات جمركية متخصصة حول إجراءات الاستيراد والتصدير في السعودية، اشتراطات الفسح الجمركي، واللوائح المعتمدة لتسهيل حركة التجارة.',
    headerTitle: 'المدونة',
    headerSubtitle: 'دليل ومعلومات متخصصة في الأنظمة الجمركية والاستيراد والتصدير',
    gradient: 'from-indigo-600 via-blue-600 to-indigo-800',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'المدونة الجمركية - مؤسسة سليمان الحويطي',
      'description': 'مقالات وإرشادات جمركية متخصصة حول إجراءات الاستيراد والتصدير في السعودية واللوائح المحدثة.',
      'publisher': {
        '@type': 'ProfessionalService',
        'name': SITE_NAME,
        'url': BASE_URL
      }
    },
    contentHtml: `
      <section class="py-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">أحدث المقالات والإرشادات الجمركية</h2>
          <p class="text-gray-300 max-w-2xl mx-auto">إرشادات مفصلة لمساعدة المستوردين والتجار على فهم إجراءات التخليص الجمركي وتفادي أي تأخير.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article class="bg-white/5 border border-white/10 rounded-2xl p-8 text-right">
            <div class="text-xs text-indigo-300 font-semibold mb-2">إرشادات الاستيراد • وقت القراءة: 5 دقائق</div>
            <h3 class="text-2xl font-bold text-white mb-3">دليل شامل للتخليص الجمركي في المملكة العربية السعودية</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">التخليص الجمركي هو عملية أساسية تتطلب دراية بالقوانين واللوائح. يشمل تحضير الفاتورة التجارية، بوليصة الشحن، شهادة المنشأ، إعداد الإقرار الجمركي الإلكتروني عبر منصة فسح، وسداد الرسوم للحصول على إذن الفسح النهائي بأسرع وقت.</p>
            <span class="text-xs text-cyan-300">محدث وفق آخر لوائح هيئة الزكاة والضريبة والجمارك</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-8 text-right">
            <div class="text-xs text-indigo-300 font-semibold mb-2">تجارة دولية وترانزيت • وقت القراءة: 7 دقائق</div>
            <h3 class="text-2xl font-bold text-white mb-3">أهمية خدمات الترانزيت ونقل البضائع العابرة</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">تلعب خدمات الترانزيت دوراً محورياً في تمكين مرور البضائع عبر أراضي المملكة دون رسوم جمركية نهائية نحو وجهتها المقصودة، مما يوفر مرونة كبيرة للشركات ويخفض التكاليف اللوجستية الإجمالية للشحنات الدولية.</p>
            <span class="text-xs text-cyan-300">حلول النقل البري والبحري للترانزيت</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-8 text-right">
            <div class="text-xs text-indigo-300 font-semibold mb-2">أنظمة وقوانين • وقت القراءة: 6 دقائق</div>
            <h3 class="text-2xl font-bold text-white mb-3">التطورات الحديثة في الأنظمة الجمركية السعودية ومنصة فسح</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">شهدت الأنظمة الجمركية نقلة نوعية عبر منصة فسح والأتمتة الرقمية لإجراءات الفسح المسبق، والربط مع منصة سابر للمطابقة وتتبع البيانات إلكترونياً بما يضمن الشفافية والسرعة الفائقة في إنهاء المعاملات.</p>
            <span class="text-xs text-cyan-300">التحول الرقمي للجمارك السعودية</span>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-8 text-right">
            <div class="text-xs text-indigo-300 font-semibold mb-2">نصائح وإرشادات • وقت القراءة: 4 دقائق</div>
            <h3 class="text-2xl font-bold text-white mb-3">كيفية تجنب الأخطاء الشائعة وغرامات التأخير في الجمارك</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">نوضح أبرز الأخطاء مثل عدم تطابق بنود الفاتورة مع البضاعة أو التأخر في تقديم شهادات المطابقة، وكيف يسهم التعامل مع مخلص جمركي معتمد في تفادي الغرامات ورسوم الأرضيات الإضافية.</p>
            <span class="text-xs text-cyan-300">توصيات حماية المستوردين</span>
          </article>
        </div>
      </section>
    `
  },
  '/contact': {
    title: 'اتصل بنا | مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت',
    description: 'تواصل مباشرة مع المقر الرئيسي لمؤسسة سليمان الحويطي في ضبا أو شبكة فروعنا بالموانئ والمنافذ السعودية. استشارات وخدمات تخليص جمركي على مدار 24 ساعة.',
    headerTitle: 'تواصل معنا',
    headerSubtitle: 'فريقنا متاح لخدمتكم واستقبال استفساراتكم على مدار 24 ساعة',
    gradient: 'from-red-600 via-rose-500 to-red-800',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'اتصل بمؤسسة سليمان الحويطي للتخليص الجمركي',
      'description': 'بيانات التواصل المباشر مع المقر الرئيسي لمؤسسة سليمان الحويطي للتخليص الجمركي في ضبا والمنافذ السعودية.',
      'mainEntity': {
        '@type': 'ProfessionalService',
        'name': SITE_NAME,
        'url': BASE_URL,
        'telephone': '+966559586786',
        'email': 'alebawani.k.s.a@hotmail.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'طريق الملك عبدالعزيز، حي المقيطع',
          'addressLocality': 'ضبا',
          'addressRegion': 'منطقة تبوك',
          'postalCode': '49312',
          'addressCountry': 'SA'
        },
        'openingHours': 'Mo-Su 00:00-24:00'
      }
    },
    contentHtml: `
      <section class="py-16 px-4 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">قنوات الاتصال المباشرة</h2>
          <p class="text-gray-300 max-w-2xl mx-auto">يسعدنا تلقي طلباتكم واستفساراتكم وتقديم استشارات جمركية فورية عبر الهاتف أو الواتساب أو بزيارة مقرنا الرئيسي.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-rose-300 mb-2">المقر الرئيسي</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">طريق الملك عبدالعزيز، حي المقيطع، محافظة ضبا، منطقة تبوك، المملكة العربية السعودية (بالقرب من ميناء ضبا ونيوم).</p>
            <p class="text-xs text-cyan-300">الرمز البريدي: 49312</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-rose-300 mb-2">أرقام التواصل والمتابعة</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">
              سليمان الحويطي: <a href="tel:+966559586786" class="text-white font-bold hover:underline" dir="ltr">+966 55 958 6786</a><br/>
              إبراهيم جمعة: <a href="tel:+966509457627" class="text-white font-bold hover:underline" dir="ltr">+966 50 945 7627</a><br/>
              أحمد علي: <a href="tel:+966551046758" class="text-white font-bold hover:underline" dir="ltr">+966 55 104 6758</a>
            </p>
            <p class="text-xs text-emerald-300">متاحون على مدار الساعة عبر الواتساب والمكالمات</p>
          </article>
          <article class="bg-white/5 border border-white/10 rounded-2xl p-6 text-right">
            <h3 class="text-xl font-bold text-rose-300 mb-2">البريد الإلكتروني وأوقات العمل</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-2">
              البريد الرسمي: <a href="mailto:alebawani.k.s.a@hotmail.com" class="text-white hover:underline">alebawani.k.s.a@hotmail.com</a>
            </p>
            <p class="text-sm text-gray-300 mb-1">أوقات العمل الميداني: 24 ساعة / 7 أيام في الأسبوع</p>
            <p class="text-xs text-amber-300">رد فوري واستجابة سريعة لجميع المعاملات</p>
          </article>
        </div>
      </section>
    `
  }
};

function generateStaticPages() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('Error: dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  // معالجة كل صفحة فرعية
  for (const [routePath, data] of Object.entries(PAGES_DATA)) {
    const pageUrl = `${BASE_URL}${routePath}`;
    let html = baseHtml;

    // 1. استبدال عنوان الصفحة
    html = html.replace(/<title>.*?<\/title>/s, `<title>${data.title}</title>`);
    html = html.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${data.title}" />`);

    // 2. استبدال الوصف
    html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${data.description}" />`);

    // 3. استبدال الرابط الكنسي (Canonical)
    html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${pageUrl}" />`);

    // 4. استبدال وسوم Open Graph
    html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${data.title}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${data.description}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${pageUrl}" />`);

    // 5. استبدال وسوم Twitter
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${data.title}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${data.description}" />`);

    // 6. استبدال كود الـ Schema JSON-LD
    const schemaScript = `  <script type="application/ld+json">\n  ${JSON.stringify(data.schema, null, 2)}\n  </script>`;
    html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, schemaScript);

    // 7. استبدال هيكل الصفحة داخل <div id="root"> بهيكل حقيقي مطابق للصفحة يقرأه Googlebot مباشرة
    const pageShell = `
    <div style="min-height:100vh;background:linear-gradient(to bottom right, #1e3a8a, #581c87, #064e3b);">
      <header style="height:5rem;display:flex;align-items:center;padding:0 1rem;max-width:80rem;margin:0 auto;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:1rem;">
          <a href="/" style="display:flex;align-items:center;gap:1rem;text-decoration:none;color:#ffffff;">
            <img src="/images/Logo.webp" alt="شعار مؤسسة سليمان الحويطي" width="64" height="64" style="border-radius:9999px;object-fit:cover;border:2px solid rgba(34,211,238,0.6);" />
            <span style="font-size:1.25rem;font-weight:700;color:#ffffff;">${SITE_NAME}</span>
          </a>
        </div>
        <nav style="display:flex;gap:1.5rem;" aria-label="روابط الموقع">
          <a href="/" style="color:#ffffff;text-decoration:none;font-weight:600;">الرئيسية</a>
          <a href="/services" style="color:#ffffff;text-decoration:none;font-weight:600;">خدماتنا</a>
          <a href="/branches" style="color:#ffffff;text-decoration:none;font-weight:600;">فروعنا</a>
          <a href="/why-us" style="color:#ffffff;text-decoration:none;font-weight:600;">لماذا نحن</a>
          <a href="/blog" style="color:#ffffff;text-decoration:none;font-weight:600;">المدونة</a>
          <a href="/contact" style="color:#ffffff;text-decoration:none;font-weight:600;">تواصل معنا</a>
        </nav>
      </header>

      <!-- Page Header -->
      <section style="padding:4rem 1rem 3rem 1rem;text-align:center;background:linear-gradient(135deg, rgba(255,255,255,0.05), transparent);">
        <nav aria-label="breadcrumb" style="margin-bottom:1.5rem;color:rgba(255,255,255,0.8);font-size:0.95rem;">
          <a href="/" style="color:rgba(255,255,255,0.8);text-decoration:none;">الرئيسية</a>
          <span style="margin:0 0.5rem;">/</span>
          <span style="color:#ffffff;font-weight:700;">${data.headerTitle}</span>
        </nav>
        <h1 style="font-size:2.75rem;font-weight:800;color:#ffffff;margin-bottom:1rem;line-height:1.2;">
          ${data.headerTitle}
        </h1>
        <p style="font-size:1.25rem;color:rgba(255,255,255,0.9);max-width:48rem;margin:0 auto;line-height:1.6;">
          ${data.headerSubtitle}
        </p>
      </section>

      <!-- Page Main Content for Crawlers and Users -->
      <main id="main-content" role="main">
        ${data.contentHtml}
      </main>

      <footer style="margin-top:4rem;padding:3rem 1rem;border-top:1px solid rgba(255,255,255,0.1);text-align:center;color:rgba(255,255,255,0.7);font-size:0.9rem;">
        <p>© 2026 ${SITE_NAME}. جميع الحقوق محفوظة.</p>
        <p style="margin-top:0.5rem;">المقر الرئيسي: طريق الملك عبدالعزيز، ضبا، منطقة تبوك، المملكة العربية السعودية | هاتف: +966559586786</p>
      </footer>
    </div>`;

    const rootStart = html.indexOf('<div id="root">');
    const bodyEnd = html.indexOf('</body>');
    if (rootStart !== -1 && bodyEnd !== -1) {
      html = html.substring(0, rootStart) + `<div id="root">${pageShell}</div>\n` + html.substring(bodyEnd);
    }

    // إنشاء المجلد وحفظ ملف index.html الخاص بالصفحة
    const targetDir = path.join(distDir, routePath.replace(/^\//, ''));
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf8');
    console.log(`Generated prerendered page: ${targetFile}`);
  }

  console.log('Static pages generated successfully!');
}

generateStaticPages();
