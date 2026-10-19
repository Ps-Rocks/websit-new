import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageHeader, SiteShell } from '@/components/site/sections';
import { TextLink } from '@/components/site/fx';

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
    document.title = 'Page not found | The Insight Foundry';
  }, [location.pathname]);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="404"
        title="We couldn’t find that page"
        intro={<p>It may have moved, or the link might be wrong. These are the pages most people are looking for.</p>}
      >
        <nav className="mt-12 max-w-xl border-t border-rule">
          {[
            { to: '/', label: 'Home' },
            { to: '/#services', label: 'Services' },
            { to: '/stories', label: 'Client stories' },
            { to: '/about', label: 'About' },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="flex items-center justify-between border-b border-rule py-4 text-lg transition-colors hover:text-brand">
              {l.label} <span aria-hidden>→</span>
            </Link>
          ))}
        </nav>
        <div className="mt-10">
          <TextLink to="/">Back to the homepage</TextLink>
        </div>
      </PageHeader>
    </SiteShell>
  );
}
