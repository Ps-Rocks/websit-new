/*
 * Blog content. Kept as plain data (no imports) so the build-time prerender in
 * vite.config.ts can turn every post into static HTML that AI crawlers can read.
 *
 * Structure follows generative-engine-optimisation practice: answer first,
 * question-style headings, attributed quotes, named sources, and a visible FAQ.
 */
import { LIBRARY_POSTS } from './posts-library';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; cite: string };

export interface Post {
  slug: string;
  title: string;
  description: string;
  tag: string;
  author: string;
  published: string; // ISO date
  updated?: string;
  takeaways: string[];
  sections: { heading: string; blocks: Block[] }[];
  faq?: { q: string; a: string }[];
}

const CORE_POSTS: Post[] = [
  {
    slug: 'competitor-research-opaque-markets',
    title: 'How to research competitors when your market publishes almost nothing',
    description:
      'A practical method for competitor research in defence, deep-tech and other low-visibility markets, using tenders, patents, hiring signals and event lists.',
    tag: 'Market research',
    author: 'Prathmesh Soni',
    published: '2026-08-29',
    takeaways: [
      'In low-visibility markets, competitor research means collecting many weak public signals and cross-checking them, because no single source tells the whole story.',
      'The most useful signals are usually government tenders, patents, hiring activity, event exhibitor lists and funding announcements.',
      'Mark every finding with how confident you are in it. A competitor map with honest confidence levels is more useful than a confident map that is partly wrong.',
    ],
    sections: [
      {
        heading: 'Why is competitor research so hard in markets like defence?',
        blocks: [
          {
            type: 'p',
            text: 'In consumer or SaaS markets, competitors publish pricing pages, customer logos and product docs. In defence and other deep-tech markets, most of that is never made public. Contracts are confidential, customers rarely talk about suppliers, and many products are only described in vague terms.',
          },
          {
            type: 'p',
            text: 'That leaves founders guessing about who they are really up against. The usual desk research (search the category, read a few websites) produces a list of names but very little about capability, customers or momentum.',
          },
        ],
      },
      {
        heading: 'Where do you find signals when competitors don’t publish?',
        blocks: [
          { type: 'p', text: 'Look for places where companies have to leave a trace, even when they would rather not. In India, for example, these sources tend to be the most useful:' },
          {
            type: 'ul',
            items: [
              'Government procurement portals such as GeM and the Central Public Procurement Portal, which show who bids on and wins public tenders.',
              'Defence innovation programmes such as iDEX, whose challenge winners and partners are announced publicly.',
              'Patent databases like Google Patents, which show what a company is actually building and how actively it is filing.',
              'Hiring activity on LinkedIn and job boards. The roles a company hires for say a lot about what it is about to build or sell.',
              'Exhibitor lists from industry events such as DefExpo and Aero India.',
              'Startup databases such as Tracxn and Crunchbase, plus funding announcements in the business press.',
            ],
          },
        ],
      },
      {
        heading: 'How do you turn scattered signals into a usable competitor map?',
        blocks: [
          {
            type: 'ol',
            items: [
              'Build a long list of every company that could plausibly compete, including adjacent players and large incumbents.',
              'For each one, record what they build, who they sell to, how far along they are, and the source for each fact.',
              'Group them by capability and by customer, not just by category label, because two “drone companies” can serve completely different buyers.',
              'Place them on a simple positioning grid, for example capability depth against customer focus, and look for the empty spaces.',
              'Write down what the map means for your own positioning in two or three plain sentences.',
            ],
          },
        ],
      },
      {
        heading: 'How do you know the research is good enough to act on?',
        blocks: [
          {
            type: 'p',
            text: 'Treat every claim as provisional until two independent sources agree on it. Tag each finding as confirmed, likely or unverified, and say so in the final document. Founders can then decide how much weight to put on each point instead of treating the whole map as fact.',
          },
          {
            type: 'p',
            text: 'It also helps to have someone outside the company review the conclusions. Founders are close to their own product, and a second opinion catches blind spots on both sides: competitors you underestimated and strengths you didn’t realise you had.',
          },
        ],
      },
      {
        heading: 'What this looked like for a defence-tech startup',
        blocks: [
          {
            type: 'p',
            text: 'We used this approach with BORTEX, a Bengaluru defence-tech startup building AI systems that combine air, land and sea sensor data for border monitoring. The goal was a clear picture of the competitive landscape before the founder committed to his next moves.',
          },
          {
            type: 'quote',
            text: 'The analysis you gave me actually helped me understand my competitor market much better. Doing a competitor analysis in a deep-tech sector, especially for defence, is quite tough, and I definitely benefited from this. Apart from that, this also served as a word of confidence—a valuable second opinion.',
            cite: 'Shubham Datta, Founder, BORTEX',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'How long does competitor research take in a low-visibility market?',
        a: 'It depends on how many players there are and how much is public, but expect it to take longer than in a typical SaaS market, because most of the time goes into finding and cross-checking weak signals.',
      },
      {
        q: 'Is it legal to use tender and patent data for competitor research?',
        a: 'Yes. Public procurement records, patents, job postings and press releases are published openly. The method relies only on public information.',
      },
      {
        q: 'What should the final output include?',
        a: 'A list of competitors with sources, a positioning grid, the gaps you could own, and a confidence label on every important claim.',
      },
    ],
  },
  {
    slug: 'choosing-your-first-icp',
    title: 'How to choose your first ICP when your product could sell to everyone',
    description:
      'A simple, data-backed way for early-stage B2B founders to compare industries and pick the first ideal customer profile to focus on.',
    tag: 'Go-to-market',
    author: 'Prathmesh Soni',
    published: '2026-10-14',
    takeaways: [
      'If a product can sell to many industries, picking one first ICP makes sales, marketing and product decisions much easier.',
      'Compare candidate industries on the same few criteria: how painful the problem is, ability to pay, how easy they are to reach, sales-cycle length and existing proof.',
      'Use outside data to test the founder’s instinct. The goal is to confirm or challenge a hunch before spending money on it.',
    ],
    sections: [
      {
        heading: 'Why does an early-stage company need a single ICP?',
        blocks: [
          {
            type: 'p',
            text: 'An ideal customer profile (ICP) describes the type of company most likely to buy, succeed with and stay with your product. Early on, a narrow ICP lets you write sharper messaging, build a focused outreach list and learn faster, because every conversation teaches you something about the same kind of buyer.',
          },
          {
            type: 'p',
            text: 'Horizontal products make this hard. An AI tool for marketing websites, for example, could reasonably sell to SaaS companies, agencies, staffing firms, professional services and manufacturers. Each of those buyers has different problems, budgets and buying processes.',
          },
        ],
      },
      {
        heading: 'What criteria should you use to compare industries?',
        blocks: [
          { type: 'p', text: 'Score each candidate industry on the same short list so the comparison is fair:' },
          {
            type: 'ul',
            items: [
              'Pain: how costly is the problem for them today, and do they already spend money trying to solve it?',
              'Ability to pay: do typical companies in this industry have budget for a tool like yours?',
              'Reachability: can you find and contact decision-makers easily, for example through LinkedIn or industry communities?',
              'Sales cycle: will a deal take weeks or many months?',
              'Proof: do you already have customers, pilots or warm conversations in this industry?',
            ],
          },
        ],
      },
      {
        heading: 'Where does the data for the comparison come from?',
        blocks: [
          {
            type: 'p',
            text: 'Useful sources include LinkedIn company and job-title searches to estimate how many reachable buyers exist, competitors’ customer logos and case studies to see where demand is already proven, review sites such as G2 to see which industries complain about the problem, and job postings that mention the workflow your product replaces.',
          },
          {
            type: 'p',
            text: 'Put the results side by side in one table. The point is not a perfect score but a clear, shared view of the trade-offs.',
          },
        ],
      },
      {
        heading: 'How do you validate the choice before committing?',
        blocks: [
          {
            type: 'p',
            text: 'Run a small, focused outreach test into the top one or two industries with messaging written specifically for them. Reply rates, the questions prospects ask and how quickly conversations move will tell you more than any spreadsheet.',
          },
        ],
      },
      {
        heading: 'What this looked like for a B2B AI SaaS company',
        blocks: [
          {
            type: 'p',
            text: 'ZipTier builds an AI sales rep for B2B marketing websites, and its founders had a view on which industries to target first. We ran an industry comparison alongside a market overview, a competitor landscape and LinkedIn-based outreach suggestions.',
          },
          {
            type: 'quote',
            text: 'The ICP industry comparison was the most useful part. It validated the direction we were already leaning and gave us external data-backed confidence.',
            cite: 'Mayank Vijay, Co-Founder, ZipTier',
          },
        ],
      },
    ],
    faq: [
      {
        q: 'What is the difference between an ICP and a buyer persona?',
        a: 'An ICP describes the type of company you should sell to. A buyer persona describes the individual person inside that company who makes or influences the decision.',
      },
      {
        q: 'Can you change your ICP later?',
        a: 'Yes. Your first ICP is a starting point for focus and learning. Many companies widen or shift it once they have proof in the first segment.',
      },
      {
        q: 'How many industries should you compare?',
        a: 'Usually three to six. Fewer than three gives you little to compare, and more than six makes the analysis slow without adding much.',
      },
    ],
  },
  {
    slug: 'startups',
    title: 'How Startups Are Shaking Up Industries With Daring Ideas',
    description:
      'Why startups gain an edge through speed, scrappiness, and insight in a world shaped by AI and rapid change.',
    tag: 'Startups',
    author: 'The Insight Foundry',
    published: '2026-07-09',
    takeaways: [
      'Startups gain an edge through speed, scrappiness and insight.',
      'The best founders combine creativity with data-driven clarity.',
      'The next wave of startups will combine human creativity with intelligent systems.',
    ],
    sections: [
      {
        heading: 'The Startup Advantage: Speed, Scrappiness, and Sharp Insight',
        blocks: [
          {
            type: 'p',
            text: 'Startups thrive because they work differently. They move quickly, challenge inherited assumptions, and make decisions with clarity rather than committee-based delay. That gives them an edge in markets where timing matters.',
          },
          {
            type: 'ul',
            items: [
              'Speed: Startups iterate fast and test constantly without being slowed by bureaucracy.',
              'Scrappiness: Limited resources force creativity and sharpen decision-making.',
              'Insight: Founders recognise patterns early and act before the market catches up.',
            ],
          },
        ],
      },
      {
        heading: 'Why Startups Matter More Than Ever',
        blocks: [
          {
            type: 'p',
            text: 'The world is changing too quickly for legacy systems to keep up. Startups fill that gap by building new business models, applying technology at scale, and putting customer needs at the center of product design.',
          },
          {
            type: 'p',
            text: 'In an age of AI, automation, and digital transformation, startups are not simply reacting to change. They are creating the future through bold execution and disciplined learning.',
          },
        ],
      },
      {
        heading: 'The Insight Foundry View',
        blocks: [
          {
            type: 'p',
            text: 'At Insight Foundry, we believe startups thrive when creativity is matched with data-driven clarity. The best founders do not rely on instinct alone. They use insight as a competitive advantage.',
          },
          {
            type: 'p',
            text: 'That means detecting market signals early, using analytics to guide decisions, designing systems that scale from day one, and staying ruthlessly focused on customer outcomes. The startups that get this balance right are the ones that reshape industries.',
          },
        ],
      },
      {
        heading: 'What’s Next for Startups?',
        blocks: [
          { type: 'p', text: 'The next wave of startup innovation will be shaped by founders who combine human creativity with intelligent systems.' },
          {
            type: 'ul',
            items: [
              'AI-native companies built around automation from day one.',
              'Climate tech startups solving sustainability challenges at scale.',
              'Creator economy platforms that help people build durable businesses.',
              'Health and bio startups advancing personalized care.',
              'Infrastructure startups making digital transformation more accessible for everyone.',
            ],
          },
        ],
      },
    ],
  },
];

export const POSTS: Post[] = [...CORE_POSTS, ...LIBRARY_POSTS];

/* Posts are scheduled: anything dated in the future stays hidden until that day
 * (on the client immediately, and in the static HTML/sitemap on the next build). */
export const today = () => new Date().toISOString().slice(0, 10);
export const isLive = (p: Post, on = today()) => p.published <= on;
export const livePosts = (on = today()) =>
  POSTS.filter((p) => isLive(p, on)).sort((a, b) => b.published.localeCompare(a.published));

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);
