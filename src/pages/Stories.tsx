import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CALENDLY_URL, ClientStory, STORIES } from '@/lib/site';
import { PrimaryButton, Reveal, WordReveal } from '@/components/site/fx';
import { ClosingCTA, SiteShell } from '@/components/site/sections';
import { LogoTile, Portrait, VideoFacade } from '@/components/site/stories';
import { cn } from '@/lib/utils';

function Story({ story, index }: { story: ClientStory; index: number }) {
  return (
    <article id={story.id} className="scroll-mt-32 border-t border-rule py-12 md:py-20 lg:py-24">
      <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-8">
        {/* Left rail: meta */}
        <Reveal className="md:col-span-3">
          <div className="md:sticky md:top-36">
            <p className="text-sm tabular-nums text-brand">{String(index + 1).padStart(2, '0')}</p>
            <div className="mt-4 flex items-center gap-3">
              <LogoTile story={story} className="h-11 w-11 ring-1 ring-rule" />
              <div>
                <p className="font-medium leading-tight">{story.company}</p>
                <p className="text-sm text-muted-ink">{story.sector}</p>
              </div>
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-muted-ink">Founder</dt>
                <dd>
                  {story.linkedin ? (
                    <a href={story.linkedin} target="_blank" rel="noopener noreferrer" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
                      {story.founder}
                    </a>
                  ) : (
                    story.founder
                  )}
                  , {story.role}
                </dd>
              </div>
              {story.website && (
                <div>
                  <dt className="text-muted-ink">Website</dt>
                  <dd>
                    <a href={story.website} target="_blank" rel="noopener noreferrer" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
                      {story.website.replace(/^https?:\/\/(www\.)?/, '')}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-muted-ink">Work</dt>
                <dd>{story.tags.join(', ')}</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        {/* Main column: the story */}
        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            <h2 className="max-w-[22ch] text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] md:text-[2.9rem]">{story.headline}</h2>
          </Reveal>

          {story.videoId && (
            <Reveal className="mt-10">
              <VideoFacade id={story.videoId} title={`${story.company} founder testimonial`} caption={`${story.founder} on working with us`} />
            </Reveal>
          )}

          <div className="mt-10 space-y-8 text-[17px] leading-relaxed md:text-[18px]">
            <Reveal>
              <h3 className="mb-2 text-sm font-medium text-muted-ink">The company</h3>
              <p>{story.context}</p>
            </Reveal>
            <Reveal>
              <h3 className="mb-2 text-sm font-medium text-muted-ink">The problem</h3>
              <p>{story.challenge}</p>
            </Reveal>
            <Reveal>
              <h3 className="mb-2 text-sm font-medium text-muted-ink">What we did</h3>
              <ul className="list-disc space-y-1.5 pl-5 marker:text-brand">
                {story.work.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h3 className="mb-2 text-sm font-medium text-muted-ink">What changed</h3>
              <p>{story.outcome}</p>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <figure className="border-l-2 border-brand pl-6 md:pl-8">
              <blockquote className="text-[1.25rem] leading-[1.45] tracking-[-0.01em] md:text-[1.5rem]">“{story.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Portrait story={story} className="h-12 w-12" />
                <span className="text-sm">
                  <span className="block font-medium">{story.founder}</span>
                  <span className="text-muted-ink">
                    {story.role}, {story.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function Stories() {
  const { hash } = useLocation();
  const [active, setActive] = useState(STORIES[0].id);


  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 150);
    return () => clearTimeout(t);
  }, [hash]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: '-40% 0px -55% 0px',
    });
    STORIES.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <SiteShell>
      <section className="mx-auto max-w-[1240px] px-5 pb-10 pt-28 md:px-8 md:pb-16 md:pt-36 lg:pt-40">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-muted-ink">
          Client stories
        </motion.p>
        <h1 className="mt-6 max-w-4xl text-[2.6rem] font-medium leading-[1.02] tracking-[-0.035em] md:text-[4.4rem]">
          <WordReveal text="Four founders, and the problems they brought to us" delay={0.1} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-ink md:text-lg"
        >
          Each story covers what the company does, what they were trying to figure out, what we did, and what the founder
          said afterwards. The quotes are unedited.
        </motion.p>
      </section>

      {/* Story switcher */}
      <div className="sticky top-16 z-30 border-y border-rule bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] gap-6 overflow-x-auto px-5 [scrollbar-width:none] md:px-8">
          {STORIES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                'shrink-0 border-b-2 py-3.5 text-[14px] transition-colors',
                active === s.id ? 'border-ink text-ink' : 'border-transparent text-muted-ink hover:text-ink',
              )}
            >
              {s.company}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        {STORIES.map((s, i) => (
          <Story key={s.id} story={s} index={i} />
        ))}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-rule py-14 md:flex-row md:items-center">
          <p className="max-w-lg text-[1.4rem] font-medium leading-snug tracking-[-0.02em]">Working on something similar? We’re happy to talk it through.</p>
          <PrimaryButton href={CALENDLY_URL}>Book a 30-minute call</PrimaryButton>
        </div>
      </div>

      <ClosingCTA />
    </SiteShell>
  );
}
