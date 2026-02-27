# Detailed Design — jonrinciari.dev v2 (Credibility Hub)

This is the standalone design document for the jonrinciari.dev v2 rebuild. It consolidates the build spec, content/UX blueprint, requirements clarification (12 decisions), and design system research into a single implementable reference.

---

# 1. Overview

## What

A custom Astro-based credibility hub for Staff+/Principal-level recruiting and hiring. Case-study-first, static-first, content-forward.

## Why

Replace the existing CRA-based portfolio site with a site that communicates technical leadership scope, judgment, and measurable outcomes — not frontend skills or hobby projects.

## Who

1. **Recruiters** — need rapid level calibration in 30 seconds
2. **Hiring managers** — need proof of scope and outcomes in 2 minutes
3. **Senior ICs / interviewers** — need architecture and tradeoff depth in 5 minutes

## Success criteria

- Recruiter understands level, domain, and 3–5 proof points within 30 seconds
- Hiring manager sees Staff+/Principal caliber within 2 minutes
- Senior evaluator finds enough substance to believe claims within 5 minutes
- Lighthouse Performance > 95, Accessibility > 95
- LCP < 2.0s, INP < 200ms, CLS < 0.05

---

# 2. Detailed Requirements

## 2.1 Consolidated decisions

| # | Decision | Answer |
|---|----------|--------|
| 1 | Repo strategy | `v2` branch in current `personal-website` repo, merge to `master` at launch |
| 2 | Dark mode | Ship both light and dark at launch |
| 3 | Analytics | Defer — no Plausible at launch |
| 4 | Headshot | Include in hero (two-column layout) |
| 5 | OG images | Build-time generation via satori |
| 6 | Package manager | npm (overrides spec's pnpm) |
| 7 | Mobile menu | Full-screen overlay, centered links, close button top-right |
| 8 | Resume PDF | Manually maintained, committed to `public/resume/` |
| 9 | CI | Full from start — typecheck, lint, build, broken-link check, Lighthouse CI |
| 10 | Mono font | Geist Mono |
| 11 | Layout | Equal-height cards, no masonry |
| 12 | Motion | Enhanced — 5 approved patterns with `prefers-reduced-motion` |

## 2.2 Content model

### Launch pages
- `/` — Home
- `/work` — Work index
- `/work/global-commerce-performance` — Flagship case study #1
- `/resume` — Resume (HTML + PDF download)
- `/about` — About
- `/contact` — Contact
- `/404` — Not found

### Wave 2
- `/work/platform-enablement-at-scale`
- `/work/ai-engineering-systems`

### Wave 3 (conditional)
- `/writing` — only if 2+ strong pieces exist
- `/writing/<slug>`

## 2.3 Navigation

### Primary nav labels (exact)
Home · Work · Resume · About · Contact

### Footer
- Name + one-line positioning
- Nav links
- External links (LinkedIn, GitHub, Email)
- Colophon: "Built with Astro. Fast by default."

### Labeling rules
- Use "Work" not "Projects"
- Use "Resume" not "CV"
- Use "About" not "Story"
- Use "Contact" not "Let's Talk"

## 2.4 Non-goals
- Hobby project showcase
- Generic tutorials
- Proving React/TypeScript knowledge
- Maximizing pageviews
- Content brand
- UI tricks

---

# 3. Architecture Overview

## 3.1 Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 5 |
| Language | TypeScript |
| Content | MDX + Astro Content Collections |
| Styling | Tailwind CSS 4 |
| Fonts | Inter + Geist Mono (self-hosted) |
| Analytics | Deferred (no Plausible at launch) |
| Hosting | Cloudflare Pages |
| DNS | Cloudflare DNS |
| Package manager | npm |
| Node | 20 LTS |
| CI | GitHub Actions |

## 3.2 Folder structure

```
/
├── public/
│   ├── favicon/
│   ├── fonts/
│   │   ├── inter-latin-400.woff2
│   │   ├── inter-latin-500.woff2
│   │   ├── inter-latin-600.woff2
│   │   ├── inter-latin-700.woff2
│   │   └── geist-mono-latin-400.woff2
│   ├── og/                          (generated at build)
│   ├── images/
│   │   └── headshot.webp
│   ├── resume/
│   │   └── jonathan-rinciari-resume.pdf
│   ├── robots.txt
│   └── _headers
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── MobileMenu.astro
│   │   ├── NavLink.astro
│   │   ├── PrimaryButton.astro
│   │   ├── SecondaryButton.astro
│   │   ├── SectionHeader.astro
│   │   ├── ProofChip.astro
│   │   ├── MetricRow.astro
│   │   ├── MetricCountUp.astro
│   │   ├── WorkCard.astro
│   │   ├── TimelineItem.astro
│   │   ├── ThemeToggle.astro
│   │   ├── SkipToContent.astro
│   │   ├── CopyEmailButton.astro
│   │   ├── ResumeDownloadButton.astro
│   │   ├── ScrollReveal.astro
│   │   └── mdx/
│   │       ├── MdxCallout.astro
│   │       ├── MdxDecisionTable.astro
│   │       ├── MdxFigure.astro
│   │       ├── MdxQuote.astro
│   │       └── MdxToc.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── work/
│   │   │   ├── global-commerce-performance.mdx
│   │   │   ├── platform-enablement-at-scale.mdx
│   │   │   └── ai-engineering-systems.mdx
│   │   └── writing/
│   ├── data/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── resume.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── WorkLayout.astro
│   ├── lib/
│   │   ├── seo.ts
│   │   ├── schema.ts
│   │   ├── og.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── resume.astro
│   │   ├── contact.astro
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── writing/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── og/[...slug].png.ts
│   │   ├── rss.xml.ts
│   │   └── 404.astro
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tokens.css
│   │   └── prose.css
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

## 3.3 Build and deployment

- Build command: `npm run build`
- Output: Astro static
- Domain: apex as primary canonical, redirect `www` → apex
- Preview: every PR gets a Cloudflare Pages preview deployment
- Production: `v2` branch deploys to production (switch to `master` at launch)

## 3.4 Redirects (at launch)

| From | To |
|------|----|
| `/projects` | `/work` |
| `/projects/:slug` | `/work` |
| `/writing/:slug` (if not rewritten) | `/writing` or 410 |

`/resume`, `/about` stay as-is.

---

# 4. Visual Design System

## 4.1 Typography

### Primary: Inter (self-hosted)
- Weights: 400, 500, 600, 700
- Use for: body, headings, nav, UI
- Preload: 400 and 700

### Secondary: Geist Mono (self-hosted)
- Weight: 400 only
- Use for: metadata, tags, small labels, code snippets, proof chips
- Do not preload

### Font loading
- Self-hosted woff2 files in `public/fonts/`
- `font-display: swap`
- Total budget: under 160 KB

### Type scale

| Token | Desktop | Mobile |
|-------|---------|--------|
| H1 | 56/60 | 38/42 |
| H2 | 36/42 | 28/34 |
| H3 | 24/30 | 22/28 |
| Body L | 20/32 | — |
| Body | 18/30 | 17/28 |
| Small | 14/22 | 14/22 |
| Meta | 12/18 | 12/18 |

## 4.2 Color system

### Light mode

| Role | Hex | Tailwind |
|------|-----|----------|
| Background | `#F8FAFC` | `slate-50` |
| Surface | `#FFFFFF` | `white` |
| Text primary | `#0F172A` | `slate-900` |
| Text secondary | `#475569` | `slate-600` |
| Border | `#E2E8F0` | `slate-200` |
| Accent | `#2563EB` | `blue-600` |
| Accent soft | `#DBEAFE` | `blue-100` |
| Success | `#047857` | `emerald-700` |

### Dark mode

| Role | Hex | Tailwind |
|------|-----|----------|
| Background | `#0F172A` | `slate-900` |
| Surface | `#1E293B` | `slate-800` |
| Text primary | `#F1F5F9` | `slate-100` |
| Text secondary | `#94A3B8` | `slate-400` |
| Border | `#334155` | `slate-700` |
| Accent | `#3B82F6` | `blue-500` |
| Accent soft | `#1E3A5F` | custom |
| Success | `#10B981` | `emerald-500` |

### Dark mode implementation
- Use Tailwind `dark:` prefix
- Theme toggle in header (ThemeToggle component)
- Persist preference in `localStorage`
- Respect `prefers-color-scheme` as default

## 4.3 Spacing

4/8 scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

## 4.4 Layout

| Constraint | Value |
|------------|-------|
| Max site width | 1200px |
| Reading width | 720px |
| Wide content | 960px |
| Responsive padding | `px-4 md:px-6 lg:px-8` |

Breakpoints:
- Mobile: < 640px
- Tablet: 640–1023px
- Desktop: 1024px+

## 4.5 Border radius

| Element | Radius |
|---------|--------|
| Cards | 16px |
| Pills / chips | 999px |
| Buttons | 12px |

## 4.6 Shadows

Restrained — surface shadow only for hover or layered cards:
- Default card: none or `shadow-sm`
- Hover: `shadow-md`
- No neumorphism, no glow

## 4.7 Motion

### Approved patterns

| Pattern | Trigger | Duration | Properties |
|---------|---------|----------|------------|
| Proof chip stagger | Page load | 300ms, 50ms stagger | opacity, translateY 8→0 |
| Section reveal | Scroll (IntersectionObserver, once) | 400ms ease-out | opacity, translateY 16→0 |
| Metric count-up | Scroll (once) | ~800ms ease-out | Number value 0→final |
| Card hover lift | Hover | 150ms ease-out | translateY -2px, box-shadow |
| Menu overlay | Toggle | 150ms | opacity |

### Reduced motion
All patterns wrapped in `prefers-reduced-motion` check. When reduced:
- Transitions: 0ms
- Scroll reveals: render in final state
- Count-up: show final number
- Hover lift: still works but instant

### Explicitly not doing
- Parallax
- Page transitions
- Hero background animation
- Continuous/looping animation
- Scroll-jacking

---

# 5. Components and Interfaces

## 5.1 Layout components

### BaseLayout
- Wraps every page
- Includes: `<html>`, `<head>` (SEO, fonts, global CSS), `<body>`
- Props: `title`, `description`, `ogImage`, `canonicalUrl`, `structuredData`
- Handles: dark mode class on `<html>`, skip-to-content link

### PageLayout
- Extends BaseLayout
- Adds: SiteHeader, main content area, SiteFooter
- Props: inherits BaseLayout + `class` for page-specific styling

### WorkLayout
- Extends PageLayout
- Adds: work hero, MDX content wrapper with prose styles, related links
- Props: work frontmatter fields

## 5.2 Navigation components

### SiteHeader
- Desktop: wordmark left, nav links right, theme toggle
- Sticky on scroll after hero leaves viewport (IntersectionObserver)
- Sticky state: `border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur`
- Mobile: wordmark left, hamburger right

### SiteFooter
- 3-4 column grid on desktop, stacked on mobile
- Columns: positioning line, nav links, external links, colophon
- Colophon: "Built with Astro. Fast by default."

### MobileMenu
- Full-screen overlay: `fixed inset-0 z-50`
- `bg-white dark:bg-slate-900`
- Centered nav links, close button top-right
- Opacity fade transition 150ms
- Trap focus while open
- Close on Escape key

### NavLink
- Props: `href`, `label`, `active`
- Active state: `text-slate-900 dark:text-white font-medium`
- Inactive: `text-slate-600 dark:text-slate-400`
- Hover: `text-slate-900 dark:text-white`

## 5.3 UI components

### PrimaryButton
- Props: `href`, `label`
- Style: `bg-blue-600 text-white rounded-xl px-6 py-3 hover:bg-blue-700`
- Dark: `bg-blue-500 hover:bg-blue-400`
- Min touch target: 44x44

### SecondaryButton
- Props: `href`, `label`
- Style: `border border-slate-300 text-slate-700 rounded-xl px-6 py-3`
- Hover: `border-slate-400`
- Dark: `border-slate-600 text-slate-300 hover:border-slate-500`

### SectionHeader
- Props: `title`, `subtitle?`
- H2 + optional subtitle paragraph

### ProofChip
- Props: `label`
- Style: pill shape (999px radius), mono font, small text
- `bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300`
- Used in hero and work page heroes

### MetricRow
- Props: `metrics: string[]`
- Horizontal row of ProofChips with gap

### MetricCountUp
- Props: `value: string`, `suffix?: string`
- Client-side JS (Astro island or vanilla script)
- IntersectionObserver triggers count from 0 to value
- 800ms ease-out, fires once
- Reduced motion: renders final value immediately

### WorkCard
- Props: `title`, `summary`, `metrics: string[]`, `href`, `tags?: string[]`
- Equal-height cards in 3-column grid (desktop), stacked mobile
- Hover: translateY -2px + shadow-md, 150ms
- `cursor-pointer` always
- CTA text: "Read case study"

### TimelineItem
- Props: `company`, `description`, `period?`
- Used in homepage experience snapshot and resume

### ThemeToggle
- Sun/moon icon toggle
- Persists to `localStorage`
- Respects `prefers-color-scheme` as initial default
- Accessible: `aria-label="Toggle dark mode"`

### SkipToContent
- Visually hidden until focused
- `<a href="#main">Skip to content</a>`
- Visible on focus with prominent styling

### CopyEmailButton
- Props: `email`
- Copies to clipboard on click
- Shows brief "Copied!" confirmation
- `aria-label="Copy email address"`

### ResumeDownloadButton
- Props: `href`
- Links to `/resume/jonathan-rinciari-resume.pdf`
- Download attribute set

### ScrollReveal
- Wrapper component for scroll-triggered fade-in
- Uses IntersectionObserver, fires once
- opacity 0→1, translateY 16→0, 400ms ease-out
- Reduced motion: no animation, visible immediately

## 5.4 MDX components

### MdxCallout
- Props: `type: "info" | "warning" | "note"`, content slot
- Styled box with left border accent
- Semantic: uses `<aside>` with `role="note"`

### MdxDecisionTable
- Props: `options: {name, pros, cons, chosen}[]`
- Table showing options considered with tradeoffs
- Highlights chosen option

### MdxFigure
- Props: `src`, `alt`, `caption?`, `wide?: boolean`
- `<figure>` with `<img>` and `<figcaption>`
- Wide variant breaks out to 960px
- Lazy-loaded, explicit width/height

### MdxQuote
- Props: content slot, `attribution?`
- Styled `<blockquote>` with attribution

### MdxToc
- Auto-generated table of contents from headings
- Sticky sidebar on desktop for long work pages (optional)

---

# 6. Data Models

## 6.1 Work content schema (Content Collections)

```ts
// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    period: z.string(),
    featured: z.boolean(),
    order: z.number(),
    tags: z.array(z.string()),
    metrics: z.array(z.string()),
    seoTitle: z.string(),
    seoDescription: z.string(),
    ogImage: z.string().optional(),
    confidentiality: z.enum(['public', 'generalized']),
    status: z.enum(['published', 'draft']),
  }),
});
```

## 6.2 Writing content schema

```ts
const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    tags: z.array(z.string()),
    seoTitle: z.string(),
    seoDescription: z.string(),
    ogImage: z.string().optional(),
    status: z.enum(['published', 'draft']),
    featured: z.boolean().optional(),
  }),
});
```

## 6.3 Resume data

```ts
// src/data/resume.ts
export interface ResumeData {
  header: {
    name: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    site: string;
  };
  summary: string;
  selectedOutcomes: string[];
  experience: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    bullets: string[];
    workLink?: string; // link to relevant case study
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
}
```

## 6.4 Site config

```ts
// src/data/site.ts
export const site = {
  name: 'Jonathan Rinciari',
  title: 'Jonathan Rinciari — Staff+ Full-Stack Engineer',
  description: 'Staff+ full-stack engineer focused on global architecture, performance, platform systems, and AI-enabled engineering workflows.',
  url: 'https://jonrinciari.dev',
  email: '...', // to be filled
  linkedin: 'https://linkedin.com/in/jonathanrinciari',
  github: 'https://github.com/jonathanRinciari',
} as const;
```

## 6.5 Navigation config

```ts
// src/data/navigation.ts
export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerExternalLinks = [
  { label: 'LinkedIn', href: '...' },
  { label: 'GitHub', href: '...' },
  { label: 'Email', href: 'mailto:...' },
] as const;
```

## 6.6 Tags taxonomy (closed set)

Only these tags allowed on work cards:
- Global Architecture
- Performance
- Platform
- AI Systems
- Developer Experience
- Frontend Architecture
- Distributed Systems
- Security
- Globalization
- Operational Excellence

No stack tags (React, Node, TypeScript) on card surfaces.

---

# 7. Page Specifications

## 7.1 Homepage `/`

### Section order (locked)
1. Hero
2. Signature proof row
3. Selected Work preview
4. How I operate
5. Experience snapshot
6. Contact CTA

### Hero
- Layout: two-column, text left, headshot right
- Eyebrow: `Staff+ Full-Stack Engineer` (mono font, small, muted)
- H1: `I lead global customer-facing systems, platform strategy, and performance programs that scale through teams.`
- Support paragraph (under 75 words)
- Proof chips: `88 countries` · `23 marketplaces` · `200+ engineers` · `25+ services` · `2.5× faster checkout`
- Proof chips animate in with 50ms stagger on load
- Primary CTA: "View Selected Work" → `/work`
- Secondary CTA: "View Resume" → `/resume`

### Signature proof row
- 3 equal columns (desktop), stacked (mobile)
- Card 1: Global commerce architecture
- Card 2: Org-scale performance leverage
- Card 3: AI systems for engineering workflows
- Numbers use MetricCountUp (scroll-triggered)

### Selected Work preview
- Header: "Selected Work"
- 3 WorkCards, equal height, 3-column grid
- Each links to respective `/work/<slug>`

### How I operate
- Header: "How I work"
- 4 blocks: constraints, mechanisms, leverage, proof

### Experience snapshot
- Header: "Recent focus"
- 3 TimelineItems: Kuiper, QuickSight, AWS IoT
- Link: "View full resume" → `/resume`

### Contact CTA
- Header: "Interested in talking?"
- Copy about target roles
- 3 action links: Email, LinkedIn, Resume

## 7.2 Work index `/work`

### Hero
- Title: "Selected Work"
- Intro paragraph with confidentiality note

### Featured work
- 3 WorkCards (same as homepage but may show more detail)
- Vertical stack on mobile, 3-column on desktop

### Closing CTA
- Resume + Contact links

## 7.3 Work detail `/work/[slug]`

Uses WorkLayout. Every page follows this exact structure:

1. **Hero** — title, summary, role, period, tags, proof chips
2. **Executive summary** — 100–140 words
3. **Context** — business, customer, org, system
4. **Problem** — constraints, why standard approaches failed
5. **My role** — owned, influenced, boundaries
6. **Strategy and decisions** — options, tradeoffs, why this path
7. **Architecture** — boundaries, interfaces, mechanisms, diagrams (SVG)
8. **Execution and alignment** — stakeholders, rollout, governance
9. **Results** — customer, engineering, reliability, throughput
10. **Tradeoffs and what I'd do differently** — mandatory
11. **Confidentiality note** — mandatory
12. **Related links** — back to Work, Resume, Contact

Target: 1,200–2,000 words, max 2,500.

## 7.4 Resume `/resume`

### Hero
- Title: "Resume"
- Subtitle: "A concise view of my experience, recent impact, and the systems I've led."
- ResumeDownloadButton + Contact link

### Selected outcomes
- 5 bullets at top (before chronology)

### Experience timeline
- Each role: title, company, dates, 2–5 bullets
- Links to relevant work pages where applicable

### Skills
- 5 grouped categories, no tech salad

### Education
- Short

## 7.5 About `/about`

### Sections
1. **Intro** — 50–100 words, what problems you solve
2. **What I do best** — 5 bullets
3. **Operating principles** — 5 short principles
4. **Background** — short narrative (physiology → startups → Amazon → Staff+)
5. **What I'm looking for** — target roles paragraph

## 7.6 Contact `/contact`

- Centered narrow column
- Title: "Contact"
- Body: "The easiest way to reach me is by email or LinkedIn."
- Actions: Email, CopyEmailButton, LinkedIn, GitHub, Resume PDF
- Optional note: "For roles, include a link to the company or job description if you have one."
- No contact form at launch.

## 7.7 404 page

- Simple centered message
- "Page not found"
- Link back to Home and Work

---

# 8. SEO and Metadata

## 8.1 Title patterns

| Page | Title |
|------|-------|
| Home | `Jonathan Rinciari — Staff+ Full-Stack Engineer` |
| About | `About — Jonathan Rinciari` |
| Resume | `Resume — Jonathan Rinciari` |
| Work index | `Selected Work — Jonathan Rinciari` |
| Work page | `<Title> — Jonathan Rinciari` |
| Contact | `Contact — Jonathan Rinciari` |

## 8.2 Meta descriptions
140–160 characters, outcome-focused, no fluff.

## 8.3 Canonical URLs
Every page emits a canonical URL.

## 8.4 Sitemap
Auto-generated at build via `@astrojs/sitemap`.

## 8.5 Structured data

| Page | Schema types |
|------|-------------|
| Site-wide | `WebSite` |
| About | `ProfilePage`, `Person` |
| Resume | `WebPage`, `Person` |
| Work index | `CollectionPage`, `ItemList` |
| Work pages | `Article`, `BreadcrumbList` |
| Writing pages | `Article` |

Implemented in `src/lib/schema.ts`, injected via BaseLayout.

## 8.6 Open Graph

Every page includes:
- `og:title`, `og:description`, `og:url`, `og:image`
- `twitter:card` (summary_large_image)

OG images generated at build time via satori in `src/pages/og/[...slug].png.ts`.

## 8.7 Internal linking rules

- Home → all flagship work pages
- Resume → relevant work pages
- About → work and resume
- Work pages → Work index + 1–2 related pages
- Writing → related work (when applicable)

## 8.8 URL rules
- Lowercase, hyphenated slugs
- Short and readable
- No dates in work URLs

---

# 9. Performance

## 9.1 Budgets

| Metric | Target |
|--------|--------|
| Home JS (gzipped) | < 70 KB |
| Largest image | < 160 KB |
| Total fonts | < 160 KB |
| LCP | < 2.0s |
| INP | < 200ms |
| CLS | < 0.05 |

## 9.2 Rules

- No client-side framework hydration unless explicitly needed
- Diagrams as SVG, not raster
- Lazy-load non-critical images
- AVIF/WebP first, with responsive `srcset`
- Explicit width/height on all images
- No autoplay media
- No decorative stock photos
- One professional headshot max

## 9.3 Font loading

- Self-host in `public/fonts/`
- Preload Inter 400 + 700 only
- Other weights load normally
- `font-display: swap`

---

# 10. Accessibility

## 10.1 Standard
WCAG 2.2 AA

## 10.2 Requirements

- Full keyboard navigation, tab order matches visual order
- Visible focus states: `focus:ring-2 focus:ring-blue-500` (never `outline-none` without replacement)
- Skip-to-content link on every page
- Semantic heading hierarchy (no skipping levels)
- Alt text on all meaningful images
- Touch targets ≥ 44×44px
- `prefers-reduced-motion` respected (all motion patterns)
- `prefers-color-scheme` respected (dark mode default)
- Form controls labeled (CopyEmailButton)
- No text embedded in images
- Color is not the only state indicator
- Tables use semantic markup where they exist
- MDX components produce semantic HTML

## 10.3 Contrast verification

- Light: `#0F172A` on `#F8FAFC` → ~15.4:1 ✓ AAA
- Light secondary: `#475569` on `#F8FAFC` → ~6.6:1 ✓ AAA
- Dark: `#F1F5F9` on `#0F172A` → ~15.4:1 ✓ AAA
- Dark secondary: `#94A3B8` on `#0F172A` → ~5.5:1 ✓ AA

---

# 11. Security and Headers

## 11.1 Headers (via `public/_headers`)

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'
```

CSP starts strict, adjust as needed (e.g., if Plausible is added later).

---

# 12. CI/CD

## 12.1 GitHub Actions workflow (`.github/workflows/ci.yml`)

Triggers on every PR to `v2` branch:

1. **Typecheck** — `npx tsc --noEmit`
2. **Lint** — ESLint
3. **Build** — `npm run build`
4. **Broken link check** — e.g., `lychee` against build output
5. **Lighthouse CI** — run against Cloudflare Pages preview URL

## 12.2 Dependency updates
Dependabot or Renovate, monthly.

---

# 13. Error Handling

## 13.1 404 page
Custom `/404.astro` with:
- "Page not found" message
- Link to Home and Work
- Consistent layout (header/footer)

## 13.2 Build errors
- TypeScript strict mode catches type errors at build
- Content Collection schema validation catches bad frontmatter
- CI build step catches any Astro build failures

## 13.3 Client-side
- CopyEmailButton: graceful fallback if Clipboard API unavailable
- MetricCountUp: renders final value if JS fails or IntersectionObserver unavailable
- ThemeToggle: falls back to `prefers-color-scheme` if localStorage unavailable
- ScrollReveal: elements render visible by default, animation is progressive enhancement

---

# 14. Testing Strategy

## 14.1 Build-time validation
- TypeScript strict mode
- Content Collection schema validation (Zod)
- ESLint for code quality

## 14.2 CI checks
- Broken link checker against build output
- Lighthouse CI performance/accessibility scores

## 14.3 Manual QA (pre-launch)

### Functional
- All nav links work
- Resume PDF downloads
- Copy email works
- 404 page works
- Canonical URLs correct
- Redirects work
- Dark mode toggle works
- Mobile menu opens/closes

### Content
- No stale titles
- No outdated role labels
- No junior-sounding phrasing
- All metrics verified
- Confidentiality notes reviewed

### Performance
- Lighthouse Perf > 95 on home
- Lighthouse Accessibility > 95
- No layout shift on load
- Image sizes optimized

### Accessibility
- Keyboard smoke test (tab through all pages)
- Screen reader quick pass (VoiceOver)
- Contrast check (both modes)
- Reduced motion check

### Device coverage
- iPhone width (375px)
- Common Android width (390px)
- Tablet (768px)
- Desktop (1440px)
- Narrow laptop (1024px)

---

# 15. Appendices

## A. Technology choices

| Choice | Why | Alternative considered |
|--------|-----|----------------------|
| Astro 5 | Static-first, content-forward, low JS, fast | Next.js (overkill for static content) |
| Tailwind CSS 4 | Utility-first, matches design token approach | CSS Modules (more verbose) |
| MDX | Rich content with components in markdown | Plain markdown (too limited for case studies) |
| Content Collections | Type-safe content, schema validation | Manual file loading |
| Cloudflare Pages | Fast CDN, free tier, preview deploys | Vercel (also good, but Cloudflare DNS already in use) |
| Inter | Clean, professional, excellent readability | System fonts (less control) |
| Geist Mono | Modern, pairs with Inter | IBM Plex Mono (slightly heavier) |
| satori | OG image generation at build, no external service | Manual Figma exports (tedious to maintain) |

## B. Design system research summary

Style direction: hybrid of **Trust & Authority** + **Swiss Modernism 2.0** + **Editorial Grid**
- Swiss Modernism: grid discipline, Inter typography, mathematical spacing
- Trust & Authority: metric presentation, credential patterns, professional palette
- Editorial Grid: long-form content, pull quotes, reading-width constraints

All three score Excellent on performance and WCAG AAA on accessibility.

## C. Alternative approaches not taken

- **Masonry layout**: wrong for 3 curated items, slower to scan
- **Serif body font**: spec explicitly says no, Inter is the right signal
- **Headless CMS**: overkill, adds operational overhead
- **Portfolio template**: wrong hierarchy, wrong signal, cleanup cost
- **Contact form at launch**: adds spam risk and ops for no clear benefit
- **pnpm**: switched to npm for simplicity

## D. Key proof points (for content reference)

### Primary
1. Architecture spanning 88 countries and 23 marketplaces
2. Performance program across 200+ engineers and 25+ services
3. 2.5× checkout improvement, 10.5× address resolution improvement
4. Microfrontend platform enabling 6+ teams, onboarding weeks → days
5. AI pipeline replacing 80+ engineer manual process, hallucinations < 2%

### Secondary
- QuickSight: 28% latency reduction, 73% test coverage increase
- IoT rearchitecture: 9 teams / 20+ developers, 45% build time reduction, 70% deployment improvement
