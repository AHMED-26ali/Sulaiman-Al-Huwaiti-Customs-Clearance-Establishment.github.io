import Blog from '@/components/sections/Blog';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function BlogPage() {
  return (
    <div className="min-h-screen section-seamless pt-20">
      <PageHeader
        title="المدونة"
        subtitle="آخر الأخبار والمقالات في مجال التخليص الجمركي"
        gradient="from-indigo-600 via-blue-600 to-indigo-800"
      />
      <Blog />
      <Footer />
    </div>
  );
}