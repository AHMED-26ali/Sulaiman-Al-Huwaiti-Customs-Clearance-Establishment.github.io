import Branches from '@/components/sections/Branches';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function BranchesPage() {
  return (
    <div className="min-h-screen section-seamless pt-20">
      <PageHeader
        title="فروعنا"
        subtitle="حضور واسع في جميع المنافذ الحدودية السعودية"
        gradient="from-orange-500 via-amber-500 to-orange-700"
      />
      <Branches />
      <Footer />
    </div>
  );
}