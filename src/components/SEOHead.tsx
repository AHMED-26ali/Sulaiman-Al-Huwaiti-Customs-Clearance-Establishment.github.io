import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageSEOConfig {
  title: string;
  description: string;
  canonicalPath: string;
}

const BASE_URL = 'https://sulaimanal-huwaiti.vercel.app';
const SITE_NAME = 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت';
const LOGO_URL = `${BASE_URL}/images/Logo.jpg`;

const PAGE_SEO_MAP: Record<string, PageSEOConfig> = {
  '/': {
    title: 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت | السعودية',
    description: 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت في السعودية. خبرة تزيد عن 15 عاماً في التخليص الجمركي البحري والبري عبر الموانئ والمنافذ الحدودية المعتمدة بالمملكة.',
    canonicalPath: '/'
  },
  '/services': {
    title: 'خدمات التخليص الجمركي والترانزيت | مؤسسة سليمان الحويطي',
    description: 'خدمات متكاملة في التخليص الجمركي الشامل للبضائع، النقل البري والترانزيت الدولي، الشحن البحري، والاستشارات الجمركية والتجارية في السعودية.',
    canonicalPath: '/services'
  },
  '/branches': {
    title: 'الموانئ والمنافذ الجمركية المعتمدة | مؤسسة سليمان الحويطي',
    description: 'تغطية جغرافية عبر أهم الموانئ والمنافذ السعودية: ميناء جدة الإسلامي، ميناء نيوم وضبا، ميناء الدمام، ميناء ينبع، ومنافذ الحديثة، البطحاء، جسر الملك فهد، سلوى والدرة.',
    canonicalPath: '/branches'
  },
  '/why-us': {
    title: 'لماذا نحن | مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت',
    description: 'تعرف على مقومات الثقة لدى مؤسسة سليمان الحويطي: ترخيص معتمد، سرعة الفسح الجمركي، دقة الإجراءات، متابعة ميدانية 24/7، وشبكة واسعة تغطي منافذ المملكة.',
    canonicalPath: '/why-us'
  },
  '/blog': {
    title: 'المدونة الجمركية ودليل الاستيراد والتصدير | مؤسسة سليمان الحويطي',
    description: 'مقالات وإرشادات جمركية متخصصة حول إجراءات الاستيراد والتصدير في السعودية، اشتراطات الفسح الجمركي، واللوائح المعتمدة لتسهيل حركة التجارة.',
    canonicalPath: '/blog'
  },
  '/contact': {
    title: 'اتصل بنا | مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت',
    description: 'تواصل مباشرة مع المقر الرئيسي لمؤسسة سليمان الحويطي في ضبا أو شبكة فروعنا بالموانئ والمنافذ السعودية. استشارات وخدمات تخليص جمركي على مدار 24 ساعة.',
    canonicalPath: '/contact'
  }
};

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const config = PAGE_SEO_MAP[pathname] || PAGE_SEO_MAP['/'];
    const pageUrl = `${BASE_URL}${config.canonicalPath}`;

    // 1. تحديث عنوان الصفحة
    document.title = config.title;

    // دالة مساعدة لتحديث وسوم الميتا
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let meta = document.querySelector(`meta[${attr}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. تحديث الوصف التعريفي للصفحة
    setMetaTag('name', 'description', config.description);

    // 3. تحديث وسوم Open Graph للمشاركة الاجتماعية
    setMetaTag('property', 'og:title', config.title);
    setMetaTag('property', 'og:description', config.description);
    setMetaTag('property', 'og:url', pageUrl);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:image', LOGO_URL);

    // 4. تحديث وسوم Twitter
    setMetaTag('name', 'twitter:title', config.title);
    setMetaTag('name', 'twitter:description', config.description);
    setMetaTag('name', 'twitter:image', LOGO_URL);

    // 5. تحديث الرابط الأساسي Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

  }, [pathname]);

  // المكون يعمل في الخلفية بالكامل وبدون أي أثر مرئي في الواجهة
  return null;
}
