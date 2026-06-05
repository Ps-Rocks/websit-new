
import React from 'react';

const Thinking = () => {
  const insights = [
    {
      quote: "Not Every Problem Needs an App. Some Need a Better Framework.",
      context: "Most startups over-engineer solutions when a simple system redesign would suffice."
    },
    {
      quote: "Automation Without Strategy Is Just Expensive Chaos.",
      context: "The best tools in the world can't fix a fundamentally flawed process."
    },
    {
      quote: "Growth Isn't About Doing More. It's About Doing Better.",
      context: "Sustainable scaling comes from optimizing what works, not adding complexity."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Our Thinking</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Perspectives that challenge conventional wisdom and drive unconventional results.
          </p>
        </div>
        
        {/* Insights */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {insights.map((insight, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm md:hover:shadow-xl transition-all duration-300 md:hover:scale-105 border-l-4 border-[#2c3e2d] min-h-[10rem] md:h-64 flex flex-col justify-between">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                  "{insight.quote}"
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {insight.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thinking;
