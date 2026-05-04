import WhyUs from '@/components/sections/WhyUs';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function WhyUsPage() {
  return (
    <div className="min-h-screen section-seamless pt-20">
      <PageHeader
        title="لماذا نحن"
        subtitle="خبرة تمتد لسنوات في مجال التخليص الجمركي"
        gradient="from-pink-600 via-red-500 to-pink-800"
      />
      <WhyUs />
      <Footer />
    </div>
  );
}