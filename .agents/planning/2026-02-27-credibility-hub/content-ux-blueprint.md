# jonrinciari.dev v2 — Content/UX Blueprint

Below is the **next concrete layer**: the **exact sitemap, page-by-page wireframes, homepage copy draft, and case study outlines**.

This is the **content/UX blueprint** that sits directly on top of the build spec. It is based on your actual proof points: Kuiper commerce architecture across **88 countries** and **23 marketplaces**, the performance program across **200+ engineers** and **25+ services**, the **2.5×** checkout and **10.5×** address-resolution improvements, microfrontend enablement across **6+ teams**, and the AI test-plan system that replaced manual work from **80+ engineers** while reducing hallucinations below **2%**.

---

# 1. Final sitemap

## Primary nav

* **Home** `/`
* **Work** `/work`
* **Resume** `/resume`
* **About** `/about`
* **Contact** `/contact`

## Secondary nav / footer

* **Writing** `/writing` *(only if launched with strong content)*
* **LinkedIn**
* **GitHub**
* **Email**

## Initial published pages

### Launch

* `/`
* `/work`
* `/work/global-commerce-performance`
* `/resume`
* `/about`
* `/contact`

### Wave 2

* `/work/platform-enablement-at-scale`
* `/work/ai-engineering-systems`

### Wave 3

* `/writing`
* `/writing/<slug>` *(only if quality threshold is met)*

---

# 2. Global layout spec

## Header

Left:

* wordmark: **Jonathan Rinciari**

Right:

* Home
* Work
* Resume
* About
* Contact

Desktop:

* horizontal nav
* sticky on scroll after hero leaves viewport
* subtle border-bottom on sticky state

Mobile:

* wordmark left
* menu button right
* full-screen overlay menu
* no fancy animation

## Footer

Columns:

1. name + one-line positioning
2. nav links
3. external links
4. small colophon

Footer line:

* `Built with Astro. Fast by default.`
* optional last updated month/year

---

# 3. Homepage wireframe

## Goal

Make a recruiter think:

**"This is not another frontend portfolio. This is a Staff+/Principal-level technical leader with real scope."**

## Wireframe

### Section 1: Hero

**Layout**

* left column: text
* right column: optional headshot or abstract system diagram motif
* vertically centered
* generous whitespace
* no hero background gimmick

**Content**

* eyebrow
* H1
* support paragraph
* proof chips
* CTAs

**Exact content structure**
Eyebrow:
`Staff+ Full-Stack Engineer`

H1:
`I lead global customer-facing systems, platform strategy, and performance programs that scale through teams.`

Support paragraph:
`I'm a Seattle-based technical leader focused on ambiguous, cross-org problems across commerce, platform architecture, and AI-enabled engineering systems. My work spans web, mobile, and console, with an emphasis on durable mechanisms, measurable outcomes, and technical strategies that hold up at scale.`

Proof chips:

* `88 countries`
* `23 marketplaces`
* `200+ engineers`
* `25+ services`
* `2.5× faster checkout`

Primary CTA:
`View Selected Work`

Secondary CTA:
`View Resume`

Optional tertiary text link:
`Contact`

**Why this works**
It emphasizes:

* level
* scope
* system type
* ambiguity
* measurable outcomes

---

### Section 2: Signature proof row

This is a high-density strip immediately below the hero.

**Desktop**
3 equal columns

**Mobile**
stacked cards

**Card 1**
Title:
`Global commerce architecture`

Body:
`Designed the technical strategy for customer-facing Kuiper commerce across web, mobile, and console, including integration with Amazon discovery systems across 23 marketplaces.`

**Card 2**
Title:
`Org-scale performance leverage`

Body:
`Built a performance program spanning 200+ engineers and 25+ services, driving 2.5× checkout improvements and 10.5× address-resolution improvements.`

**Card 3**
Title:
`AI systems for engineering workflows`

Body:
`Designed an 11-stage multi-agent system that turns natural-language test specs into executable plans, replacing a manual workflow used by 80+ engineers.`

---

### Section 3: Selected Work preview

Header:
`Selected Work`

Subheader:
`A few examples of how I approach system design, technical direction, and org-level leverage.`

Then 3 featured cards.

#### Card 1

Title:
`Global Commerce Architecture & Performance`

Summary:
`Defining Kuiper commerce architecture across global markets while building mechanisms that improved customer performance at organizational scale.`

Meta row:

* `88 countries`
* `23 marketplaces`
* `2.5× checkout improvement`

CTA:
`Read case study`

#### Card 2

Title:
`Platform Enablement at Scale`

Summary:
`Architecting platform and microfrontend systems that let multiple teams ship independently while reducing onboarding and operational friction.`

Meta row:

* `6+ teams`
* `weeks → days onboarding`
* `platform governance`

CTA:
`Read case study`

#### Card 3

Title:
`AI Engineering Systems`

Summary:
`Designing production-oriented AI workflow systems with explicit context boundaries, provenance, and measurable accuracy improvements.`

Meta row:

* `11-stage pipeline`
* `80+ engineers`
* `<2% hallucinations`

CTA:
`Read case study`

---

### Section 4: How I operate

Header:
`How I work`

Use 4 short blocks.

#### Block 1

Title:
`I start with constraints`
Copy:
`The best technical strategy usually comes from understanding organizational, regulatory, product, and operational constraints before picking technology.`

#### Block 2

Title:
`I build mechanisms, not heroics`
Copy:
`The goal is not to stay in the critical path forever. It is to create standards, tooling, and architecture that continue working after handoff.`

#### Block 3

Title:
`I optimize for leverage`
Copy:
`The highest-value work is often the work that improves how teams build, ship, measure, and operate systems—not just the feature itself.`

#### Block 4

Title:
`I care about proof`
Copy:
`I prefer measurable improvements, explicit tradeoffs, and systems that can be reasoned about under real production constraints.`

---

### Section 5: Experience snapshot

Header:
`Recent focus`

Timeline-style summary:

* **Project Kuiper** — global commerce architecture, performance programs, microfrontend platform, AI-enabled engineering tooling
* **QuickSight** — embedding performance, customization strategy, test coverage, measurement frameworks
* **AWS IoT** — console launches, microfrontend rearchitecture, operational readiness, deployment acceleration

Right-aligned link:
`View full resume`

---

### Section 6: Contact CTA

Header:
`Interested in talking?`

Copy:
`I'm most interested in Staff, Principal, and Senior Staff roles focused on customer-facing systems, platform architecture, performance, and AI-enabled engineering infrastructure.`

Actions:

* `Email me`
* `LinkedIn`
* `Resume`

---

# 4. Homepage copy draft

Below is the **full first-pass homepage copy**.

## Hero

**Eyebrow**
Staff+ Full-Stack Engineer

**Headline**
I lead global customer-facing systems, platform strategy, and performance programs that scale through teams.

**Body**
I'm a Seattle-based technical leader focused on ambiguous, cross-org problems across commerce, platform architecture, and AI-enabled engineering systems. My work spans web, mobile, and console, with an emphasis on durable mechanisms, measurable outcomes, and technical strategies that hold up at scale.

**Proof chips**

* 88 countries
* 23 marketplaces
* 200+ engineers
* 25+ services
* 2.5× faster checkout

**Primary CTA**
View Selected Work

**Secondary CTA**
View Resume

---

## Signature proof row

**Global commerce architecture**
Designed the technical strategy for customer-facing Kuiper commerce across web, mobile, and console, including integration with Amazon discovery systems across 23 marketplaces.

**Org-scale performance leverage**
Built a performance program spanning 200+ engineers and 25+ services, driving 2.5× checkout improvements and 10.5× address-resolution improvements.

**AI systems for engineering workflows**
Designed an 11-stage multi-agent system that turns natural-language test specs into executable plans, replacing a manual workflow used by 80+ engineers.

---

## Selected Work intro

A few examples of how I approach system design, technical direction, and org-level leverage.

---

## Work card copy

**Global Commerce Architecture & Performance**
Defining Kuiper commerce architecture across global markets while building mechanisms that improved customer performance at organizational scale.

**Platform Enablement at Scale**
Architecting platform and microfrontend systems that let multiple teams ship independently while reducing onboarding and operational friction.

**AI Engineering Systems**
Designing production-oriented AI workflow systems with explicit context boundaries, provenance, and measurable accuracy improvements.

---

## How I work

**I start with constraints**
The best technical strategy usually comes from understanding organizational, regulatory, product, and operational constraints before picking technology.

**I build mechanisms, not heroics**
The goal is not to stay in the critical path forever. It is to create standards, tooling, and architecture that continue working after handoff.

**I optimize for leverage**
The highest-value work is often the work that improves how teams build, ship, measure, and operate systems—not just the feature itself.

**I care about proof**
I prefer measurable improvements, explicit tradeoffs, and systems that can be reasoned about under real production constraints.

---

## Contact CTA

I'm most interested in Staff, Principal, and Senior Staff roles focused on customer-facing systems, platform architecture, performance, and AI-enabled engineering infrastructure.

---

# 5. Work index wireframe

## Page structure

### Hero

Title:
`Selected Work`

Intro:
`This is a focused set of work that best represents how I approach architecture, technical direction, platform leverage, and cross-org execution. Some details are intentionally generalized to respect confidentiality, but the underlying systems, constraints, and outcomes are real.`

### Featured work section

3 cards, vertical stack on mobile, 2+1 or 3-column on desktop depending on width.

### Additional highlights section

Not at launch, but reserve space for:

* QuickSight embedding performance
* AWS IoT console launch / rearchitecture

### Closing CTA

* Resume
* Contact

---

# 6. Work page wireframe template

Every flagship work page uses this exact skeleton.

## 1. Hero

* title
* short summary
* your role
* period
* tags
* metrics row

## 2. Executive summary

100–140 words

## 3. Context

* users/customers
* business environment
* org topology
* why this mattered

## 4. Problem

* what was broken or missing
* why standard solutions were insufficient
* constraints

## 5. My role

* ownership
* influence
* boundaries

## 6. Strategy

* mental model
* options considered
* why chosen approach won

## 7. Architecture

* system shape
* boundaries
* interfaces
* sequencing
* mechanisms

## 8. Execution and alignment

* stakeholders
* rollout
* governance
* adoption

## 9. Results

* business/customer
* engineering
* platform/reliability

## 10. Tradeoffs

* what you did not do
* why
* what you'd revisit

## 11. Confidentiality note

* what is generalized
* why

## 12. Related links

* back to Work
* Resume
* Contact

---

# 7. Case study outline: Global Commerce Architecture & Performance

## URL

`/work/global-commerce-performance`

## Working title

**Global Commerce Architecture & Performance at Scale**

## One-line summary

Designing the architecture and performance mechanisms for a global commerce experience spanning web, mobile, and console across 88 countries and 23 marketplaces.

## Proof row

* 88 countries
* 23 marketplaces
* 5+ organizations
* 2.5× checkout improvement
* 10.5× address-resolution improvement

## Executive summary draft

As technical lead for Kuiper commerce architecture, I worked across web, mobile, and console to define the technical approach for a global customer-facing experience with unusually high organizational and regulatory complexity. The work required integration across Amazon discovery systems in 23 marketplaces, coordination across 5+ organizations without direct authority, and an org-wide performance program that ultimately drove 2.5× checkout improvements and 10.5× address-resolution improvements. My focus was not just shipping features, but designing the architecture, mechanisms, and operating model that allowed teams to move quickly while preserving performance, integration quality, and long-term maintainability.

## Context section bullets

* customer-facing commerce for residential, enterprise, and SMB
* multiple surfaces: web, mobile, AWS Console
* global launch requirements across 88 countries
* Amazon ecosystem integration constraints
* legal/entity/compliance complexity in payments and internationalization

## Problem section bullets

* standard Amazon integration patterns did not cleanly fit the business
* global rollout needed a durable architecture, not one-off per-country customization
* performance had to improve across a broad system surface, not just one page
* many of the most important dependencies lived outside your org

## My role section bullets

* technical lead for customer-facing web architecture
* authored frontend technical strategy unifying auth, payments, i18n, CI/CD, and cross-team integration
* coordinated across Search, Mobile, Identity, Marketing, and Legal
* built the operating model for performance improvements across a large org footprint

## Strategy section bullets

* establish a single technical strategy rather than fragmented team-specific approaches
* create performance standards and regression prevention instead of reactive tuning
* push toward configuration-driven globalization
* reduce dependency ambiguity by clarifying contracts and integration boundaries

## Architecture section bullets

* global store model
* path-based routing and geolocation detection
* auth/session approach for secure payments in console contexts
* compatibility boundaries between teams/surfaces
* performance observability and regression infrastructure

## Execution section bullets

* how alignment worked across 5+ orgs without authority
* how performance work was delegated across 200+ engineers
* how standards and monitoring became durable
* how adoption was achieved without blocking delivery

## Results section bullets

* 2.5× checkout improvement
* 10.5× address-resolution improvement
* global expansion path simplified
* shared architectural framework adopted by frontend teams
* org moved from ad hoc performance work to a repeatable mechanism

## Tradeoffs section bullets

* where tighter centralization would have hurt autonomy
* where local optimization would have hurt global consistency
* what you intentionally deferred
* what you would redesign if starting from zero

## Confidentiality note

Keep explicit:
"Specific internal service names, architectural diagrams, and workflow details have been generalized to protect confidential information while preserving the technical decisions, constraints, and outcomes."

---

# 8. Case study outline: Platform Enablement at Scale

## URL

`/work/platform-enablement-at-scale`

## Working title

**Platform Enablement at Scale**

## One-line summary

Creating platform and microfrontend systems that let teams ship independently while improving onboarding, compatibility, and operational quality.

## Proof row

* 6+ teams
* weeks → days onboarding
* 9 teams / 20+ developers
* 45% build-time reduction
* 70% deployment improvement

## Executive summary draft

A recurring theme in my work has been reducing organizational friction through platform architecture. At Kuiper, that meant designing a microfrontend platform and shared tooling that allowed 6+ teams to build and deploy independently while reducing onboarding from weeks to days. Earlier in AWS IoT, it meant leading a monolith-to-microfrontend rearchitecture across 9 teams and 20+ developers, improving build times by 45%, cutting deployment time from 3.5 weeks to 1 week, and dramatically improving local feedback loops. In both cases, the real problem was not "how do we split the frontend?" It was how to create standards, boundaries, tooling, and ownership models that improved team autonomy without creating operational chaos.

## Context section bullets

* multiple teams shipping into a shared customer surface
* need for independence without fragmentation
* historical bottlenecks from monolithic or tightly coupled systems
* platform work as leverage, not just abstraction

## Problem section bullets

* onboarding cost too high
* release friction too high
* compatibility risk between teams too high
* frontend architecture becoming organizational bottleneck

## My role section bullets

* architected the platform shape and compatibility model
* defined tooling and governance approach
* created rollout/migration strategy
* influenced adoption across teams without turning platform into a control tower

## Strategy section bullets

* optimize for team independence with strong boundaries
* shared tooling + automated compatibility validation
* explicit ownership and migration guidance
* standardize operational readiness in parallel with architectural change

## Architecture section bullets

* shell/app composition model
* compatibility validation mechanism
* ownership boundaries
* CI/CD integration
* shared contracts
* observability / operational readiness hooks

## Execution section bullets

* migration sequencing
* how standards were documented
* how teams were onboarded
* how adoption risk was managed
* how you avoided platform overreach

## Results section bullets

* 6+ teams enabled to ship independently
* onboarding reduced from weeks to days
* build times reduced 45%
* local feedback loops improved 90%
* worldwide deployment time improved 70%
* operational readiness standardized across teams

## Tradeoffs section bullets

* cost of distributed ownership
* governance vs autonomy tension
* where uniformity mattered and where it did not
* lessons from the first migration wave

---

# 9. Case study outline: AI Engineering Systems

## URL

`/work/ai-engineering-systems`

## Working title

**AI Systems for Engineering Workflows**

## One-line summary

Designing production-oriented AI systems that translate specifications into executable engineering artifacts with explicit context control, evaluation, and provenance.

## Proof row

* 11-stage pipeline
* 80+ engineers
* <2% hallucination rate
* provenance tracking

## Executive summary draft

I've been increasingly focused on AI systems that improve real engineering workflows rather than producing demos. One example was an 11-stage multi-agent system that compiled natural-language test specifications into executable plans, replacing a manual process that previously required 80+ engineers. A key design principle was explicit context separation between stages, which helped push hallucinations below 2%. In parallel, I designed a knowledge graph extraction system that processed code, documents, API contracts, and configuration into a unified graph with complete provenance tracking. The goal in both cases was the same: treat AI as a systems problem with boundaries, evaluation, and trust mechanisms—not as a single opaque model call.

## Context section bullets

* engineering org with high manual coordination overhead
* natural-language specifications were useful but operationally expensive
* trust and traceability were essential
* AI output had to be controllable and inspectable

## Problem section bullets

* manual workflow did not scale
* naive LLM orchestration was too error-prone
* context overload increased hallucination risk
* stakeholders needed explainability and provenance

## My role section bullets

* system architect
* pipeline design
* context-boundary strategy
* evaluation framing
* knowledge graph/provenance model

## Strategy section bullets

* decompose work into staged pipeline
* isolate context per step
* encode provenance from source artifacts forward
* optimize for auditability, not only output quality

## Architecture section bullets

* 11-stage pipeline overview
* data movement between stages
* state / artifact storage approach
* knowledge graph ingestion model
* provenance schema
* evaluation loop

## Execution section bullets

* how the system was introduced
* how you validated usefulness
* how you prevented over-trust
* where human review remained necessary

## Results section bullets

* manual process replaced for 80+ engineers
* hallucinations below 2%
* better traceability
* faster translation from spec to execution plan
* better reuse of heterogeneous source material

## Tradeoffs section bullets

* latency vs accuracy
* explainability vs speed
* model flexibility vs operational stability
* where the system still needed human judgment

---

# 10. About page wireframe and copy

## Wireframe

### Section 1: Intro

Title:
`About`

Lead:
`I work best on ambiguous technical problems that sit across product, platform, and organizational boundaries.`

Paragraph:
`Over time I've gravitated toward the kinds of problems that don't have a clean handoff line: global customer-facing architecture, performance work that spans many teams, platform decisions that shape how organizations build, and AI systems that need to be useful under real production constraints.`

### Section 2: What I do best

Use 5 bullets:

* define technical direction for customer-facing systems
* improve org-level leverage through platform and performance mechanisms
* build architecture that survives scale and delegation
* align multiple teams without direct authority
* turn high-ambiguity spaces into executable technical strategy

### Section 3: Operating principles

Use the 5 principles from the prior spec.

### Section 4: Background

Copy draft:
`My path into engineering didn't start in computer science. I studied physiology, moved into startups, and eventually into organizational-scale engineering at Amazon. That trajectory shaped how I work: I tend to reason from constraints and first principles, especially in systems that don't fit an existing template.`

### Section 5: What I'm looking for

Copy:
`I'm most interested in Staff, Principal, and Senior Staff roles where the core challenge is not just building software, but defining how complex software gets built across teams.`

---

# 11. Resume page wireframe

## Hero

Title:
`Resume`

Subcopy:
`A concise view of my experience, recent impact, and the systems I've led.`

Buttons:

* Download PDF
* Contact

## Section 1: Selected outcomes

Use 5 bullets:

* Led commerce architecture across 88 countries and 23 marketplaces
* Built performance program across 200+ engineers and 25+ services, driving 2.5× and 10.5× improvements
* Architected microfrontend platform enabling 6+ teams and reducing onboarding from weeks to days
* Reduced QuickSight embedding latency by 28% and increased test coverage by 73%
* Designed AI pipeline replacing an 80+ engineer manual process with hallucinations below 2%

## Section 2: Experience timeline

Use concise entries with linked proof.

## Section 3: Skills / domains

Grouped, minimal:

* Architecture & Technical Strategy
* Frontend / Full-Stack Systems
* Performance & Observability
* Platform & Developer Experience
* AI Systems & Workflow Automation

---

# 12. Contact page wireframe and copy

## Layout

Centered narrow column

## Copy

Title:
`Contact`

Body:
`The easiest way to reach me is by email or LinkedIn.`

Actions:

* Email
* Copy email
* LinkedIn
* GitHub
* Resume PDF

Optional small note:
`For roles, include a link to the company or job description if you have one.`

---

# 13. Writing page wireframe

Only if launched.

## Hero

Title:
`Writing`

Body:
`A small set of notes on architecture, performance, platform design, and production-oriented AI systems.`

## List items

Each item includes:

* title
* summary
* date
* related theme tag
* reading time

## First writing topics to consider

1. `Designing performance programs that scale beyond one team`
2. `When microfrontends create leverage—and when they create drag`
3. `Treating AI workflow automation as a systems design problem`

---

# 14. Exact homepage section order

Lock this order:

1. Hero
2. Signature proof row
3. Selected Work preview
4. How I operate
5. Experience snapshot
6. Contact CTA

Do **not** move Experience above Selected Work.
Do **not** put a long About section on the homepage.
Do **not** put Writing above Work.

---

# 15. Copy constraints

## Headline rules

* no buzzwords
* no "passionate"
* no "building innovative solutions"
* no "full-stack engineer with a passion for…"

## Body rules

* shorter paragraphs
* outcome and system language
* active voice
* concrete nouns
* no long stack lists

## CTA rules

Allowed:

* View Selected Work
* View Resume
* Read case study
* Contact

Not allowed:

* Explore my portfolio
* See my projects
* Let's build something amazing

---

# 16. Launch content checklist

## Must have before launch

* homepage final copy
* work index final copy
* 1 full flagship case study
* resume HTML
* resume PDF
* about page
* contact page
* metadata and OG images
* headshot decision finalized

## Should have soon after

* 2nd flagship case study
* 3rd flagship case study
* 1 mini additional highlight
* 1 optional writing piece

---

# 17. Strong recommendation on sequencing

Do **not** wait to publish until all three case studies are perfect.

Ship:

* Home
* Work
* Resume
* About
* Contact
* **Global Commerce Architecture & Performance** first

Then add the other two.

Why:
That first case study already carries enough signal to justify the whole site because it combines:

* global scope
* architecture
* cross-org influence
* platform thinking
* performance outcomes

---

# 18. What I would do next

The best next deliverable is:

1. **final homepage copy pass**
2. **full copy draft for About / Resume / Contact**
3. **full written draft of case study #1**
4. optional: **Astro file/folder scaffold**

The highest-value next step is **case study #1 draft**, because that is the hardest content and the biggest proof asset.
