import { useState, lazy, Suspense } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import SEOHead from '@/components/SEOHead';
import WelcomeScreen from './components/WelcomeScreen';
import ScrollToTop from './components/ScrollToTop';

// الصفحة الرئيسية يتم تحميلها مباشرة لتحسين LCP
import HomePage from './pages/HomePage';

// الصفحات الثانوية يتم تحميلها عند الحاجة فقط
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const BranchesPage = lazy(() => import('./pages/BranchesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-green-900">
    <div className="text-white text-xl">جاري التحميل...</div>
  </div>
);

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 bg-fixed">
          {showWelcome && (
            <WelcomeScreen
              key="welcome"
              onComplete={handleWelcomeComplete}
            />
          )}

          <BrowserRouter>
            <SEOHead />
            <ScrollToTop />
            <Header />

            <main id="main-content" role="main" tabIndex={-1}>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/why-us" element={<WhyUsPage />} />
                  <Route path="/branches" element={<BranchesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
