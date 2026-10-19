import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ClientStory, STORIES } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Portrait({ story, className }: { story: ClientStory; className?: string }) {
  return (
    <div className={cn('shrink-0 overflow-hidden rounded-full bg-rule', className)}>
      {story.portrait ? (
        <img src={story.portrait} alt={story.founder} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <div className="grid h-full w-full place-items-center text-sm font-medium text-muted-ink">
          {story.founder
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
      )}
    </div>
  );
}

export function LogoTile({ story, className }: { story: ClientStory; className?: string }) {
  return (
    <span className={cn('grid shrink-0 place-items-center overflow-hidden rounded-md', className)} style={{ background: story.logoBg }}>
      <img src={story.logo} alt={`${story.company} logo`} className="h-full w-full object-contain p-1" />
    </span>
  );
}

/* YouTube facade: the iframe only loads after a click */
export function VideoFacade({ id, title, caption, className }: { id: string; title: string; caption?: string; className?: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className={cn('relative aspect-video overflow-hidden rounded-sm bg-ink', className)}>
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlay(true)}
          data-cursor="Play"
          className="group absolute inset-0 h-full w-full text-left"
          aria-label={`Play ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
            }}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/75 to-transparent p-4 pt-12 text-paper">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-ink transition-transform group-hover:scale-110">
              <svg viewBox="0 0 10 12" className="ml-0.5 h-3 w-3" fill="currentColor" aria-hidden>
                <path d="M0 0l10 6-10 6z" />
              </svg>
            </span>
            <span className="text-sm">{caption ?? 'Play video'}</span>
          </span>
        </button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stacked story cards: each one pins and the next slides over it      */
/* ------------------------------------------------------------------ */
function StackCard({
  story,
  index,
  total,
  progress,
  stacked,
}: {
  story: ClientStory;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stacked: boolean;
}) {
  const scale = useTransform(progress, [index / total, 1], [1, stacked ? 1 - (total - index - 1) * 0.03 : 1]);

  return (
    // Cards pin and stack only from md up; on phones a card is taller than the screen,
    // so stacking would hide its bottom half under the next card
    <div className="md:sticky md:top-24" style={stacked ? { paddingTop: index * 14 } : undefined}>
      <motion.article
        style={{ scale }}
        className="origin-top overflow-hidden rounded-md border border-rule bg-[#fbfaf6] shadow-[0_-12px_40px_-24px_rgba(0,0,0,0.25)]"
      >
        <div className="grid md:grid-cols-12">
          <div className="flex flex-col p-6 sm:p-8 md:col-span-7 md:p-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-ink">
              <LogoTile story={story} className="h-8 w-8" />
              <span className="font-medium text-ink">{story.company}</span>
              <span>·</span>
              <span>{story.sector}</span>
            </div>
            <h3 className="mt-6 max-w-[22ch] text-[1.7rem] font-medium leading-[1.1] tracking-[-0.02em] md:text-[2.2rem]">{story.headline}</h3>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted-ink">{story.challenge}</p>
            <div className="mt-auto pt-8">
              <Link
                to={`/stories#${story.id}`}
                data-cursor="Read"
                className="text-[15px] font-medium underline decoration-rule underline-offset-[5px] transition-colors hover:decoration-ink"
              >
                Read the full story
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 border-t border-rule p-6 sm:p-8 md:col-span-5 md:border-l md:border-t-0 md:p-10">
            {story.videoId ? (
              <VideoFacade id={story.videoId} title={`${story.company} founder testimonial`} caption={`${story.founder} on working with us`} />
            ) : null}
            <figure>
              <blockquote className="text-[1.2rem] leading-snug tracking-[-0.01em] md:text-[1.35rem]">“{story.pullQuote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Portrait story={story} className="h-11 w-11" />
                <span className="text-sm">
                  <span className="block font-medium">{story.founder}</span>
                  <span className="text-muted-ink">
                    {story.role}, {story.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function StoryStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setStacked(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div ref={ref} className="relative flex flex-col gap-6 md:gap-[8vh]">
      {STORIES.map((s, i) => (
        <StackCard key={s.id} story={s} index={i} total={STORIES.length} progress={scrollYProgress} stacked={stacked} />
      ))}
    </div>
  );
}
