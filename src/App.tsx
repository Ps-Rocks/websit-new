
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Gateway from "./pages/Gateway";
import Consulting from "./pages/Consulting";
import Automation from "./pages/Automation";
import Careers from "./pages/Careers";
import CareersCmo from "./pages/CareersCmo";
import CareersCto from "./pages/CareersCto";
import CareersGrowthIntern from "./pages/CareersGrowthIntern";
import CareersAssociateIntern from "./pages/CareersAssociateIntern";
import BookingPage from "./pages/BookingPage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import GptCaseStudy from "./pages/GptCaseStudy";
import StartupScaling from "./pages/StartupScaling";
import PositioningCost from "./pages/PositioningCost";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Gateway /></PageWrapper>} />
        <Route path="/consulting" element={<PageWrapper><Consulting /></PageWrapper>} />
        <Route path="/automation" element={<PageWrapper><Automation /></PageWrapper>} />
        <Route path="/book-call" element={<PageWrapper><BookingPage /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/careers/cmo" element={<PageWrapper><CareersCmo /></PageWrapper>} />
        <Route path="/careers/cto" element={<PageWrapper><CareersCto /></PageWrapper>} />
        <Route path="/careers/growth-intern" element={<PageWrapper><CareersGrowthIntern /></PageWrapper>} />
        <Route path="/careers/associate-consulting-intern" element={<PageWrapper><CareersAssociateIntern /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/blog/gpt-automation" element={<PageWrapper><GptCaseStudy /></PageWrapper>} />
        <Route path="/blog/startup-scaling" element={<PageWrapper><StartupScaling /></PageWrapper>} />
        <Route path="/blog/positioning-cost" element={<PageWrapper><PositioningCost /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
