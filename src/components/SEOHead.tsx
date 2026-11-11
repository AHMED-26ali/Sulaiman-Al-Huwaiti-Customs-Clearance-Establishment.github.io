import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageSEOConfig {
  title: string;
  description: string;
  canonicalPath: string;
}

const BASE_URL = 'https://sulaimanal-huwaiti.vercel.app';
const SITE_NAME = 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت';
const LOGO_URL = `${BASE_URL}/branding/logo.png`;
const OG_IMAGE_URL = `${BASE_URL}/branding/og-image.png?v=20261111-social`;
const DEFAULT_KEYWORDS = 'تخليص جمركي السعودية, مخلص جمركي ضبا, تخليص جمركي بري, تخليص جمركي بحري, الترانزيت, موانئ السعودية, منفذ البطحاء, منفذ الحديثة, ميناء ضبا, ميناء جدة الإسلامي, فسح جمركي';

const PAGE_SEO_MAP: Record<string, PageSEOConfig> = {
  '/': {
    title: 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت | السعودية',
    description: 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت في السعودية، تقدم خدمات الفسح الجمركي بالموانئ البحرية والمنافذ البرية ومتابعة معاملات الاستيراد والتصدير.',
    canonicalPath: '/'
  },
  '/services': {
    title: 'خدمات التخليص الجمركي والترانزيت | مؤسسة سليمان الحويطي',
    description: 'خدمات متكاملة في التخليص الجمركي الشامل للبضائع، النقل البري والترانزيت الدولي، الشحن البحري، والاستشارات الجمركية والتجارية في السعودية.',
    canonicalPath: '/services'
  },
  '/branches': {
    title: 'الموانئ والمنافذ الجمركية المعتمدة | مؤسسة سليمان الحويطي',
    description: 'خدمات المؤسسة في الموانئ والمنافذ السعودية: ميناء جدة الإسلامي، ميناء نيوم وضبا، ميناء الدمام، ميناء ينبع، الحديثة، البطحاء، جسر الملك فهد، سلوى والدرة.',
    canonicalPath: '/branches'
  },
  '/why-us': {
    title: 'لماذا نحن | مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت',
    description: 'تعرف على مقومات الثقة لدى مؤسسة سليمان الحويطي: ترخيص معتمد، سرعة الفسح الجمركي، دقة الإجراءات، متابعة ميدانية 24/7، وشبكة واسعة تغطي منافذ المملكة.',
    canonicalPath: '/why-us'
  },
  '/blog': {
    title: 'المدونة الجمركية | مؤسسة سليمان الحويطي',
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

    // Keep server-side canonical and JSON-LD when loading the page directly.
    // Only update the existing page schema on client-side navigation.
    const incomingCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;

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

    // 2. تحديث الوصف التعريفي للصفحة والكلمات المفتاحية
    setMetaTag('name', 'description', config.description);
    setMetaTag('name', 'keywords', DEFAULT_KEYWORDS);

    // 3. تحديث وسوم Open Graph للمشاركة الاجتماعية
    setMetaTag('property', 'og:title', config.title);
    setMetaTag('property', 'og:description', config.description);
    setMetaTag('property', 'og:url', pageUrl);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:image', OG_IMAGE_URL);
    setMetaTag('property', 'og:image:secure_url', OG_IMAGE_URL);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:type', 'image/png');
    setMetaTag('property', 'og:image:alt', 'شعار مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت');

    // 4. تحديث وسوم Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', config.title);
    setMetaTag('name', 'twitter:description', config.description);
    setMetaTag('name', 'twitter:image', OG_IMAGE_URL);
    setMetaTag('name', 'twitter:image:alt', 'مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت');

    // 5. تحديث الرابط الأساسي Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // 6. تحديث كود Schema JSON-LD لكل مسار
    let schemaScript = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    // The original HTML contains richer route-specific JSON-LD: do not overwrite it
    // on direct entry, and never insert duplicate ProfessionalService schemas.
    if (incomingCanonical === pageUrl && schemaScript.textContent?.trim()) {
      return;
    }

    let pageSchema: object;
    if (pathname === '/services') {
      pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'خدمات التخليص الجمركي والترانزيت',
        'serviceType': 'تخليص جمركي وترانزيت وخدمات لوجستية',
        'provider': {
          '@type': 'ProfessionalService',
          'name': SITE_NAME,
          'url': BASE_URL,
          'telephone': '+966559586786'
        },
        'description': config.description
      };
    } else if (pathname === '/branches') {
      pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'الموانئ والمنافذ الجمركية المعتمدة',
        'description': config.description
      };
    } else if (pathname === '/why-us') {
      pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': config.title,
        'description': config.description
      };
    } else if (pathname === '/blog') {
      pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': 'المدونة الجمركية ودليل الاستيراد والتصدير',
        'description': config.description
      };
    } else if (pathname === '/contact') {
      pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': config.title,
        'description': config.description,
        'mainEntity': {
          '@type': 'ProfessionalService',
          'name': SITE_NAME,
          'telephone': '+966559586786'
        }
      };
    } else {
      pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': SITE_NAME,
        'description': config.description,
        'url': BASE_URL,
        'telephone': '+966559586786'
      };
    }
    schemaScript.textContent = JSON.stringify(pageSchema);

  }, [pathname]);

  // المكون يعمل في الخلفية بالكامل وبدون أي أثر مرئي في الواجهة
  return null;
}
