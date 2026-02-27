# Design System Intelligence — UI/UX Pro Max Analysis

This document synthesizes the UI/UX Pro Max tool recommendations with the locked build spec decisions.

---

## Recommended Style: Hybrid of Trust & Authority + Swiss Modernism 2.0 + Editorial Grid

The tool's best matches for "executive editorial credibility" are:

1. **Trust & Authority** — case studies with metrics, expert credentials, professional colors (blue/grey), WCAG AAA
2. **Swiss Modernism 2.0** — strict grid, Inter fonts, mathematical spacing, single accent color, WCAG AAA
3. **Editorial Grid / Magazine** — asymmetric grid, editorial typography, pull quotes, high contrast, WCAG AAA

All three score Excellent on performance and AAA on accessibility. The credibility hub should blend:
- Swiss Modernism's grid discipline and Inter typography
- Trust & Authority's metric presentation and credential patterns
- Editorial Grid's long-form content handling and pull-quote patterns

### Avoid these styles
- Exaggerated Minimalism (too loud for executive positioning)
- Anti-Polish / Raw Aesthetic (wrong signal entirely)
- Soft UI Evolution (too soft, doesn't convey authority)

---

## Color System — Spec Confirmed + Dark Mode Additions

### Light mode (from spec, confirmed by tool)

| Role | Hex | Tailwind Equivalent |
|------|-----|---------------------|
| Background | `#F8FAFC` | `slate-50` |
| Surface | `#FFFFFF` | `white` |
| Text primary | `#0F172A` | `slate-900` |
| Text secondary | `#475569` | `slate-600` |
| Border | `#E2E8F0` | `slate-200` |
| Accent | `#2563EB` | `blue-600` |
| Accent soft | `#DBEAFE` | `blue-100` |
| Success | `#047857` | `emerald-700` |

The tool's Trust & Authority palette (`--trust-color: #1E40AF`) is close to the spec's accent `#2563EB`. The spec choice is correct — blue-600 reads as professional without being too dark.

### Dark mode (new — needed per Q2 decision)

| Role | Hex | Tailwind Equivalent |
|------|-----|---------------------|
| Background | `#0F172A` | `slate-900` |
| Surface | `#1E293B` | `slate-800` |
| Text primary | `#F1F5F9` | `slate-100` |
| Text secondary | `#94A3B8` | `slate-400` |
| Border | `#334155` | `slate-700` |
| Accent | `#3B82F6` | `blue-500` |
| Accent soft | `#1E3A5F` | custom (blue-900-ish) |
| Success | `#10B981` | `emerald-500` |

### Contrast verification needed
- Light: `#0F172A` on `#F8FAFC` → ~15.4:1 (AAA pass)
- Light secondary: `#475569` on `#F8FAFC` → ~6.6:1 (AAA pass)
- Dark: `#F1F5F9` on `#0F172A` → ~15.4:1 (AAA pass)
- Dark secondary: `#94A3B8` on `#0F172A` → ~5.5:1 (AA pass, AAA for large text)

---

## Typography — Spec Confirmed

### Primary: Inter (self-hosted)
The tool confirms Inter as ideal for "minimal, clean, swiss, functional, neutral, professional" — exactly the right signal.

Weights to include:
- 400 (body)
- 500 (emphasis, nav)
- 600 (subheadings, labels)
- 700 (headings)

### Secondary: Geist Mono (self-hosted, per Q10)
Used only for: metadata, tags, small labels, code snippets, proof chips.

Single weight: 400 (regular).

### Type scale (from spec)

Desktop:
- H1: 56px / 60px line-height
- H2: 36px / 42px
- H3: 24px / 30px
- Body L: 20px / 32px
- Body: 18px / 30px
- Small: 14px / 22px
- Meta: 12px / 18px

Mobile:
- H1: 38px / 42px
- H2: 28px / 34px
- H3: 22px / 28px
- Body: 17px / 28px
- Small: 14px / 22px

### Font loading strategy
- Self-host both fonts (no Google Fonts CDN)
- Preload Inter 400 and 700 (most used weights)
- Load Inter 500 and 600 without preload
- Load Geist Mono 400 without preload
- Use `font-display: swap`
- Total font budget: under 160 KB

---

## Layout System

### Grid
- 12-column grid (Swiss Modernism recommendation, matches spec)
- Base unit: 8px (spec uses 4/8 scale)
- Max width: 1200px (spec)
- Reading width: 720px (spec)
- Wide content: 960px (spec)

### Responsive breakpoints
- Mobile: < 640px
- Tablet: 640px–1023px
- Desktop: 1024px+
- Wide: 1440px+

### Responsive padding (from Tailwind guidelines)
- Mobile: `px-4` (16px)
- Tablet: `px-6` (24px)
- Desktop: `px-8` (32px)

---

## Animation & Motion

### Rules from spec + UX guidelines
- Duration: 150–200ms for micro-interactions (hover, focus), up to 400ms for scroll-triggered reveals
- Properties: opacity and transform only
- Easing: ease-out for enter, ease-in for exit (not linear)
- Respect `prefers-reduced-motion: reduce` — users who opt out get instant state, zero animation
- Animate maximum 1–2 key elements per view
- No parallax, scrolljacking, or page-loader theatrics
- No continuous/infinite animations except loading indicators
- No `animate-bounce` on static elements

### Approved motion patterns

#### 1. Staggered proof chip fade-in (hero)
- The 5 proof chips (`88 countries`, `23 marketplaces`, etc.) fade in with opacity 0→1 and translateY 8px→0
- 50ms stagger between each chip
- Duration: 300ms per chip, ease-out
- Triggers on page load (hero is above the fold)
- Effect: "credentials loading in" — reinforces density of proof

#### 2. Scroll-triggered section reveals (homepage)
- Each homepage section (proof row, selected work, how I operate, experience, contact CTA) fades up as it enters the viewport
- opacity 0→1, translateY 16px→0
- Duration: 400ms, ease-out
- Trigger: IntersectionObserver, fires once when ~20% visible
- Standard pattern on executive-grade sites (Stripe, Linear, Vercel)
- Without this, the page feels flat when scrolling

#### 3. Metric count-up (signature proof row)
- Numbers (`200+`, `2.5×`, `10.5×`) count up from 0 when the proof row scrolls into view
- Duration: ~800ms, ease-out
- Triggers once, does not loop
- Trust & Authority pattern — draws attention to the exact data points that matter

#### 4. Card hover lift (work cards, proof row cards)
- Cards rise ~2px with subtle shadow increase on hover
- `transform: translateY(-2px)` + `box-shadow` transition
- Duration: 150ms, ease-out
- No scale transform (avoids layout shift)
- Signals interactivity without being playful

#### 5. Mobile menu overlay (fade)
- Opacity fade 0→1 for overlay appearance
- Duration: 150ms
- No slide animation

### Explicitly not doing
- Parallax (motion sickness risk, wrong signal)
- Page transitions (static site, no client-side router)
- Hero background animation (gimmicky)
- Continuous/looping anything
- Scroll-jacking
- Loading screen theatrics
- Counter animations that loop or replay

### prefers-reduced-motion handling
All motion patterns above must be wrapped in a `prefers-reduced-motion` check. When reduced motion is preferred:
- All transitions set to 0ms
- Scroll-triggered elements render in final state immediately
- Metric count-up shows final number instantly
- Hover lift still works (transform is acceptable) but transitions are instant

---

## Accessibility Requirements

### From spec + UX guidelines
- WCAG 2.2 AA target
- Full keyboard navigation, tab order matches visual order
- Visible focus rings: `focus:ring-2 focus:ring-blue-500` (not `outline-none` without alternative)
- Skip-to-content link on every page
- Semantic headings (h1 → h2 → h3, no skipping)
- Alt text on all meaningful images
- Touch targets >= 44x44px
- `prefers-reduced-motion` respected
- Form controls labeled (contact page email copy)
- No text embedded in images
- Color is not the only indicator of state

### Dark mode accessibility
- Ensure accent colors maintain AA contrast in both modes
- Borders must remain visible in dark mode (use `slate-700`, not transparent)
- Test both modes independently

---

## Component Interaction Patterns

### Cards (WorkCard, proof row cards)
- `cursor-pointer` on all clickable cards
- Hover: subtle shadow lift or border-color change, not scale transform
- Transition: `transition-colors duration-200` or `transition-shadow duration-200`
- No layout shift on hover

### Buttons (PrimaryButton, SecondaryButton)
- Primary: `bg-blue-600 text-white` → hover `bg-blue-700`
- Secondary: `border border-slate-300 text-slate-700` → hover `border-slate-400`
- Focus: visible ring in both light and dark mode
- Minimum size: 44x44px touch target
- `cursor-pointer` always

### Navigation
- Desktop: horizontal nav, sticky after hero
- Sticky state: add `border-b border-slate-200 dark:border-slate-700`
- Mobile: full-screen overlay, centered links, close button top-right
- Mobile overlay: `bg-white dark:bg-slate-900`, opacity fade transition

### Icons
- Use SVG icons (Lucide recommended for consistency)
- No emojis as UI icons
- Consistent sizing: 20px or 24px
- Icon-only buttons must have `aria-label`

---

## Landing Page Structure Alignment

The tool's closest pattern match is **Hero + Testimonials + CTA** adapted for a credibility hub:

1. Hero (brand + positioning) — ✅ matches spec Section 1
2. Social proof strip (metrics) — ✅ matches spec Section 2 (Signature proof row)
3. Featured work cards — ✅ matches spec Section 3 (Selected Work preview)
4. Operating model — ✅ matches spec Section 4 (How I operate)
5. Experience timeline — ✅ matches spec Section 5
6. Contact CTA — ✅ matches spec Section 6

The spec's section order is well-validated by the tool's conversion optimization research: social proof before CTA, credentials visible early, professional color scheme.

---

## Pre-Delivery Checklist (from UI/UX Pro Max)

### Visual Quality
- [ ] No emojis used as icons (use Lucide SVGs)
- [ ] All icons from consistent icon set
- [ ] Hover states don't cause layout shift
- [ ] Colors use Tailwind theme tokens, not raw hex in templates

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are 150–200ms with ease-out
- [ ] Focus states visible for keyboard navigation

### Light/Dark Mode
- [ ] Light mode text contrast ≥ 4.5:1
- [ ] Dark mode text contrast ≥ 4.5:1
- [ ] Borders visible in both modes
- [ ] Accent colors maintain contrast in both modes
- [ ] Test both modes before delivery

### Layout
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] Content doesn't hide behind sticky header
- [ ] Consistent max-width across pages

### Accessibility
- [ ] All images have alt text
- [ ] Skip-to-content link present
- [ ] `prefers-reduced-motion` respected
- [ ] Form controls labeled
- [ ] Semantic heading hierarchy
