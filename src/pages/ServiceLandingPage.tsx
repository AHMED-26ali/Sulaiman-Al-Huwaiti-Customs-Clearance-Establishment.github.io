import { Link, useLocation } from 'react-router-dom';
import servicePages from '@/data/serviceLandingPages.json';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

export default function ServiceLandingPage(){
  const {pathname}=useLocation();
  const page=servicePages[pathname as keyof typeof servicePages];
  if(!page) return null;
  return <div className="min-h-screen section-seamless pt-20" dir="rtl">
    <PageHeader title={page.heading} subtitle={page.subtitle} gradient="from-slate-900 via-blue-900 to-emerald-900"/>
    <article className="container mx-auto max-w-5xl px-4 py-12 text-white">
      <nav aria-label="مسار الصفحة" className="mb-6 text-cyan-200"><Link className="underline" to="/services">خدمات التخليص الجمركي</Link> / {page.heading}</nav>
      <p className="text-lg leading-9 rounded-2xl border border-white/15 bg-white/5 p-6 mb-8">{page.intro}</p>
      <div className="space-y-7">{page.sections.map(s=><section key={s.heading} className="rounded-2xl border border-white/15 bg-slate-950/40 p-6">
        <h2 className="text-xl md:text-2xl font-bold text-cyan-200 mb-4">{s.heading}</h2><p className="text-slate-200 leading-9">{s.body}</p>
        {s.points.length>0&&<ul className="list-disc list-inside text-slate-200 leading-9 mt-4">{s.points.map(p=><li key={p}>{p}</li>)}</ul>}
      </section>)}</div>
      <section className="my-12"><h2 className="text-2xl font-bold mb-6">الأسئلة الشائعة عن {page.heading}</h2>
        {page.faqs.map(f=><details key={f.question} className="border border-white/15 bg-white/5 rounded-xl px-5 py-4 mb-3">
          <summary className="font-bold cursor-pointer">{f.question}</summary><p className="text-slate-200 leading-8 mt-3">{f.answer}</p>
        </details>)}
      </section>
      <nav aria-label="خدمات أخرى" className="border-t border-white/15 pt-8">
        <h2 className="text-xl font-bold mb-5">خدمات ذات صلة</h2>
        <div className="flex flex-wrap gap-3">{Object.entries(servicePages).filter(([path])=>path!==pathname).map(([path,data])=><Link key={path} to={path} className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-cyan-100">{data.heading}</Link>)}
          <Link to="/branches" className="rounded-xl border border-white/20 px-5 py-3">الموانئ والمنافذ المشمولة</Link>
        </div>
      </nav>
      <section aria-label="طلب الخدمة" className="mt-12 rounded-2xl border border-emerald-400/25 bg-emerald-900/30 p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">هل تحتاج لمخلص جمركي لشحنتك؟</h2>
        <p className="text-slate-200 leading-8 mb-6">حدد نوع البضاعة والمنفذ ونوع الحركة، وتواصل مع المؤسسة لمعرفة المستندات المطلوبة.</p>
        <Link to="/contact" className="inline-block rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3">تواصل مع المكتب</Link>
      </section>
    </article><Footer />
  </div>;
}
