import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '../components/Footer';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

const GREEN = '#2c3e2d';
const AUTO = '#030303';
const ACCENT = '#10b981';

const s = (bg: string): React.CSSProperties => ({
  backgroundColor: bg,
  color: '#ffffff',
  paddingTop: '5.5rem',
});

const Divider = ({ dim }: { dim?: boolean }) => (
  <hr
    className="my-[2vw]"
    style={{
      border: 'none',
      borderTop: `1px solid rgba(255,255,255,${dim ? 0.1 : 0.2})`,
    }}
  />
);

const Label = ({ n, text, dim }: { n: string; text: string; dim?: boolean }) => (
  <p
    className="text-xs font-bold uppercase tracking-[0.2em]"
    style={{ color: `rgba(255,255,255,${dim ? 0.45 : 0.6})` }}
  >
    {n} - {text}
  </p>
);

const Headline = ({ children }: { children: React.ReactNode }) => (
  <div>
    <h2 className="text-[clamp(3.5rem,11vw,13rem)] font-black leading-[0.85] uppercase tracking-tighter">
      {children}
    </h2>
  </div>
);

const Body = ({ children, dim }: { children: React.ReactNode; dim?: boolean }) => (
  <p
    className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-normal leading-relaxed"
    style={{ color: `rgba(255,255,255,${dim ? 0.65 : 0.8})` }}
  >
    {children}
  </p>
);

const Col = ({
  label,
  desc,
  accent,
  dim,
}: {
  label: string;
  desc: string;
  accent?: boolean;
  dim?: boolean;
}) => (
  <div className="min-w-[160px] flex-1">
    <p
      className="mb-2 text-sm font-black uppercase tracking-wider"
      style={{ color: accent ? ACCENT : '#ffffff' }}
    >
      {label}
    </p>
    <p
      className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed"
      style={{ color: `rgba(255,255,255,${dim ? 0.45 : 0.6})` }}
    >
      {desc}
    </p>
  </div>
);

const AboutUs = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: AUTO }}>
      {/* Fixed Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          backgroundColor: 'rgba(26,43,27,0.97)',
          borderColor: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">

            <div
              className="text-xl md:text-2xl font-black tracking-wider text-white cursor-pointer"
              onClick={() => navigate('/')}
            >
              The Insight Foundry
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 font-medium"
                onClick={() => navigate('/consulting')}
              >
                TIF Consulting
              </Button>
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 font-medium"
                onClick={() => navigate('/automation')}
              >
                TIF Automations
              </Button>

              <div className="flex items-center gap-3 border-l border-white/15 pl-4">
                <a
                  href="https://www.linkedin.com/company/the-insight-foundry-official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/the_insight_foundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="http://www.youtube.com/@TheInsightFoundry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <Button
                className="bg-white text-[#2c3e2d] hover:bg-stone-100 font-semibold rounded-lg shadow-sm"
                onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              >
                Book Strategy Call
              </Button>
            </nav>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col space-y-3 pt-4">
                <Button
                  variant="ghost"
                  className="justify-start text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => { navigate('/consulting'); setMobileMenuOpen(false); }}
                >
                  TIF Consulting
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => { navigate('/automation'); setMobileMenuOpen(false); }}
                >
                  TIF Automations
                </Button>
                <div className="flex items-center gap-4 px-3 py-2">
                  <a href="https://www.linkedin.com/company/the-insight-foundry-official" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/the_insight_foundry" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="http://www.youtube.com/@TheInsightFoundry" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
                <Button
                  className="mx-3 bg-white text-[#2c3e2d] hover:bg-stone-100 font-semibold"
                  onClick={() => {
                    window.open('https://calendly.com/theinsightfoundry/30min', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  Book Strategy Call
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Story Scroll */}
      <FlowArt aria-label="The Insight Foundry - Our Story">

        {/* 01 WHO WE ARE - Green */}
        <FlowSection aria-label="Who We Are" style={s(GREEN)}>
          <Label n="01" text="WHO WE ARE" />
          <Divider />
          <Headline>
            WHERE<br />
            STRATEGY<br />
            MEETS<br />
            SYSTEMS.
          </Headline>
          <Divider />
          <Body>
            The Insight Foundry sits at the intersection of strategic consulting, AI automation,
            and systems thinking. Not just advisors. The architecture firm for your entire operation.
          </Body>
          <Divider />
          <div className="flex flex-wrap gap-[3vw]">
            <Col label="Consulting" desc="First-principles strategy and operational architecture that scales." />
            <Col label="Automation" desc="AI-powered systems designed to execute at scale, 24/7 without error." />
            <Col label="Systems Thinking" desc="Every solution compounds in value. We design for the next five years." />
          </div>
        </FlowSection>

        {/* 02 PRATHMESH SONI - Dark */}
        <FlowSection aria-label="Prathmesh Soni" style={s(AUTO)}>
          <Label n="02" text="THE FOUNDER" dim />
          <Divider dim />
          <Headline>
            BUILT BY<br />
            FOUNDERS.
          </Headline>

          {/* Photo left, Bio right */}
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 md:gap-14 items-start mt-6">
            <div className="overflow-hidden">
              <img
                src="/founder-prathmesh.png"
                alt="Prathmesh Soni, Founder and Strategic Architect"
                className="w-full h-auto block"
              />
            </div>
            <div className="flex flex-col gap-6 py-2">
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  Founder and Strategic Architect
                </p>
                <h3
                  className="font-black leading-tight text-white mb-2"
                  style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
                >
                  Prathmesh Soni
                </h3>
                <p className="text-base font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  IIT Kharagpur Student / India's Premier Institution
                </p>
              </div>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Prathmesh brings a unique blend of technical expertise and strategic vision to every project.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                As a student at IIT Kharagpur, India's oldest and most prestigious IIT with an acceptance
                rate of less than 1%, he represents the pinnacle of academic excellence in engineering and technology.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Having qualified JEE Advanced, one of the world's most challenging entrance examinations,
                Prathmesh combines this foundational rigor with real-world business acumen to deliver
                solutions that are both technically sound and commercially viable.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                His approach transcends traditional consulting, blending AI automation, strategic thinking,
                and design-led marketing to create comprehensive transformation frameworks for modern businesses.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* 03 ATHARVA BHARDWAJ - Dark */}
        <FlowSection aria-label="Atharva Bhardwaj" style={s(AUTO)}>
          <Label n="03" text="THE CO-FOUNDER" dim />
          <Divider dim />

          {/* Bio left, Photo right (mobile: photo above bio) */}
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 md:gap-14 items-start mt-6">
            <div className="flex flex-col gap-6 py-2 order-2 md:order-1">
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  Co-Founder and Technical Strategist
                </p>
                <h3
                  className="font-black leading-tight text-white mb-2"
                  style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
                >
                  Atharva Bhardwaj
                </h3>
                <p className="text-base font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  NIT Calicut Student / Leading Technical Institute
                </p>
              </div>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Atharva brings a strong technical and analytical mindset to our team, helping to bridge
                the gap between strategic vision and flawless execution.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                As a student at NIT Calicut, one of India's top engineering institutes, he represents
                a new generation of tech leadership.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                His expertise ensures that The Insight Foundry delivers scalable, implementation-ready
                solutions grounded in technical excellence.
              </p>
            </div>
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src="/cofounder-atharva.png"
                alt="Atharva Bhardwaj, Co-Founder and Technical Strategist"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Full-width closing quote */}
          <blockquote
            className="w-full text-[clamp(1.3rem,2.8vw,2.4rem)] font-light italic leading-relaxed mt-12"
            style={{ color: 'rgba(255,255,255,0.45)', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 'clamp(2rem,4vw,3.5rem)' }}
          >
            "Together, we are a dynamic team from IIT Kharagpur and NIT Calicut, united by a shared vision to transform how businesses scale through technology and strategy."
          </blockquote>
        </FlowSection>

        {/* 04 MISSION + CORE VALUES - Green */}
        <FlowSection aria-label="Mission and Core Values" style={s(GREEN)}>
          <Label n="04" text="MISSION + VALUES" />
          <Divider />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.85] uppercase tracking-tighter">
              TOMORROW'S<br />
              OPERATING<br />
              SYSTEMS.
            </h2>
          </div>
          <Divider />
          <Body>
            We don't solve today's problems. We design tomorrow's operating systems.
            Every solution compounds. Every strategy scales. Every system is built for the next
            five years, not the next five weeks.
          </Body>
          <Divider />
          <div className="flex flex-wrap gap-[3vw]">
            <Col
              label="AI Automation"
              desc="Intelligent systems that execute on your behalf, without fatigue, without error."
            />
            <Col
              label="Strategic Clarity"
              desc="First-principles audits that surface the leverage points others consistently miss."
            />
            <Col
              label="Design-Led Innovation"
              desc="We start with the desired outcome and work backward to the exact system required."
            />
          </div>
          <Divider />
          <div>
            <h2 className="text-[clamp(2.5rem,8vw,9rem)] font-black leading-[0.85] uppercase tracking-tighter">
              CLARITY.<br />
              INNOVATION.<br />
              EXECUTION.
            </h2>
          </div>
          <Divider />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-3 text-sm font-black uppercase tracking-wider text-white">
                Clarity
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Cut through complexity. We deliver crystal-clear strategies where every decision
                feels obvious in hindsight. Complexity is the enemy of speed.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-3 text-sm font-black uppercase tracking-wider text-white">
                Innovation
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Use technology intentionally. Tools serve strategy, never the other way around.
                We leverage AI precisely where it multiplies human judgment.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-3 text-sm font-black uppercase tracking-wider text-white">
                Execution
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Ideas only matter when implemented. We execute with precision, speed, and
                measurable results. We ship. We don't just advise.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* 05 WHY WE'RE DIFFERENT + CTA - Dark */}
        <FlowSection aria-label="Why We're Different" style={s(AUTO)}>
          <Label n="05" text="WHY WE'RE DIFFERENT" dim />
          <Divider dim />
          <div>
            <h2 className="text-[clamp(3.5rem,11vw,13rem)] font-black leading-[0.85] uppercase tracking-tighter">
              NOT<br />
              ADVICE.<br />
              NOT<br />
              TOOLS.<br />
              TRANSFORMATION.
            </h2>
          </div>
          <Divider dim />
          <div className="flex flex-wrap gap-[4vw] items-start">
            <div className="min-w-[200px] flex-1">
              <p
                className="text-[clamp(0.95rem,1.5vw,1.2rem)] leading-loose"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Most consultants give advice.<br />
                Most agencies deliver campaigns.<br />
                Most tech firms deliver tools.
              </p>
            </div>
            <div className="min-w-[200px] flex-1">
              <p className="text-[clamp(1.3rem,2.5vw,2rem)] font-black leading-snug text-white">
                We deliver transformation.
              </p>
            </div>
          </div>
          <Divider dim />
          <div className="flex flex-wrap gap-[3vw]">
            <Col
              label="Tech Excellence"
              desc="Cutting-edge AI and automation built on solid engineering principles from day one."
              dim
            />
            <Col
              label="Strategic Depth"
              desc="Business strategy rooted in first-principles thinking and real market dynamics."
              dim
            />
            <Col
              label="Compound Results"
              desc="Consulting identifies leverage. Automation compounds it. Every system builds on the last."
              dim
            />
          </div>
          <Divider dim />
          <div className="flex flex-wrap gap-4">
            <button
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a2b1b] text-sm font-black uppercase tracking-widest transition-colors duration-200 hover:bg-stone-100"
              onClick={() => window.open('https://calendly.com/theinsightfoundry/30min', '_blank')}
              aria-label="Book a strategy call"
            >
              Book Strategy Call
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm font-black uppercase tracking-widest transition-colors duration-200 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.25)' }}
              onClick={() => navigate('/automation')}
              aria-label="Explore automation systems"
            >
              Explore Automation Systems
            </button>
          </div>
        </FlowSection>

      </FlowArt>

      <Footer variant="dark" />
    </div>
  );
};

export default AboutUs;
