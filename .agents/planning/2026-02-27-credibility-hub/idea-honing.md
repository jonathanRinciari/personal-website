# Requirements Clarification — jonrinciari.dev v2

This document captures the iterative Q&A process to refine the build spec into actionable requirements.

---

## Q1: Repo strategy — new repo or new branch?

The build spec says to build v2 in a "new repo or new long-lived branch." Given we're currently in the `personal-website` repo (CRA-based, `master` branch), which approach?

**Options considered:**
- A) New private repo — clean history, no legacy baggage, swap DNS at launch
- B) Long-lived branch in this repo (e.g., `v2`) — keeps one repo, easier to reference old code, merge to master at launch
- C) Something else

**Answer:** B — Long-lived `v2` branch in the current `personal-website` repo. Merge to `master` at launch.

---

## Q2: Dark mode — ship in v1 or defer?

The build spec says dark mode is "optional, only ship if done well, not required for v1." The design system only specifies light-mode tokens.

**Options considered:**
- A) Defer dark mode entirely — ship light only, add later if warranted
- B) Build the token structure for dark mode now but only ship light mode at launch
- C) Ship both light and dark at launch

**Answer:** C — Ship both light and dark mode at launch.

---

## Q3: Plausible Analytics — cloud-hosted or self-hosted?

The spec says Plausible but doesn't specify deployment model.

**Options considered:**
- A) Plausible Cloud — paid subscription (~$9/mo), zero ops, just add a script tag
- B) Self-hosted Plausible — free, requires a server, ongoing maintenance
- C) Defer analytics — launch without it, add later

**Answer:** C — Defer analytics. Launch without Plausible, add later.

---

## Q4: Headshot — include or skip?

The homepage spec lists the headshot as optional in the hero (right column). The launch checklist says "headshot decision finalized."

**Options considered:**
- A) Include a headshot in the hero — have one ready or will get one
- B) Skip the headshot — full width for text, or abstract motif
- C) Decide later — build layout to accommodate either, ship without one initially

**Answer:** A — Include a headshot in the hero. Will have one ready for launch.

---

## Q5: OG images — how to generate?

The spec says "static OG images generated at build time" with each flagship work page getting its own branded image.

**Options considered:**
- A) Design manually in Figma/Canva, export as static PNGs, commit to `public/og/`
- B) Generate at build time with code (e.g., `satori` or `@vercel/og`) from templates during `astro build`
- C) Skip per-page OG images at launch, use a single fallback

**Answer:** B — Generate OG images at build time from code templates.

---

## Q6: Package manager — pnpm confirmed?

The spec says pnpm. Current repo has both `yarn.lock` and `package-lock.json`. The v2 branch starts fresh.

**Options considered:**
- A) pnpm — as spec'd
- B) npm — simpler, no extra tooling
- C) yarn

**Answer:** B — Use npm instead of pnpm. Overrides the spec.

---

## Q7: Mobile menu — overlay or drawer?

The blueprint says "full-screen overlay menu, no fancy animation." Confirming the interaction model.

**Options considered:**
- A) Full-screen overlay — covers entire viewport, links centered, close button top-right
- B) Slide-in drawer — slides from right edge, partial overlay
- C) Simple dropdown — drops below header, pushes content or overlays inline

**Answer:** A — Full-screen overlay as spec'd. Clean, centered links, close button top-right.

---

## Q8: Resume PDF — how to produce it?

The spec says HTML resume is primary, PDF is secondary.

**Options considered:**
- A) Manually maintained PDF — keep a separate PDF (e.g., from Google Docs), commit to `public/resume/`
- B) Auto-generate from HTML at build time (e.g., Puppeteer print-to-PDF)
- C) Both — manual PDF for now, explore auto-generation later

**Answer:** A — Manually maintained PDF for now. Commit to `public/resume/`. Can revisit auto-generation later.

---

## Q9: CI checks — how much at launch?

The spec lists typecheck, lint, build, broken-link check, and Lighthouse CI on every PR.

**Options considered:**
- A) Full CI from the start — typecheck + lint + build + broken-link check + Lighthouse CI (GitHub Actions)
- B) Lightweight CI — typecheck + lint + build only, add broken-link and Lighthouse later
- C) No CI initially — manual checks, add CI after launch

**Answer:** A — Full CI from the start. Typecheck, lint, build, broken-link check, and Lighthouse CI via GitHub Actions.

---

## Q10: Mono font — IBM Plex Mono or Geist Mono?

The spec says "optional: IBM Plex Mono or Geist Mono" for metadata, tags, small labels, and code snippets.

**Options considered:**
- A) Geist Mono — modern feel, pairs well with Inter, designed by Vercel
- B) IBM Plex Mono — slightly more traditional, well-established
- C) Skip mono font — use Inter for everything, reduce font weight budget

**Answer:** A — Geist Mono. Used for metadata, tags, labels, and code snippets.

---

## Q11: Layout pattern — masonry or equal cards?

The UI/UX Pro Max tool recommended a "Portfolio Grid" masonry layout. The spec uses equal-height cards.

**Options considered:**
- A) Masonry layout — Pinterest-style varying heights, fills gaps
- B) Equal-height cards in a clean row (spec default)

**Answer:** B — Equal-height cards. Masonry is wrong for 3 curated flagship items. Equal-weight presentation reinforces that every piece is flagship-tier. Faster to scan for recruiters.

---

## Q12: Motion — conservative or enhanced?

The spec says 140–180ms, opacity/translate only. After reviewing executive-grade site patterns, additional tasteful motion was proposed.

**Options considered:**
- A) Conservative (spec default) — hover transitions only, no scroll-triggered motion
- B) Enhanced — add staggered proof chip fade-in, scroll-triggered section reveals, metric count-up, card hover lift

**Answer:** B — Enhanced motion. Approved patterns:
1. Staggered proof chip fade-in (hero, 50ms stagger, 300ms duration)
2. Scroll-triggered section reveals (homepage sections, opacity + translateY, 400ms)
3. Metric count-up on signature proof row (~800ms, fires once)
4. Card hover lift (translateY -2px + shadow, 150ms)
5. Mobile menu overlay fade (150ms)

All wrapped in `prefers-reduced-motion` check. No parallax, no scroll-jacking, no looping.

---
