
import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnose",
      description: "We dissect your current state, identify bottlenecks, and map opportunity gaps.",
      detail: "Deep-dive analysis of your operations, market position, and growth barriers."
    },
    {
      number: "02", 
      title: "Architect",
      description: "We design systems and strategies that fit your unique context and ambitions.",
      detail: "Custom frameworks, automation blueprints, and go-to-market strategies."
    },
    {
      number: "03",
      title: "Deploy",
      description: "We implement with precision, measure what matters, and iterate for impact.",
      detail: "Hands-on execution with continuous optimization and performance tracking."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Process</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Three phases that transform complexity into clarity, then clarity into growth.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line - hidden on mobile */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2c3e2d] via-[#2c3e2d] to-[#2c3e2d] opacity-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative z-10 bg-white border-4 border-[#2c3e2d] rounded-full w-16 md:w-24 h-16 md:h-24 mx-auto mb-6 md:mb-8 flex items-center justify-center md:group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg md:text-2xl font-bold text-[#2c3e2d]">{step.number}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{step.description}</p>
                <p className="text-xs md:text-sm text-gray-500 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
