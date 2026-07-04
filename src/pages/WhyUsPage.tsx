import { lazy, Suspense } from 'react';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

// Lazy loading لمكون WhyUs لتحسين الأداء
const WhyUs = lazy(() => import('@/components/sections/WhyUs'));

// مكون Fallback بسيط أثناء التحميل
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-white text-xl">جاري التحميل...</div>
  </div>
);

export default function WhyUsPage() {
  return (
    <div className="min-h-screen section-seamless pt-20">
      <PageHeader
        title="لماذا نحن"
        subtitle="خبرة تمتد لسنوات في مجال التخليص الجمركي"
        gradient="from-pink-600 via-red-500 to-pink-800"
      />
      <Suspense fallback={<LoadingFallback />}>
        <WhyUs />
      </Suspense>
      <Footer />
    </div>
  );
}
