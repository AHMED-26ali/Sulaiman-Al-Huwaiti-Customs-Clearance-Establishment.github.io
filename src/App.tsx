import { useState, lazy, Suspense } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading للصفحات - كل صفحة هتتحمل لوحدها
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const BranchesPage = lazy(() => import('./pages/BranchesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

// مكون Fallback بسيط أثناء التحميل
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
          <AnimatePresence mode="wait">
            {showWelcome ? (
              <WelcomeScreen key="welcome" onComplete={handleWelcomeComplete} />
            ) : (
              <motion.div
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <BrowserRouter>
                  <ScrollToTop />
                  <Header />
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
                </BrowserRouter>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
