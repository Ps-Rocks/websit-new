import { Link } from 'react-router-dom';
import { Reveal } from '@/components/site/fx';
import { PageHeader, SectionHead, SiteShell } from '@/components/site/sections';
import { EMAIL } from '@/lib/site';
import { cn } from '@/lib/utils';

const openings = [
  {
    id: 'cmo',
    title: 'Chief Marketing Officer (CMO)',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    path: '/careers/cmo',
    open: true,
    summary:
      'Lead brand, demand and growth strategy, working closely with the founders to scale how we win new clients.',
    bullets: [
      'Build and run the growth plan.',
      'Own messaging, positioning and which acquisition channels we invest in.',
      'Work closely with the founders on sales and analytics.',
    ],
  },
  {
    id: 'cto',
    title: 'Chief Technology Officer (CTO)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    path: '/careers/cto',
    open: true,
    summary: 'Own the technical direction for the automations and tools we build across client projects.',
    bullets: [
      'Set the architecture for automation work that has to keep running after hand-over.',
      'Guide engineering and implementation standards.',
      'Shape technical strategy across products and client platforms.',
    ],
  },
  {
    id: 'growth-intern',
    title: 'Growth Intern',
    department: 'Growth',
    location: 'Remote',
    type: 'Internship',
    path: '/careers/growth-intern',
    open: false,
    summary: 'Support go-to-market research, outreach campaigns and our own growth playbook.',
    bullets: [
      'Run outreach sequences and campaign experiments.',
      'Research target markets and ideal customer profiles.',
      'Analyse conversion and acquisition numbers.',
    ],
  },
  {
    id: 'associate-consultant-intern',
    title: 'Associate Consultant Intern',
    department: 'Consulting',
    location: 'Remote',
    type: 'Internship',
    path: '/careers/associate-consultant-intern',
    open: false,
    summary: 'Work alongside the founders on strategy, research and client deliverables.',
    bullets: [
      'Support research, synthesis and client workshops.',
      'Prepare frameworks, decks and analysis for recommendations.',
      'Learn how a consulting project is run from start to finish.',
    ],
  },
];

export default function Careers() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Careers"
        title="Work on real client problems with a small team"
        intro={
          <p>
            We’re a small, remote studio doing strategy and automation work for early-stage founders. If you like owning
            outcomes and learning quickly, have a look at the roles below.
          </p>
        }
      />

      <section className="mx-auto max-w-[1240px] px-5 pb-24 pt-8 md:px-8 md:pb-32">
        <SectionHead n="01" label="Open roles" title="Current openings" />
        <div className="mt-12 md:mt-16">
          {openings.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.04}>
              <article className={cn('grid gap-6 border-t border-rule py-10 md:grid-cols-12', !job.open && 'opacity-60')}>
                <div className="md:col-span-4">
                  <h3 className="text-[1.5rem] font-medium leading-tight tracking-[-0.02em]">{job.title}</h3>
                  <p className="mt-2 text-sm text-muted-ink">
                    {job.department} · {job.location} · {job.type}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-[17px] leading-relaxed">{job.summary}</p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] text-muted-ink marker:text-brand">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 md:text-right">
                  {job.open ? (
                    <Link
                      to={job.path}
                      className="inline-block rounded-md bg-ink px-4 py-2.5 text-[14px] font-medium text-paper transition-colors hover:bg-brand"
                    >
                      Apply
                    </Link>
                  ) : (
                    <span className="inline-block rounded-md border border-rule px-4 py-2.5 text-[14px] text-muted-ink">Closed</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-rule pt-8 text-[15px] text-muted-ink">
            Don’t see a fit but want to work with us? Email{' '}
            <a href={`mailto:${EMAIL}`} className="text-ink underline decoration-rule underline-offset-4 hover:decoration-ink">
              {EMAIL}
            </a>
            .
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
