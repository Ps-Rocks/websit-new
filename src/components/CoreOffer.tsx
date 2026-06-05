
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Mail, FileText, Workflow, BarChart3, Settings } from 'lucide-react';

const CoreOffer = () => {
  const automationTypes = [
    {
      icon: Mail,
      title: "GPT-Powered Communication",
      description: "Email & Slack bots that understand context and respond intelligently",
      examples: "Auto-triage customer inquiries, draft responses, schedule meetings"
    },
    {
      icon: FileText,
      title: "AI Document Processing",
      description: "Intelligent summarizers and triagers for content workflows",
      examples: "Contract analysis, report generation, data extraction"
    },
    {
      icon: Workflow,
      title: "API Integration Pipelines",
      description: "Connect disconnected systems with smart automation layers",
      examples: "CRM sync, payment processing, inventory management"
    },
    {
      icon: BarChart3,
      title: "Internal Dashboards & Tools",
      description: "Custom interfaces that surface the data you actually need",
      examples: "Performance tracking, team insights, operational metrics"
    },
    {
      icon: Settings,
      title: "Legacy System Automation",
      description: "RPA for older systems that resist modern integration",
      examples: "Data migration, process bridging, system modernization"
    },
    {
      icon: Bot,
      title: "Intelligent Assistants",
      description: "AI agents that handle routine tasks and decision-making",
      examples: "Lead qualification, appointment scheduling, data entry"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Core Offer: 
            <span className="block text-[#2c3e2d] dark:text-[#10b981]">Technical Automation</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            We build the AI-powered systems that eliminate manual work and multiply your team's leverage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {automationTypes.map((type, index) => (
            <Card
              key={index}
              className="group md:hover:shadow-xl transition-all duration-500 md:hover:scale-105 border-none bg-gradient-to-br from-white to-stone-50 dark:from-neutral-900/50 dark:to-neutral-950/50 md:hover:from-stone-50 md:hover:to-white dark:md:hover:from-neutral-850 dark:md:hover:to-neutral-900 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c3e2d]/5 to-transparent dark:from-[#10b981]/5 dark:to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#2c3e2d] dark:bg-[#10b981] rounded-2xl flex items-center justify-center mb-6 md:group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-8 h-8 text-white dark:text-neutral-950" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">{type.title}</h3>
                  <p className="text-gray-600 dark:text-neutral-400 mb-4 leading-relaxed">{type.description}</p>
                  <p className="text-sm text-gray-500 dark:text-neutral-500 italic">
                    Examples: {type.examples}
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

export default CoreOffer;
