import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, SiteShell } from '@/components/site/sections';

interface CareerApplyProps {
  title: string;
  description: string;
  embedUrl: string;
}

const CareerApply = ({ title, description, embedUrl }: CareerApplyProps) => {
  useEffect(() => {
    document.title = `Apply: ${title} | The Insight Foundry`;
  }, [title]);

  return (
    <SiteShell>
      <PageHeader eyebrow="Application" title={title} intro={<p>{description}</p>}>
        <Link to="/careers" className="mt-8 inline-block text-[15px] text-muted-ink transition-colors hover:text-ink">
          ← All roles
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-[1240px] px-5 pb-24 md:px-8 md:pb-32">
        <div className="border-t border-rule pt-8">
          <iframe
            src={embedUrl}
            title={`Apply for ${title}`}
            className="min-h-[80vh] w-full border-0"
            allow="camera;microphone;clipboard-write"
          />
        </div>
      </section>
    </SiteShell>
  );
};

export default CareerApply;
