
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  useEffect(() => {
    // Redirect to Calendly immediately
    window.location.href = 'https://calendly.com/theinsightfoundry/30min';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Redirecting to Your Automation Audit...
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            You're being redirected to book your free automation diagnosis.
            <br />
            If you're not redirected automatically, click the button below.
          </p>
          
          <Button 
            className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
          >
            <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Book Your Automation Audit
          </Button>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="text-gray-500 hover:text-[#2c3e2d] transition-colors text-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
