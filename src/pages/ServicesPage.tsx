import Services from '@/components/sections/Services';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function ServicesPage() {
  return (
    <div className="min-h-screen section-seamless pt-20">
      <PageHeader
        title="مكتب تخليص جمركي وخدمات جمارك"
        subtitle="تخليص شاحنات وترانزيت وبضائع وحاويات عبر المنافذ والموانئ"
        gradient="from-purple-600 via-pink-600 to-purple-800"
      />
      <Services />
      <Footer />
    </div>
  );
}