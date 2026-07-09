
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, AlertCircle, Target, CheckCircle, DollarSign, Mail, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PositioningCost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-stone-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Hidden Cost of Poor Positioning (And How to Measure It)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Why most companies lose 40% of their potential revenue to positioning problems they don't even know they have
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
              "If your customers can't explain what you do in one sentence, you're leaving money on the table."
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Invisible Revenue Leak</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Confused Messaging</h3>
              <p className="text-gray-600">Prospects can't figure out if you're for them. Decision cycles stretch from weeks to months.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Price Pressure</h3>
              <p className="text-gray-600">When value isn't clear, everything becomes a commodity. Margins get compressed in price wars.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wrong Customers</h3>
              <p className="text-gray-600">You attract price-sensitive buyers instead of value-conscious decision makers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-[#2c3e2d] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Measure Positioning Impact</h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversion Audit</h3>
                <p className="text-gray-600 text-lg">Track where prospects drop off. Poor positioning shows up as high traffic, low conversions.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Cycle Analysis</h3>
                <p className="text-gray-600 text-lg">Measure time from first contact to close. Confused positioning = longer sales cycles.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="bg-[#2c3e2d] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Price Realization</h3>
                <p className="text-gray-600 text-lg">Compare your average deal size to market rates. Clear value = premium pricing power.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <DollarSign className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Good Positioning Delivers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-5xl font-bold text-green-600 mb-2">3x</div>
              <p className="text-xl font-semibold text-gray-900">Conversion Rates</p>
              <p className="text-gray-600 mt-2">From website to qualified lead</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-2">50% Shorter</div>
              <p className="text-xl font-semibold text-gray-900">Sales Cycles</p>
              <p className="text-gray-600 mt-2">Less education, faster decisions</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600 mb-2">25-40%</div>
              <p className="text-xl font-semibold text-gray-900">Price Premium</p>
              <p className="text-gray-600 mt-2">Value-based vs cost-based pricing</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl text-center border-l-4 border-green-500">
              <div className="text-5xl font-bold text-green-600 mb-2">90%</div>
              <p className="text-xl font-semibold text-gray-900">Customer Retention</p>
              <p className="text-gray-600 mt-2">Right fit customers stay longer</p>
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
                "Positioning isn't marketing fluff. It's revenue architecture."
              </blockquote>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2c3e2d]">
              <blockquote className="text-2xl font-bold text-gray-900">
                "If you compete on price, you've already lost the positioning game."
              </blockquote>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2c3e2d]">
              <blockquote className="text-2xl font-bold text-gray-900">
                "Clear positioning doesn't just improve marketing. It improves everything."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2c3e2d] to-[#1a2b1b]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to fix your positioning problem?
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

export default PositioningCost;
