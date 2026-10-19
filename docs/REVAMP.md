# Website revamp (October 2026)

This document explains what changed in the October 2026 revamp of theinsightfoundry.org, how the new site is put together, how to update content, and how to roll back.

- **Before the revamp:** tag `pre-revamp` (commit `9d5a211`)
- **Revamp branch:** `revamp/2026-10`

---

## 1. What changed

### One site instead of two
The old site opened on a split "gateway" that sent visitors to separate **Consulting** and **Automation** portals. These are now one offer on a single homepage: research and strategy first, then the automation and tools that follow.

| Old URL | Now |
| --- | --- |
| `/` (gateway) | New unified homepage |
| `/consulting` | Redirects to `/#services` |
| `/automation` | Redirects to `/#services` |
| `/testimonials` | Redirects to `/stories` |
| `/blog/startups` | Still works (now data-driven) |

### Client stories
The four testimonials (BORTEX, Risk Hub, ZipTier, Brand Cameo Works) are now full stories covering the company, the problem, what we did and what changed. They are on the homepage (stacking cards) and on a new `/stories` page. Company context comes from each client's public footprint. Outcomes are in the founders' own words, with no invented metrics.

### Design
- Editorial look: paper background (`#f3f1eb`), ink text and the brand green from the TIF logo (`#17604a`).
- Left-aligned layouts with thin rules, the Geist typeface, and the TIF letter-mark redrawn as an SVG.
- The original About page (story-scroll sections) and the original footer (FOUNDRY wordmark) are kept, restyled to the new palette.
- Every page shares one nav, footer and page header.

### Motion (adapted from 21st.dev community components)
| Effect | Where | Code |
| --- | --- | --- |
| Headline word reveal | All page headers | `fx.tsx` → `WordReveal` |
| Random letter swap on hover | Nav links, primary buttons | `motion.tsx` → `Scramble` |
| Scroll-velocity ribbon | Homepage, under the hero | `motion.tsx` → `VelocityRibbon` |
| Hover-reveal preview card | Homepage services list | `motion.tsx` → `useHoverPreview` |
| Text highlighter on scroll | Founders' note | `motion.tsx` → `Highlight` |
| Stacking story cards | Homepage client stories | `stories.tsx` → `StoryStack` |
| Context cursor ("Play", "Read") | Videos, story links | `motion.tsx` → `ContextCursor` |
| Rising wordmark | Footer | `sections.tsx` → `SiteFooter` |
| Story-scroll sections | About page | `ui/story-scroll.tsx` |

Motion respects `prefers-reduced-motion`. Cursor effects only switch on with a mouse, not on touch devices.

### Mobile and tablet
- Story cards stack only from tablet width up, and scroll normally on phones.
- A "Book a call" bar appears on phones and hides itself near the closing call-to-action and the footer.
- Spacing and grids step down for tablet (768px) and phone (390px).

### SEO and AI search (GEO)
AI crawlers (GPTBot, ClaudeBot, PerplexityBot and others) generally do not run JavaScript, so the old client-rendered site looked empty to them. Now:

- **Build-time prerender** (`scripts/prerender.ts`) writes a static HTML file for every route with the page text, title, description, canonical URL, Open Graph tags and JSON-LD structured data. React replaces that content when it loads.
- **Structured data** (`src/lib/seo.ts`): `ProfessionalService` with the founders on every page, `FAQPage` on the homepage and articles, `BlogPosting` and `BreadcrumbList` on articles, `AboutPage` and `CollectionPage`.
- `sitemap.xml` and `llms.txt` are generated at build time from the same data.
- `robots.txt` explicitly allows the main search and AI crawlers.
- `vercel.json` uses `cleanUrls`, so `/about` is served from `about.html` before the SPA fallback. With `cleanUrls` on, the fallback rewrite must point to `/`, not `/index.html`, or unmatched routes return Vercel's 404. Old URLs (`/consulting`, `/automation`, `/testimonials`) are permanent server-side redirects.
- Hard-coded and inaccurate schema was removed from `index.html` (a fake site-search action, US location tags).

### Blog
- 23 articles, written for AI search: answer first, question-style headings, key takeaways, a visible FAQ, named sources and real client quotes where relevant.
- Articles are plain data in `src/lib/posts.ts` and `src/lib/posts-library.ts`.

### Other
- About, Careers, job application pages, Writing, Privacy, Internship terms, Booking and 404 all use the new design.
- The Internship terms page is deliberately not linked from the nav or footer, as its text requires.
- Secondary routes are lazy-loaded, which cut about 30% from the first page load.
- Team photos were re-encoded for the web (the original co-founder PNG was 5 MB).

---

## 2. How the code is organised

```
src/
  lib/
    site.ts            Business data: contact, services, FAQ, team, client stories
    posts.ts           Blog types, core posts, isLive()/livePosts() helpers
    posts-library.ts   The article library
    seo.ts             Per-route titles/descriptions and JSON-LD (used by app and build)
  components/site/
    SiteNav.tsx        Navigation
    sections.tsx       Page shell, page header, section heads, FAQ, closing CTA, footer, mobile CTA
    fx.tsx             Small primitives: TifMark, Reveal, WordReveal, buttons, links
    motion.tsx         21st.dev-style interactions
    stories.tsx        Story cards, video facade, portraits
  pages/
    Home.tsx, Stories.tsx, AboutUs.tsx, Careers.tsx, CareerApply.tsx,
    BlogIndex.tsx, Blog.tsx, PrivacyPolicy.tsx, InternshipTerms.tsx,
    BookingPage.tsx, NotFound.tsx
scripts/
  prerender.ts         Vite plugin: static HTML per route + sitemap.xml + llms.txt
```

The files in `src/lib/` must not import anything outside `src/lib/` (no `@/` aliases), because `vite.config.ts` bundles them for the prerender step.

Legacy files that are no longer routed (`pages/Index.tsx`, `GptCaseStudy.tsx`, `StartupScaling.tsx`, `PositioningCost.tsx`, `components/Footer.tsx` and older section components) were left in place to keep this change focused. They can be deleted in a follow-up.

---

## 3. Common updates

**Add a blog post:** add an object to `LIBRARY_POSTS` in `src/lib/posts-library.ts`, using the same shape as the others. The page, sitemap entry, `llms.txt` line and structured data are generated automatically. A post dated in the future stays hidden until that date, and appears in the static HTML at the next deploy.

**Add or edit a client story:** edit `STORIES` in `src/lib/site.ts`. Put logos and portraits in `public/lovable-uploads/`.

**Change services, FAQ or team:** `SERVICES`, `FAQS` and `TEAM` in `src/lib/site.ts`.

**Change a page title or description:** `STATIC` in `src/lib/seo.ts`.

**Check what crawlers see:** run `npm run build`, then open `dist/<page>.html`, or fetch a deployed page with `curl -A "GPTBot" https://theinsightfoundry.org/about`.

---

## 4. How to roll back

Pick the option that fits:

1. **Fastest (no code):** in the Vercel dashboard, open **Deployments**, find the last deployment before the revamp and choose **Instant Rollback**.
2. **Undo the merge on GitHub:** open the merged pull request and click **Revert**. That creates a new PR that restores the old site, and merging it redeploys.
3. **From the command line:**
   ```sh
   git checkout main
   git revert -m 1 <merge-commit-sha>   # if merged with a merge commit
   git push origin main
   ```
4. **Look at or restore the exact old version:** `git checkout pre-revamp`.

---

## 5. Items to review

- Article bylines: strategy articles are credited to Prathmesh Soni and automation articles to Atharva Bhardwaj. Both should read them before they go live.
- Structured data lists the studio's location as Indore, Madhya Pradesh, taken from the internship terms.
- Article dates are spread between July and October 2026.
- The Google Analytics tag in `index.html` still uses the placeholder ID `G-XXXXXXXXXX`, so it records nothing. Replace it with the real ID or remove it.
