
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, PenTool, Wrench, RotateCcw, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      number: "01",
      title: "Diagnose",
      icon: Search,
      description: "We audit your current workflows to identify automation opportunities and bottlenecks.",
      details: [
        "Process mapping and workflow analysis",
        "Identify repetitive manual tasks",
        "Assess current tool stack and integrations",
        "Calculate automation ROI potential"
      ],
      example: "Customer service team spending 6 hours/day on email triage"
    },
    {
      number: "02", 
      title: "Architect",
      icon: PenTool,
      description: "We design intelligent systems that fit seamlessly into your existing operations.",
      details: [
        "Custom automation blueprint creation",
        "API integration planning",
        "AI workflow design",
        "User interface mockups"
      ],
      example: "GPT-powered email classifier with automated routing and response drafting"
    },
    {
      number: "03",
      title: "Build",
      icon: Wrench,
      description: "We develop and deploy the automation tools, ensuring they work flawlessly with your team.",
      details: [
        "Custom development and AI training",
        "System integration and testing",
        "User interface development",
        "Performance optimization"
      ],
      example: "Deploy intelligent email bot with 95% accuracy rate"
    },
    {
      number: "04",
      title: "Iterate",
      icon: RotateCcw,
      description: "We continuously optimize based on real-world performance and evolving needs.",
      details: [
        "Performance monitoring and analytics",
        "User feedback integration",
        "Continuous improvement cycles",
        "Scaling and expansion planning"
      ],
      example: "Expand from email to Slack, add sentiment analysis, increase automation coverage"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From manual chaos to intelligent automation in four strategic phases.
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-16">
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#2c3e2d] to-[#2c3e2d] opacity-20"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`text-center group cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative z-10 w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-[#2c3e2d] shadow-2xl shadow-[#2c3e2d]/25' 
                    : 'bg-white border-4 border-[#2c3e2d] group-hover:bg-[#2c3e2d]'
                }`}>
                  <step.icon className={`w-12 h-12 transition-colors duration-300 ${
                    activeStep === index ? 'text-white' : 'text-[#2c3e2d] group-hover:text-white'
                  }`} />
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-white text-[#2c3e2d]' 
                      : 'bg-[#2c3e2d] text-white'
                  }`}>
                    {step.number}
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  activeStep === index ? 'text-[#2c3e2d]' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`transition-all duration-300 cursor-pointer ${
                activeStep === index 
                  ? 'border-[#2c3e2d] shadow-lg scale-105' 
                  : 'border-gray-200 hover:shadow-md hover:scale-102'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                    activeStep === index ? 'bg-[#2c3e2d]' : 'bg-gray-100'
                  }`}>
                    <step.icon className={`w-6 h-6 ${
                      activeStep === index ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-gray-500 mr-3">{step.number}</span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ml-auto transition-transform duration-300 ${
                    activeStep === index ? 'rotate-90 text-[#2c3e2d]' : 'text-gray-400'
                  }`} />
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {activeStep === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="space-y-2 mb-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#2c3e2d] rounded-full mr-3"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#2c3e2d]/5 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Example:</span> {step.example}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Step Details (Desktop) */}
        <div className="hidden lg:block">
          <Card className="border-[#2c3e2d] shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {steps[activeStep].title} Phase
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                  <div className="space-y-3">
                    {steps[activeStep].details.map((detail, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#2c3e2d] rounded-full mr-4"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#2c3e2d]/5 to-[#2c3e2d]/10 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Real-World Example:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {steps[activeStep].example}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
