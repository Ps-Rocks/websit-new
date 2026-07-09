
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, AlertCircle, Target, CheckCircle, ArrowRight, Mail, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GptCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-stone-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How We Used GPT to Reduce a Client's Manual Workload by 40%
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A real-world breakdown of how we used OpenAI's GPT to automate and simplify internal ops
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <span className="font-semibold">The Insight Foundry</span>
              <span>•</span>
              <span>December 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Quote */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#2c3e2d] rounded-2xl p-12 text-center">
            <blockquote className="text-3xl md:text-4xl font-bold text-white leading-tight">
              "If it takes 8 hours and a spreadsheet, you're already doing it wrong."
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Problem</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manual Ticket Triage</h3>
              <p className="text-gray-600">Team spent hours categorizing and prioritizing customer tickets with no clear system.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excel Hell</h3>
              <p className="text-gray-600">Endless spreadsheet updates and templated email responses consuming valuable time.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Frustration</h3>
              <p className="text-gray-600">Hours lost on repetitive tasks, no structure, and declining team morale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-[#2c3e2d] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Observe</h3>
                <p className="text-gray-600 text-lg">Shadowed the team for a full week, identified bottlenecks, and mapped out every manual touchpoint in their workflow.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Design</h3>
                <p className="text-gray-600 text-lg">Created a GPT-powered summarizer + tagger + auto-reply generator that understood their specific business context.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Embed</h3>
                <p className="text-gray-600 text-lg">Integrated into internal tools with minimal code (Flask + Airtable) to ensure seamless adoption.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Outcome</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-5xl font-bold text-green-600 mb-2">40%</div>
              <p className="text-xl font-semibold text-gray-900">Less Manual Work</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-2">3 hrs → 25 mins</div>
              <p className="text-xl font-semibold text-gray-900">Meeting Prep Time</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-5xl font-bold text-green-600 mb-2">60%</div>
              <p className="text-xl font-semibold text-gray-900">Faster Response Time</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-2">📈</div>
              <p className="text-xl font-semibold text-gray-900">Team Morale Up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Takeaways</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2c3e2d]">
              <blockquote className="text-2xl font-bold text-gray-900">
                "AI doesn't replace people. It replaces repetitive decisions."
              </blockquote>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2c3e2d]">
              <blockquote className="text-2xl font-bold text-gray-900">
                "Small custom tools {`>`} Big, bloated platforms."
              </blockquote>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2c3e2d]">
              <blockquote className="text-2xl font-bold text-gray-900">
                "Start with observation, not assumptions."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2c3e2d] to-[#1a2b1b]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Want to see what this could look like for your team?
          </h2>
          <Button 
            className="bg-white hover:bg-stone-100 text-[#2c3e2d] px-10 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => navigate('/book-call')}
          >
            <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Book a Free Strategy Call
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Insights</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate('/blog/startup-scaling')}
                  className="block text-left text-gray-600 hover:text-[#2c3e2d] transition-colors duration-200 leading-relaxed"
                >
                  Why Most Startups Don't Scale
                </button>
                <button 
                  onClick={() => navigate('/blog/positioning-cost')}
                  className="block text-left text-gray-600 hover:text-[#2c3e2d] transition-colors duration-200 leading-relaxed"
                >
                  The Hidden Cost of Poor Positioning
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
              <a href="mailto:office@theinsightfoundry.org" className="flex items-center text-gray-600 hover:text-[#2c3e2d] transition-colors duration-200">
                <Mail className="w-5 h-5 mr-2" />
                office@theinsightfoundry.org
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Navigate</h3>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-[#2c3e2d] transition-colors duration-200"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-stone-200 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 The Insight Foundry. All rights reserved. | 
              <a href="https://theinsightfoundry.vercel.app" className="hover:text-[#2c3e2d] transition-colors duration-200 ml-1">
                theinsightfoundry.vercel.app
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GptCaseStudy;
