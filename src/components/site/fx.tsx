import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Scramble } from './motion';

const EASE = [0.22, 1, 0.36, 1] as const;

/* The TIF letter-mark, redrawn from the logo so it stays crisp at any size */
export function TifMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 938 470" className={className} fill="currentColor" aria-hidden>
      <rect x="0" y="0" width="384" height="91" />
      <rect x="143" y="153" width="99" height="317" />
      <rect x="442" y="0" width="98" height="470" />
      <rect x="624" y="0" width="98" height="470" />
      <rect x="624" y="0" width="314" height="91" />
      <rect x="722" y="186" width="171" height="91" />
    </svg>
  );
}

/* Fade + rise when scrolled into view */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Headline lines slide up from behind a mask, one after another */
export function LineReveal({ lines, className, delay = 0 }: { lines: React.ReactNode[]; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.12, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Same mask-slide as LineReveal but per word, so the headline wraps naturally at any width */
export function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: delay + i * 0.04, ease: EASE }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Paragraph whose words darken as you scroll through it */
function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] });
  const words = text.split(' ');
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

/* Buttons */
export function PrimaryButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3.5 text-[15px] font-medium text-paper transition-colors duration-300 hover:bg-brand',
        className,
      )}
    >
      {typeof children === 'string' ? <Scramble text={children} /> : children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function TextLink({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        'group relative inline-flex items-center gap-1.5 text-[15px] font-medium text-ink',
        className,
      )}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:0%_1px]">
        {children}
      </span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

/* Small section marker, e.g. "01  Services" */
export function Marker({ n, children, className }: { n: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-baseline gap-3 text-sm text-muted-ink', className)}>
      <span className="tabular-nums text-brand">{n}</span>
      <span>{children}</span>
    </p>
  );
}
