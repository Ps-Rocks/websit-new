
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-stone-50 to-cream-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold text-[#2c3e2d]">
              The Insight Foundry
            </div>
            <nav className="flex items-center gap-4">
              <Button 
                variant="ghost"
                className="text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
                onClick={() => navigate('/')}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button 
                className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white"
                onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              >
                Book Call
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-[#2c3e2d] mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track with our automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Button 
              onClick={() => navigate('/')}
              className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white px-6 py-3"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-[#2c3e2d] text-[#2c3e2d] hover:bg-[#2c3e2d] hover:text-white px-6 py-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-left hover:bg-gray-50"
                onClick={() => navigate('/about')}
              >
                About Our AI Automation Services
              </Button>
              <Button
                variant="ghost" 
                className="w-full justify-start text-left hover:bg-gray-50"
                onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>

          <div className="bg-[#2c3e2d] text-white rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
            <p className="mb-4">
              Contact us for technical automation consulting and AI-powered solutions.
            </p>
            <Button 
              variant="secondary"
              onClick={() => window.location.href = 'mailto:theinsightfoundry@gmail.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
