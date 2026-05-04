import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
  return (
    <div className="min-h-screen section-seamless pt-20">
      <PageHeader
        title="تواصل معنا"
        subtitle="نحن هنا لخدمتكم على مدار الساعة"
        gradient="from-red-600 via-rose-500 to-red-800"
      />
      <Contact />
      <Footer />
    </div>
  );
}