
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, Search, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ArrowUp,
      title: "Smart Systems Integration",
      description: "AI automations, no-code/low-code ops, internal tooling that actually works.",
      details: "Transform manual processes into intelligent workflows that scale with your growth."
    },
    {
      icon: Search,
      title: "Marketing Reinvention",
      description: "Positioning, demand generation, funnel optimization that converts.",
      details: "Cut through the noise with messaging that resonates and systems that deliver."
    },
    {
      icon: Calendar,
      title: "Strategic Clarity",
      description: "Go-to-market planning, business model design, growth roadmaps.",
      details: "Turn ambition into actionable plans with clear milestones and measurable outcomes."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">What We Do</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just solve problems. We architect solutions that compound over time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group md:hover:shadow-2xl transition-all duration-500 md:hover:scale-105 border-none bg-gradient-to-br from-white to-stone-50 md:hover:from-stone-50 md:hover:to-white"
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-[#2c3e2d] rounded-xl flex items-center justify-center mb-4 md:group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{service.description}</p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {service.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
