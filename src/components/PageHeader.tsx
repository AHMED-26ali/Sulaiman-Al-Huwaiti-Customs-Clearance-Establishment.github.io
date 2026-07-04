import { Link } from 'react-router-dom';
import { Home, ChevronLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradient: string;
}

export default function PageHeader({ title, subtitle, gradient }: PageHeaderProps) {
  return (
    <div className={`relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br ${gradient}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 mb-6 text-white/80">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300 group"
            aria-label="العودة للرئيسية"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>الرئيسية</span>
          </Link>
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          <span className="text-white font-semibold" aria-current="page">{title}</span>
        </nav>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
