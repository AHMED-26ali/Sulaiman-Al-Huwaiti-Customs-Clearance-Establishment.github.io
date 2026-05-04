import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage from './pages/WhyUsPage';
import BranchesPage from './pages/BranchesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import WelcomeScreen from './components/WelcomeScreen';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

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
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/why-us" element={<WhyUsPage />} />
                    <Route path="/branches" element={<BranchesPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
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