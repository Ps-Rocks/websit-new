import { useEffect } from 'react';
import { CALENDLY_URL } from '@/lib/site';
import { PrimaryButton } from '@/components/site/fx';
import { PageHeader, SiteShell } from '@/components/site/sections';

export default function BookingPage() {
  useEffect(() => {
    // Send visitors straight to Calendly; the page below is the fallback
    window.location.href = CALENDLY_URL;
  }, []);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Book a call"
        title="Taking you to our calendar"
        intro={<p>If nothing happens in a few seconds, use the button below to pick a time for a free 30-minute call.</p>}
      >
        <div className="mt-10">
          <PrimaryButton href={CALENDLY_URL}>Open Calendly</PrimaryButton>
        </div>
      </PageHeader>
    </SiteShell>
  );
}
