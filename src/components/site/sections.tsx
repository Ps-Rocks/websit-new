import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { Plus } from 'lucide-react';
import { CALENDLY_URL, EMAIL, FAQS, SOCIALS, TEAM } from '@/lib/site';
import { cn } from '@/lib/utils';
import SiteNav from './SiteNav';
import { ContextCursor } from './motion';
import { Marker, PrimaryButton, Reveal, TifMark, WordReveal } from './fx';

/* ------------------------------------------------------------------ */
/* Page shell                                                          */
/* ------------------------------------------------------------------ */
export function SiteShell({
  children,
  smooth = true,
  solidNav = false,
}: {
  children: React.ReactNode;
  /* Pages driven by GSAP ScrollTrigger pinning opt out of Lenis */
  smooth?: boolean;
  solidNav?: boolean;
}) {
  useEffect(() => {
    if (!smooth || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let id = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, [smooth]);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-brand selection:text-paper">
      <SiteNav solid={solidNav} />
      <main>{children}</main>
      <SiteFooter />
      <MobileCTA />
      <ContextCursor />
    </div>
  );
}

/* Opening block shared by every inner page */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-10 pt-28 md:px-8 md:pb-16 md:pt-36 lg:pt-40">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-sm text-muted-ink">
        {eyebrow}
      </motion.p>
      <h1 className="mt-6 max-w-4xl text-[2.6rem] font-medium leading-[1.02] tracking-[-0.035em] md:text-[4.1rem]">
        <WordReveal text={title} delay={0.1} />
      </h1>
      {intro && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-ink md:text-lg"
        >
          {intro}
        </motion.div>
      )}
      {children}
    </section>
  );
}

/* Left-aligned section header with a marker and a rule above it */
export function SectionHead({
  n,
  label,
  title,
  aside,
  className,
}: {
  n: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('border-t border-rule pt-6', className)}>
      <div className="grid gap-6 md:grid-cols-12">
        <Marker n={n} className="md:col-span-3">
          {label}
        </Marker>
        <Reveal className="md:col-span-9">
          <h2 className="max-w-[18ch] text-[2.1rem] font-medium leading-[1.05] tracking-[-0.03em] md:text-[3.25rem]">{title}</h2>
          {aside && <div className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-ink">{aside}</div>}
        </Reveal>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="border-t border-rule">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-rule">
            <button
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium tracking-tight md:text-xl">{f.q}</span>
              <Plus className={cn('h-5 w-5 shrink-0 text-muted-ink transition-transform duration-300', isOpen && 'rotate-45 text-ink')} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 text-[17px] leading-relaxed text-muted-ink">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Closing call to action                                              */
/* ------------------------------------------------------------------ */
export function ClosingCTA() {
  return (
    <section id="contact" className="bg-brand-deep text-paper">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20 lg:py-28">
        <Reveal className="md:col-span-7">
          <h2 className="text-[2.4rem] font-medium leading-[1.02] tracking-[-0.03em] md:text-[4rem]">
            Tell us what you’re working on.
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-paper/70">
            Book a free 30-minute call with Prathmesh or Atharva. Bring the problem as it is, messy is fine. If we’re not
            the right fit, we’ll say so.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-paper px-5 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-white"
            >
              Pick a time on Calendly ↗
            </a>
            <a href={`mailto:${EMAIL}`} className="text-[15px] text-paper/80 underline decoration-paper/30 underline-offset-4 hover:text-paper hover:decoration-paper">
              or email {EMAIL}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex items-end gap-4 md:col-span-5 md:justify-end">
          {TEAM.map((t) => (
            <figure key={t.name} className="w-[46%] max-w-[190px]">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-paper/10">
                <img src={t.photo} alt={t.name} loading="lazy" className="h-full w-full object-cover grayscale-[30%]" />
              </div>
              <figcaption className="mt-3 text-sm">
                <span className="block font-medium">{t.name}</span>
                <span className="text-paper/60">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
export function SiteFooter() {
  // The original TIF footer, carried over and set in the site palette
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const wordY = useTransform(scrollYProgress, [0, 1], ['35%', '0%']);
  const link = 'text-xs font-medium text-ink/50 transition-colors duration-200 hover:text-ink/90';
  const label = 'mb-3 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-ink/30';

  return (
    <footer
      ref={ref}
      // From lg up the footer is exactly as tall as the FOUNDRY wordmark (font-size x line-height)
      className="relative flex flex-col overflow-hidden bg-[#ecebe5] pb-20 md:pb-0 lg:h-[max(13rem,calc(clamp(4rem,21vw,24rem)*0.82))]"
    >
      {/* Oversized background wordmark, rising into place */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex select-none items-end justify-center overflow-hidden" aria-hidden>
        <motion.p
          style={{ y: wordY, fontSize: 'clamp(4rem,21vw,24rem)', lineHeight: 0.82, letterSpacing: '-0.02em', marginBottom: '-0.06em' }}
          className="w-full whitespace-nowrap text-center font-black uppercase text-ink/[0.045]"
        >
          FOUNDRY
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-10 md:px-16 lg:pt-7">
        <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-[2.2fr_1fr_1fr] md:gap-12 lg:pb-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <TifMark className="h-3.5 w-auto flex-shrink-0 text-brand" />
              <span className="text-base font-black tracking-tight text-ink">The Insight Foundry</span>
            </div>
            <p className="mb-3 max-w-[30ch] text-[0.8rem] leading-relaxed text-ink/40">
              We build intelligent systems for businesses ready to outgrow their headcount.
            </p>
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.28em] text-ink/20">Est. 2024</p>
          </div>

          <div>
            <p className={label}>Studio</p>
            <nav className="flex flex-col gap-3 lg:gap-2">
              <Link to="/#services" className={link}>Services</Link>
              <Link to="/stories" className={link}>Client stories</Link>
              <Link to="/about" className={link}>About us</Link>
              <Link to="/blog" className={link}>Writing</Link>
              <Link to="/careers" className={link}>Careers</Link>
            </nav>
          </div>

          <div>
            <p className={label}>Contact</p>
            <nav className="flex flex-col gap-3 lg:gap-2">
              <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className={link}>Instagram</a>
              <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className={link}>YouTube</a>
            </nav>
          </div>
        </div>

        <div className="mt-auto flex flex-col items-start justify-between gap-2 border-t border-ink/[0.07] py-4 md:flex-row md:items-center lg:py-3">
          <div className="flex items-center gap-4 text-[0.62rem] text-ink/30">
            <p>© {new Date().getFullYear()} The Insight Foundry. All rights reserved.</p>
            <Link to="/privacy-policy" className="transition-colors hover:text-ink/60">Privacy Policy</Link>
          </div>
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-ink/20">Built With Intention</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile call button                                                  */
/* ------------------------------------------------------------------ */
function MobileCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Step aside while the closing call-to-action or the footer is on screen
  useEffect(() => {
    const targets = [document.getElementById('contact'), document.querySelector('footer')].filter(Boolean) as Element[];
    const visible = new Set<Element>();
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setCovered(visible.size > 0);
    });
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  const show = scrolled && !covered;
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-between rounded-md bg-ink px-5 py-4 text-paper shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] md:hidden"
        >
          <span className="text-[15px] font-medium">Book a free 30-minute call</span>
          <span aria-hidden>↗</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export { PrimaryButton };
