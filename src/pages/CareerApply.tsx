import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '../components/Footer';

interface CareerApplyProps {
  title: string;
  description: string;
  embedUrl: string;
}

const CareerApply = ({ title, description, embedUrl }: CareerApplyProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 selection:bg-[#2c3e2d]/10 selection:text-[#2c3e2d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-stone-50/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <button
            className="text-xl md:text-2xl font-black tracking-wider text-neutral-900"
            onClick={() => navigate('/')}
          >
            TIF <span className="font-light text-[#2c3e2d]">CAREERS</span>
          </button>

          <nav className="hidden items-center gap-4 md:flex">
            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
              onClick={() => navigate('/automation')}
            >
              TIF Automations
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
              onClick={() => navigate('/consulting')}
            >
              TIF Consulting
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
              onClick={() => navigate('/about')}
            >
              About Us
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-20">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2c3e2d]/80">
                  Application form
                </p>
                <h1 className="mt-4 text-3xl font-black text-neutral-950 sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{description}</p>
              </div>
              <Button
                className="rounded-full bg-[#2c3e2d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1f2f25]"
                onClick={() => navigate('/careers')}
              >
                Back to Careers
              </Button>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-0 shadow-sm">
              <iframe
                src={embedUrl}
                title={`Apply for ${title}`}
                className="min-h-[80vh] w-full border-0"
                allow="camera;microphone;clipboard-write"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareerApply;
