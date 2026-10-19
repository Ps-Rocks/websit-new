/*
 * Interaction pieces adapted from 21st.dev community patterns:
 * Random Letter Swap, Text Highlighter, hover-reveal list, scroll-velocity ribbon
 * and context cursor.
 */
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import { cn } from '@/lib/utils';

// Similar-width lowercase glyphs keep the word from jittering while it scrambles
const GLYPHS = 'abcdeghknopqrsuvxyz';
const SWAP_EVERY_MS = 55; // how often unsettled letters change
const MIN_DURATION_MS = 550;
const PER_LETTER_MS = 45;

/* Random Letter Swap: letters scramble and settle left-to-right on hover */
export function Scramble({ text, className }: { text: string; className?: string }) {
  const [out, setOut] = useState(text);
  const raf = useRef<number>();
  const running = useRef(false);

  const run = () => {
    if (running.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    running.current = true;
    const duration = Math.max(MIN_DURATION_MS, text.length * PER_LETTER_MS);
    const start = performance.now();
    let lastSwap = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      if (now - lastSwap >= SWAP_EVERY_MS || progress === 1) {
        lastSwap = now;
        const settled = Math.floor(progress * text.length);
        setOut(
          text
            .split('')
            .map((ch, i) => (ch === ' ' || i < settled ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
            .join(''),
        );
      }
      if (progress < 1) raf.current = requestAnimationFrame(tick);
      else running.current = false;
    };
    raf.current = requestAnimationFrame(tick);
  };

  const ref = useRef<HTMLSpanElement>(null);
  const runRef = useRef(run);
  runRef.current = run;

  useEffect(() => {
    const host = ref.current?.closest('a,button') ?? ref.current;
    const onEnter = () => runRef.current();
    host?.addEventListener('mouseenter', onEnter);
    return () => {
      host?.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf.current!);
    };
  }, []);

  return (
    <span ref={ref} className={cn('relative inline-block', className)}>
      {/* invisible copy reserves the final width so nothing jumps */}
      <span className="invisible">{text}</span>
      <span className="absolute inset-0 whitespace-nowrap" aria-hidden>
        {out}
      </span>
    </span>
  );
}

/* Text Highlighter: a marker stroke sweeps behind the phrase when it scrolls into view */
export function Highlight({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 55%'] });
  const size = useTransform(scrollYProgress, [0, 1], ['0% 100%', '100% 100%']);
  return (
    <motion.span
      ref={ref}
      style={{ backgroundSize: size }}
      className={cn(
        'box-decoration-clone bg-[linear-gradient(transparent_55%,#bfe0cf_55%,#bfe0cf_92%,transparent_92%)] bg-left bg-no-repeat',
        className,
      )}
    >
      {children}
    </motion.span>
  );
}

/* Scroll-velocity ribbon: an endless line of type that speeds up and reverses with your scrolling */
export function VelocityRibbon({ items, baseVelocity = -2, className }: { items: string[]; baseVelocity?: number; className?: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const dir = useRef(1);
  const xPct = useTransform(x, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    if (factor.get() < 0) dir.current = -1;
    else if (factor.get() > 0) dir.current = 1;
    move += dir.current * move * factor.get();
    x.set(x.get() + move);
  });

  const row = (
    <span className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-6 md:px-10">{t}</span>
          <TifGlyph />
        </span>
      ))}
    </span>
  );

  return (
    <div className={cn('overflow-hidden whitespace-nowrap', className)} aria-hidden>
      <motion.div className="flex w-max" style={{ x: xPct }}>
        {row}
        {row}
      </motion.div>
    </div>
  );
}

function TifGlyph() {
  return <span className="inline-block h-[0.28em] w-[0.28em] rotate-45 bg-brand" />;
}

/* Context cursor: a small label follows the pointer over elements marked data-cursor="…" */
export function ContextCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(0, { stiffness: 500, damping: 40 });
  const y = useSpring(0, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');
      setLabel(el?.dataset.cursor ?? null);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div className="pointer-events-none fixed left-0 top-0 z-[70]" style={{ x, y }}>
      <motion.span
        initial={false}
        animate={{ scale: label ? 1 : 0, opacity: label ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="ml-4 mt-4 block whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[13px] font-medium text-paper"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

/* Hover-reveal list: a preview card trails the cursor while a row is hovered */
export function useHoverPreview() {
  // Softer spring so the card glides after the cursor instead of snapping
  const x = useSpring(0, { stiffness: 170, damping: 24, mass: 0.6 });
  const y = useSpring(0, { stiffness: 170, damping: 24, mass: 0.6 });
  const [active, setActive] = useState<number | null>(null);
  const bind = (i: number) => ({
    onPointerEnter: (e: React.PointerEvent) => {
      // Start at the cursor on first hover rather than flying in from the corner
      if (active === null) {
        x.jump(e.clientX);
        y.jump(e.clientY);
      }
      setActive(i);
    },
    onPointerLeave: () => setActive(null),
    onPointerMove: (e: React.PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    },
  });
  return { x, y, active, bind };
}
