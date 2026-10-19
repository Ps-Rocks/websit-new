export const CALENDLY_URL = 'https://calendly.com/theinsightfoundry/30min';
export const EMAIL = 'office@theinsightfoundry.org';

export const SOCIALS = {
  linkedin: 'https://www.linkedin.com/company/the-insight-foundry-official',
  instagram: 'https://www.instagram.com/the_insight_foundry',
  youtube: 'http://www.youtube.com/@TheInsightFoundry',
};

export interface ClientStory {
  id: string;
  company: string;
  sector: string;
  logo: string;
  logoBg: string;
  founder: string;
  role: string;
  portrait?: string;
  linkedin?: string;
  website?: string;
  headline: string;
  context: string;
  challenge: string;
  work: string[];
  outcome: string;
  quote: string;
  pullQuote: string;
  videoId?: string;
  tags: string[];
}

// Context lines come from each client's public footprint (company site / public
// profiles). Outcomes are told in the founders' own words, with no invented metrics.
export const SERVICES: { title: string; body: string; preview: string; clients: string[] }[] = [
  {
    title: 'Market and competitor research',
    clients: ['bortex', 'ziptier'],
    body: 'Who else is building in your space, how they position themselves, and where the openings are. Useful before a raise, a pricing decision or a new market.',
    preview: 'Competitor maps, market sizing, positioning gaps',
  },
  {
    title: 'ICP and positioning',
    clients: ['ziptier', 'riskhub'],
    body: 'Which customers to go after first and what to say to them, checked against real data from your market.',
    preview: 'Industry comparisons, buyer profiles, messaging',
  },
  {
    title: 'Go-to-market plans',
    clients: ['riskhub', 'brand-cameo'],
    body: 'A sequenced plan your team can run, covering channels, messaging and first outreach.',
    preview: 'Channel plans, launch sequencing, sample concepts',
  },
  {
    title: 'AI workflows and automation',
    clients: [],
    body: 'When the plan calls for it, we build the workflows: lead qualification, document processing, CRM updates and reporting.',
    preview: 'Lead scoring, document processing, CRM sync',
  },
  {
    title: 'Internal tools and dashboards',
    clients: [],
    body: 'Small, focused tools that put the numbers you check every week in one place.',
    preview: 'KPI dashboards, ops tools, reporting',
  },
];

export const FAQS = [
  {
    q: 'Do you do strategy or automation?',
    a: 'Both. Most of our work starts with research and strategy: markets, competitors, ICP, positioning. When the answer involves building something, like an AI workflow or an internal tool, we build that too.',
  },
  {
    q: 'Who do you usually work with?',
    a: 'Early-stage founders and small teams. So far that has included a defence-tech startup, a B2B AI SaaS company, an edtech platform and a consumer brand, across India and the US.',
  },
  {
    q: 'What happens on the first call?',
    a: 'It’s 30 minutes and it’s free. You tell us what you’re working on and where you feel stuck. We’ll tell you honestly whether we think we can help, and what we’d look at first.',
  },
  {
    q: 'How do you price projects?',
    a: 'After the first call we send a short proposal with the scope, timeline and price. Nothing starts until you’ve agreed to it.',
  },
  {
    q: 'Will we need engineers to maintain what you build?',
    a: 'We try hard to avoid that. We build on tools your team already uses where we can, and we document everything when we hand it over.',
  },
];

export const TEAM = [
  {
    name: 'Prathmesh Soni',
    role: 'Founder · Strategy',
    school: 'IIT Kharagpur',
    photo: '/team-prathmesh.jpg',
  },
  {
    name: 'Atharva Bhardwaj',
    role: 'Co-founder · Technology',
    school: 'NIT Calicut',
    photo: '/team-atharva.jpg',
  },
];

export const STORIES: ClientStory[] = [
  {
    id: 'bortex',
    company: 'BORTEX',
    sector: 'Defence Tech',
    logo: '/lovable-uploads/bortex-logo.png',
    logoBg: '#0f172a',
    founder: 'Shubham Datta',
    role: 'Founder',
    portrait: '/lovable-uploads/shubham-portrait-bortex.jpg',
    linkedin: 'https://www.linkedin.com/in/shubham-mechanical/',
    website: 'https://bortex.co.in',
    headline: 'Competitor research in a market that keeps quiet',
    context:
      'BORTEX is a defence-tech startup in Bengaluru. It builds AI systems that combine data from air, land and sea sensors to help armed forces and government agencies monitor borders.',
    challenge:
      'Defence is a hard market to research from the outside. Very little about competitors or contracts is public. Shubham wanted a clear picture of who else was building in his space before deciding his next steps, and he wanted someone outside the company to check his thinking.',
    work: [
      'A competitor landscape pieced together from scattered public sources',
      'A comparison of how BORTEX is positioned against established defence players',
      'Go-to-market recommendations that fit a small, early-stage team',
    ],
    outcome:
      'Shubham told us the analysis helped him understand his competitors much better. He also said it gave him confidence in the direction he was already taking.',
    quote:
      'Amazing job done with the consultation. The analysis you gave me actually helped me understand my competitor market much better. Doing a competitor analysis in a deep-tech sector, especially for defence, is quite tough, and I definitely benefited from this. Apart from that, this also served as a word of confidence—a valuable second opinion. Kudos to that!',
    pullQuote: 'This also served as a word of confidence—a valuable second opinion.',
    videoId: 'r7hMKI2otX4',
    tags: ['Competitor intelligence', 'GTM', 'Positioning'],
  },
  {
    id: 'riskhub',
    company: 'Risk Hub',
    sector: 'EdTech · FinTech',
    logo: '/lovable-uploads/riskhub-logo.png',
    logoBg: '#f5f5f4',
    founder: 'Prateek Yadav',
    role: 'Founder & CEO',
    portrait: '/lovable-uploads/prateek-portrait-riskhub.png',
    linkedin: 'https://www.linkedin.com/in/prateek964/',
    website: 'https://riskhub.org',
    headline: 'A growth roadmap for a risk-education platform',
    context:
      'Risk Hub is an AI-powered upskilling platform for finance and risk professionals, covering FRM, CFA, quant finance and credit risk. Founded by Prateek Yadav (FRM, CQF), it has a community of 5,000+ risk professionals across 120+ countries.',
    challenge:
      'Certification prep is a crowded category. Prateek knew where he wanted Risk Hub to go, and he wanted help deciding what to prioritise first and how to stand apart from bigger, more general edtech players.',
    work: [
      'Deep-dive into the founder’s vision, priorities and constraints',
      'Data-driven positioning and growth analysis',
      'Structured, sequenced roadmap from positioning to execution',
    ],
    outcome:
      'Prateek described the roadmap as well-structured and actionable. He said it changed how the team thinks about positioning and growth.',
    quote:
      'Their work was exceptionally well-structured, data-driven and actionable. They took the time to understand our vision and priorities, then delivered a roadmap that helped us think differently about positioning, growth and execution.',
    pullQuote: 'Exceptionally well-structured, data-driven and actionable.',
    tags: ['Growth roadmap', 'Positioning', 'Execution plan'],
  },
  {
    id: 'ziptier',
    company: 'ZipTier',
    sector: 'B2B AI SaaS',
    logo: '/lovable-uploads/ziptier-logo.jpg',
    logoBg: '#ffffff',
    founder: 'Mayank Vijay',
    role: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/vijaymayank736/',
    website: 'https://www.ziptier.ai',
    headline: 'Picking ZipTier’s first target industries',
    context:
      'ZipTier builds an AI sales rep for B2B marketing websites. It answers visitor questions from a company’s own content, scores leads and books meetings, with teams in Sammamish, WA and Bengaluru.',
    challenge:
      'ZipTier could sell to a lot of different B2B companies, from SaaS and agencies to staffing firms and manufacturers. The founders had a view on where to start and wanted data to back it up before spending on outreach.',
    work: [
      'ICP industry comparison across candidate verticals',
      'Market overview and competitor landscape',
      'LinkedIn-based outreach and targeting suggestions',
    ],
    outcome:
      'The comparison supported the direction the founders were already leaning towards. Mayank said this was the most useful part of the work, and the outreach suggestions gave them somewhere concrete to start.',
    quote:
      'The ICP industry comparison was the most useful part. It validated the direction we were already leaning and gave us external data-backed confidence. The market overview, competitor landscape and LinkedIn-based suggestions were also valuable starting points.',
    pullQuote: 'It validated the direction we were leaning and gave us data-backed confidence.',
    tags: ['ICP validation', 'Market research', 'Outbound'],
  },
  {
    id: 'brand-cameo',
    company: 'Brand Cameo Works',
    sector: 'Brand & Creative',
    logo: '/lovable-uploads/brand-cameo-logo.jpg',
    logoBg: '#f5f5f4',
    founder: 'Kavya Nagesh',
    role: 'Founder',
    portrait: '/lovable-uploads/kavya-brand-cameo.jpg',
    linkedin: 'https://www.linkedin.com/in/kavya-nagesh-1460b9270/',
    headline: 'A go-to-market plan built around the founder’s vision',
    context:
      'Brand Cameo Works Pvt. Ltd. is an early-stage venture founded by Kavya Nagesh, building a brand with a clear long-term vision.',
    challenge:
      'Kavya wanted a go-to-market plan that fit what she was building, and she wanted to see what the ideas could look like in practice.',
    work: [
      'Collaborative GTM strategy sessions with the founder',
      'Sample creative concepts aligned to the brand vision',
      'Regular working sessions with Kavya throughout',
    ],
    outcome:
      'Kavya said the process was smooth and collaborative, and that the sample concepts matched her vision for the brand.',
    quote:
      'The process was smooth, collaborative, and easy to work through. Prathmesh truly understood our venture and designed sample concepts that aligned with our vision, which added a lot of value.',
    pullQuote: 'Truly understood our venture and designed concepts that aligned with our vision.',
    videoId: 'v1Pms3sBXtI',
    tags: ['GTM strategy', 'Concepts', 'Brand'],
  },
];
