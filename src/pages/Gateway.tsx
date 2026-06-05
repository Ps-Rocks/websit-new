import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Gateway() {
  const navigate = useNavigate();
  const [hoveredSide, setHoveredSide] = useState<'none' | 'consulting' | 'automation'>('none');

  return (
    <div className="relative min-h-screen w-screen overflow-hidden flex flex-col md:flex-row bg-neutral-950 select-none">
      
      {/* LEFT: TIF Consulting */}
      <div
        className={`relative flex-1 flex flex-col justify-between p-8 md:p-16 transition-all duration-700 ease-out cursor-pointer overflow-hidden ${
          hoveredSide === 'consulting'
            ? 'md:flex-[1.2] bg-stone-100'
            : hoveredSide === 'automation'
            ? 'md:flex-[0.8] bg-stone-50/90 opacity-40'
            : 'bg-stone-50'
        }`}
        onMouseEnter={() => setHoveredSide('consulting')}
        onMouseLeave={() => setHoveredSide('none')}
        onClick={() => navigate('/consulting')}
      >
        {/* Consulting background grid lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Top bar */}
        <div className="relative z-10 flex justify-between items-center">
          <span className="text-xs font-bold tracking-widest text-[#2c3e2d] uppercase">01 / Enterprise Strategy</span>
          <span className="text-xs text-neutral-400">EST. 2024</span>
        </div>

        {/* Content */}
        <div className="relative z-10 my-auto max-w-lg space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#2c3e2d]/5 border border-[#2c3e2d]/10 px-3 py-1 rounded-full text-xs font-semibold text-[#2c3e2d]">
            <Target className="w-3.5 h-3.5" />
            First-Principles Strategy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-none">
            TIF <br className="hidden md:block" />
            <span className="text-[#2c3e2d]">Consulting</span>
          </h1>
          <p className="text-lg text-neutral-600 font-normal leading-relaxed">
            Diagnose scaling constraints, optimize workflow mechanics, and design custom technological blueprints rooted in first-principles business thinking.
          </p>
          <div className="pt-4">
            <Button
              className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white px-6 py-5 text-md font-bold rounded-xl flex items-center gap-2 group transition-transform duration-300 hover:translate-x-1"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/consulting');
              }}
            >
              Enter Consulting Portal
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 text-xs text-neutral-500 font-semibold uppercase tracking-wider">
          Leverage Through Operational Clarity
        </div>
      </div>

      {/* RIGHT: TIF Automations */}
      <div
        className={`relative flex-1 flex flex-col justify-between p-8 md:p-16 transition-all duration-700 ease-out cursor-pointer overflow-hidden border-t md:border-t-0 md:border-l border-neutral-800 ${
          hoveredSide === 'automation'
            ? 'md:flex-[1.2] bg-neutral-900'
            : hoveredSide === 'consulting'
            ? 'md:flex-[0.8] bg-neutral-950 opacity-40'
            : 'bg-neutral-950'
        }`}
        onMouseEnter={() => setHoveredSide('automation')}
        onMouseLeave={() => setHoveredSide('none')}
        onClick={() => navigate('/automation')}
      >
        {/* Automations background grid lines */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          {/* Subtle neon glowing orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Top bar */}
        <div className="relative z-10 flex justify-between items-center">
          <span className="text-xs font-bold tracking-widest text-[#10b981] uppercase">02 / Technical Integration</span>
          <span className="text-xs text-neutral-500">SYSTEMS CO-PILOT</span>
        </div>

        {/* Content */}
        <div className="relative z-10 my-auto max-w-lg space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#10b981]">
            <Zap className="w-3.5 h-3.5" />
            AI & Workflow Automation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
            TIF <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">Automations</span>
          </h1>
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            Eliminate repetitive busywork with custom GPT integration, automated document processing, robust API linkages, and internal co-pilot tools.
          </p>
          <div className="pt-4">
            <Button
              className="bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 px-6 py-5 text-md font-bold rounded-xl flex items-center gap-2 group transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/automation');
              }}
            >
              Enter Automations Portal
              <ArrowRight className="w-4 h-4 text-[#10b981] transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
          Scale Through Machine Intelligence
        </div>
      </div>

    </div>
  );
}
