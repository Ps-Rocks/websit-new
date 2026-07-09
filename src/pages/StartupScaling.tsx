
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, AlertCircle, Target, CheckCircle, TrendingUp, Mail, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartupScaling = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-stone-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why Most Startups Don't Scale, and How to Fix It
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The three critical frameworks that separate scaling startups from those that plateau at 10 employees
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
              "Most startups don't fail because of bad ideas. They fail because they can't systematize their good ideas."
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Scaling Trap</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hero Culture</h3>
              <p className="text-gray-600">Everything depends on the founder's personal involvement. No systems, no delegation, no scalability.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process Chaos</h3>
              <p className="text-gray-600">Every customer interaction is unique. No playbooks, no consistency, no predictable outcomes.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Plateaus</h3>
              <p className="text-gray-600">Growth hits a wall because operations can't support more complexity or volume.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-[#2c3e2d] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Three Scaling Frameworks</h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Systems Over Heroes</h3>
                <p className="text-gray-600 text-lg">Document every process that currently lives in someone's head. Build playbooks that work without the founder.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Metrics Before Feelings</h3>
                <p className="text-gray-600 text-lg">Measure what matters, not what's easy. Build dashboards that predict problems before they happen.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Culture That Scales</h3>
                <p className="text-gray-600 text-lg">Hire for systems thinking, not just domain expertise. Build a team that improves processes, not just executes them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <TrendingUp className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Scaling Actually Looks Like</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-2">10x → 100x</div>
              <p className="text-xl font-semibold text-gray-900">Revenue Growth</p>
              <p className="text-gray-600 mt-2">Without 10x operational complexity</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-2">{`<`}24 hrs</div>
              <p className="text-xl font-semibold text-gray-900">Decision Cycles</p>
              <p className="text-gray-600 mt-2">From weeks to hours</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-5xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-xl font-semibold text-gray-900">Process Automation</p>
              <p className="text-gray-600 mt-2">Predictable, repeatable outcomes</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-2">3-6 months</div>
              <p className="text-xl font-semibold text-gray-900">Time to Value</p>
              <p className="text-gray-600 mt-2">For new team members</p>
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
                "Scale is not about doing more. It's about doing the same thing better."
              </blockquote>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2c3e2d]">
              <blockquote className="text-2xl font-bold text-gray-900">
                "If you can't measure it, you can't systematize it."
              </blockquote>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2c3e2d]">
              <blockquote className="text-2xl font-bold text-gray-900">
                "Systems thinking is the only sustainable competitive advantage."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2c3e2d] to-[#1a2b1b]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to build systems that scale?
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
              <div className="space-y-2">
                <button
                  onClick={() => navigate('/blog/positioning-cost')}
                  className="block text-gray-600 hover:text-[#2c3e2d] transition-colors duration-200"
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
        </div>
      </footer>
    </div>
  );
};

export default StartupScaling;
