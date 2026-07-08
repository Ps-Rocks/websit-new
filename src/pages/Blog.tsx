import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '../components/Footer';

const highlights = [
  'Speed: Startups iterate fast and test constantly without being slowed by bureaucracy.',
  'Scrappiness: Limited resources force creativity and sharpen decision-making.',
  'Insight: Founders recognise patterns early and act before the market catches up.',
];

const nextWave = [
  'AI-native companies built around automation from day one.',
  'Climate tech startups solving sustainability challenges at scale.',
  'Creator economy platforms that help people build durable businesses.',
  'Health and bio startups advancing personalized care.',
  'Infrastructure startups making digital transformation more accessible for everyone.',
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <header className="border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div
            className="cursor-pointer text-xl font-black tracking-wider text-[#2c3e2d] md:text-2xl"
            onClick={() => navigate('/')}
          >
            The Insight Foundry
          </div>
          <Button
            variant="ghost"
            className="text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
            onClick={() => navigate('/')}
          >
            Back Home
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm shadow-stone-200/40">
          <div className="border-b border-stone-200 bg-gradient-to-br from-[#f7f7f2] to-white px-6 py-10 md:px-10 md:py-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2c3e2d]/10 bg-[#2c3e2d]/5 px-3 py-1 text-sm font-semibold text-[#2c3e2d]">
              <BookOpen className="h-4 w-4" />
              Blog · Startups
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#2c3e2d]/70">
              Insight Foundry
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
              How Startups Are Shaking Up Industries With Daring Ideas
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              Startups are changing the way industries operate by combining speed, scrappiness, and sharp insight into business models that challenge convention.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-neutral-600">
                Startup innovation
              </span>
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-neutral-600">
                Founder insights
              </span>
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-neutral-600">
                Early-stage growth
              </span>
            </div>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto max-w-3xl space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-neutral-950">The Startup Advantage: Speed, Scrappiness, and Sharp Insight</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  Startups thrive because they work differently. They move quickly, challenge inherited assumptions, and make decisions with clarity rather than committee-based delay. That gives them an edge in markets where timing matters.
                </p>
                <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-6">
                  <ul className="space-y-3 text-neutral-700">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#2c3e2d]" />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-950">Why Startups Matter More Than Ever</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  The world is changing too quickly for legacy systems to keep up. Startups fill that gap by building new business models, applying technology at scale, and putting customer needs at the center of product design.
                </p>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  In an age of AI, automation, and digital transformation, startups are not simply reacting to change. They are creating the future through bold execution and disciplined learning.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-950">The Insight Foundry View</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  At Insight Foundry, we believe startups thrive when creativity is matched with data-driven clarity. The best founders do not rely on instinct alone. They use insight as a competitive advantage.
                </p>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  That means detecting market signals early, using analytics to guide decisions, designing systems that scale from day one, and staying ruthlessly focused on customer outcomes. The startups that get this balance right are the ones that reshape industries.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-950">What’s Next for Startups?</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  The next wave of startup innovation will be shaped by founders who combine human creativity with intelligent systems.
                </p>
                <ul className="mt-6 space-y-3 text-neutral-700">
                  {nextWave.map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2c3e2d]" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </article>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            className="bg-[#2c3e2d] hover:bg-[#1a2b1b] text-white"
            onClick={() => navigate('/')}
          >
            Return to the site
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-stone-300 text-[#2c3e2d] hover:bg-[#2c3e2d]/10"
            onClick={() => navigate('/about')}
          >
            Learn about us
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
