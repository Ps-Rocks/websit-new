/*
 * Single source of truth for per-route metadata and structured data.
 * Used by the client (RouteMeta) and by the build-time prerender in vite.config.ts,
 * so it must only import other plain-data modules.
 */
import { EMAIL, FAQS, SOCIALS, STORIES, TEAM } from './site';
import { livePosts, postBySlug } from './posts';

export const SITE_URL = 'https://theinsightfoundry.org';
export const SITE_NAME = 'The Insight Foundry';
const LOGO = `${SITE_URL}/lovable-uploads/tif-favicon.png`;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

const STATIC: RouteMeta[] = [
  {
    path: '/',
    title: 'The Insight Foundry | Strategy and automation for early-stage founders',
    description:
      'Market research, competitor analysis, ICP and go-to-market strategy for early-stage founders, plus the AI workflows and internal tools that follow. Book a free 30-minute call.',
  },
  {
    path: '/stories',
    title: 'Client stories | The Insight Foundry',
    description:
      'How founders at BORTEX, Risk Hub, ZipTier and Brand Cameo Works used our research and go-to-market work, in their own words.',
  },
  {
    path: '/about',
    title: 'About | The Insight Foundry',
    description:
      'The Insight Foundry is a strategy and automation studio founded in 2024 by Prathmesh Soni (IIT Kharagpur) and Atharva Bhardwaj (NIT Calicut).',
  },
  {
    path: '/careers',
    title: 'Careers | The Insight Foundry',
    description: 'Open roles at The Insight Foundry, a remote strategy and automation studio working with early-stage founders.',
  },
  {
    path: '/blog',
    title: 'Writing | The Insight Foundry',
    description: 'Practical articles on market research, ICP, go-to-market and automation for early-stage founders.',
  },
  { path: '/book-call', title: 'Book a call | The Insight Foundry', description: 'Book a free 30-minute call with The Insight Foundry.' },
  { path: '/privacy-policy', title: 'Privacy policy | The Insight Foundry', description: 'How The Insight Foundry collects, uses and protects your data.' },
  {
    path: '/internship-terms',
    title: 'Internship terms | The Insight Foundry',
    description: 'Terms and conditions for internships at The Insight Foundry.',
    noindex: true,
  },
];

export const ROUTES: RouteMeta[] = [
  ...STATIC,
  ...livePosts().map((p) => ({
    path: `/blog/${p.slug}`,
    title: `${p.title} | ${SITE_NAME}`,
    description: p.description,
    type: 'article' as const,
  })),
];

export function findMeta(path: string): RouteMeta | undefined {
  const clean = path.replace(/\/+$/, '') || '/';
  return ROUTES.find((r) => r.path === clean);
}

export const metaFor = (path: string): RouteMeta => findMeta(path) ?? STATIC[0];

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */
const people = TEAM.map((t) => ({
  '@type': 'Person',
  name: t.name,
  jobTitle: t.role.replace(' · ', ', '),
  alumniOf: t.school,
  image: `${SITE_URL}${t.photo}`,
  worksFor: { '@id': `${SITE_URL}/#organization` },
}));

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO,
  image: LOGO,
  email: EMAIL,
  foundingDate: '2024',
  description:
    'A strategy and automation studio for early-stage founders: market research, competitor analysis, ICP, positioning and go-to-market strategy, plus AI workflows and internal tools.',
  founder: people,
  address: { '@type': 'PostalAddress', addressLocality: 'Indore', addressRegion: 'Madhya Pradesh', addressCountry: 'IN' },
  areaServed: ['IN', 'US', 'Worldwide'],
  knowsAbout: ['Market research', 'Competitor analysis', 'Ideal customer profile', 'Positioning', 'Go-to-market strategy', 'AI automation'],
  sameAs: Object.values(SOCIALS),
};

const faqPage = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

const breadcrumbs = (trail: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${path}` })),
});

export function schemaFor(path: string): object[] {
  const out: object[] = [organization];
  if (path === '/') out.push(faqPage(FAQS));
  if (path === '/about') {
    out.push({ '@context': 'https://schema.org', '@type': 'AboutPage', url: `${SITE_URL}/about`, mainEntity: { '@id': `${SITE_URL}/#organization` } });
    people.forEach((p) => out.push({ '@context': 'https://schema.org', ...p }));
  }
  if (path === '/stories') {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      url: `${SITE_URL}/stories`,
      name: 'Client stories',
      about: STORIES.map((s) => ({ '@type': 'Organization', name: s.company, url: s.website })),
    });
  }
  if (path.startsWith('/blog/')) {
    const post = postBySlug(path.slice('/blog/'.length));
    if (post) {
      const author = TEAM.find((t) => t.name === post.author);
      out.push({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.published,
        dateModified: post.updated ?? post.published,
        author: author
          ? { '@type': 'Person', name: author.name, jobTitle: author.role.replace(' · ', ', '), url: `${SITE_URL}/about` }
          : { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: `${SITE_URL}${path}`,
        image: LOGO,
      });
      if (post.faq) out.push(faqPage(post.faq));
      out.push(breadcrumbs([['Home', '/'], ['Writing', '/blog'], [post.title, path]]));
    }
  }
  return out;
}
