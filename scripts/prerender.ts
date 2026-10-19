/*
 * Build-time prerender (Vite plugin).
 *
 * The site is a client-rendered React app, so crawlers that don't run JavaScript
 * (GPTBot, ClaudeBot, PerplexityBot and others) would otherwise see an empty
 * <div id="root">. After the bundle is written, this writes one static HTML file
 * per route with the right <head> (title, description, canonical, Open Graph,
 * JSON-LD) and the page's text content inside #root. React replaces that content
 * when it mounts, so visitors see the normal app.
 *
 * It also generates sitemap.xml and llms.txt from the same data.
 */
import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { FAQS, SERVICES, STORIES, TEAM, CALENDLY_URL, EMAIL } from '../src/lib/site';
import { livePosts, postBySlug, type Block } from '../src/lib/posts';
import { ROUTES, SITE_NAME, SITE_URL, metaFor, schemaFor } from '../src/lib/seo';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const blockHtml = (b: Block) => {
  switch (b.type) {
    case 'p':
      return `<p>${esc(b.text)}</p>`;
    case 'ul':
      return `<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
    case 'ol':
      return `<ol>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ol>`;
    case 'quote':
      return `<blockquote><p>“${esc(b.text)}”</p><cite>${esc(b.cite)}</cite></blockquote>`;
  }
};

const nav = `<nav><a href="/">${SITE_NAME}</a> · <a href="/#services">Services</a> · <a href="/stories">Client stories</a> · <a href="/about">About</a> · <a href="/blog">Writing</a> · <a href="/careers">Careers</a> · <a href="${CALENDLY_URL}">Book a call</a></nav>`;
const footer = `<footer><p>${SITE_NAME}. Email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p></footer>`;

function storyHtml(s: (typeof STORIES)[number], level = 2) {
  const h = `h${level}`;
  return `<article id="${s.id}"><${h}>${esc(s.company)}: ${esc(s.headline)}</${h}>
<p><strong>The company.</strong> ${esc(s.context)}</p>
<p><strong>The problem.</strong> ${esc(s.challenge)}</p>
<p><strong>What we did.</strong></p><ul>${s.work.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
<p><strong>What changed.</strong> ${esc(s.outcome)}</p>
<blockquote><p>“${esc(s.quote)}”</p><cite>${esc(s.founder)}, ${esc(s.role)}, ${esc(s.company)}</cite></blockquote></article>`;
}

function bodyFor(route: string): string {
  const m = metaFor(route);
  if (route === '/') {
    return `<h1>We help founders figure out what to do next. Then we help build it.</h1>
<p>${esc(m.description)}</p>
<h2>What we do</h2>${SERVICES.map((s) => `<h3>${esc(s.title)}</h3><p>${esc(s.body)}</p>`).join('')}
<h2>A note from the founders</h2><p>We started The Insight Foundry because we kept seeing the same gap. A founder would pay for a strategy, get a document back, and then have nobody to help turn it into something that actually runs. So we do the research and the thinking first. When building something is the right next step, we stay and build it.</p>
<p>${TEAM.map((t) => `${esc(t.name)} (${esc(t.role)}, ${esc(t.school)})`).join('; ')}</p>
<h2>Client stories</h2>${STORIES.map((s) => storyHtml(s, 3)).join('')}
<h2>Frequently asked questions</h2>${FAQS.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}`;
  }
  if (route === '/stories') {
    return `<h1>Client stories</h1><p>${esc(m.description)}</p>${STORIES.map((s) => storyHtml(s)).join('')}`;
  }
  if (route === '/about') {
    return `<h1>About The Insight Foundry</h1>
<p>The Insight Foundry sits at the intersection of strategic consulting, AI automation and systems thinking. It was founded in 2024 by Prathmesh Soni and Atharva Bhardwaj.</p>
<h2>Prathmesh Soni, Founder</h2><p>Prathmesh is a student at IIT Kharagpur. He leads the strategy work: market research, competitor analysis, positioning and go-to-market.</p>
<h2>Atharva Bhardwaj, Co-founder</h2><p>Atharva is a student at NIT Calicut. He leads the technical work: automations, integrations and internal tools.</p>
<h2>Clients</h2><ul>${STORIES.map((s) => `<li><a href="/stories#${s.id}">${esc(s.company)}</a> (${esc(s.sector)})</li>`).join('')}</ul>`;
  }
  if (route === '/blog') {
    return `<h1>Writing</h1><p>${esc(m.description)}</p><ul>${livePosts().map(
      (p) => `<li><a href="/blog/${p.slug}">${esc(p.title)}</a>: ${esc(p.description)}</li>`,
    ).join('')}</ul>`;
  }
  if (route.startsWith('/blog/')) {
    const p = postBySlug(route.slice(6))!;
    return `<article><h1>${esc(p.title)}</h1><p>${esc(p.description)}</p>
<p>By ${esc(p.author)}. Published <time datetime="${p.published}">${p.published}</time>.</p>
<h2>Key takeaways</h2><ul>${p.takeaways.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
${p.sections.map((s) => `<h2>${esc(s.heading)}</h2>${s.blocks.map(blockHtml).join('')}`).join('\n')}
${p.faq ? `<h2>Frequently asked questions</h2>${p.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}` : ''}</article>`;
  }
  return `<h1>${esc(m.title.split(' | ')[0])}</h1><p>${esc(m.description)}</p>`;
}

function headFor(route: string, base: string): string {
  const m = metaFor(route);
  const url = `${SITE_URL}${route === '/' ? '/' : route}`;
  let html = base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(m.description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${m.type ?? 'website'}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(m.title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(m.description)}" />`)
    .replace(/<meta name="twitter:url"[^>]*>/, `<meta name="twitter:url" content="${url}" />`)
    .replace(/<meta property="twitter:title"[^>]*>/, `<meta property="twitter:title" content="${esc(m.title)}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(m.description)}" />`);
  if (m.noindex) html = html.replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />');
  const ld = schemaFor(route)
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ');
  return html.replace('</head>', `    ${ld}\n  </head>`);
}

// Minimal styling so the static content is readable for the moment before React mounts
const STATIC_STYLE =
  '<style>[data-prerender]{max-width:760px;margin:0 auto;padding:7rem 1.25rem 4rem;font:17px/1.65 Geist,Inter,system-ui,sans-serif;color:#151515;background:#f3f1eb}[data-prerender] h1{font-size:2.4rem;line-height:1.05;letter-spacing:-.03em;font-weight:500}[data-prerender] a{color:#17604a}</style>';

export function prerender(): Plugin {
  let outDir = 'dist';
  return {
    name: 'tif-prerender',
    apply: 'build',
    configResolved(c) {
      outDir = path.resolve(c.root, c.build.outDir);
    },
    closeBundle() {
      const base = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      for (const r of ROUTES) {
        const page = headFor(r.path, base).replace(
          '<div id="root"></div>',
          `<div id="root">${STATIC_STYLE}<div data-prerender>${nav}<main>${bodyFor(r.path)}</main>${footer}</div></div>`,
        );
        // /about -> about.html; vercel.json cleanUrls serves it at /about, ahead of the SPA rewrite
        const file = r.path === '/' ? path.join(outDir, 'index.html') : path.join(outDir, `${r.path.slice(1)}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, page);
      }

      const today = new Date().toISOString().slice(0, 10);
      const urls = ROUTES.filter((r) => !r.noindex && r.path !== '/book-call')
        .map((r) => {
          const post = r.path.startsWith('/blog/') ? postBySlug(r.path.slice(6)) : undefined;
          const lastmod = post ? post.updated ?? post.published : today;
          return `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${lastmod}</lastmod></url>`;
        })
        .join('\n');
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );

      const llms = `# ${SITE_NAME}

> A strategy and automation studio for early-stage founders, founded in 2024 by Prathmesh Soni (IIT Kharagpur) and Atharva Bhardwaj (NIT Calicut). We do market research, competitor analysis, ICP, positioning and go-to-market strategy, and build AI workflows and internal tools when the plan calls for them.

Contact: ${EMAIL}. Book a free 30-minute call: ${CALENDLY_URL}

## Pages
- [Home](${SITE_URL}/): services, founders' note, client stories and FAQ
- [Client stories](${SITE_URL}/stories): ${STORIES.map((s) => `${s.company} (${s.sector})`).join(', ')}
- [About](${SITE_URL}/about): the founders and how we work
- [Careers](${SITE_URL}/careers)

## Services
${SERVICES.map((s) => `- ${s.title}: ${s.body}`).join('\n')}

## Writing
${livePosts().map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`).join('\n')}
`;
      fs.writeFileSync(path.join(outDir, 'llms.txt'), llms);
    },
  };
}
