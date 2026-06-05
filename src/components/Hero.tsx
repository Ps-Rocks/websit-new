
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Bot, Workflow, Zap } from 'lucide-react';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('busywork');
  const textOptions = ['busywork', 'manual work', 'repetitive tasks'];
  
  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    
    const interval = setInterval(() => {
      setAnimatedText(prev => {
        const currentIndex = textOptions.indexOf(prev);
        return textOptions[(currentIndex + 1) % textOptions.length];
      });
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-stone-50 to-cream-50 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            AI Automation & Technical Consulting That Eliminates Manual Work
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto">
            We build AI-powered systems and custom tools to eliminate{' '}
            <span className="font-semibold text-[#2c3e2d] transition-all duration-500 ease-in-out">
              {animatedText}
            </span>
            {' '}and unlock deep leverage for your business.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white px-8 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-xl transition-all duration-300 md:hover:scale-105 md:hover:shadow-lg mobile-touch-button"
              onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
            >
              Get a Free Automation Diagnosis
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2c3e2d] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Workflows</h3>
              <p className="text-gray-600 text-sm">GPT-based systems that think and act</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2c3e2d] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Automation</h3>
              <p className="text-gray-600 text-sm">Tailored tools for your unique processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2c3e2d] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Integration</h3>
              <p className="text-gray-600 text-sm">Connecting your existing systems seamlessly</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
