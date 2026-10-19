/*
 * Article library. Dates are spread evenly between July and October 2026.
 * Plain data only (type-only import) so the build-time prerender can read it.
 */
import type { Post } from './posts';

const P = 'Prathmesh Soni';
const A = 'Atharva Bhardwaj';

export const LIBRARY_POSTS: Post[] = [
  {
    slug: 'how-to-get-cited-by-ai-search',
    title: 'How to get your startup cited by ChatGPT, Perplexity and Google AI Overviews',
    description:
      'A plain-English guide to generative engine optimisation (GEO): what AI search engines look for, how to make your site readable to them, and how to write content they cite.',
    tag: 'Marketing',
    author: P,
    published: '2026-10-19',
    takeaways: [
      'AI search tools can only cite pages they can read. Many AI crawlers do not run JavaScript, so a client-rendered site can look empty to them.',
      'Research from Princeton and others found that adding quotations, statistics and cited sources made content noticeably more visible in AI-generated answers.',
      'Write answer-first: put a clear, direct answer near the top, use question-style headings, and keep facts specific and sourced.',
    ],
    sections: [
      {
        heading: 'What is generative engine optimisation (GEO)?',
        blocks: [
          {
            type: 'p',
            text: 'Generative engine optimisation is the practice of making your content easy for AI search tools to find, understand and cite. Where traditional SEO aims for a high position in a list of links, GEO aims for your company or page to be named inside the answer that ChatGPT, Perplexity, Claude or Google’s AI Overviews generate.',
          },
          {
            type: 'p',
            text: 'The term comes from a 2023 research paper by Aggarwal and colleagues (Princeton, Georgia Tech, the Allen Institute for AI and IIT Delhi), later presented at KDD 2024. They tested how different content changes affected how often a source appeared in AI answers.',
          },
        ],
      },
      {
        heading: 'Can AI search engines actually read your website?',
        blocks: [
          {
            type: 'p',
            text: 'This is the first thing to check, and it is often the biggest problem. Many AI crawlers, including those used by OpenAI, Anthropic and Perplexity, fetch the raw HTML of a page and generally do not execute JavaScript. If your site is a single-page app that builds its content in the browser, those crawlers may see little more than an empty container.',
          },
          {
            type: 'ul',
            items: [
              'Use server-side rendering or prerendering so every important page ships its text in the HTML.',
              'Make sure robots.txt does not block the crawlers you want, such as OAI-SearchBot, ClaudeBot and PerplexityBot.',
              'Put structured data (JSON-LD) in the HTML itself, not only injected by JavaScript.',
              'Test by fetching a page with a tool like curl and reading what comes back.',
            ],
          },
        ],
      },
      {
        heading: 'What kind of content gets cited?',
        blocks: [
          {
            type: 'p',
            text: 'In the GEO paper, the strongest improvements came from adding quotations from relevant sources, adding statistics, and citing sources, with reported visibility gains of up to about 40% on the authors’ benchmark. Keyword stuffing did not help. In practice, that means writing like a good reference: specific, attributed and easy to quote.',
          },
          {
            type: 'ul',
            items: [
              'Answer the question in the first few sentences, then explain.',
              'Use headings phrased as the questions people actually ask.',
              'Include real numbers with their source, and quotes with a named person.',
              'Add a short FAQ to pages where people have follow-up questions.',
              'Show who wrote the page and when it was last updated.',
            ],
          },
        ],
      },
      {
        heading: 'Does llms.txt help?',
        blocks: [
          {
            type: 'p',
            text: 'An llms.txt file is a short, plain-text summary of your site for AI tools. It is cheap to add, but as of 2026 there is little evidence that major AI search products rely on it. Treat it as a nice extra, not a substitute for readable pages and good content.',
          },
        ],
      },
      {
        heading: 'How do you measure whether GEO is working?',
        blocks: [
          {
            type: 'p',
            text: 'Rank tracking does not capture AI answers well. A simple method is to keep a list of the questions your buyers ask, run them regularly in the main AI tools, and record whether your company is mentioned or linked. Because answers vary, run each question more than once and look at the trend over weeks rather than a single result.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Is GEO different from SEO?', a: 'They overlap heavily. Good SEO (crawlable pages, clear structure, helpful content) is the foundation. GEO adds a focus on being quotable and on making sure AI crawlers can read your pages.' },
      { q: 'Should I block AI crawlers?', a: 'Only if you do not want to appear in AI answers. Blocking search-focused crawlers such as OAI-SearchBot or PerplexityBot generally means those tools cannot cite you.' },
      { q: 'How long does it take to see results?', a: 'Technical fixes can take effect as soon as pages are recrawled. Content and authority improvements usually take longer, so measure over weeks and months.' },
    ],
  },
  {
    slug: 'what-is-go-to-market-strategy',
    title: 'What is a go-to-market strategy for an early-stage startup?',
    description:
      'A clear definition of go-to-market strategy, what it should contain for a startup, and how to write one in a few pages instead of a few months.',
    tag: 'Go-to-market',
    author: P,
    published: '2026-07-13',
    takeaways: [
      'A go-to-market (GTM) strategy is your plan for who you will sell to first, what you will tell them, how you will reach them and how you will know it is working.',
      'For an early-stage startup it should fit on a few pages and be easy to change.',
      'The most common gap is not channels or tactics but an unclear first customer.',
    ],
    sections: [
      {
        heading: 'What does a go-to-market strategy actually include?',
        blocks: [
          { type: 'p', text: 'At its simplest, a GTM strategy answers five questions:' },
          {
            type: 'ol',
            items: [
              'Who is the first customer? A specific type of company or person, not “everyone who could use this”.',
              'What problem do they have, and why now?',
              'What will you say to them? Your positioning and core message.',
              'How will you reach them? The channels you will test first.',
              'How will you know it is working? A few numbers you will track every week.',
            ],
          },
        ],
      },
      {
        heading: 'How is a startup GTM different from a big-company launch plan?',
        blocks: [
          {
            type: 'p',
            text: 'Large companies write go-to-market plans to coordinate many teams around a known product. A startup is still learning what works, so its GTM strategy is closer to a set of hypotheses to test quickly. It should be short, specific and revised as soon as real conversations prove part of it wrong.',
          },
        ],
      },
      {
        heading: 'What are the most common mistakes?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Targeting too many customer types at once, so every message ends up generic.',
              'Choosing channels before knowing where the first customers spend their time.',
              'Copying a competitor’s positioning instead of finding a distinct angle.',
              'Measuring vanity numbers like impressions instead of conversations and conversions.',
            ],
          },
        ],
      },
      {
        heading: 'How do you write one quickly?',
        blocks: [
          {
            type: 'p',
            text: 'Start with research rather than brainstorming: look at the market, the competitors and the customers you already have. Then write one page per question above, pick two channels to test for a few weeks, and set a date to review what happened.',
          },
          {
            type: 'quote',
            text: 'Their work was exceptionally well-structured, data-driven and actionable. They took the time to understand our vision and priorities, then delivered a roadmap that helped us think differently about positioning, growth and execution.',
            cite: 'Prateek Yadav, Founder & CEO, Risk Hub',
          },
        ],
      },
    ],
    faq: [
      { q: 'How long should a startup GTM strategy be?', a: 'Short enough that the whole team can read it in one sitting. A few pages is usually plenty at the early stage.' },
      { q: 'When should you update it?', a: 'Whenever real customer conversations contradict an assumption, and at a regular review point, for example monthly.' },
      { q: 'Is a GTM strategy the same as a marketing plan?', a: 'No. A marketing plan covers campaigns and channels. A GTM strategy also covers who you sell to, what you sell them, pricing and how sales works.' },
    ],
  },
  {
    slug: 'positioning-statement-guide',
    title: 'How to write a positioning statement customers actually understand',
    description:
      'A practical way to write startup positioning: who it is for, what it replaces, why it is different, with examples of what to avoid.',
    tag: 'Positioning',
    author: P,
    published: '2026-07-18',
    takeaways: [
      'Positioning is how customers understand what your product is, who it is for and why it is better than the alternatives they already use.',
      'Start from the alternative customers use today, not from your feature list.',
      'If a prospect cannot repeat your positioning back in their own words, it is not working yet.',
    ],
    sections: [
      {
        heading: 'What is a positioning statement?',
        blocks: [
          {
            type: 'p',
            text: 'A positioning statement is a short internal description of where your product fits in the customer’s mind. It is not a tagline. It is the reference your team uses to write the website, the sales pitch and the onboarding.',
          },
          { type: 'p', text: 'A simple structure: For [specific customer] who [problem], [product] is a [category] that [main benefit]. Unlike [current alternative], it [key difference].' },
        ],
      },
      {
        heading: 'Why start with the alternative instead of the product?',
        blocks: [
          {
            type: 'p',
            text: 'Customers judge every new product against what they do today, whether that is a competitor, a spreadsheet, an agency or doing nothing. Naming that alternative forces you to explain a real difference instead of listing features that sound good in isolation.',
          },
        ],
      },
      {
        heading: 'What makes positioning weak?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Abstract words such as “powerful”, “seamless” or “next-generation” that any company could use.',
              'A target customer so broad it includes everyone.',
              'A category nobody searches for or understands.',
              'Differences that matter to the founder but not to the buyer.',
            ],
          },
        ],
      },
      {
        heading: 'How do you test it?',
        blocks: [
          {
            type: 'p',
            text: 'Show the statement, or a homepage built from it, to five or six people who match your target customer. Ask them what the product does and who it is for. If their answers match yours, you are close. If they guess wrong, the words need work, not the people.',
          },
        ],
      },
    ],
    faq: [
      { q: 'How often should positioning change?', a: 'Not often. Revisit it when you change your target customer, enter a new market or notice that prospects consistently misunderstand you.' },
      { q: 'Is positioning the same as branding?', a: 'No. Positioning is the substance of what you are and for whom. Branding is how that is expressed visually and in tone.' },
      { q: 'Can a small startup out-position a big competitor?', a: 'Often, yes. Focusing on a narrower customer with a specific problem is one of the clearest ways to stand apart from a larger, more general player.' },
    ],
  },
  {
    slug: 'bottom-up-market-sizing',
    title: 'How to size a market without inventing numbers',
    description:
      'Why bottom-up market sizing is more credible than top-down TAM figures, and a step-by-step way to build one from real data.',
    tag: 'Market research',
    author: P,
    published: '2026-07-22',
    takeaways: [
      'Top-down market sizes (a percentage of a big industry number) are easy to produce and easy for investors to dismiss.',
      'Bottom-up sizing multiplies the number of real potential customers by what each could realistically pay.',
      'Show your sources and assumptions so others can check and adjust them.',
    ],
    sections: [
      {
        heading: 'What are TAM, SAM and SOM?',
        blocks: [
          {
            type: 'ul',
            items: [
              'TAM (total addressable market): total revenue if every possible customer bought.',
              'SAM (serviceable available market): the part of TAM your product and business model can actually serve.',
              'SOM (serviceable obtainable market): the share you can realistically win in the next few years.',
            ],
          },
        ],
      },
      {
        heading: 'Why is bottom-up sizing more credible?',
        blocks: [
          {
            type: 'p',
            text: 'A top-down figure usually starts from a large industry report and applies a percentage. It tells the reader very little about whether you understand your customers. A bottom-up model starts from countable things, such as the number of companies of a certain type and size, and builds up from there, which shows you know who you are selling to.',
          },
        ],
      },
      {
        heading: 'How do you build a bottom-up estimate?',
        blocks: [
          {
            type: 'ol',
            items: [
              'Define the customer precisely, for example “B2B software companies with 20 to 200 employees in India”.',
              'Count them using sources such as company databases, LinkedIn company search, industry associations or government registries.',
              'Estimate realistic annual spend per customer from your own pricing, competitor pricing or customer interviews.',
              'Multiply, then apply realistic filters for who can actually be reached and converted.',
              'Write down every assumption and its source.',
            ],
          },
        ],
      },
      {
        heading: 'How precise does it need to be?',
        blocks: [
          {
            type: 'p',
            text: 'Not very. The goal is a defensible order of magnitude and a clear method. A range with honest assumptions is more useful than a single, precise-looking number nobody can trace.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Should I include both top-down and bottom-up numbers?', a: 'It can help to show both and explain the gap. If they differ wildly, that is worth understanding.' },
      { q: 'Where do I find company counts?', a: 'Common sources include LinkedIn company search, startup databases, industry association member lists and government business registries.' },
      { q: 'How often should I update the market size?', a: 'When your target customer changes or when you get better pricing data from real deals.' },
    ],
  },
  {
    slug: 'customer-discovery-interviews',
    title: 'How to run customer discovery interviews that give you useful answers',
    description:
      'Who to talk to, what to ask and what to avoid in early customer interviews, so you learn about real problems instead of collecting polite compliments.',
    tag: 'Market research',
    author: P,
    published: '2026-07-27',
    takeaways: [
      'Ask about what people have actually done in the past, not what they say they would do in the future.',
      'Avoid pitching during discovery. The moment you pitch, people start being polite.',
      'Look for patterns across many conversations rather than acting on one strong opinion.',
    ],
    sections: [
      {
        heading: 'Who should you interview?',
        blocks: [
          {
            type: 'p',
            text: 'People who match the customer you think you are building for, and ideally the person who would feel the problem and the person who would pay. Friends and family are rarely useful because they are trying to be supportive.',
          },
        ],
      },
      {
        heading: 'What questions work best?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Tell me about the last time you dealt with this problem. What happened?',
              'What did you try? What did it cost in time or money?',
              'What do you use today, and what do you dislike about it?',
              'Who else is involved when you decide to buy something for this?',
            ],
          },
        ],
      },
      {
        heading: 'What should you avoid?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Hypothetical questions like “Would you use a tool that…?” Almost everyone says yes.',
              'Describing your solution early, which steers the rest of the conversation.',
              'Leading questions that suggest the answer you want.',
            ],
          },
        ],
      },
      {
        heading: 'How do you turn interviews into decisions?',
        blocks: [
          {
            type: 'p',
            text: 'Write notes immediately after each call, using the person’s own words where possible. After every five or so interviews, review them together and list the problems that came up repeatedly, how painful they were and what people already spend to solve them.',
          },
        ],
      },
    ],
    faq: [
      { q: 'How many interviews are enough?', a: 'There is no fixed number. Keep going until you stop hearing new things about the problem, which for a focused customer type can happen within a couple of dozen conversations.' },
      { q: 'Should I record interviews?', a: 'Only with permission. Recording lets you focus on listening, but some people speak less openly when recorded.' },
      { q: 'Can I do discovery over email or surveys?', a: 'Surveys can help once you know what to ask, but live conversations are better early on because you can follow up on surprising answers.' },
    ],
  },
  {
    slug: 'what-should-a-startup-automate-first',
    title: 'What should a startup automate first?',
    description:
      'A simple way to decide which tasks are worth automating in a small company, and which ones should stay manual for now.',
    tag: 'Automation',
    author: A,
    published: '2026-08-01',
    takeaways: [
      'Automate tasks that are frequent, repetitive, rule-based and already well understood.',
      'Do not automate a process that is still changing every week. Fix and document it first.',
      'Start with one small workflow, measure the time saved, then expand.',
    ],
    sections: [
      {
        heading: 'Which tasks are good candidates?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Copying data between tools, such as form submissions into a CRM.',
              'Sending routine notifications and follow-ups.',
              'Sorting and tagging incoming requests or emails.',
              'Producing the same weekly report from the same sources.',
            ],
          },
        ],
      },
      {
        heading: 'Which tasks should stay manual for now?',
        blocks: [
          {
            type: 'p',
            text: 'Anything that needs judgement you have not yet written down, anything that happens rarely, and anything where a mistake would be expensive and hard to notice. Early sales conversations are also worth keeping personal, because they are where you learn the most.',
          },
        ],
      },
      {
        heading: 'How do you prioritise?',
        blocks: [
          {
            type: 'p',
            text: 'List the repetitive tasks your team does each week. For each one, estimate how often it happens and how long it takes, and note how often it goes wrong. The best first project is usually frequent, boring and clearly defined.',
          },
        ],
      },
      {
        heading: 'Where does AI fit in?',
        blocks: [
          {
            type: 'p',
            text: 'Classic automation tools handle fixed rules well. AI models are useful when a step involves reading or writing unstructured text, such as summarising an email, extracting fields from a document or drafting a reply for a person to approve. Keeping a person in the loop for anything customer-facing is a sensible default.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Do I need engineers to automate tasks?', a: 'Not always. No-code tools can handle many simple workflows. More complex or sensitive processes benefit from someone who can build, test and maintain them properly.' },
      { q: 'How do I know if automation saved time?', a: 'Measure the time a task takes before automating it, then check again a few weeks after. Include time spent fixing errors.' },
      { q: 'What is the biggest automation mistake?', a: 'Automating a messy process. The automation will repeat the mess faster.' },
    ],
  },
  {
    slug: 'competitive-analysis-template',
    title: 'A competitive analysis template for startups: what to include',
    description:
      'The sections a useful startup competitive analysis should have, from the competitor list to positioning gaps, and how to keep it current.',
    tag: 'Market research',
    author: P,
    published: '2026-08-05',
    takeaways: [
      'Include direct competitors, indirect alternatives and the option of doing nothing.',
      'Compare on the things customers care about, not on long feature checklists.',
      'End with decisions: what the analysis means for your positioning and roadmap.',
    ],
    sections: [
      {
        heading: 'Who counts as a competitor?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Direct competitors that sell a similar product to the same customer.',
              'Indirect alternatives that solve the same problem differently, such as agencies, spreadsheets or in-house teams.',
              'Doing nothing, which is often the biggest competitor for a new category.',
            ],
          },
        ],
      },
      {
        heading: 'What should you record for each one?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Who they sell to, and how they describe themselves.',
              'Pricing and packaging, where public.',
              'Strengths and weaknesses, based on reviews, customer conversations and your own testing.',
              'Signs of momentum such as funding, hiring and recent launches.',
              'The source for each fact.',
            ],
          },
        ],
      },
      {
        heading: 'How do you find the gaps?',
        blocks: [
          {
            type: 'p',
            text: 'Plot competitors on two dimensions that matter to buyers, for example price against depth of features, or customer size against industry focus. Empty or crowded areas of the chart are useful prompts for where you could stand apart.',
          },
        ],
      },
      {
        heading: 'What should the conclusion say?',
        blocks: [
          {
            type: 'p',
            text: 'A competitive analysis is only useful if it changes a decision. Finish with a short list of implications: how to position, which customers to focus on, and what to build or not build next.',
          },
          {
            type: 'quote',
            text: 'The market overview, competitor landscape and LinkedIn-based suggestions were also valuable starting points.',
            cite: 'Mayank Vijay, Co-Founder, ZipTier',
          },
        ],
      },
    ],
    faq: [
      { q: 'How many competitors should I analyse?', a: 'Enough to understand the main options a customer would consider. For many startups that means a handful of close competitors plus the main alternatives.' },
      { q: 'How often should I update it?', a: 'A light review every quarter, and a deeper update before fundraising or a major product decision.' },
      { q: 'Should I share it with investors?', a: 'A summary is often useful in a pitch. Investors mainly want to see that you understand the landscape and have a clear angle.' },
    ],
  },
  {
    slug: 'pricing-a-b2b-product-without-comparables',
    title: 'How to price a B2B product when there is nothing to compare it to',
    description:
      'Practical ways for early-stage founders to set a first B2B price when the category is new: value, alternatives, and testing with real buyers.',
    tag: 'Go-to-market',
    author: P,
    published: '2026-08-10',
    takeaways: [
      'Anchor your price to the value the customer gets and to what they pay for the current alternative.',
      'Early pricing is a test. Expect to change it as you learn.',
      'Talk about price early in sales conversations to learn what buyers expect.',
    ],
    sections: [
      {
        heading: 'Where do you start when there are no comparable products?',
        blocks: [
          {
            type: 'p',
            text: 'Look at what customers spend on the problem today. That might be a person’s time, an agency, a different tool or lost revenue. Your product competes with that spend even if no product looks like yours.',
          },
        ],
      },
      {
        heading: 'How do you estimate value?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Time saved: hours per week multiplied by the cost of that person’s time.',
              'Revenue gained: more leads, faster deals or better conversion.',
              'Risk reduced: fewer errors, missed deadlines or compliance issues.',
            ],
          },
          { type: 'p', text: 'Price at a fraction of the value so the decision is easy, and be ready to explain the calculation to buyers.' },
        ],
      },
      {
        heading: 'How do you test pricing?',
        blocks: [
          {
            type: 'p',
            text: 'Quote real prices to real prospects and watch how they react. If nobody pushes back, the price may be too low. If everyone hesitates for the same reason, that reason tells you what to change, whether price, packaging or the value story.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Should early customers get a discount?', a: 'A clear early-customer discount in exchange for feedback or a case study can be fair. Avoid unclear discounts you will struggle to remove later.' },
      { q: 'Monthly or annual pricing?', a: 'Offering both is common. Annual plans improve cash flow, while monthly plans lower the barrier for new customers.' },
      { q: 'Should pricing be on the website?', a: 'Public pricing reduces friction for smaller deals. Larger, more complex deals often use “contact us”. Many companies show starting prices to set expectations.' },
    ],
  },
  {
    slug: 'outbound-list-for-niche-b2b',
    title: 'How to build an outbound prospect list for a niche B2B market',
    description:
      'A step-by-step method for building a focused, accurate outbound list when your target market is small or specialised.',
    tag: 'Go-to-market',
    author: P,
    published: '2026-08-15',
    takeaways: [
      'A small, accurate list beats a large, generic one, especially in niche markets.',
      'Define the company and the person before you start searching.',
      'Record why each company is on the list, so your outreach can reference something real.',
    ],
    sections: [
      {
        heading: 'How do you define who goes on the list?',
        blocks: [
          {
            type: 'p',
            text: 'Write down the company criteria (industry, size, location, technology used, recent events such as funding or hiring) and the person criteria (job title, seniority, team). Be strict. Every company that does not fit makes your results harder to read.',
          },
        ],
      },
      {
        heading: 'Where do you find companies?',
        blocks: [
          {
            type: 'ul',
            items: [
              'LinkedIn company and people search, filtered by industry, size and title.',
              'Industry associations, event exhibitor lists and award lists.',
              'Competitors’ public customer lists and case studies.',
              'Job postings that mention the problem you solve.',
            ],
          },
        ],
      },
      {
        heading: 'How do you make outreach relevant?',
        blocks: [
          {
            type: 'p',
            text: 'For each company, note one specific reason it fits, such as a recent hire, a product launch or a public comment about the problem. A message that references something real gets read. A generic template rarely does.',
          },
        ],
      },
      {
        heading: 'How do you keep the list clean?',
        blocks: [
          {
            type: 'p',
            text: 'Track the outcome of every contact, remove people who ask not to be contacted, and respect the data protection and anti-spam rules in each country you reach.',
          },
        ],
      },
    ],
    faq: [
      { q: 'How big should a first outbound list be?', a: 'Big enough to learn from, small enough to personalise. For a niche market, a well-researched list of a few dozen companies can teach you a lot.' },
      { q: 'Should I buy a list?', a: 'Bought lists are often out of date and poorly targeted. Building your own takes longer but usually performs better.' },
      { q: 'Email or LinkedIn?', a: 'Test both. The right channel depends on where your buyers actually respond.' },
    ],
  },
  {
    slug: 'finding-government-customers-india',
    title: 'How to find government customers in India using public tenders',
    description:
      'An introduction to GeM, the Central Public Procurement Portal and defence innovation programmes for startups selling to the public sector in India.',
    tag: 'Market research',
    author: P,
    published: '2026-08-19',
    takeaways: [
      'Public procurement in India is largely visible through portals such as GeM and the Central Public Procurement Portal.',
      'Tender data shows who buys what, how often, and who wins, which is useful for both sales and competitor research.',
      'Programmes such as iDEX create a route for startups to work with defence buyers.',
    ],
    sections: [
      {
        heading: 'Where are Indian government tenders published?',
        blocks: [
          {
            type: 'ul',
            items: [
              'GeM (Government e-Marketplace), used by central and state government buyers for many goods and services.',
              'The Central Public Procurement Portal, which lists tenders from central government ministries and organisations.',
              'State procurement portals and the websites of individual public sector organisations.',
            ],
          },
        ],
      },
      {
        heading: 'What can tender data tell you?',
        blocks: [
          {
            type: 'p',
            text: 'Looking at past tenders shows which departments buy products like yours, the technical requirements they write, typical contract sizes and timelines, and which companies are bidding and winning. That helps you decide whether a public-sector market is worth pursuing and how to qualify for it.',
          },
        ],
      },
      {
        heading: 'What about defence?',
        blocks: [
          {
            type: 'p',
            text: 'Defence buying has its own processes and is less visible, but programmes such as iDEX (Innovations for Defence Excellence) run open challenges and publish winners, which gives startups a structured entry point.',
          },
          {
            type: 'quote',
            text: 'Doing a competitor analysis in a deep-tech sector, especially for defence, is quite tough, and I definitely benefited from this.',
            cite: 'Shubham Datta, Founder, BORTEX',
          },
        ],
      },
      {
        heading: 'What should a startup prepare before bidding?',
        blocks: [
          {
            type: 'p',
            text: 'Read several past tenders in your area to understand the eligibility criteria, which may include turnover, years in operation or certifications, and check whether startup relaxations apply. Plan for longer sales cycles than in private markets.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Can startups sell to the Indian government?', a: 'Yes. Startups can register as sellers on GeM, and some procurement rules include relaxations for eligible startups. Check the current rules for each tender.' },
      { q: 'Is tender data free to access?', a: 'Published tenders on the main portals can be viewed publicly, although detailed analysis across many tenders takes time.' },
      { q: 'How long do government sales take?', a: 'Usually longer than private-sector sales, because of formal processes, approvals and budget cycles.' },
    ],
  },
  {
    slug: 'consultant-or-in-house',
    title: 'When should a startup hire a consultant instead of doing it in-house?',
    description:
      'A practical guide for founders deciding whether to bring in outside help for strategy, research or automation work, and how to get value from it.',
    tag: 'Startups',
    author: P,
    published: '2026-08-24',
    takeaways: [
      'Outside help makes most sense for focused, time-bound questions where an independent view or specialist skills matter.',
      'Ongoing, core work is usually better done by the team that will own it.',
      'A good engagement ends with something your team can use without the consultant.',
    ],
    sections: [
      {
        heading: 'When does outside help make sense?',
        blocks: [
          {
            type: 'ul',
            items: [
              'You need an answer to a specific question, such as which market to enter or how competitors are positioned, within weeks.',
              'You want an independent view to test your own thinking.',
              'The work needs skills you do not have yet and do not need full-time.',
            ],
          },
        ],
      },
      {
        heading: 'When should you keep it in-house?',
        blocks: [
          {
            type: 'p',
            text: 'Work that is central to how your company competes, or that needs to happen every week, is usually better owned by your team. Customer conversations in particular are something founders should stay close to.',
          },
        ],
      },
      {
        heading: 'How do you get value from a consultant?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Agree the question, the deliverable and the timeline before starting.',
              'Share context openly, including what you already believe.',
              'Ask for the sources and reasoning, not just the conclusions.',
              'Make sure the final output is something your team can act on directly.',
            ],
          },
          {
            type: 'quote',
            text: 'The process was smooth, collaborative, and easy to work through.',
            cite: 'Kavya Nagesh, Founder, Brand Cameo Works',
          },
        ],
      },
    ],
    faq: [
      { q: 'How much should a startup spend on consultants?', a: 'It depends on the stakes of the decision. Spending makes sense when the cost of getting a decision wrong is clearly higher than the cost of the work.' },
      { q: 'What should a proposal include?', a: 'The problem, the scope, the deliverables, the timeline and the price, in plain language.' },
      { q: 'How do I avoid paying for a document nobody uses?', a: 'Agree in advance what decision the work will inform, and ask for an output designed around that decision.' },
    ],
  },
  {
    slug: 'measuring-positioning',
    title: 'How to tell whether your positioning is working',
    description:
      'The signals that show whether your startup’s positioning is clear: sales conversations, website behaviour, win rates and how customers describe you.',
    tag: 'Positioning',
    author: P,
    published: '2026-09-02',
    takeaways: [
      'Good positioning shows up in shorter explanations, better-fit leads and fewer “so what do you do?” questions.',
      'Track a few signals consistently rather than looking for a single perfect metric.',
      'How customers describe you to others is one of the clearest tests.',
    ],
    sections: [
      {
        heading: 'What signals show up in sales?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Prospects understand what you do within the first few minutes.',
              'More of your inbound leads match your target customer.',
              'Fewer deals are lost because the buyer did not see the difference from alternatives.',
              'Price objections become less frequent or easier to handle.',
            ],
          },
        ],
      },
      {
        heading: 'What signals show up on the website?',
        blocks: [
          {
            type: 'p',
            text: 'Compare how many visitors take a meaningful next step, such as booking a call or starting a trial, before and after a positioning change. Watch for traffic from the right audience that still does not convert, which often means the message is unclear.',
          },
        ],
      },
      {
        heading: 'How do customers describe you?',
        blocks: [
          {
            type: 'p',
            text: 'Ask recent customers how they would explain your product to a colleague. If their description matches your intended positioning, it is working. If it does not, their words are often a better starting point for your next draft than your own.',
          },
        ],
      },
    ],
    faq: [
      { q: 'How long before positioning changes show results?', a: 'Sales conversations change quickly. Website and pipeline metrics usually need several weeks of data.' },
      { q: 'Should I A/B test positioning?', a: 'Testing headlines can help when you have enough traffic. With low traffic, structured customer conversations are more informative.' },
      { q: 'What if different customer types respond to different messages?', a: 'That may mean you are serving more than one segment. Decide which one to lead with, or create separate pages for each.' },
    ],
  },
  {
    slug: 'founder-led-sales-process',
    title: 'Founder-led sales: a simple process from first call to signed deal',
    description:
      'How early-stage founders can run a repeatable sales process before hiring a sales team: stages, notes, follow-ups and what to track.',
    tag: 'Go-to-market',
    author: P,
    published: '2026-09-07',
    takeaways: [
      'Founders should run early sales themselves because that is where they learn the most about customers.',
      'Define a few clear stages and what has to be true to move a deal forward.',
      'Write everything down, so the process can be handed to a future sales hire.',
    ],
    sections: [
      {
        heading: 'Why should founders sell first?',
        blocks: [
          {
            type: 'p',
            text: 'Early sales conversations shape the product, the positioning and the pricing. A founder hears objections first-hand and can change direction quickly. Hiring a salesperson before the process is understood often means handing them a problem nobody has solved yet.',
          },
        ],
      },
      {
        heading: 'What stages should the process have?',
        blocks: [
          {
            type: 'ol',
            items: [
              'First conversation: understand the problem and whether it fits.',
              'Discovery: understand who decides, the budget and the timeline.',
              'Proposal or demo focused on their specific problem.',
              'Decision: answer objections, agree terms.',
              'Onboarding: hand over smoothly and set expectations.',
            ],
          },
        ],
      },
      {
        heading: 'What should you track?',
        blocks: [
          {
            type: 'p',
            text: 'Keep it simple: number of new conversations each week, how many move to each stage, the reasons deals are lost and how long deals take. Even a spreadsheet is enough at first.',
          },
        ],
      },
      {
        heading: 'When should you hire your first salesperson?',
        blocks: [
          {
            type: 'p',
            text: 'When you can describe who buys, why they buy and how the process works, and you have closed enough deals to show it is repeatable rather than dependent on the founder personally.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Do I need a CRM from day one?', a: 'Not necessarily. A shared spreadsheet works early on. Move to a CRM when the number of deals makes the spreadsheet hard to manage.' },
      { q: 'How fast should I follow up?', a: 'Soon after the conversation, while it is fresh, with a short summary and a clear next step.' },
      { q: 'What should I do with lost deals?', a: 'Ask why, politely, and record the reason. Patterns in lost deals are some of the most useful information you will get.' },
    ],
  },
  {
    slug: 'document-processes-before-automating',
    title: 'Why you should document a process before you automate it',
    description:
      'How to write simple process documents (SOPs) for a small team, and why doing this first makes automation cheaper and more reliable.',
    tag: 'Automation',
    author: A,
    published: '2026-09-12',
    takeaways: [
      'Automation copies a process exactly, including its mistakes, so the process needs to be clear first.',
      'A useful process document is short: trigger, steps, owner, inputs, outputs and exceptions.',
      'Documenting often reveals steps that can simply be removed.',
    ],
    sections: [
      {
        heading: 'What should a process document include?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Trigger: what starts the process.',
              'Steps: what happens, in order, and in which tool.',
              'Owner: who is responsible.',
              'Inputs and outputs: what information comes in and what is produced.',
              'Exceptions: what happens when something is missing or unusual.',
            ],
          },
        ],
      },
      {
        heading: 'How do you capture how work really happens?',
        blocks: [
          {
            type: 'p',
            text: 'Watch the person who does the task, or ask them to talk through the last time they did it, rather than writing what you think happens. Real processes usually include workarounds and checks that nobody has written down.',
          },
        ],
      },
      {
        heading: 'How does this make automation better?',
        blocks: [
          {
            type: 'p',
            text: 'A clear document becomes the specification for the automation. It shows which steps are rule-based and can be automated, which need judgement, and which exceptions the automation must handle or pass to a person.',
          },
        ],
      },
    ],
    faq: [
      { q: 'How detailed should a process document be?', a: 'Detailed enough that a new team member could follow it. Usually one or two pages is enough for a single process.' },
      { q: 'Who should write it?', a: 'The person who does the work, with someone else checking it is clear.' },
      { q: 'How do we keep documents up to date?', a: 'Review them when the process or tools change, and give each document a named owner.' },
    ],
  },
  {
    slug: 'ai-document-processing-small-teams',
    title: 'AI document processing for small teams: where it works and where it doesn’t',
    description:
      'Practical uses of AI for reading, summarising and extracting data from documents in a small business, with the limits to plan for.',
    tag: 'Automation',
    author: A,
    published: '2026-09-16',
    takeaways: [
      'AI models are good at summarising documents, extracting fields and classifying text.',
      'They can make confident mistakes, so important outputs need checks or human review.',
      'Start with a narrow, high-volume document type and measure accuracy on real examples.',
    ],
    sections: [
      {
        heading: 'What can AI do well with documents?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Summarise long documents such as reports, contracts or meeting notes.',
              'Extract specific fields, such as names, dates and amounts, into a structured format.',
              'Classify and route incoming documents or emails.',
              'Draft first versions of routine responses for a person to review.',
            ],
          },
        ],
      },
      {
        heading: 'Where does it struggle?',
        blocks: [
          {
            type: 'p',
            text: 'AI models can misread poor scans, get confused by unusual layouts and occasionally produce plausible but wrong answers. Tasks where a single error is costly, such as legal or financial decisions, need a human check or rule-based validation of the output.',
          },
        ],
      },
      {
        heading: 'How do you start safely?',
        blocks: [
          {
            type: 'ol',
            items: [
              'Pick one document type you receive often.',
              'Collect a set of real examples with the correct answers.',
              'Test the AI on those examples and measure how often it is right.',
              'Add checks, such as required fields or totals that must match, and route uncertain cases to a person.',
              'Monitor accuracy after launch, because documents change over time.',
            ],
          },
        ],
      },
      {
        heading: 'What about data privacy?',
        blocks: [
          {
            type: 'p',
            text: 'Check how the AI provider handles your data, whether it is used for training, and where it is stored, and make sure this fits your obligations to customers and any applicable data protection law.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Is AI better than traditional OCR?', a: 'They do different jobs. OCR turns images into text. AI models are better at understanding that text, for example identifying which number is the invoice total. Many systems use both.' },
      { q: 'How accurate is AI extraction?', a: 'It varies a lot by document type and quality. The only reliable answer is to test it on your own documents.' },
      { q: 'Do we need a developer?', a: 'Simple uses can be set up with off-the-shelf tools. Connecting AI to your systems with proper checks usually needs some development work.' },
    ],
  },
  {
    slug: 'build-or-buy-internal-tools',
    title: 'Build or buy: how to decide on internal tools at a small company',
    description:
      'A decision guide for founders choosing between off-the-shelf software and custom internal tools, covering cost, fit, maintenance and risk.',
    tag: 'Automation',
    author: A,
    published: '2026-09-21',
    takeaways: [
      'Buy when the need is common and a good product already exists.',
      'Build when the workflow is specific to how you compete, or when off-the-shelf tools force painful workarounds.',
      'Always count maintenance: a custom tool needs an owner after launch.',
    ],
    sections: [
      {
        heading: 'When is buying the better option?',
        blocks: [
          {
            type: 'p',
            text: 'For common needs such as accounting, email, CRM or project management, established products are usually cheaper and more reliable than anything a small team can build. They also improve over time without extra effort from you.',
          },
        ],
      },
      {
        heading: 'When does building make sense?',
        blocks: [
          {
            type: 'ul',
            items: [
              'The workflow is unique to your business and gives you an edge.',
              'Your team spends real time on workarounds between tools.',
              'You need to combine data from several systems in a way no product supports.',
            ],
          },
        ],
      },
      {
        heading: 'Is there a middle ground?',
        blocks: [
          {
            type: 'p',
            text: 'Often, yes. Low-code platforms and integrations can connect existing tools or add a simple custom layer on top, which costs less than building from scratch and less than living with workarounds.',
          },
        ],
      },
      {
        heading: 'How do you compare the true cost?',
        blocks: [
          {
            type: 'p',
            text: 'For buying, include subscription costs as you grow, setup time and the cost of workarounds. For building, include development, hosting, security, fixes and the time of whoever maintains it.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Can we start with a spreadsheet?', a: 'Yes. Many internal tools start as spreadsheets. When the spreadsheet becomes slow, fragile or depends on one person, it is time to consider something more robust.' },
      { q: 'What is the risk of building?', a: 'Mainly maintenance. If the person who built it leaves, a tool without documentation can become a problem.' },
      { q: 'How do we avoid vendor lock-in?', a: 'Choose tools that let you export your data and that integrate with others through open APIs.' },
    ],
  },
  {
    slug: 'qualifying-inbound-leads-with-ai',
    title: 'How to qualify inbound leads with AI without annoying prospects',
    description:
      'Using AI to score, route and respond to inbound leads faster, while keeping the experience helpful and human for the people who contact you.',
    tag: 'Automation',
    author: A,
    published: '2026-09-26',
    takeaways: [
      'AI can quickly summarise who a lead is, score fit against your ICP and route them to the right person.',
      'Speed matters, but the first response should still be relevant and clearly honest about what is automated.',
      'Keep a person in the loop for high-value leads and anything unusual.',
    ],
    sections: [
      {
        heading: 'What can be automated in lead qualification?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Enriching a lead with public company information.',
              'Scoring fit against your ideal customer profile.',
              'Routing to the right person or channel.',
              'Drafting a first reply or answering common questions.',
              'Booking a meeting when the lead is a good fit.',
            ],
          },
        ],
      },
      {
        heading: 'How do you keep it from feeling robotic?',
        blocks: [
          {
            type: 'p',
            text: 'Make responses specific to what the person asked, be clear when they are talking to an assistant, and make it easy to reach a person. Avoid long forms and repeated questions about information the prospect has already given.',
          },
        ],
      },
      {
        heading: 'What does a sensible setup look like?',
        blocks: [
          {
            type: 'p',
            text: 'Define your ICP and scoring rules in plain language first. Let the AI handle enrichment and a first-pass score, send strong leads straight to a person with a summary, and send weaker leads useful resources instead of a hard sales push. Review a sample of decisions regularly.',
          },
          {
            type: 'p',
            text: 'Products in this space, such as AI sales assistants for B2B websites, answer visitor questions and score leads before a salesperson gets involved. The quality of the result depends heavily on how clearly the ICP is defined.',
          },
        ],
      },
    ],
    faq: [
      { q: 'What data do I need to start?', a: 'A clear ICP, the fields you collect from leads, and a record of which past leads became customers if you have it.' },
      { q: 'Will AI replace salespeople?', a: 'For early-stage companies, AI mainly removes repetitive work so people can spend more time on the conversations that matter.' },
      { q: 'How do I measure success?', a: 'Track response time, how many qualified leads reach a meeting, and how many leads were scored incorrectly when you review samples.' },
    ],
  },
  {
    slug: 'weekly-dashboard-for-founders',
    title: 'A simple weekly dashboard for early-stage founders',
    description:
      'Which numbers an early-stage founder should look at every week, how to keep the dashboard small, and how to make it update itself.',
    tag: 'Automation',
    author: A,
    published: '2026-09-30',
    takeaways: [
      'A weekly dashboard should fit on one screen and lead to decisions.',
      'Cover pipeline, revenue, cash and one or two product or delivery numbers.',
      'Automate data collection so the dashboard is always current without manual effort.',
    ],
    sections: [
      {
        heading: 'Which numbers belong on it?',
        blocks: [
          {
            type: 'ul',
            items: [
              'New conversations or leads this week.',
              'Deals at each stage and deals won or lost.',
              'Revenue or bookings, and cash in the bank.',
              'Monthly burn and runway.',
              'One or two product or delivery measures that matter for your business.',
            ],
          },
        ],
      },
      {
        heading: 'How do you keep it small?',
        blocks: [
          {
            type: 'p',
            text: 'For each number, ask what you would do differently if it went up or down. If the answer is nothing, it does not belong on the weekly dashboard. Keep detailed reports elsewhere for when you need them.',
          },
        ],
      },
      {
        heading: 'How do you automate it?',
        blocks: [
          {
            type: 'p',
            text: 'Connect the dashboard directly to the source tools, such as your CRM, accounting software and product database, rather than copying numbers by hand. Even a spreadsheet that pulls data automatically is better than a polished dashboard someone updates manually.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Which tool should we use?', a: 'Start with whatever your team already uses, even a spreadsheet. Move to a dedicated tool when you need more data sources or sharing options.' },
      { q: 'Who should see the dashboard?', a: 'The founders and anyone responsible for the numbers on it. Sharing it widely can help everyone focus on the same priorities.' },
      { q: 'How often should we review it?', a: 'Weekly, at a fixed time, with a short discussion of what changed and what to do about it.' },
    ],
  },
  {
    slug: 'turning-testimonials-into-case-studies',
    title: 'How to turn client testimonials into case studies people actually read',
    description:
      'A simple structure for writing honest, relatable startup case studies from client feedback, without inventing results.',
    tag: 'Marketing',
    author: P,
    published: '2026-10-05',
    takeaways: [
      'A good case study follows a story: the company, the problem, what was done and what changed.',
      'Use the client’s own words for the outcome, and never invent numbers.',
      'Specific details make a story relatable to the next customer with the same problem.',
    ],
    sections: [
      {
        heading: 'Why do testimonials alone fall short?',
        blocks: [
          {
            type: 'p',
            text: 'A short quote shows that someone was happy, but not why. A prospect reading it cannot tell whether their situation is similar. A case study adds the context they need to recognise themselves in the story.',
          },
        ],
      },
      {
        heading: 'What structure works?',
        blocks: [
          {
            type: 'ol',
            items: [
              'The company: what they do, in a sentence or two.',
              'The problem: what they were trying to figure out or fix, and why it was hard.',
              'What was done: the specific work, in plain language.',
              'What changed: the outcome, ideally in the client’s own words.',
            ],
          },
        ],
      },
      {
        heading: 'How do you keep it honest?',
        blocks: [
          {
            type: 'p',
            text: 'Only include results the client has confirmed. If you do not have numbers, do not estimate them. A clear description of a real change, quoted from the client, is more convincing than a percentage nobody can verify. Always get the client’s approval before publishing.',
          },
          {
            type: 'quote',
            text: 'Apart from that, this also served as a word of confidence—a valuable second opinion.',
            cite: 'Shubham Datta, Founder, BORTEX',
          },
        ],
      },
      {
        heading: 'How do case studies help with AI search?',
        blocks: [
          {
            type: 'p',
            text: 'Case studies with named companies, specific problems and attributed quotes are exactly the kind of content AI search tools can understand and cite. They also give buyers concrete reasons to trust you.',
          },
        ],
      },
    ],
    faq: [
      { q: 'How long should a case study be?', a: 'Long enough to tell the story clearly. Many good case studies are a few hundred words, with a short summary at the top.' },
      { q: 'What if the client wants to stay anonymous?', a: 'You can describe the industry and situation without naming them, but named case studies are more credible.' },
      { q: 'Should I include video?', a: 'Short video testimonials add a lot of credibility when clients are willing. Keep them short and pair them with a written summary.' },
    ],
  },
  {
    slug: 'product-market-fit-signals-b2b',
    title: 'Product-market fit signals for early B2B startups',
    description:
      'The practical signs that a B2B startup is approaching product-market fit, and the false signals that are easy to confuse with it.',
    tag: 'Startups',
    author: P,
    published: '2026-10-10',
    takeaways: [
      'Strong signals include customers who would be genuinely upset to lose the product, sales that get easier, and customers who refer others.',
      'Compliments, sign-ups and pilot interest without payment are weaker signals.',
      'Product-market fit is usually reached within a specific segment first, not the whole market.',
    ],
    sections: [
      {
        heading: 'What are the strongest signals?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Customers keep using and paying for the product without being chased.',
              'Customers would be clearly disappointed if the product went away.',
              'Sales conversations get shorter because buyers already understand the value.',
              'New customers arrive through referrals and word of mouth.',
            ],
          },
        ],
      },
      {
        heading: 'Which signals are misleading?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Lots of positive feedback in meetings without purchases.',
              'Free pilots that never convert to paid contracts.',
              'Growth that comes entirely from the founder’s personal network.',
              'Sign-ups that do not turn into regular use.',
            ],
          },
        ],
      },
      {
        heading: 'Why does segment focus matter?',
        blocks: [
          {
            type: 'p',
            text: 'A product can fit one type of customer very well and others poorly. Looking at results by segment, such as industry or company size, often reveals strong fit in one group hidden by weaker results overall. That group is usually the place to focus next.',
          },
        ],
      },
    ],
    faq: [
      { q: 'Is there a single metric for product-market fit?', a: 'No single metric works for every business. Retention, how disappointed customers would be without the product, and sales efficiency are commonly used together.' },
      { q: 'Can you lose product-market fit?', a: 'Yes. Markets, competitors and customer needs change, so fit needs to be maintained.' },
      { q: 'Should you scale before product-market fit?', a: 'Spending heavily on growth before fit usually means paying to acquire customers who do not stay. Most founders focus on finding fit first.' },
    ],
  },
];
