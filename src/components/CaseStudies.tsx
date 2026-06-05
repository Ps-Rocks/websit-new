
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, Users, Zap } from 'lucide-react';

const CaseStudies = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "40%",
      title: "Reduction in Manual Operations",
      description: "Using GPT workflows and intelligent automation pipelines",
      details: "Customer service team automated email triage, response drafting, and ticket routing",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      metric: "25 hours",
      title: "Weekly Time Savings",
      description: "Per team member through process automation",
      details: "Document processing, data entry, and report generation fully automated",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      metric: "3x",
      title: "Productivity Multiplier",
      description: "Same team handling 3x the volume without burnout",
      details: "AI assistants handle routine tasks while humans focus on strategy and relationships",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      metric: "95%",
      title: "Accuracy Rate",
      description: "AI-powered systems outperforming manual processes",
      details: "Intelligent classification and processing with continuous learning and improvement",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Real Results
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            These aren't theoretical benefits. They're actual outcomes from technical automation implementations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {results.map((result, index) => (
            <Card
              key={index}
              className="group md:hover:shadow-2xl transition-all duration-500 md:hover:scale-105 border-none bg-gradient-to-br from-white to-stone-50 dark:from-neutral-900/50 dark:to-neutral-950/50 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 md:group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardContent className="p-6 md:p-8 text-center relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-6 md:group-hover:scale-110 transition-transform duration-300`}>
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{result.metric}</h3>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-stone-200 mb-3">{result.title}</h4>
                <p className="text-gray-600 dark:text-neutral-400 mb-4 leading-relaxed text-sm">{result.description}</p>
                <p className="text-xs text-gray-500 dark:text-neutral-500 italic">
                  {result.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-br from-[#2c3e2d] to-[#1a2b1b] dark:from-[#0d9468] dark:to-[#053e2a] text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                From Manual Chaos to Intelligent Operations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-300 dark:text-[#10b981]">Before Automation</h4>
                  <ul className="text-sm space-y-2 text-stone-205 dark:text-stone-200">
                    <li>• 6 hours/day on email triage</li>
                    <li>• Manual data entry errors</li>
                    <li>• Inconsistent processes</li>
                    <li>• Team burnout from repetition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-300 dark:text-[#10b981]">Implementation</h4>
                  <ul className="text-sm space-y-2 text-stone-205 dark:text-stone-200">
                    <li>• GPT-powered email classification</li>
                    <li>• Automated response generation</li>
                    <li>• Smart routing and escalation</li>
                    <li>• Real-time performance tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-300 dark:text-[#10b981]">After Automation</h4>
                  <ul className="text-sm space-y-2 text-stone-205 dark:text-stone-200">
                    <li>• 30 minutes/day oversight</li>
                    <li>• 95% accuracy rate</li>
                    <li>• Consistent, optimized workflows</li>
                    <li>• Team focused on strategy</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-stone-200 leading-relaxed">
                The transformation isn't just about efficiency. It's about unlocking your team's potential
                to work on what actually matters.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
