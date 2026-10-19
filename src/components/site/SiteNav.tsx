import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/site';
import { cn } from '@/lib/utils';
import { TifMark } from './fx';
import { Scramble } from './motion';

const LINKS = [
  { label: 'Services', to: '/#services' },
  { label: 'Client stories', to: '/stories' },
  { label: 'How we work', to: '/#process' },
  { label: 'About', to: '/about' },
  { label: 'Writing', to: '/blog' },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn('flex items-center gap-3 text-ink', className)} aria-label="The Insight Foundry home">
      <TifMark className="h-[18px] w-auto text-brand" />
      <span className="text-[15px] font-medium tracking-tight">The Insight Foundry</span>
    </Link>
  );
}

export default function SiteNav({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300',
        solid || scrolled || open ? 'border-b border-rule bg-paper/90 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 md:px-8">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link key={l.label} to={l.to} className="text-[14px] text-muted-ink transition-colors hover:text-ink">
              <Scramble text={l.label} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-ink px-4 py-2 text-[14px] font-medium text-paper transition-colors hover:bg-brand sm:inline-block"
          >
            <Scramble text="Book a call" />
          </a>
          <button
            className="grid h-10 w-10 place-items-center text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-rule lg:hidden"
          >
            <div className="px-5 py-4">
              {[...LINKS, { label: 'Careers', to: '/careers' }].map((l) => (
                <Link key={l.label} to={l.to} className="block border-b border-rule py-3.5 text-lg text-ink last:border-0">
                  {l.label}
                </Link>
              ))}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-md bg-ink py-3.5 text-center font-medium text-paper"
              >
                Book a 30-minute call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
