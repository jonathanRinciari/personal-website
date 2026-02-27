# jonrinciari.dev v2 — Full Website Build Spec

Below is the **full website build spec**. It is opinionated, complete, and optimized for your actual positioning: **Staff+/Principal full-stack technical leader**, not "developer portfolio owner."

Your strongest proof points are already clear: Kuiper commerce architecture across **88 countries** and **23 marketplaces**, an org-wide performance program across **200+ engineers** and **25+ services**, **2.5x** checkout latency improvement, **10.5x** address resolution improvement, microfrontend platform leadership, and an AI test-plan system replacing manual work from **80+ engineers** with hallucinations reduced below **2%**.

---

# 1. Product definition

## Product name

**jonrinciari.dev v2**
Internal shorthand: **Credibility Hub**

## Product type

A **case-study-first credibility hub** for Staff/Principal-level recruiting and hiring.

## Primary objective

Make it obvious, quickly, that you are a **high-leverage technical leader** who:

* sets direction across ambiguous systems
* drives alignment without authority
* improves org-level throughput and technical quality
* ships real systems with measurable outcomes

## Primary audiences

In order of priority:

1. **Recruiters**
   Need rapid level calibration and a sharable link.

2. **Hiring managers**
   Need proof of scope, judgment, and outcomes.

3. **Senior ICs / principals / interviewers**
   Need architecture, tradeoffs, operating model, and technical maturity.

## Success criteria

Within:

* **30 seconds**: recruiter understands level, domain, and 3–5 headline proof points
* **2 minutes**: hiring manager sees why you are Staff+/Principal-caliber
* **5 minutes**: senior technical evaluator finds enough substance to believe the claims

## Non-goals

This site is **not** for:

* showcasing hobby projects
* publishing generic tutorials
* proving you know React/TypeScript
* maximizing pageviews
* becoming a general-purpose content brand
* showing off UI tricks

---

# 2. Locked strategic decisions

These should be treated as fixed unless a new constraint appears.

## Positioning

**Staff+ Full-Stack Engineer / Technical Leader**
Focus: **global customer-facing architecture, performance leverage, platform enablement, and AI-enabled engineering systems**

## Site type

**Credibility hub**, not portfolio

## Core content model

* Home
* Selected Work
* 3 flagship work pages
* About
* Resume
* Contact
* Writing *(secondary; launch only if the content is strong)*

## Technical posture

**Static-first, low-JS, high-performance, high-accessibility**

## Design posture

**Executive-grade, editorial, modern, restrained**

## Launch scope

Launch with:

* Home
* Work index
* 1 flagship case study
* Resume
* About
* Contact

Then add:

* case study #2
* case study #3
* optional mini case studies
* optional writing

---

# 3. Final stack decision

## Chosen stack

* **Astro 5**
* **TypeScript**
* **MDX**
* **Astro Content Collections**
* **Tailwind CSS 4**
* **self-hosted fonts**
* **Plausible Analytics**
* **Cloudflare Pages**
* **Cloudflare DNS**

## Why this stack

This is the cleanest fit for a content-forward site that must feel modern, fast, durable, and low-ops.

Astro is the right default because the site is primarily:

* static pages
* rich long-form case studies
* minimal interactivity
* SEO-sensitive
* speed-sensitive

## Explicitly not chosen

* **Next.js**: strong, but unnecessary unless you intentionally want a more app-like experience
* **headless CMS**: overkill, adds maintenance overhead
* **component-heavy UI libraries**: unnecessary for this product
* **WordPress/Webflow/portfolio template**: wrong shape, wrong signal

---

# 4. Information architecture

## Final sitemap

### Top-level navigation

* **Home** `/`
* **Work** `/work`
* **Resume** `/resume`
* **About** `/about`
* **Contact** `/contact`

### Secondary / footer navigation

* **Writing** `/writing` *(only if quality threshold is met)*
* **GitHub**
* **LinkedIn**
* **Email**
* **RSS** *(only if writing exists)*

## Page inventory

### 1. Home `/`

Purpose: rapid credibility and conversion

### 2. Work index `/work`

Purpose: browse selected work and choose the most relevant proof

### 3. Work detail pages

* `/work/global-commerce-performance`
* `/work/platform-enablement-at-scale`
* `/work/ai-engineering-systems`

Optional later:

* `/work/quicksight-embedding-performance`
* `/work/iot-microfrontend-rearchitecture`

### 4. Resume `/resume`

Purpose: canonical, skimmable professional history in HTML + downloadable PDF

### 5. About `/about`

Purpose: operating model, leadership philosophy, short narrative, what problems you solve

### 6. Contact `/contact`

Purpose: make outreach easy

### 7. Writing `/writing`

Purpose: secondary proof of clarity and judgment, not content marketing

---

# 5. Navigation and labeling rules

## Use these exact labels

Use **Work**, not Projects
Use **Resume**, not CV
Use **About**, not Story
Use **Contact**, not Let's Talk

## Why

The site should feel direct and recruiter-friendly.
"Projects" sounds junior.
"Case Studies" is accurate internally, but **Work** is better in the nav.

---

# 6. Homepage spec

## Homepage goal

Communicate:

1. who you are
2. what level you operate at
3. what kinds of systems you lead
4. why you stand out
5. where to go next

## Homepage structure

### Section 1: Hero

Required elements:

* name
* one-line positioning statement
* short supporting paragraph
* primary CTA
* secondary CTA
* optional headshot

### Hero copy structure

**H1:**
Jonathan Rinciari

**Positioning line:**
Staff+ Full-Stack Engineer driving global commerce architecture, performance leverage, and AI-enabled engineering systems.

**Support paragraph:**
I lead customer-facing and platform systems across web, mobile, and console, with a focus on ambiguous cross-org problems, measurable outcomes, and technical strategies that scale through teams.

**Primary CTA:**
View Selected Work

**Secondary CTA:**
Resume

## Section 2: Proof bar

3 metrics max. Use exactly 3.

Recommended:

* **88 countries**
* **200+ engineers**
* **2.5x faster checkout**

Below that, a smaller supporting line:

* **23 marketplaces**
* **25+ services**
* **10.5x address resolution improvement**

These are grounded in your current profile.

## Section 3: Selected work preview

3 cards only. No carousel.

Card structure:

* title
* one-sentence summary
* 2 metrics/scope tags
* CTA: Read more

## Section 4: How I operate

Short section, 4 bullets max.

Recommended bullets:

* define technical direction under ambiguity
* drive alignment across organizations without direct authority
* build systems that improve both customer outcomes and engineering throughput
* optimize for durable mechanisms, not one-off heroics

## Section 5: Resume snapshot

Mini timeline:

* Amazon Kuiper
* QuickSight
* AWS IoT
* startup / technical lead background

## Section 6: Contact CTA

Simple, high-trust:

* email
* LinkedIn
* download resume

## Homepage acceptance criteria

A recruiter should be able to answer all of these without scrolling much:

* What level is he?
* What kinds of systems has he led?
* Is he customer-facing or platform?
* Does he have measurable impact?
* Is there evidence?

---

# 7. Work index spec

## Goal

Provide a clean, fast way to scan flagship work.

## Content blocks

### Intro

1 paragraph max:
"This is selected work focused on systems, leverage, and outcomes. Details are intentionally generalized where needed to protect confidential information."

### Flagship work

Exactly 3 featured items at launch.

### Optional later

2 mini case studies in a separate section:

* "Additional Highlights"

## Card fields

* title
* role
* period
* one-sentence summary
* 2–4 tags
* 1–2 key metrics
* confidentiality note if relevant

## Tags taxonomy

Use only these tags:

* Global Architecture
* Performance
* Platform
* AI Systems
* Developer Experience
* Frontend Architecture
* Distributed Systems
* Security
* Globalization
* Operational Excellence

No stack tags like React, Node, TypeScript on the card surface.

---

# 8. Flagship work pages

## The first three pages

### 1. Global Commerce Architecture & Performance

Why first:
This is your clearest Staff+/Principal proof surface:

* global scope
* cross-org integration
* performance leadership
* system strategy
* measurable outcome

Supported by your profile: 88 countries, 23 marketplaces, 5+ organizations, 200+ engineers, 25+ services, 2.5x checkout improvement, 10.5x address resolution improvement.

### 2. Platform Enablement at Scale

Focus:

* microfrontend platform
* onboarding reduction from weeks to days
* org-wide standards/mechanisms
* team independence
* adjacent IoT microfrontend history as supporting context

Supported by your profile: 6+ teams, onboarding reduced from weeks to days, plus prior IoT monolith-to-microfrontend rearchitecture across 9 teams and 20+ developers with major build and deployment improvements.

### 3. AI Systems for Engineering Workflow Automation

Focus:

* multi-agent test-plan system
* 11-stage pipeline
* 80+ engineer manual process replaced
* provenance-aware knowledge graph system
* hallucination control and evaluation

Supported by your profile: 11-stage pipeline, 80+ engineers, hallucinations below 2%, provenance-tracked knowledge graph extraction.

## Work page template

Every flagship work page must follow this exact structure:

### A. Hero

* title
* one-sentence summary
* your role
* period
* scope tags
* 2–4 proof chips

### B. Executive summary

80–140 words.
This is the recruiter/hiring-manager summary.

### C. Context

Explain:

* business context
* user/customer context
* system/environment
* organizational complexity

### D. Problem

State:

* what was hard
* what constraints existed
* why off-the-shelf solutions or usual patterns failed

### E. Role

Be explicit:

* what you owned
* what you influenced
* what you did not directly own
* where authority boundaries existed

### F. Strategy and decisions

This is the core Staff+/Principal section.

Include:

* options considered
* tradeoffs
* why the chosen path fit the constraints
* sequencing decisions
* build vs buy vs adapt if relevant

### G. Architecture

Include:

* system boundaries
* major interfaces
* mechanism design
* platform or workflow shape
* diagrams if useful

Diagrams must be:

* SVG
* simple
* sanitized
* annotated

### H. Execution and influence

Show how the work moved:

* stakeholder alignment
* standards/mechanisms
* rollout
* delegation
* adoption
* governance

### I. Results

Must include:

* customer or business outcomes
* engineering outcomes
* reliability/quality outcomes
* speed/throughput outcomes

### J. Tradeoffs and what I would do differently

This section is mandatory.
It signals maturity.

### K. Confidentiality note

One short note at the end explaining that specific internal details are generalized.

## Work page length target

* 1,200 to 2,000 words
* shorter is okay if dense and useful
* do not exceed 2,500 words at launch

---

# 9. About page spec

## Purpose

Humanize and explain your operating model without becoming fluffy.

## About page structure

### 1. Intro

50–100 words:
what problems you solve and what level you operate at

### 2. What I do best

3–5 bullets:

* global customer-facing systems
* cross-org technical direction
* performance and platform leverage
* AI systems with production constraints
* ambiguous problem spaces with no existing playbook

### 3. Operating principles

Use 5 short principles max.

Recommended:

1. Start with constraints, not solution fashion
2. Build mechanisms that survive delegation
3. Instrument before optimizing
4. Reduce complexity across boundaries, not just inside one team
5. Treat AI as a systems problem, not a demo

### 4. Short narrative

Keep it tight:
physiology → startups → Amazon scale → Staff+ systems leadership

This is supported by your profile background and is distinctive, but it should be a secondary narrative, not the main event.

### 5. What I'm interested in

Optional short paragraph:

* Staff / Principal / Senior Staff full-stack roles
* customer-facing systems
* platform
* performance
* AI-enabled tooling/infrastructure

## What not to include

* long childhood story
* aspirational philosophy
* personality gimmicks
* Twitter/follow me blocks
* Star Wars framing
* "keen interest in frontend" style copy

---

# 10. Resume page spec

## Purpose

Provide a canonical resume that is readable on the web and shareable as a PDF.

## Rules

* HTML page is primary
* PDF is secondary convenience
* PDF link visible near top
* HTML page must link into Work pages where relevant

## Resume structure

### 1. Header

* name
* location
* email
* LinkedIn
* GitHub
* personal site

### 2. Summary

Short and current.
No generic buzzword paragraph.

### 3. Selected outcomes

3–5 bullets at top, before chronology.

### 4. Experience

Each role should include:

* title
* company
* dates
* 2–5 bullets max
* links to relevant case studies or supporting proof where applicable

### 5. Skills

Minimal. Use grouped categories only:

* Architecture
* Frontend / full-stack systems
* Performance / observability
* Platform / DX
* AI systems / workflow automation

No giant comma-separated tech salad.

### 6. Education

Short

## Resume acceptance criteria

A hiring manager should understand:

* trajectory
* scope progression
* leadership pattern
* domain range
* most credible wins

---

# 11. Contact page spec

## Goal

Reduce friction. No drama.

## Required elements

* plain email address
* copy-email button
* LinkedIn link
* GitHub link
* resume link

## Recommended

No contact form at launch.

Why:

* lower spam risk
* lower ops
* lower failure rate
* recruiters are comfortable with direct email and LinkedIn

## Optional later

Serverless contact form only if there is a real use case.

---

# 12. Writing section spec

## Launch rule

Do **not** launch Writing unless you have **at least 2 strong pieces** that support your current brand.

## Allowed writing topics

* designing performance programs across multiple teams
* platform governance and standards
* global architecture tradeoffs
* build vs buy decision frameworks
* production-safe AI systems for engineering workflows

## Not allowed

* outdated Angular tutorials
* beginner content
* generic React posts
* filler written for SEO

## IA

* `/writing`
* `/writing/<slug>`

## Writing page template

* title
* summary
* publication date
* reading time
* content
* next/previous
* link back to relevant work if applicable

---

# 13. Visual design system

## Design goal

Feel like:

* senior
* calm
* precise
* product-grade
* high-trust

Not:

* playful
* loud
* startup-marketing-gimmicky
* ultra-minimal to the point of emptiness
* agency-portfolio flashy

## Typography

### Primary font

**Inter**
Use for:

* body
* headings
* nav
* UI

### Secondary font

Optional: **IBM Plex Mono** or **Geist Mono**
Use only for:

* metadata
* tags
* small labels
* code or architecture snippets

Do **not** use serif as the main body language.

## Type scale

Desktop:

* H1: 56 / 60
* H2: 36 / 42
* H3: 24 / 30
* Body L: 20 / 32
* Body: 18 / 30
* Small: 14 / 22
* Meta: 12 / 18

Mobile:

* H1: 38 / 42
* H2: 28 / 34
* H3: 22 / 28
* Body: 17 / 28
* Small: 14 / 22

## Color system

### Light mode (primary)

* Background: `#F8FAFC`
* Surface: `#FFFFFF`
* Text primary: `#0F172A`
* Text secondary: `#475569`
* Border: `#E2E8F0`
* Accent: `#2563EB`
* Accent soft: `#DBEAFE`
* Success: `#047857`

### Dark mode

Optional. Only ship if done well.
Not required for v1.

## Spacing system

Use 4/8 spacing scale:

* 4
* 8
* 12
* 16
* 24
* 32
* 48
* 64
* 96
* 128

## Layout widths

* overall site max width: 1200px
* reading width: 720px
* wide content/diagram width: 960px

## Border radius

* cards: 16px
* pills: 999px
* buttons: 12px

## Shadows

Very restrained:

* surface shadow only for hover or layered cards
* no heavy neumorphism / glow effects

## Motion

Only subtle motion:

* duration: 140–180ms
* opacity/translate only
* no parallax
* no scrolljacking
* no page-loader theatrics
* respect `prefers-reduced-motion`

---

# 14. Component system

## Core components

Build these and nothing more initially:

* `SiteHeader`
* `SiteFooter`
* `NavLink`
* `PrimaryButton`
* `SecondaryButton`
* `SectionHeader`
* `ProofChip`
* `MetricRow`
* `WorkCard`
* `TimelineItem`
* `MdxCallout`
* `MdxDecisionTable`
* `MdxFigure`
* `MdxQuote`
* `MdxToc`
* `CopyEmailButton`
* `ResumeDownloadButton`

## Design rule

Prefer composition over many bespoke components.
This is a content product, not a component showcase.

---

# 15. Technical architecture

## Folder structure

```text
/
├─ public/
│  ├─ favicon/
│  ├─ og/
│  ├─ resume/
│  │  └─ jonathan-rinciari-resume.pdf
│  ├─ robots.txt
│  ├─ sitemap-index.xml (generated)
│  └─ _headers
├─ src/
│  ├─ components/
│  ├─ content/
│  │  ├─ config.ts
│  │  ├─ work/
│  │  │  ├─ global-commerce-performance.mdx
│  │  │  ├─ platform-enablement-at-scale.mdx
│  │  │  └─ ai-engineering-systems.mdx
│  │  └─ writing/
│  ├─ data/
│  │  ├─ site.ts
│  │  ├─ navigation.ts
│  │  └─ resume.ts
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  ├─ PageLayout.astro
│  │  └─ WorkLayout.astro
│  ├─ lib/
│  │  ├─ seo.ts
│  │  ├─ schema.ts
│  │  ├─ analytics.ts
│  │  └─ utils.ts
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ about.astro
│  │  ├─ resume.astro
│  │  ├─ contact.astro
│  │  ├─ work/
│  │  │  ├─ index.astro
│  │  │  └─ [slug].astro
│  │  ├─ writing/
│  │  │  ├─ index.astro
│  │  │  └─ [slug].astro
│  │  ├─ rss.xml.ts
│  │  └─ 404.astro
│  ├─ styles/
│  │  ├─ globals.css
│  │  ├─ tokens.css
│  │  └─ prose.css
│  └─ env.d.ts
├─ astro.config.mjs
├─ tailwind.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Package manager

**pnpm**

## Node version

**Node 20 LTS**

## Content storage

All content lives in git as MDX or typed TS data.
No CMS.

---

# 16. Content schema

## Work content schema

Use Content Collections with schema validation.

Required fields:

```ts
title: string
slug: string
summary: string
role: string
period: string
featured: boolean
order: number
tags: string[]
metrics: string[]
seoTitle: string
seoDescription: string
ogImage: string
confidentiality: "public" | "generalized"
status: "published" | "draft"
heroVariant?: string
```

## Writing content schema

```ts
title: string
slug: string
summary: string
publishedAt: date
updatedAt?: date
tags: string[]
seoTitle: string
seoDescription: string
ogImage: string
status: "published" | "draft"
featured?: boolean
```

## Resume data

Store resume as typed data in `resume.ts`, not as one big markdown blob.

This allows:

* HTML resume rendering
* easier future JSON export
* consistent linking to work pages
* easier updates

---

# 17. SEO spec

## SEO goal

Own branded search and make every important page easy to understand, preview, and share.

## Required pages with custom metadata

* Home
* About
* Resume
* Work index
* every work page
* Writing index
* every writing page

## Title pattern

Use these exact patterns:

* Home: `Jonathan Rinciari — Staff+ Full-Stack Engineer`
* About: `About — Jonathan Rinciari`
* Resume: `Resume — Jonathan Rinciari`
* Work index: `Selected Work — Jonathan Rinciari`
* Work page: `<Case Study Title> — Jonathan Rinciari`
* Contact: `Contact — Jonathan Rinciari`

## Meta description style

140–160-ish characters, outcome-focused, no fluff.

Example home description:
`Staff+ full-stack engineer focused on global architecture, performance, platform systems, and AI-enabled engineering workflows.`

## URL rules

* lowercase
* hyphenated slugs
* short and readable
* never include dates in work URLs

## Canonicals

Every page must emit a canonical URL.

## Robots

Allow indexing of all primary pages.
Do not block CSS/JS/assets needed for rendering.

## Sitemap

Generate automatically at build.

## Structured data

### Site-wide

* `WebSite`

### About page

* `ProfilePage`
* `Person`

### Resume page

* `WebPage`
* `Person`

### Work index

* `CollectionPage`
* `ItemList`

### Work pages

* `Article`
* `BreadcrumbList`

### Writing pages

* `Article`

## Open Graph

Each page should have:

* title
* description
* url
* og:image
* twitter card equivalent

## OG image strategy

Use static OG images generated at build time.
Each flagship work page gets its own branded OG image.

## Internal linking rules

* home links to all flagship work pages
* resume links to relevant work pages
* about links to work and resume
* writing links to related work when relevant
* every work page links back to Work index and 1–2 related pages

## Search Console

Set up:

* Google Search Console
* Bing Webmaster Tools

---

# 18. Analytics spec

## Chosen tool

**Plausible**

## Why

* privacy-friendly
* minimal script weight
* no cookie banner needed in most setups
* enough insight for a personal site

## Track these events

* `resume_download`
* `email_copy`
* `linkedin_click`
* `github_click`
* `work_card_click`
* `contact_click`

## What not to track

* invasive session replay
* heatmaps
* scroll-depth obsession
* anything that complicates privacy posture

---

# 19. Performance spec

## Core performance goal

The site should feel obviously fast.

## Budgets

### Home

* total JS shipped: **under 70 KB gzipped**
* no client-side framework hydration unless needed
* largest image under **160 KB** optimized
* fonts under **160 KB total**

### Work pages

* no unnecessary client-side JS
* diagrams as SVG
* no autoplay media
* lazy-load non-critical images

## CWV targets

* **LCP < 2.0s**
* **INP < 200ms**
* **CLS < 0.05**

These are stricter than baseline good thresholds and appropriate for a small static site.

## Font loading

* self-host fonts
* preload only necessary weights
* avoid more than:

  * Inter 400
  * Inter 500
  * Inter 600
  * Inter 700
  * one mono weight

## Image handling

* AVIF/WebP first
* fixed width/height
* responsive `srcset`
* no decorative stock photos
* one professional headshot max
* diagrams optimized and lightweight

---

# 20. Accessibility spec

## Standard

Target **WCAG 2.2 AA**

## Required

* full keyboard navigation
* visible focus states
* semantic headings
* skip-to-content link
* contrast-compliant colors
* reduced motion support
* alt text on meaningful images
* no text embedded in images where avoidable
* touch targets >= 44x44
* form controls correctly labeled
* table semantics where tables exist

## MDX accessibility

Custom MDX components must produce semantic HTML.

---

# 21. Security and headers

## Required headers

Configure via `_headers` or platform equivalent:

* `Strict-Transport-Security`
* `X-Content-Type-Options: nosniff`
* `Referrer-Policy: strict-origin-when-cross-origin`
* `X-Frame-Options: DENY`
* `Permissions-Policy`
* content security policy appropriate to the final setup

## CSP rule

Start reasonably strict and adjust only as needed.
Do not leave the site on a wide-open default policy.

---

# 22. Hosting and deployment

## Host

**Cloudflare Pages**

## DNS

**Cloudflare DNS**

## Domain strategy

Keep:

* apex domain as primary canonical
* redirect `www` to apex

## Build command

`pnpm build`

## Output

Astro static output

## Preview workflow

* every PR gets a preview deployment
* main branch deploys to production

## Repo strategy

Build v2 in a **new repo or new long-lived branch**, not by incrementally mutating the old CRA site.

Recommended:

* private repo while building
* production cutover at launch

## CI checks

On every PR:

* typecheck
* lint
* build
* broken-link check
* Lighthouse CI against preview URL

## Dependency updates

Use Dependabot or Renovate monthly.

---

# 23. QA and launch checklist

## Functional

* all nav links work
* resume PDF downloads
* contact actions work
* 404 page works
* canonical URLs correct
* redirects correct

## Content

* no stale titles
* no outdated role labels
* no junior-sounding phrasing
* all metrics verified
* all confidentiality notes reviewed

## SEO

* sitemap generated
* robots valid
* page titles unique
* meta descriptions present
* OG images render correctly
* structured data valid

## Performance

* Lighthouse Perf > 95 on home
* Accessibility > 95
* no layout shift on load
* image sizes optimized

## Accessibility

* keyboard smoke test
* VoiceOver/NVDA quick pass if possible
* contrast check
* reduced motion check

## Device coverage

* iPhone width
* common Android width
* tablet
* desktop 1440
* desktop narrow laptop

---

# 24. Migration plan from the current site

Your current repo is not the foundation. It is source material.

## Carry over

* domain
* name/identity
* GitHub/LinkedIn references
* any one good headshot after reprocessing
* possibly one autobiographical note from the old writing archive if rewritten

## Rewrite completely

* homepage
* about page
* resume page
* footer
* nav
* styling system
* SEO implementation
* analytics
* work content structure
* all meta copy

## Archive or remove

* hobby project pages as primary content
* Angular tutorials
* beginner meta-tag content
* old "portfolio" framing
* Twitter/follow blocks
* old profile copy
* old serif/paper design language

## Redirects

At launch:

* `/projects` → `/work`
* `/projects/:slug` → `/work` or the most relevant work page
* `/writing/:slug` → keep only if rewritten and relevant; otherwise 410 or redirect to `/writing`
* `/resume` stays `/resume`
* `/about` stays `/about`

## Content migration order

1. Home
2. Resume
3. About
4. Work index
5. Work page #1
6. Work page #2
7. Work page #3
8. Writing, if warranted

---

# 25. Initial content plan

## Homepage proof points

Use these five across homepage and work previews:

1. Architecture spanning **88 countries** and **23 marketplaces**
2. Org-wide performance program across **200+ engineers** and **25+ services**
3. **2.5x** checkout latency improvement and **10.5x** address resolution improvement
4. Microfrontend platform enabling **6+ teams** and reducing onboarding from weeks to days
5. Multi-agent AI workflow replacing manual work from **80+ engineers** with hallucinations reduced below **2%**

## Secondary proof points

Use later on work/resume pages:

* QuickSight: **28%** latency reduction and **73%** test coverage increase
* IoT microfrontend rearchitecture across **9 teams / 20+ developers**, including **45%** build time reduction and **70%** deployment improvement

## Tone rules

* concise
* direct
* technically credible
* active voice
* no hype language
* no "passionate about"
* no vague "innovative solutions"

---

# 26. Copy rules

## Homepage

* no paragraph over 75 words
* no more than 3 primary metrics above the fold
* no jargon without purpose
* no generic skill dump

## Work pages

* every section must answer a real evaluator question
* every page needs a tradeoffs section
* every page needs a confidentiality note
* every page needs a clear statement of your role

## About

* one short narrative, not memoir
* make principles concrete
* link back to work

## Resume

* compress aggressively
* prioritize signal over completeness

---

# 27. Template decision

## Use no off-the-shelf portfolio template

Do **not** buy or adapt a portfolio template.

Why:

* wrong information hierarchy
* too much visual noise
* almost always project-gallery oriented
* often looks AI-generated or generic
* creates unnecessary cleanup work

## What to use instead

Start from:

* Astro starter skeleton
* custom layout system
* custom content model
* custom design tokens

This is a **custom credibility site**, not a re-skinned portfolio.

---

# 28. Implementation phases

## Phase 1: foundation

* repo setup
* Astro + TypeScript + Tailwind + MDX
* content collections
* layout system
* tokens
* SEO primitives
* analytics wiring
* header/footer/nav

## Phase 2: v1 launch

* Home
* About
* Resume
* Contact
* Work index
* flagship work page #1
* redirects
* OG images
* PDF resume

## Phase 3: depth

* flagship work page #2
* flagship work page #3
* optional mini case studies
* optional writing

## Phase 4: polish

* refined diagrams
* accessibility pass
* Search Console cleanup
* structured data validation
* Lighthouse tuning

---

# 29. Definition of done

The site is done when:

1. A recruiter can understand your level in under 30 seconds.
2. A hiring manager can see 3 concrete proof surfaces without reading your LinkedIn.
3. A senior interviewer can inspect at least one work page and see real tradeoff thinking.
4. The site looks modern but restrained.
5. It loads fast and stays fast.
6. The content feels current, not legacy.
7. It no longer reads like a frontend portfolio.

---

# 30. Final recommendation

Build a **custom Astro-based credibility hub** with this exact shape:

* **Home** that establishes level and proof quickly
* **Work** centered on 3 flagship, confidentiality-safe narratives
* **Resume** in HTML plus PDF
* **About** focused on operating model and problem fit
* **Contact** with direct, low-friction outreach
* **Writing** only if it strengthens the brand

The site should visually communicate **judgment, clarity, and scale**, and the content should make one thesis undeniable:

**You are a Staff+/Principal-caliber technical leader who turns ambiguous, cross-org problems into durable systems and measurable outcomes.**

The next concrete deliverable should be the **exact sitemap + page-by-page wireframe + homepage copy + case study outlines** based on this spec.
