
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 md:py-28 bg-gradient-to-br from-[#2c3e2d] to-[#1a2b1b] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
          Let's Automate What's
          <br />
          <span className="bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent">
            Slowing You Down
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-stone-200 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto">
          Stop letting manual processes limit your growth. Get a free automation audit 
          and discover exactly where AI can multiply your team's leverage.
        </p>
        
        <div className="mb-8 md:mb-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Quick Assessment</h3>
              <p className="text-stone-300 text-sm">15-minute call to identify your biggest automation opportunities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Custom Roadmap</h3>
              <p className="text-stone-300 text-sm">Tailored automation strategy for your specific workflows</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Implementation Plan</h3>
              <p className="text-stone-300 text-sm">Clear next steps to start automating your highest-impact processes</p>
            </div>
          </div>
        </div>
        
        <Button 
          className="bg-white hover:bg-stone-100 text-[#2c3e2d] px-10 md:px-12 py-6 md:py-8 text-xl md:text-2xl font-bold rounded-xl transition-all duration-300 md:hover:scale-105 md:hover:shadow-2xl group mobile-touch-button"
          onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
        >
          <Calendar className="w-6 md:w-7 h-6 md:h-7 mr-3 md:mr-4 md:group-hover:rotate-12 transition-transform duration-300" />
          Book a Free Automation Audit
          <ArrowRight className="w-6 md:w-7 h-6 md:h-7 ml-3 md:ml-4 md:group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-stone-500">
          <p className="text-stone-400 text-sm md:text-base mb-4">
            No sales pitch. Just a strategic diagnosis of your automation potential.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-stone-300 text-xs md:text-sm">
            <span>✓ Identify high-impact automation opportunities</span>
            <span>✓ Calculate potential time and cost savings</span>
            <span>✓ Get a custom implementation roadmap</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
