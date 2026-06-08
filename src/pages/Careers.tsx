import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Briefcase, Sparkles, ShieldCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '../components/Footer';

const openings = [
  {
    id: 'cmo',
    title: 'Chief Marketing Officer (CMO)',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Competitive + equity',
    path: '/careers/cmo',
    summary:
      'Lead brand, demand, and growth strategy while partnering with the executive team to scale our commercial motion.',
    bullets: [
      'Build and execute the growth operating model.',
      'Lead messaging, positioning, and acquisition channel investment.',
      'Partner closely with product, sales, and analytics teams.',
    ],
  },
  {
    id: 'cto',
    title: 'Chief Technology Officer (CTO)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: 'Competitive + equity',
    path: '/careers/cto',
    summary:
      'Own the technical vision for AI-powered automation and consulting systems across client engagements.',
    bullets: [
      'Define architecture for scalable automation solutions.',
      'Guide engineering and implementation standards.',
      'Drive technical strategy through product and platform thinking.',
    ],
  },
  {
    id: 'growth-intern',
    title: 'Growth Intern',
    department: 'Growth',
    location: 'Remote',
    type: 'Internship',
    salary: 'Stipend + performance bonus',
    path: '/careers/growth-intern',
    summary:
      'Support go-to-market research, outreach campaigns, and the growth playbook for a fast-moving boutique firm.',
    bullets: [
      'Run outreach sequences and campaign experiments.',
      'Help research target markets and ideal customer profiles.',
      'Support analysis of conversion and acquisition metrics.',
    ],
  },
  {
    id: 'associate-consultant-intern',
    title: 'Associate Consultant Intern',
    department: 'Consulting',
    location: 'Remote',
    type: 'Internship',
    salary: 'Stipend + mentorship',
    path: '/careers/associate-consultant-intern',
    summary:
      'Work alongside consulting teams on strategy, operational diagnostics, and client-ready deliverables.',
    bullets: [
      'Support research, synthesis, and client workshops.',
      'Prepare frameworks, decks, and analysis for strategic recommendations.',
      'Learn the consulting rigor needed to execute high-impact projects.',
    ],
  },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 selection:bg-[#2c3e2d]/10 selection:text-[#2c3e2d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-stone-50/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <button
            className="text-xl md:text-2xl font-black tracking-wider text-neutral-900"
            onClick={() => navigate('/')}
          >
            TIF <span className="font-light text-[#2c3e2d]">CAREERS</span>
          </button>

          <nav className="hidden items-center gap-4 md:flex">
            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
              onClick={() => navigate('/automation')}
            >
              TIF Automations
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
              onClick={() => navigate('/consulting')}
            >
              TIF Consulting
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-[#2c3e2d]/10 font-medium"
              onClick={() => navigate('/about')}
            >
              About Us
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <section className="relative overflow-hidden bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-700">
                  <Sparkles className="h-4 w-4 text-[#2c3e2d]" />
                  Careers at The Insight Foundry
                </p>
                <div className="space-y-4">
                  <h1 className="text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl">
                    Join a high-velocity team that builds advisory-led automation and strategy.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-neutral-600">
                    We hire for leadership, product-minded thinking, and the rigor to deliver on tough client work. This page surfaces the roles we are actively hiring for today.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="text-[#2c3e2d] border-stone-300 hover:bg-[#2c3e2d]/10"
                    onClick={() => navigate('/about')}
                  >
                    About Us
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm shadow-stone-200/40">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <Briefcase className="h-4 w-4 text-[#2c3e2d]" />
                    <span>Current roles only. No backend application system yet.</span>
                  </div>
                  <div className="rounded-3xl bg-[#f4f7f5] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2c3e2d]/80">
                      Why work here?
                    </p>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">
                      We bridge consulting rigor with automation execution. If you enjoy owning outcomes, helping clients scale, and moving faster than traditional firms, this team is built for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2c3e2d]/80">
                Open Positions
              </p>
              <h2 className="mt-4 text-3xl font-black text-neutral-950 sm:text-4xl">
                Active opportunities
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-neutral-600">
              We have four active roles today. If you see a fit, send us a note and we will schedule a follow-up conversation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {openings.map((job) => (
              <Card key={job.id} className="overflow-hidden border-stone-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-950">{job.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600">{job.summary}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs uppercase tracking-[0.24em]">
                      {job.type}
                    </Badge>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 text-sm text-neutral-500">
                    <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-100 px-3 py-1">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-100 px-3 py-1">
                      <Users className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>

                  <div className="mt-6 space-y-3 text-sm text-neutral-600">
                    {job.bullets.map((line) => (
                      <p key={line} className="flex items-start gap-3">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[#2c3e2d]" />
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-start gap-4">
                    {['growth-intern', 'associate-consultant-intern'].includes(job.id) ? (
                      <Button
                        className="rounded-full bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-500 cursor-not-allowed"
                        disabled
                      >
                        Closed
                      </Button>
                    ) : (
                      <Button
                        className="rounded-full bg-[#2c3e2d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1f2f25]"
                        onClick={() => navigate(job.path)}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Careers;
