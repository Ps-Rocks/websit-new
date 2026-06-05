
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, CheckCircle, Brain, TrendingUp } from 'lucide-react';

const WhyItMatters = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Time Saved",
      stat: "20+ hours/week",
      description: "Reclaimed from manual processes and repetitive tasks",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Error Reduction",
      stat: "90% fewer",
      description: "Human errors in data processing and workflow execution",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "Strategic Focus",
      stat: "2x more",
      description: "Time available for high-value, creative problem-solving",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      stat: "Exponential",
      description: "Capacity to handle increasing workload without proportional hiring",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-stone-50 to-white dark:from-transparent dark:to-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Why It Matters
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c3e2d] dark:text-[#10b981] mb-6 leading-tight">
              "If your team is still copy-pasting, they're under-leveraged."
            </blockquote>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-400 leading-relaxed">
              Intelligent automation doesn't just save time. It transforms how your business operates.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group md:hover:shadow-2xl transition-all duration-500 md:hover:scale-105 border-none bg-white dark:bg-neutral-950 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 md:group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardContent className="p-6 md:p-8 text-center relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 md:group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-stone-200 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-neutral-400 leading-relaxed text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-950 p-8 md:p-12 rounded-3xl shadow-lg border border-neutral-100 dark:border-neutral-900">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Compound Effect of Automation
            </h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-400 leading-relaxed mb-8">
              Every automated process creates a multiplier effect. As your systems get smarter, 
              your team gets more leverage, and your business scales without the traditional constraints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#2c3e2d] dark:text-[#10b981] mb-2">Week 1</div>
                <div className="text-gray-600 dark:text-neutral-450">Initial automation deployment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2c3e2d] dark:text-[#10b981] mb-2">Month 1</div>
                <div className="text-gray-600 dark:text-neutral-450">Processes optimized & refined</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2c3e2d] dark:text-[#10b981] mb-2">Month 3</div>
                <div className="text-gray-600 dark:text-neutral-450">Compound leverage realized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
