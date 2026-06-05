
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp } from 'lucide-react';

const SupportingLayers = () => {
  const layers = [
    {
      icon: Target,
      title: "Strategy That Scales With Tech",
      description: "We help reframe operations to maximize your AI tools.",
      details: [
        "Process optimization for automation readiness",
        "Workflow redesign around intelligent systems",
        "Change management for AI adoption",
        "Performance metrics that matter"
      ],
      note: "Introduced after technical implementation to ensure maximum impact"
    },
    {
      icon: TrendingUp,
      title: "Marketing That Follows Systems",
      description: "We apply automation to performance campaigns, not just creative direction.",
      details: [
        "Automated lead scoring and nurturing",
        "Performance tracking and optimization",
        "Content personalization at scale",
        "Campaign data integration"
      ],
      note: "Built on top of your automated foundation for compound growth"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Supporting Layers
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Once your technical foundation is solid, we layer on strategic and marketing enhancements 
            that multiply your automation's impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {layers.map((layer, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none bg-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e2d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 md:p-10 relative z-10">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-[#2c3e2d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <layer.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{layer.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{layer.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {layer.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-[#2c3e2d] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-[#2c3e2d]/5 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      <span className="font-semibold">Note:</span> {layer.note}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border-2 border-[#2c3e2d]/10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Layered Approach
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We don't start with strategy or marketing. We start with the technical foundation that makes 
              everything else possible. Only then do we layer on the strategic and marketing enhancements 
              that turn your automation into a competitive advantage.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#2c3e2d] rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                <span className="text-gray-700 font-semibold">Technical Automation</span>
              </div>
              <div className="text-[#2c3e2d] text-2xl">→</div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#2c3e2d]/70 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                <span className="text-gray-700 font-semibold">Strategic Optimization</span>
              </div>
              <div className="text-[#2c3e2d] text-2xl">→</div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#2c3e2d]/40 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                <span className="text-gray-700 font-semibold">Marketing Amplification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportingLayers;
