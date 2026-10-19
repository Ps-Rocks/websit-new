import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { CALENDLY_URL, SERVICES, STORIES, TEAM } from '@/lib/site';
import { PrimaryButton, Reveal, TextLink, WordReveal } from '@/components/site/fx';
import { Highlight, useHoverPreview, VelocityRibbon } from '@/components/site/motion';
import { ClosingCTA, Faq, SectionHead, SiteShell } from '@/components/site/sections';
import { LogoTile, Portrait, StoryStack, VideoFacade } from '@/components/site/stories';

const byId = Object.fromEntries(STORIES.map((s) => [s.id, s]));

/* ------------------------------------------------------------------ */
/* Hero: full-width headline, then intro beside the founder video      */
/* ------------------------------------------------------------------ */
function Hero() {
  const bortex = byId.bortex;
  return (
    <section className="pb-12 pt-28 md:pb-20 md:pt-36 lg:pt-40">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-sm text-muted-ink">
          Strategy and automation studio, since 2024
        </motion.p>
        <h1 className="mt-6 max-w-[15ch] text-[2.8rem] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[4rem] lg:text-[6.2rem]">
          <WordReveal text="We help founders figure out what to do next." delay={0.1} />
          <WordReveal text="Then we help build it." delay={0.45} className="text-brand" />
        </h1>

        {/* Intro and buttons on the left, founder video beside them */}
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="lg:col-span-6"
          >
            <p className="max-w-[34rem] text-[17px] leading-relaxed text-muted-ink md:text-lg">
              Most of our work is market research, competitor analysis, ICP and go-to-market strategy for early-stage
              companies. When the right next step is to automate something or build an internal tool, we do that part
              too.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <PrimaryButton href={CALENDLY_URL}>Book a 30-minute call</PrimaryButton>
              <TextLink to="/stories">Read client stories</TextLink>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:max-w-xl lg:col-span-6 lg:max-w-none"
          >
            <VideoFacade id={bortex.videoId!} title="BORTEX founder testimonial" caption={`${bortex.founder} on working with us`} />
            <figcaption className="mt-4 text-[15px] leading-snug">
              “{bortex.pullQuote}”
              <span className="mt-1 block text-sm text-muted-ink">
                {bortex.founder}, founder of {bortex.company}
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1240px] px-5 md:mt-20 md:px-8 lg:mt-28">
        <div className="border-t border-rule pt-6">
          <p className="text-sm text-muted-ink">Recent clients</p>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
            {STORIES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <Link to={`/stories#${s.id}`} data-cursor="Read story" className="group flex items-center gap-3">
                  <LogoTile story={s} className="h-10 w-10 ring-1 ring-rule transition group-hover:ring-ink/40" />
                  <span>
                    <span className="block text-[15px] font-medium leading-tight">{s.company}</span>
                    <span className="block text-[13px] text-muted-ink">{s.sector}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services: index list with a cursor-trailing preview card            */
/* ------------------------------------------------------------------ */

function Services() {
  const { x, y, active, bind } = useHoverPreview();
  const current = active === null ? null : SERVICES[active];

  return (
    <section id="services" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 py-14 md:px-8 md:py-20 lg:py-28">
      <SectionHead n="01" label="Services" title="What we do" />
      <ol className="mt-12 md:mt-16">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.04}>
            <li
              {...bind(i)}
              className="group grid gap-3 border-t border-rule py-7 transition-colors duration-300 hover:bg-[#ebe8df] md:grid-cols-12 md:gap-6 md:px-3"
            >
              <span className="text-sm tabular-nums text-muted-ink md:col-span-1 md:pt-1.5">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1 md:col-span-5 md:text-[1.6rem] lg:col-span-4">
                {s.title}
              </h3>
              <p className="max-w-xl text-[16px] leading-relaxed text-muted-ink md:col-span-6 lg:col-span-7">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <div className="border-t border-rule" />

      {/* Trailing preview (desktop pointer only) */}
      <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-40 hidden [@media(pointer:fine)]:block">
        <AnimatePresence>
          {current && (
            <motion.div
              key={current.title}
              initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="ml-6 mt-6 w-64 rounded-md border border-rule bg-[#fbfaf6] p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]"
            >
              <p className="text-[13px] text-muted-ink">Typical output</p>
              <p className="mt-1 text-[15px] font-medium leading-snug">{current.preview}</p>
              {current.clients.length > 0 && (
                <div className="mt-4 flex items-center gap-2 border-t border-rule pt-3">
                  <div className="flex -space-x-2">
                    {current.clients.map((id) => (
                      <Portrait key={id} story={byId[id]} className="h-8 w-8 ring-2 ring-[#fbfaf6]" />
                    ))}
                  </div>
                  <span className="text-[13px] text-muted-ink">
                    Done for {current.clients.map((id) => byId[id].company).join(' and ')}
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Founders' note                                                      */
/* ------------------------------------------------------------------ */
function FoundersNote() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20 lg:py-28">
      <SectionHead n="02" label="Why we do both" title="A note from the founders" />
      <div className="mt-10 grid gap-12 md:mt-16 md:grid-cols-12">
        <div className="md:col-span-9 md:col-start-4">
          <p className="text-[1.5rem] leading-[1.4] tracking-[-0.015em] md:text-[2.1rem]">
            We started The Insight Foundry because we kept seeing the same gap. A founder would pay for a strategy,{' '}
            <Highlight>get a document back, and then have nobody to help turn it into something that actually runs.</Highlight>{' '}
            So we do the research and the thinking first. When building something is the right next step,{' '}
            <Highlight>we stay and build it.</Highlight>
          </p>
          <Reveal className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-5">
            {TEAM.map((t) => (
              <figure key={t.name} className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
                <figcaption className="text-sm">
                  <span className="block font-medium">{t.name}</span>
                  <span className="text-muted-ink">
                    {t.role}, {t.school}
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */
const STEPS = [
  { title: 'A 30-minute call', body: 'Free. You tell us what’s going on, we ask questions, and we tell you honestly whether we can help.' },
  { title: 'A short proposal', body: 'A page or two covering what we’ll do, by when, and what it costs. Nothing starts until you agree to it.' },
  { title: 'Research and strategy', body: 'We dig in and share findings as we go, so nothing in the final hand-over comes as a surprise.' },
  { title: 'Build, if it’s needed', body: 'If the plan calls for automation or tooling, we build it, document it and hand it over to your team.' },
];

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 py-14 md:px-8 md:py-20 lg:py-28">
      <SectionHead n="04" label="How we work" title="Four steps, and you can stop after any of them" />
      <div ref={ref} className="relative mt-14 md:mt-20">
        <div className="absolute left-0 right-0 top-0 hidden h-px bg-rule lg:block" />
        <motion.div style={{ width }} className="absolute left-0 top-0 hidden h-px bg-ink lg:block" />
        <ol className="grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.08} className="border-t border-rule pt-6 lg:border-0">
                <span className="text-sm tabular-nums text-brand">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 120);
    return () => clearTimeout(t);
  }, [hash]);


  return (
    <SiteShell>
      <Hero />

      <VelocityRibbon
        className="border-y border-rule py-6 text-[2.6rem] font-medium tracking-[-0.03em] md:py-8 md:text-[4.5rem]"
        items={['Market research', 'Competitor analysis', 'ICP', 'Positioning', 'Go-to-market', 'AI workflows', 'Internal tools']}
      />

      <Services />
      <FoundersNote />

      <section id="stories" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 py-14 md:px-8 md:py-20 lg:py-28">
        <SectionHead
          n="03"
          label="Client stories"
          title="Recent work, in our clients’ words"
          aside={
            <>
              Each card links to the full write-up with the founder’s complete feedback.{' '}
              <TextLink to="/stories" className="ml-1">
                All stories
              </TextLink>
            </>
          }
        />
        <div className="mt-12 md:mt-16">
          <StoryStack />
        </div>
      </section>

      <Process />

      <section id="faq" className="mx-auto max-w-[1240px] scroll-mt-20 px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20 lg:pb-32 lg:pt-28">
        <div className="grid gap-10 border-t border-rule pt-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="flex items-baseline gap-3 text-sm text-muted-ink">
              <span className="text-brand">05</span> Questions
            </p>
            <h2 className="mt-6 max-w-[14ch] text-[2.1rem] font-medium leading-[1.05] tracking-[-0.03em] md:text-[2.6rem]">
              Things people ask before the first call
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-12">
            <Faq />
          </div>
        </div>
      </section>

      <ClosingCTA />
    </SiteShell>
  );
}
