import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Calculators from './pages/Calculators';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Loading spinner
const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-[#0A1628] border-t-[#C9A84C] rounded-full animate-spin" />
      <p className="font-body text-gray-500 text-sm">Loading…</p>
    </div>
  </div>
);

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">
          <Suspense fallback={<PageLoader />}>
            <AppRoutes />
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;
