import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { SiteShell } from '@/components/site/sections';
import { CALENDLY_URL } from '@/lib/site';

/*
 * Section themes. The page opens on paper so it follows on from the nav, keeps the
 * deep green for one statement section, and ends on paper so it flows into the footer.
 * Text colours come from --fg / --accent so the same helpers work on light and dark.
 */
type Theme = { bg: string; fg: string; accent: string };
const PAPER: Theme = { bg: '#f3f1eb', fg: '21,21,21', accent: '#17604a' };
const STONE: Theme = { bg: '#e8e5db', fg: '21,21,21', accent: '#17604a' };
const DEEP: Theme = { bg: '#0e2e23', fg: '243,241,235', accent: '#8fd0b2' };

const s = (t: Theme): React.CSSProperties =>
  ({
    '--fg': t.fg,
    '--accent': t.accent,
    backgroundColor: t.bg,
    color: 'rgb(var(--fg))',
    paddingTop: '6rem',
    borderTop: '1px solid rgba(var(--fg),0.08)',
  }) as React.CSSProperties;

const Divider = ({ dim }: { dim?: boolean }) => (
  <hr
    className="my-[2vw]"
    style={{
      border: 'none',
      borderTop: `1px solid rgba(var(--fg),${dim ? 0.1 : 0.2})`,
    }}
  />
);

const Label = ({ n, text, dim }: { n: string; text: string; dim?: boolean }) => (
  <p className="flex items-baseline gap-3 text-sm" style={{ color: `rgba(var(--fg),${dim ? 0.5 : 0.65})` }}>
    <span style={{ color: 'var(--accent)' }}>{n}</span>
    <span>{text}</span>
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
    style={{ color: `rgba(var(--fg),${dim ? 0.65 : 0.8})` }}
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
      className="mb-2 text-[15px] font-medium"
      style={{ color: accent ? 'var(--accent)' : 'rgb(var(--fg))' }}
    >
      {label}
    </p>
    <p
      className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed"
      style={{ color: `rgba(var(--fg),${dim ? 0.45 : 0.6})` }}
    >
      {desc}
    </p>
  </div>
);

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <SiteShell smooth={false} solidNav>
      {/* Story Scroll */}
      <FlowArt aria-label="The Insight Foundry - Our Story">

        {/* 01 WHO WE ARE */}
        <FlowSection aria-label="Who We Are" style={s(PAPER)}>
          <Label n="01" text="Who we are" />
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

        {/* 02 PRATHMESH SONI */}
        <FlowSection aria-label="Prathmesh Soni" style={s(STONE)}>
          <Label n="02" text="The founder" dim />
          <Divider dim />
          <Headline>
            BUILT BY<br />
            FOUNDERS.
          </Headline>

          {/* Photo left, Bio right */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-14 items-start mt-6">
            <div className="overflow-hidden">
              <img
                src="/team-prathmesh.jpg"
                alt="Prathmesh Soni, Founder and Strategic Architect"
                className="block h-auto w-full rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-6 py-2">
              <div>
                <p className="text-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Founder and Strategic Architect
                </p>
                <h3
                  className="font-black leading-tight mb-2"
                  style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
                >
                  Prathmesh Soni
                </h3>
                <p className="text-base font-medium" style={{ color: 'rgba(var(--fg),0.35)' }}>
                  IIT Kharagpur Student / India's Premier Institution
                </p>
              </div>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.72)' }}>
                Prathmesh brings a unique blend of technical expertise and strategic vision to every project.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.72)' }}>
                As a student at IIT Kharagpur, India's oldest and most prestigious IIT with an acceptance
                rate of less than 1%, he represents the pinnacle of academic excellence in engineering and technology.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.72)' }}>
                Having qualified JEE Advanced, one of the world's most challenging entrance examinations,
                Prathmesh combines this foundational rigor with real-world business acumen to deliver
                solutions that are both technically sound and commercially viable.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.72)' }}>
                His approach transcends traditional consulting, blending AI automation, strategic thinking,
                and design-led marketing to create comprehensive transformation frameworks for modern businesses.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* 03 ATHARVA BHARDWAJ */}
        <FlowSection aria-label="Atharva Bhardwaj" style={s(PAPER)}>
          <Label n="03" text="The co-founder" dim />
          <Divider dim />

          {/* Bio left, Photo right (mobile: photo above bio) */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-14 items-start mt-6">
            <div className="flex flex-col gap-6 py-2 order-2 md:order-1">
              <div>
                <p className="text-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Co-Founder and Technical Strategist
                </p>
                <h3
                  className="font-black leading-tight mb-2"
                  style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
                >
                  Atharva Bhardwaj
                </h3>
                <p className="text-base font-medium" style={{ color: 'rgba(var(--fg),0.35)' }}>
                  NIT Calicut Student / Leading Technical Institute
                </p>
              </div>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.72)' }}>
                Atharva brings a strong technical and analytical mindset to our team, helping to bridge
                the gap between strategic vision and flawless execution.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.72)' }}>
                As a student at NIT Calicut, one of India's top engineering institutes, he represents
                a new generation of tech leadership.
              </p>
              <p className="text-[clamp(1rem,1.7vw,1.25rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.72)' }}>
                His expertise ensures that The Insight Foundry delivers scalable, implementation-ready
                solutions grounded in technical excellence.
              </p>
            </div>
            <div className="overflow-hidden order-1 md:order-2">
              <img
                src="/team-atharva.jpg"
                alt="Atharva Bhardwaj, Co-Founder and Technical Strategist"
                className="block h-auto w-full rounded-sm"
              />
            </div>
          </div>

          {/* Full-width closing quote */}
          <blockquote
            className="w-full text-[clamp(1.3rem,2.8vw,2.4rem)] font-light italic leading-relaxed mt-12"
            style={{ color: 'rgba(var(--fg),0.45)', borderTop: '1px solid rgba(var(--fg),0.08)', paddingTop: 'clamp(2rem,4vw,3.5rem)' }}
          >
            "Together, we are a dynamic team from IIT Kharagpur and NIT Calicut, united by a shared vision to transform how businesses scale through technology and strategy."
          </blockquote>
        </FlowSection>

        {/* 04 MISSION + CORE VALUES */}
        <FlowSection aria-label="Mission and Core Values" style={s(DEEP)}>
          <Label n="04" text="Mission and values" />
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
              <p className="mb-3 text-[15px] font-medium">
                Clarity
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.7)' }}>
                Cut through complexity. We deliver crystal-clear strategies where every decision
                feels obvious in hindsight. Complexity is the enemy of speed.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-3 text-[15px] font-medium">
                Innovation
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.7)' }}>
                Use technology intentionally. Tools serve strategy, never the other way around.
                We leverage AI precisely where it multiplies human judgment.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-3 text-[15px] font-medium">
                Execution
              </p>
              <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-relaxed" style={{ color: 'rgba(var(--fg),0.7)' }}>
                Ideas only matter when implemented. We execute with precision, speed, and
                measurable results. We ship. We don't just advise.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* 05 WHY WE'RE DIFFERENT + CTA */}
        <FlowSection aria-label="Why We're Different" style={s(STONE)}>
          <Label n="05" text="Why we're different" dim />
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
                style={{ color: 'rgba(var(--fg),0.6)' }}
              >
                Most consultants give advice.<br />
                Most agencies deliver campaigns.<br />
                Most tech firms deliver tools.
              </p>
            </div>
            <div className="min-w-[200px] flex-1">
              <p className="text-[clamp(1.3rem,2.5vw,2rem)] font-black leading-snug">
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
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3.5 text-[15px] font-medium text-paper transition-colors duration-200 hover:bg-brand"
              onClick={() => window.open(CALENDLY_URL, '_blank')}
              aria-label="Book a strategy call"
            >
              Book a 30-minute call
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-md px-5 py-3.5 text-[15px] font-medium transition-colors duration-200 hover:bg-ink/5"
              style={{ border: '1px solid rgba(var(--fg),0.3)' }}
              onClick={() => navigate('/stories')}
            >
              Read client stories
            </button>
          </div>
        </FlowSection>

      </FlowArt>

    </SiteShell>
  );
};

export default AboutUs;
