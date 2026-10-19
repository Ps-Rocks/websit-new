import { Link } from 'react-router-dom';
import { Reveal } from '@/components/site/fx';
import { ClosingCTA, PageHeader, SiteShell } from '@/components/site/sections';
import { livePosts } from '@/lib/posts';

const fmt = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });

export default function BlogIndex() {
  const posts = livePosts();

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Writing"
        title="Notes on startups, strategy and automation"
        intro={<p>Practical pieces drawn from our work with early-stage founders.</p>}
      />

      <section className="mx-auto max-w-[1240px] px-5 pb-24 md:px-8 md:pb-32">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link
              to={`/blog/${post.slug}`}
              data-cursor="Read"
              className="group grid gap-4 border-t border-rule py-10 md:grid-cols-12"
            >
              <span className="text-sm text-muted-ink md:col-span-2">
                {post.tag}
                <span className="block">{fmt(post.published)}</span>
              </span>
              <span className="md:col-span-8">
                <span className="block text-[1.6rem] font-medium leading-tight tracking-[-0.02em] transition-colors group-hover:text-brand md:text-[2rem]">
                  {post.title}
                </span>
                <span className="mt-3 block max-w-2xl text-[17px] leading-relaxed text-muted-ink">{post.description}</span>
              </span>
              <span aria-hidden className="text-xl transition-transform duration-300 group-hover:translate-x-1 md:col-span-2 md:text-right">
                →
              </span>
            </Link>
          </Reveal>
        ))}
        <div className="border-t border-rule" />
      </section>

      <ClosingCTA />
    </SiteShell>
  );
}
