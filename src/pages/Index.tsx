
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Youtube } from 'lucide-react';
import Hero from '../components/Hero';
import CoreOffer from '../components/CoreOffer';
import WhyItMatters from '../components/WhyItMatters';
import HowItWorks from '../components/HowItWorks';
import SupportingLayers from '../components/SupportingLayers';
import Thinking from '../components/Thinking';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold text-[#2c3e2d]">
              The Insight Foundry
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Button
                variant="ghost"
                className="text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
                onClick={() => navigate('/about')}
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                className="text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
                onClick={() => navigate('/blog')}
              >
                Blogs
              </Button>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-3 border-l border-stone-200 pl-4">
                <a 
                  href="https://www.linkedin.com/company/the-insight-foundry-official" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#2c3e2d] transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/the_insight_foundry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#2c3e2d] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="http://www.youtube.com/@TheInsightFoundry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#2c3e2d] transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              
              <Button 
                className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white"
                onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              >
                Book Call
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-stone-200">
              <nav className="flex flex-col space-y-3 pt-4">
                <Button
                  variant="ghost"
                  className="justify-start text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
                  onClick={() => {
                    navigate('/about');
                    setMobileMenuOpen(false);
                  }}
                >
                  About Us
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
                  onClick={() => {
                    navigate('/blog');
                    setMobileMenuOpen(false);
                  }}
                >
                  Blogs
                </Button>
                
                {/* Mobile Social Links */}
                <div className="flex items-center gap-4 px-3 py-2">
                  <span className="text-sm text-gray-600">Follow us:</span>
                  <a 
                    href="https://www.linkedin.com/company/the-insight-foundry-official" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#2c3e2d] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/the_insight_foundry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#2c3e2d] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="http://www.youtube.com/@TheInsightFoundry" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#2c3e2d] transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
                
                <Button 
                  className="mx-3 bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white"
                  onClick={() => {
                    window.open('https://calendly.com/theinsightfoundry/30min', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  Book Call
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        <Hero />
        <CoreOffer />
        <WhyItMatters />
        <HowItWorks />
        <SupportingLayers />
        <Thinking />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
