import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string;
}

const PAGE_SEO_MAP: Record<string, PageSEOConfig> = {
  '/': {
    title: 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت | السعودية',
    description: 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت في السعودية. خبرة 15+ عاماً في التخليص الجمركي البحري والبري عبر ميناء جدة، نيوم وضبا، الدمام، ينبع، ومنافذ الحديثة والبطحاء وجسر الملك فهد وسلوى والدرة.',
    keywords: 'سليمان الحويطي, سليمان الحويطي للتخليص الجمركي والترانزيت, مؤسسة سليمان الحويطي, تخليص جمركي, تخليص جمركي السعودية, تخليص جمركي وترانزيت, مخلص جمركي معتمد, ميناء جدة الإسلامي, ميناء نيوم, جمرك ضبا, ميناء الملك عبدالعزيز بالدمام, ميناء ينبع, منفذ الحديثة, منفذ البطحاء, منفذ جسر الملك فهد, منفذ سلوى, منفذ الدرة'
  },
  '/services': {
    title: 'خدمات التخليص الجمركي والترانزيت والاستيراد والتصدير | مؤسسة سليمان الحويطي',
    description: 'خدمات متكاملة في التخليص الجمركي للبضائع والحاويات البحرية والشاحنات البرية، خدمات الترانزيت الدولي، الفسح الجمركي الفوري واستشارات منصة سابر في السعودية.',
    keywords: 'خدمات التخليص الجمركي, تخليص جمركي بحري, تخليص جمركي بري, ترانزيت دولي, منصة سابر, فسح جمركي, استيراد وتصدير السعودية, سليمان الحويطي للخدمات الجمركية'
  },
  '/branches': {
    title: 'شبكة الموانئ والمنافذ الجمركية في السعودية | مؤسسة سليمان الحويطي',
    description: 'تغطية جغرافية شاملة لجميع موانئ ومنافذ المملكة: ميناء جدة الإسلامي، ميناء نيوم وجمرك ضبا، ميناء الدمام، ميناء ينبع، ومنفذ الحديثة، البطحاء، جسر الملك فهد، سلوى والدرة.',
    keywords: 'موانئ التخليص الجمركي السعودية, منافذ جمركية برية, ميناء جدة الإسلامي, ميناء نيوم ضبا, ميناء الملك عبدالعزيز بالدمام, ميناء ينبع التجاري, منفذ الحديثة, منفذ البطحاء, منفذ جسر الملك فهد, منفذ سلوى, منفذ الدرة بحقل, فروع مؤسسة سليمان الحويطي'
  },
  '/why-us': {
    title: 'لماذا تختار مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت؟',
    description: 'تعرف على مزايا التعامل مع مؤسسة سليمان الحويطي: ترخيص معتمد، سرعة في إنهاء الإجراءات الجمركية، دعم فني 24/7، وشبكة واسعة تغطي كافة المنافذ الحيوية بالمملكة.',
    keywords: 'أفضل مؤسسة تخليص جمركي, مخلص جمركي معتمد السعودية, مميزات سليمان الحويطي, سرعة الفسح الجمركي, خبرة التخليص الجمركي'
  },
  '/blog': {
    title: 'المدونة الجمركية ودليل الاستيراد والتصدير في السعودية | مؤسسة سليمان الحويطي',
    description: 'مقالات وأدلة إرشادية حول أنظمة الجمارك السعودية، متطلبات هيئة الزكاة والضريبة والجمارك، نصائح الاستيراد والتصدير، وإجراءات الفسح السريع للبضائع.',
    keywords: 'دليل الجمارك السعودية, مقالات تخليص جمركي, شروط الاستيراد والتصدير, منصة فسح, جمارك السعودية, مدونة سليمان الحويطي'
  },
  '/contact': {
    title: 'اتصل بنا | مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت',
    description: 'تواصل مباشرة مع المقر الرئيسي لمؤسسة سليمان الحويطي في ضبا أو فروعنا بالمنافذ والموانئ السعودية. استشارات جمركية على مدار 24 ساعة عبر الهاتف والواتساب.',
    keywords: 'رقم مخلص جمركي, تواصل مع سليمان الحويطي, عنوان مؤسسة سليمان الحويطي ضبا, استشارة جمركية مجانية, هاتف مخلص جمركي السعودية'
  }
};

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    // تحديد الإعدادات المناسبة للصفحة الحالية أو الإعداد الافتراضي
    const currentConfig = PAGE_SEO_MAP[pathname] || PAGE_SEO_MAP['/'];
    
    // تحديث عنوان الصفحة في المتصفح ومحركات البحث
    document.title = currentConfig.title;

    // دالة مساعدة لتحديث وسوم الـ meta بسلاسة
    const updateMeta = (nameOrProperty: string, value: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // دالة لتحديث الرابط الأساسي Canonical
    const updateCanonical = (url: string) => {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    };

    const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://sulaimanal-huwaiti.vercel.app${pathname}`;

    // تحديث الأوصاف والكلمات الدلالية ومحركات البحث
    updateMeta('description', currentConfig.description);
    updateMeta('keywords', currentConfig.keywords);
    updateMeta('title', currentConfig.title);
    
    // وسوم OpenGraph للمشاركة على وسائل التواصل
    updateMeta('og:title', currentConfig.title, true);
    updateMeta('og:description', currentConfig.description, true);
    updateMeta('og:url', currentUrl, true);
    
    // وسوم Twitter
    updateMeta('twitter:title', currentConfig.title);
    updateMeta('twitter:description', currentConfig.description);

    // تحديث الرابط القانوني Canonical
    updateCanonical(currentUrl);

  }, [pathname]);

  // مكون خفي تماماً ولا يُنشئ أي عناصر مرئية للزائر
  return null;
}
