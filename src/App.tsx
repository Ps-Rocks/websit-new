
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import { findMeta, SITE_URL } from "./lib/seo";
import Home from "./pages/Home";
const Stories = lazy(() => import("./pages/Stories"));
const Careers = lazy(() => import("./pages/Careers"));
const CareersCmo = lazy(() => import("./pages/CareersCmo"));
const CareersCto = lazy(() => import("./pages/CareersCto"));
const CareersGrowthIntern = lazy(() => import("./pages/CareersGrowthIntern"));
const CareersAssociateIntern = lazy(() => import("./pages/CareersAssociateIntern"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const InternshipTerms = lazy(() => import("./pages/InternshipTerms"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const Blog = lazy(() => import("./pages/Blog"));

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change (hash links scroll to their section instead)
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// Keeps <head> in sync on client-side navigation (the prerendered HTML sets it for first load).
// Routes without an entry (job forms, 404) manage their own title.
const setMeta = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

const RouteMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = findMeta(pathname);
    if (!m) return;
    const url = `${SITE_URL}${pathname}`;
    document.title = m.title;
    setMeta('meta[name="description"]', 'content', m.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', m.title);
    setMeta('meta[property="og:description"]', 'content', m.description);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-[#050706]" />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/stories" element={<PageWrapper><Stories /></PageWrapper>} />
        <Route path="/consulting" element={<Navigate to="/#services" replace />} />
        <Route path="/automation" element={<Navigate to="/#services" replace />} />
        <Route path="/testimonials" element={<Navigate to="/stories" replace />} />
        <Route path="/book-call" element={<PageWrapper><BookingPage /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/careers/cmo" element={<PageWrapper><CareersCmo /></PageWrapper>} />
        <Route path="/careers/cto" element={<PageWrapper><CareersCto /></PageWrapper>} />
        <Route path="/careers/growth-intern" element={<PageWrapper><CareersGrowthIntern /></PageWrapper>} />
        <Route path="/careers/associate-consultant-intern" element={<PageWrapper><CareersAssociateIntern /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogIndex /></PageWrapper>} />
        <Route path="/blog/:slug" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/internship-terms" element={<PageWrapper><InternshipTerms /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteMeta />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
