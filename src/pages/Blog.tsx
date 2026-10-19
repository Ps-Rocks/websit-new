import { Link, Navigate, useParams } from 'react-router-dom';
import { Reveal } from '@/components/site/fx';
import { ClosingCTA, PageHeader, SiteShell } from '@/components/site/sections';
import { Block, isLive, postBySlug } from '@/lib/posts';

const fmt = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return <p className="mt-5">{block.text}</p>;
    case 'ul':
      return (
        <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-brand">
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mt-5 list-decimal space-y-2 pl-5 marker:text-brand">
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <figure className="my-8 border-l-2 border-brand pl-6">
          <blockquote className="text-[1.25rem] leading-snug tracking-[-0.01em] text-ink">“{block.text}”</blockquote>
          <figcaption className="mt-3 text-[15px] text-muted-ink">{block.cite}</figcaption>
        </figure>
      );
  }
}

export default function Blog() {
  const { slug = '' } = useParams();
  const post = postBySlug(slug);


  if (!post || !isLive(post)) return <Navigate to="/blog" replace />;

  return (
    <SiteShell>
      <PageHeader eyebrow={`Writing · ${post.tag}`} title={post.title} intro={<p>{post.description}</p>}>
        <p className="mt-8 text-[15px] text-muted-ink">
          By <span className="text-ink">{post.author}</span> · <time dateTime={post.published}>{fmt(post.published)}</time>
          {post.updated && (
            <>
              {' '}· Updated <time dateTime={post.updated}>{fmt(post.updated)}</time>
            </>
          )}
        </p>
        <Link to="/blog" className="mt-3 inline-block text-[15px] text-muted-ink transition-colors hover:text-ink">
          ← All writing
        </Link>
      </PageHeader>

      <article className="mx-auto max-w-[1240px] px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid border-t border-rule pt-12 md:grid-cols-12">
          <div className="text-[18px] leading-[1.75] text-ink/85 md:col-span-7 md:col-start-4">
            <Reveal>
              <aside className="rounded-sm bg-[#e7ece6] p-6 md:p-8">
                <h2 className="text-[15px] font-medium text-brand">Key takeaways</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[17px] leading-relaxed marker:text-brand">
                  {post.takeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </aside>
            </Reveal>

            {post.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="mt-14 text-[1.6rem] font-medium leading-tight tracking-[-0.02em] text-ink md:text-[1.9rem]">{s.heading}</h2>
                {s.blocks.map((b, i) => (
                  <RenderBlock key={i} block={b} />
                ))}
              </section>
            ))}

            {post.faq && (
              <section className="mt-16 border-t border-rule pt-10">
                <h2 className="text-[1.6rem] font-medium tracking-[-0.02em] text-ink md:text-[1.9rem]">Frequently asked questions</h2>
                <dl className="mt-6 space-y-7">
                  {post.faq.map((f) => (
                    <div key={f.q}>
                      <dt className="font-medium text-ink">{f.q}</dt>
                      <dd className="mt-2">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>
        </div>
      </article>

      <ClosingCTA />
    </SiteShell>
  );
}
