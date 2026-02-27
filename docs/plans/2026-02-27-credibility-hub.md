# Credibility Hub (jonrinciari.dev v2) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a custom Astro-based credibility hub that communicates Staff+/Principal-level technical leadership through case studies, measurable outcomes, and executive-grade design.

**Architecture:** Astro 5 static site with MDX content collections, Tailwind CSS 4, self-hosted Inter + Geist Mono fonts, light/dark mode, scroll-triggered motion, and build-time OG image generation. Deployed to Cloudflare Pages from a `v2` branch.

**Tech Stack:** Astro 5, TypeScript, Tailwind CSS 4, MDX, Content Collections (Zod), satori (OG images), Cloudflare Pages, GitHub Actions CI

**Reference:** Full detailed design at `.agents/planning/2026-02-27-credibility-hub/design/detailed-design.md`

---

## Task 1: Create v2 branch and scaffold Astro project

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/env.d.ts`

**Step 1: Create and switch to v2 branch**

```bash
git checkout -b v2
```

**Step 2: Remove old CRA files from working tree**

```bash
git rm -rf src/ public/ package.json yarn.lock package-lock.json 2>/dev/null || true
```

Do NOT delete `.agents/` or `docs/` — those are planning artifacts.

**Step 3: Scaffold Astro project**

```bash
npm create astro@latest . -- --template minimal --install --no-git --typescript strict
```

If prompted about overwriting, accept. We want a clean Astro skeleton.

**Step 4: Verify scaffold**

Run: `npm run dev`
Expected: Astro dev server starts, default page loads at localhost:4321

**Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds, output in `dist/`

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: scaffold Astro 5 project on v2 branch"
```

---

## Task 2: Install and configure Tailwind CSS 4

**Files:**
- Modify: `astro.config.mjs`
- Modify: `package.json`
- Create: `src/styles/globals.css`

**Step 1: Install Tailwind + Astro integration**

```bash
npx astro add tailwind
```

Accept all prompts.

**Step 2: Create globals.css with Tailwind directives**

Create `src/styles/globals.css`:

```css
@import "tailwindcss";
```

**Step 3: Verify Tailwind works**

Edit `src/pages/index.astro` to include a Tailwind class:

```astro
---
import '../styles/globals.css';
---
<html lang="en">
  <body>
    <h1 class="text-4xl font-bold text-blue-600">Tailwind works</h1>
  </body>
</html>
```

Run: `npm run dev`
Expected: Blue bold heading renders at localhost:4321

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Tailwind CSS 4 integration"
```

---

## Task 3: Set up design tokens and font loading

**Files:**
- Create: `src/styles/tokens.css`
- Create: `public/fonts/` (5 font files)
- Modify: `src/styles/globals.css`
- Modify: `tailwind.config.ts` (if needed for Tailwind 4)

**Step 1: Download and place font files**

Download Inter (woff2, latin subset) weights 400, 500, 600, 700 and Geist Mono 400 from Google Fonts / Vercel. Place in `public/fonts/`:

```
public/fonts/inter-latin-400.woff2
public/fonts/inter-latin-500.woff2
public/fonts/inter-latin-600.woff2
public/fonts/inter-latin-700.woff2
public/fonts/geist-mono-latin-400.woff2
```

**Step 2: Create tokens.css**

Create `src/styles/tokens.css`:

```css
/* Font faces */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter-latin-400.woff2') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/inter-latin-500.woff2') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/inter-latin-600.woff2') format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/inter-latin-700.woff2') format('woff2');
}
@font-face {
  font-family: 'Geist Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/geist-mono-latin-400.woff2') format('woff2');
}

/* Design tokens as CSS custom properties */
:root {
  /* Colors - Light */
  --color-bg: #F8FAFC;
  --color-surface: #FFFFFF;
  --color-text: #0F172A;
  --color-text-secondary: #475569;
  --color-border: #E2E8F0;
  --color-accent: #2563EB;
  --color-accent-soft: #DBEAFE;
  --color-success: #047857;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, monospace;

  /* Layout */
  --max-width: 1200px;
  --reading-width: 720px;
  --wide-width: 960px;
}

.dark {
  --color-bg: #0F172A;
  --color-surface: #1E293B;
  --color-text: #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-border: #334155;
  --color-accent: #3B82F6;
  --color-accent-soft: #1E3A5F;
  --color-success: #10B981;
}
```

**Step 3: Import tokens in globals.css**

Update `src/styles/globals.css`:

```css
@import "tailwindcss";
@import "./tokens.css";

html {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text);
}

body {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Step 4: Extend Tailwind config for custom fonts**

Check if `tailwind.config.ts` exists. If using Tailwind 4 with CSS-based config, add to `globals.css`:

```css
@theme {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, monospace;
}
```

**Step 5: Verify fonts render**

Update `src/pages/index.astro`:

```astro
---
import '../styles/globals.css';
---
<html lang="en">
  <head>
    <link rel="preload" href="/fonts/inter-latin-400.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/inter-latin-700.woff2" as="font" type="font/woff2" crossorigin />
  </head>
  <body>
    <h1 class="text-4xl font-bold">Inter Bold</h1>
    <p class="text-lg">Inter Regular body text</p>
    <code class="font-mono text-sm">Geist Mono code</code>
  </body>
</html>
```

Run: `npm run dev`
Expected: Three distinct font treatments visible

**Step 6: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: add design tokens, self-hosted fonts, dark mode tokens"
```

---

## Task 4: Create site data and navigation config

**Files:**
- Create: `src/data/site.ts`
- Create: `src/data/navigation.ts`

**Step 1: Create site.ts**

```ts
export const site = {
  name: 'Jonathan Rinciari',
  title: 'Jonathan Rinciari — Staff+ Full-Stack Engineer',
  description:
    'Staff+ full-stack engineer focused on global architecture, performance, platform systems, and AI-enabled engineering workflows.',
  url: 'https://jonrinciari.dev',
  email: '', // fill before launch
  linkedin: 'https://linkedin.com/in/jonathanrinciari',
  github: 'https://github.com/jonathanRinciari',
} as const;
```

**Step 2: Create navigation.ts**

```ts
export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerExternalLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jonathanrinciari', external: true },
  { label: 'GitHub', href: 'https://github.com/jonathanRinciari', external: true },
] as const;
```

**Step 3: Verify types**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 4: Commit**

```bash
git add src/data/
git commit -m "feat: add site config and navigation data"
```

---

## Task 5: Create BaseLayout with SEO, fonts, dark mode

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/lib/seo.ts`
- Create: `src/components/SkipToContent.astro`

**Step 1: Create seo.ts**

```ts
import { site } from '../data/site';

export interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export function buildMeta(props: SeoProps) {
  return {
    title: props.title ?? site.title,
    description: props.description ?? site.description,
    canonicalUrl: props.canonicalUrl ?? site.url,
    ogImage: props.ogImage ?? `${site.url}/og/home.png`,
  };
}
```

**Step 2: Create SkipToContent.astro**

```astro
<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
>
  Skip to content
</a>
```

**Step 3: Create BaseLayout.astro**

```astro
---
import '../styles/globals.css';
import SkipToContent from '../components/SkipToContent.astro';
import { buildMeta, type SeoProps } from '../lib/seo';
import { site } from '../data/site';

interface Props extends SeoProps {}

const meta = buildMeta(Astro.props);
---
<html lang="en" class="">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <link rel="canonical" href={meta.canonicalUrl} />

    <!-- OG -->
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:url" content={meta.canonicalUrl} />
    <meta property="og:image" content={meta.ogImage} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Fonts -->
    <link rel="preload" href="/fonts/inter-latin-400.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/inter-latin-700.woff2" as="font" type="font/woff2" crossorigin />

    <!-- Dark mode: prevent flash -->
    <script is:inline>
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    </script>
  </head>
  <body class="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors">
    <SkipToContent />
    <slot />
  </body>
</html>
```

**Step 4: Update index.astro to use BaseLayout**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout>
  <main id="main">
    <h1 class="text-4xl font-bold p-8">BaseLayout works</h1>
  </main>
</BaseLayout>
```

**Step 5: Verify**

Run: `npm run dev`
Expected: Page renders with correct fonts, no FOUC, skip-to-content visible on Tab

Run: `npm run build`
Expected: Build succeeds

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: add BaseLayout with SEO, dark mode flash prevention, skip-to-content"
```

---

## Task 6: Create SiteHeader with desktop nav and theme toggle

**Files:**
- Create: `src/components/SiteHeader.astro`
- Create: `src/components/NavLink.astro`
- Create: `src/components/ThemeToggle.astro`

**Step 1: Create NavLink.astro**

```astro
---
interface Props {
  href: string;
  label: string;
}
const { href, label } = Astro.props;
const isActive = Astro.url.pathname === href || (href !== '/' && Astro.url.pathname.startsWith(href));
---
<a
  href={href}
  class:list={[
    'text-sm font-medium transition-colors duration-150',
    isActive
      ? 'text-[var(--color-text)]'
      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]',
  ]}
  aria-current={isActive ? 'page' : undefined}
>
  {label}
</a>
```

**Step 2: Create ThemeToggle.astro**

```astro
<button
  id="theme-toggle"
  aria-label="Toggle dark mode"
  class="cursor-pointer rounded-lg p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-150"
>
  <!-- Sun icon (visible in dark mode) -->
  <svg class="hidden dark:block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
  <!-- Moon icon (visible in light mode) -->
  <svg class="block dark:hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
  </svg>
</button>

<script>
  const toggle = document.getElementById('theme-toggle');
  toggle?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
</script>
```

**Step 3: Create SiteHeader.astro**

```astro
---
import NavLink from './NavLink.astro';
import ThemeToggle from './ThemeToggle.astro';
import { primaryNav } from '../data/navigation';
---
<header
  id="site-header"
  class="sticky top-0 z-40 w-full transition-all duration-200"
>
  <div class="mx-auto flex max-w-[var(--max-width)] items-center justify-between px-4 py-4 md:px-6 lg:px-8">
    <!-- Wordmark -->
    <a href="/" class="text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-150">
      Jonathan Rinciari
    </a>

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center gap-6" aria-label="Main navigation">
      {primaryNav.map(item => (
        <NavLink href={item.href} label={item.label} />
      ))}
      <ThemeToggle />
    </nav>

    <!-- Mobile hamburger -->
    <button
      id="mobile-menu-open"
      class="md:hidden cursor-pointer rounded-lg p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
      aria-label="Open menu"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>

<script>
  // Sticky header border on scroll
  const header = document.getElementById('site-header');
  const observer = new IntersectionObserver(
    ([e]) => {
      header?.classList.toggle('border-b', !e.isIntersecting);
      header?.classList.toggle('border-[var(--color-border)]', !e.isIntersecting);
      header?.classList.toggle('bg-[var(--color-surface)]/80', !e.isIntersecting);
      header?.classList.toggle('backdrop-blur-md', !e.isIntersecting);
    },
    { threshold: 1, rootMargin: '-1px 0px 0px 0px' }
  );
  const sentinel = document.getElementById('header-sentinel');
  if (sentinel) observer.observe(sentinel);
</script>
```

**Step 4: Verify**

Update `src/pages/index.astro` to use header:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SiteHeader from '../components/SiteHeader.astro';
---
<BaseLayout>
  <div id="header-sentinel" class="h-0" />
  <SiteHeader />
  <main id="main" class="mx-auto max-w-[var(--max-width)] px-4 py-16 md:px-6 lg:px-8">
    <h1 class="text-4xl font-bold">Header works</h1>
  </main>
</BaseLayout>
```

Run: `npm run dev`
Expected: Header renders with wordmark, nav links, theme toggle. Toggle switches dark/light. Mobile shows hamburger.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add SiteHeader with nav, theme toggle, sticky behavior"
```

---

## Task 7: Create MobileMenu and SiteFooter

**Files:**
- Create: `src/components/MobileMenu.astro`
- Create: `src/components/SiteFooter.astro`

**Step 1: Create MobileMenu.astro**

```astro
---
import ThemeToggle from './ThemeToggle.astro';
import { primaryNav } from '../data/navigation';
---
<div
  id="mobile-menu"
  class="fixed inset-0 z-50 hidden bg-[var(--color-surface)] transition-opacity duration-150"
  role="dialog"
  aria-modal="true"
  aria-label="Navigation menu"
>
  <div class="flex h-full flex-col items-center justify-center gap-8">
    <!-- Close button -->
    <button
      id="mobile-menu-close"
      class="absolute top-4 right-4 cursor-pointer rounded-lg p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
      aria-label="Close menu"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    {primaryNav.map(item => (
      <a
        href={item.href}
        class="text-2xl font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-150"
      >
        {item.label}
      </a>
    ))}
    <ThemeToggle />
  </div>
</div>

<script>
  const menu = document.getElementById('mobile-menu');
  const openBtn = document.getElementById('mobile-menu-open');
  const closeBtn = document.getElementById('mobile-menu-close');

  function openMenu() {
    menu?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeMenu() {
    menu?.classList.add('hidden');
    document.body.style.overflow = '';
    openBtn?.focus();
  }

  openBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu?.classList.contains('hidden')) closeMenu();
  });
</script>
```

**Step 2: Create SiteFooter.astro**

```astro
---
import { primaryNav, footerExternalLinks } from '../data/navigation';
import { site } from '../data/site';
---
<footer class="border-t border-[var(--color-border)] mt-24">
  <div class="mx-auto max-w-[var(--max-width)] px-4 py-12 md:px-6 lg:px-8">
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Col 1: Name -->
      <div>
        <p class="font-semibold text-[var(--color-text)]">{site.name}</p>
        <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Staff+ Full-Stack Engineer</p>
      </div>

      <!-- Col 2: Nav -->
      <div>
        <p class="text-sm font-medium text-[var(--color-text)] mb-3">Pages</p>
        <ul class="space-y-2">
          {primaryNav.map(item => (
            <li><a href={item.href} class="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-150">{item.label}</a></li>
          ))}
        </ul>
      </div>

      <!-- Col 3: External -->
      <div>
        <p class="text-sm font-medium text-[var(--color-text)] mb-3">Elsewhere</p>
        <ul class="space-y-2">
          {footerExternalLinks.map(item => (
            <li><a href={item.href} target="_blank" rel="noopener noreferrer" class="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-150">{item.label}</a></li>
          ))}
        </ul>
      </div>

      <!-- Col 4: Colophon -->
      <div>
        <p class="text-xs text-[var(--color-text-secondary)]">Built with Astro. Fast by default.</p>
      </div>
    </div>
  </div>
</footer>
```

**Step 3: Verify**

Add MobileMenu and SiteFooter to `index.astro`. Test:
- Mobile menu opens/closes
- Escape key closes menu
- Footer renders 4 columns on desktop, stacks on mobile
- Dark mode works in both

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add MobileMenu overlay and SiteFooter"
```

---

## Task 8: Create PageLayout wrapper

**Files:**
- Create: `src/layouts/PageLayout.astro`

**Step 1: Create PageLayout.astro**

```astro
---
import BaseLayout from './BaseLayout.astro';
import SiteHeader from '../components/SiteHeader.astro';
import MobileMenu from '../components/MobileMenu.astro';
import SiteFooter from '../components/SiteFooter.astro';
import type { SeoProps } from '../lib/seo';

interface Props extends SeoProps {}
---
<BaseLayout {...Astro.props}>
  <div id="header-sentinel" class="h-0" />
  <SiteHeader />
  <MobileMenu />
  <main id="main" class="mx-auto max-w-[var(--max-width)] px-4 md:px-6 lg:px-8">
    <slot />
  </main>
  <SiteFooter />
</BaseLayout>
```

**Step 2: Simplify index.astro**

```astro
---
import PageLayout from '../layouts/PageLayout.astro';
---
<PageLayout>
  <div class="py-16">
    <h1 class="text-4xl font-bold">PageLayout works</h1>
  </div>
</PageLayout>
```

**Step 3: Verify and commit**

Run: `npm run dev` — full layout with header, main, footer
Run: `npm run build` — succeeds

```bash
git add -A
git commit -m "feat: add PageLayout with header, menu, footer composition"
```

---

## Task 9: Create core UI components

**Files:**
- Create: `src/components/PrimaryButton.astro`
- Create: `src/components/SecondaryButton.astro`
- Create: `src/components/SectionHeader.astro`
- Create: `src/components/ProofChip.astro`
- Create: `src/components/MetricRow.astro`
- Create: `src/components/WorkCard.astro`
- Create: `src/components/TimelineItem.astro`

**Step 1: Create PrimaryButton.astro**

```astro
---
interface Props { href: string; label: string; class?: string }
const { href, label, class: className } = Astro.props;
---
<a href={href} class:list={["inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity duration-150 cursor-pointer min-h-[44px]", className]}>
  {label}
</a>
```

**Step 2: Create SecondaryButton.astro**

```astro
---
interface Props { href: string; label: string; class?: string }
const { href, label, class: className } = Astro.props;
---
<a href={href} class:list={["inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-text-secondary)] transition-colors duration-150 cursor-pointer min-h-[44px]", className]}>
  {label}
</a>
```

**Step 3: Create SectionHeader.astro**

```astro
---
interface Props { title: string; subtitle?: string }
const { title, subtitle } = Astro.props;
---
<div class="mb-8">
  <h2 class="text-3xl font-bold md:text-4xl">{title}</h2>
  {subtitle && <p class="mt-3 text-lg text-[var(--color-text-secondary)]">{subtitle}</p>}
</div>
```

**Step 4: Create ProofChip.astro**

```astro
---
interface Props { label: string }
const { label } = Astro.props;
---
<span class="inline-block rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)] font-[var(--font-mono)]">
  {label}
</span>
```

**Step 5: Create MetricRow.astro**

```astro
---
import ProofChip from './ProofChip.astro';
interface Props { metrics: string[] }
const { metrics } = Astro.props;
---
<div class="flex flex-wrap gap-2">
  {metrics.map(m => <ProofChip label={m} />)}
</div>
```

**Step 6: Create WorkCard.astro**

```astro
---
interface Props {
  title: string;
  summary: string;
  metrics: string[];
  href: string;
}
const { title, summary, metrics, href } = Astro.props;
---
<a
  href={href}
  class="group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
>
  <h3 class="text-xl font-semibold group-hover:text-[var(--color-accent)] transition-colors duration-150">{title}</h3>
  <p class="mt-2 text-[var(--color-text-secondary)] text-sm leading-relaxed">{summary}</p>
  <div class="mt-4 flex flex-wrap gap-2">
    {metrics.map(m => (
      <span class="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)] font-[var(--font-mono)]">{m}</span>
    ))}
  </div>
  <span class="mt-4 inline-block text-sm font-medium text-[var(--color-accent)]">Read case study &rarr;</span>
</a>
```

**Step 7: Create TimelineItem.astro**

```astro
---
interface Props { company: string; description: string; period?: string }
const { company, description, period } = Astro.props;
---
<div class="relative pl-6 border-l-2 border-[var(--color-border)] pb-8 last:pb-0">
  <div class="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
  <p class="font-semibold">{company}</p>
  {period && <p class="text-xs text-[var(--color-text-secondary)] font-[var(--font-mono)]">{period}</p>}
  <p class="mt-1 text-sm text-[var(--color-text-secondary)]">{description}</p>
</div>
```

**Step 8: Verify all components render**

Create a temporary test page at `src/pages/test-components.astro` that renders every component. Visual check in browser.

Run: `npm run build`
Expected: Build succeeds

**Step 9: Commit**

```bash
git add -A
git commit -m "feat: add core UI components (buttons, chips, cards, timeline)"
```

---

## Task 10: Create interactive client components

**Files:**
- Create: `src/components/CopyEmailButton.astro`
- Create: `src/components/ResumeDownloadButton.astro`
- Create: `src/components/ScrollReveal.astro`
- Create: `src/components/MetricCountUp.astro`

**Step 1: Create CopyEmailButton.astro**

```astro
---
interface Props { email: string }
const { email } = Astro.props;
---
<button
  data-email={email}
  class="copy-email inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-text-secondary)] transition-colors duration-150 cursor-pointer min-h-[44px]"
  aria-label={`Copy email address ${email}`}
>
  <span class="copy-label">Copy email</span>
  <span class="copy-done hidden text-[var(--color-success)]">Copied!</span>
</button>

<script>
  document.querySelectorAll('.copy-email').forEach(btn => {
    btn.addEventListener('click', async () => {
      const email = (btn as HTMLElement).dataset.email;
      if (!email) return;
      try {
        await navigator.clipboard.writeText(email);
        const label = btn.querySelector('.copy-label');
        const done = btn.querySelector('.copy-done');
        label?.classList.add('hidden');
        done?.classList.remove('hidden');
        setTimeout(() => {
          label?.classList.remove('hidden');
          done?.classList.add('hidden');
        }, 2000);
      } catch {
        // fallback: select text
        window.prompt('Copy this email:', email);
      }
    });
  });
</script>
```

**Step 2: Create ResumeDownloadButton.astro**

```astro
---
interface Props { class?: string }
const { class: className } = Astro.props;
---
<a
  href="/resume/jonathan-rinciari-resume.pdf"
  download
  class:list={["inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity duration-150 cursor-pointer min-h-[44px]", className]}
>
  Download PDF
</a>
```

**Step 3: Create ScrollReveal.astro**

```astro
---
interface Props { class?: string; delay?: number }
const { class: className, delay = 0 } = Astro.props;
---
<div
  class:list={["scroll-reveal", className]}
  style={delay ? `transition-delay: ${delay}ms` : undefined}
>
  <slot />
</div>

<style>
  .scroll-reveal {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 400ms ease-out, transform 400ms ease-out;
  }
  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .scroll-reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>

<script>
  const reveals = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  reveals.forEach(el => observer.observe(el));
</script>
```

**Step 4: Create MetricCountUp.astro**

```astro
---
interface Props { value: string; suffix?: string }
const { value, suffix = '' } = Astro.props;
const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
---
<span
  class="metric-countup font-[var(--font-mono)] tabular-nums"
  data-target={numericValue}
  data-suffix={suffix}
  data-display={value}
>
  {value}
</span>

<script>
  const counters = document.querySelectorAll('.metric-countup');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || prefersReduced) return;
      const el = entry.target as HTMLElement;
      const target = parseFloat(el.dataset.target || '0');
      const display = el.dataset.display || '';
      const duration = 800;
      const start = performance.now();

      function update(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;

        // Format to match display string pattern
        if (display.includes('.')) {
          el.textContent = current.toFixed(1) + display.replace(/[\d.]+/, '');
        } else {
          el.textContent = Math.round(current) + display.replace(/\d+/, '');
        }

        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = display;
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
</script>
```

**Step 5: Verify and commit**

Test all interactive components in browser. Verify reduced motion behavior.

Run: `npm run build`
Expected: Build succeeds

```bash
git add -A
git commit -m "feat: add interactive components (copy email, scroll reveal, metric count-up)"
```

---

## Task 11: Set up Content Collections for work

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/work/global-commerce-performance.mdx`

**Step 1: Create content config**

Create `src/content/config.ts`:

```ts
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

export const collections = {
  work: workCollection,
  writing: writingCollection,
};
```

**Step 2: Create placeholder case study MDX**

Create `src/content/work/global-commerce-performance.mdx`:

```mdx
---
title: "Global Commerce Architecture & Performance"
summary: "Defining Kuiper commerce architecture across global markets while building mechanisms that improved customer performance at organizational scale."
role: "Technical Lead, Customer-Facing Web Architecture"
period: "2022–Present"
featured: true
order: 1
tags: ["Global Architecture", "Performance", "Distributed Systems"]
metrics: ["88 countries", "23 marketplaces", "2.5× checkout improvement", "10.5× address resolution"]
seoTitle: "Global Commerce Architecture & Performance — Jonathan Rinciari"
seoDescription: "Designing architecture and performance mechanisms for global commerce spanning 88 countries and 23 marketplaces."
confidentiality: "generalized"
status: "draft"
---

## Executive Summary

Placeholder — full case study content will be written separately.

## Context

Coming soon.
```

**Step 3: Verify content collection loads**

Run: `npm run dev`
Expected: No schema validation errors in terminal

Run: `npx tsc --noEmit`
Expected: No errors

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Content Collections config and placeholder case study"
```

---

## Task 12: Create Work index and detail pages

**Files:**
- Create: `src/pages/work/index.astro`
- Create: `src/pages/work/[...slug].astro`
- Create: `src/layouts/WorkLayout.astro`

**Step 1: Create work index page**

Create `src/pages/work/index.astro`:

```astro
---
import PageLayout from '../../layouts/PageLayout.astro';
import SectionHeader from '../../components/SectionHeader.astro';
import WorkCard from '../../components/WorkCard.astro';
import ScrollReveal from '../../components/ScrollReveal.astro';
import { getCollection } from 'astro:content';

const works = (await getCollection('work'))
  .filter(w => w.data.status === 'published')
  .sort((a, b) => a.data.order - b.data.order);
---
<PageLayout
  title="Selected Work — Jonathan Rinciari"
  description="Focused work representing architecture, technical direction, platform leverage, and cross-org execution."
>
  <section class="py-16 md:py-24">
    <SectionHeader
      title="Selected Work"
      subtitle="This is a focused set of work that best represents how I approach architecture, technical direction, platform leverage, and cross-org execution. Some details are intentionally generalized to respect confidentiality, but the underlying systems, constraints, and outcomes are real."
    />
    <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {works.map((work, i) => (
        <ScrollReveal delay={i * 100}>
          <WorkCard
            title={work.data.title}
            summary={work.data.summary}
            metrics={work.data.metrics.slice(0, 3)}
            href={`/work/${work.slug}`}
          />
        </ScrollReveal>
      ))}
    </div>
  </section>
</PageLayout>
```

**Step 2: Create WorkLayout.astro**

```astro
---
import PageLayout from './PageLayout.astro';
import MetricRow from '../components/MetricRow.astro';
import ProofChip from '../components/ProofChip.astro';
import type { CollectionEntry } from 'astro:content';

interface Props {
  entry: CollectionEntry<'work'>;
}
const { entry } = Astro.props;
const { title, summary, role, period, tags, metrics, seoTitle, seoDescription, confidentiality } = entry.data;
---
<PageLayout title={seoTitle} description={seoDescription}>
  <article class="py-16 md:py-24">
    <!-- Hero -->
    <header class="mx-auto max-w-[var(--reading-width)]">
      <div class="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => <ProofChip label={tag} />)}
      </div>
      <h1 class="text-4xl font-bold md:text-5xl leading-tight">{title}</h1>
      <p class="mt-4 text-lg text-[var(--color-text-secondary)]">{summary}</p>
      <div class="mt-4 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-secondary)] font-[var(--font-mono)]">
        <span>{role}</span>
        <span>&middot;</span>
        <span>{period}</span>
      </div>
      <div class="mt-6">
        <MetricRow metrics={metrics} />
      </div>
    </header>

    <!-- MDX content -->
    <div class="prose-custom mx-auto mt-16 max-w-[var(--reading-width)]">
      <slot />
    </div>

    <!-- Confidentiality note -->
    {confidentiality === 'generalized' && (
      <aside class="mx-auto mt-16 max-w-[var(--reading-width)] rounded-xl border border-[var(--color-border)] p-6 text-sm text-[var(--color-text-secondary)]">
        <strong>Confidentiality note:</strong> Specific internal service names, architectural diagrams, and workflow details have been generalized to protect confidential information while preserving the technical decisions, constraints, and outcomes.
      </aside>
    )}

    <!-- Related links -->
    <nav class="mx-auto mt-12 max-w-[var(--reading-width)] flex gap-4">
      <a href="/work" class="text-sm text-[var(--color-accent)] hover:underline">&larr; All work</a>
      <a href="/resume" class="text-sm text-[var(--color-accent)] hover:underline">Resume</a>
      <a href="/contact" class="text-sm text-[var(--color-accent)] hover:underline">Contact</a>
    </nav>
  </article>
</PageLayout>
```

**Step 3: Create dynamic slug page**

Create `src/pages/work/[...slug].astro`:

```astro
---
import { getCollection } from 'astro:content';
import WorkLayout from '../../layouts/WorkLayout.astro';

export async function getStaticPaths() {
  const works = await getCollection('work');
  return works.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---
<WorkLayout entry={entry}>
  <Content />
</WorkLayout>
```

**Step 4: Change case study status to published for testing**

Temporarily set `status: "published"` in `global-commerce-performance.mdx`.

**Step 5: Verify**

Run: `npm run dev`
- Visit `/work` — card renders
- Click card → `/work/global-commerce-performance` — detail page renders

Run: `npm run build`
Expected: Build succeeds

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Work index, Work detail pages, WorkLayout"
```

---

## Task 13: Create Contact page

**Files:**
- Create: `src/pages/contact.astro`

**Step 1: Create contact.astro**

```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import CopyEmailButton from '../components/CopyEmailButton.astro';
import { site } from '../data/site';
---
<PageLayout
  title="Contact — Jonathan Rinciari"
  description="Get in touch via email or LinkedIn."
>
  <section class="mx-auto max-w-lg py-24 text-center">
    <h1 class="text-4xl font-bold">Contact</h1>
    <p class="mt-4 text-lg text-[var(--color-text-secondary)]">
      The easiest way to reach me is by email or LinkedIn.
    </p>

    <div class="mt-8 flex flex-col items-center gap-4">
      <a href={`mailto:${site.email}`} class="text-[var(--color-accent)] hover:underline">{site.email}</a>
      <CopyEmailButton email={site.email} />
      <a href={site.linkedin} target="_blank" rel="noopener noreferrer" class="text-sm text-[var(--color-accent)] hover:underline">LinkedIn</a>
      <a href={site.github} target="_blank" rel="noopener noreferrer" class="text-sm text-[var(--color-accent)] hover:underline">GitHub</a>
      <a href="/resume/jonathan-rinciari-resume.pdf" download class="text-sm text-[var(--color-accent)] hover:underline">Download Resume (PDF)</a>
    </div>

    <p class="mt-8 text-xs text-[var(--color-text-secondary)]">
      For roles, include a link to the company or job description if you have one.
    </p>
  </section>
</PageLayout>
```

**Step 2: Verify and commit**

Run: `npm run dev` — visit `/contact`, test copy button
Run: `npm run build`

```bash
git add src/pages/contact.astro
git commit -m "feat: add Contact page"
```

---

## Task 14: Create About page

**Files:**
- Create: `src/pages/about.astro`

**Step 1: Create about.astro**

```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import ScrollReveal from '../components/ScrollReveal.astro';
---
<PageLayout
  title="About — Jonathan Rinciari"
  description="Operating model, leadership philosophy, and what problems I solve."
>
  <article class="mx-auto max-w-[var(--reading-width)] py-16 md:py-24">
    <!-- Intro -->
    <h1 class="text-4xl font-bold">About</h1>
    <p class="mt-4 text-xl text-[var(--color-text-secondary)] leading-relaxed">
      I work best on ambiguous technical problems that sit across product, platform, and organizational boundaries.
    </p>
    <p class="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
      Over time I've gravitated toward the kinds of problems that don't have a clean handoff line: global customer-facing architecture, performance work that spans many teams, platform decisions that shape how organizations build, and AI systems that need to be useful under real production constraints.
    </p>

    <!-- What I do best -->
    <ScrollReveal>
      <section class="mt-16">
        <h2 class="text-2xl font-bold">What I do best</h2>
        <ul class="mt-4 space-y-2 text-[var(--color-text-secondary)]">
          <li>Define technical direction for customer-facing systems</li>
          <li>Improve org-level leverage through platform and performance mechanisms</li>
          <li>Build architecture that survives scale and delegation</li>
          <li>Align multiple teams without direct authority</li>
          <li>Turn high-ambiguity spaces into executable technical strategy</li>
        </ul>
      </section>
    </ScrollReveal>

    <!-- Operating principles -->
    <ScrollReveal>
      <section class="mt-16">
        <h2 class="text-2xl font-bold">Operating principles</h2>
        <ol class="mt-4 space-y-4">
          <li><strong>Start with constraints, not solution fashion</strong></li>
          <li><strong>Build mechanisms that survive delegation</strong></li>
          <li><strong>Instrument before optimizing</strong></li>
          <li><strong>Reduce complexity across boundaries, not just inside one team</strong></li>
          <li><strong>Treat AI as a systems problem, not a demo</strong></li>
        </ol>
      </section>
    </ScrollReveal>

    <!-- Background -->
    <ScrollReveal>
      <section class="mt-16">
        <h2 class="text-2xl font-bold">Background</h2>
        <p class="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          My path into engineering didn't start in computer science. I studied physiology, moved into startups, and eventually into organizational-scale engineering at Amazon. That trajectory shaped how I work: I tend to reason from constraints and first principles, especially in systems that don't fit an existing template.
        </p>
      </section>
    </ScrollReveal>

    <!-- What I'm looking for -->
    <ScrollReveal>
      <section class="mt-16">
        <h2 class="text-2xl font-bold">What I'm looking for</h2>
        <p class="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          I'm most interested in Staff, Principal, and Senior Staff roles where the core challenge is not just building software, but defining how complex software gets built across teams.
        </p>
      </section>
    </ScrollReveal>
  </article>
</PageLayout>
```

**Step 2: Verify and commit**

Run: `npm run dev` — visit `/about`, verify scroll reveals work
Run: `npm run build`

```bash
git add src/pages/about.astro
git commit -m "feat: add About page"
```

---

## Task 15: Create Resume page and data

**Files:**
- Create: `src/data/resume.ts`
- Create: `src/pages/resume.astro`
- Create: `public/resume/` directory (PDF placeholder)

**Step 1: Create resume.ts with typed data**

Create `src/data/resume.ts` with the full resume data structure. Include:
- header (name, location, email, linkedin, github, site)
- summary (1 paragraph)
- selectedOutcomes (5 bullets)
- experience (each role with title, company, dates, bullets, optional workLink)
- skills (5 grouped categories)
- education

Populate with content from the detailed design spec section 7.4.

**Step 2: Create resume.astro**

Build the page that renders `resume.ts` data using:
- ResumeDownloadButton at top
- Selected outcomes section
- Experience timeline with TimelineItem
- Skills grouped list
- Education

**Step 3: Create resume PDF placeholder**

```bash
mkdir -p public/resume
touch public/resume/jonathan-rinciari-resume.pdf
```

Note: Replace with real PDF before launch.

**Step 4: Verify and commit**

Run: `npm run dev` — visit `/resume`, verify layout
Run: `npm run build`

```bash
git add -A
git commit -m "feat: add Resume page with typed data and PDF download"
```

---

## Task 16: Create Homepage

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Build full homepage**

Implement all 6 sections from the detailed design:

1. **Hero** — two-column layout (text left, headshot right), eyebrow, H1, support paragraph, staggered proof chips, CTAs
2. **Signature proof row** — 3 columns with MetricCountUp
3. **Selected Work preview** — 3 WorkCards from content collection
4. **How I operate** — 4 blocks
5. **Experience snapshot** — 3 TimelineItems
6. **Contact CTA** — closing section

Each section wrapped in ScrollReveal (except hero, which is above fold).

Proof chips in hero get staggered fade-in animation (CSS animation with `animation-delay`).

**Step 2: Add headshot placeholder**

```bash
mkdir -p public/images
# Place headshot.webp here — use a placeholder for now
```

**Step 3: Verify**

Run: `npm run dev`
- All 6 sections render
- Proof chips stagger on load
- Sections fade in on scroll
- Metrics count up
- Work cards link to `/work/...`
- Dark mode works throughout
- Mobile layout stacks correctly

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: build full homepage with all 6 sections and motion"
```

---

## Task 17: Create 404 page

**Files:**
- Create: `src/pages/404.astro`

**Step 1: Create 404.astro**

```astro
---
import PageLayout from '../layouts/PageLayout.astro';
import PrimaryButton from '../components/PrimaryButton.astro';
---
<PageLayout title="Page not found — Jonathan Rinciari">
  <section class="flex flex-col items-center justify-center py-32 text-center">
    <h1 class="text-6xl font-bold">404</h1>
    <p class="mt-4 text-lg text-[var(--color-text-secondary)]">Page not found.</p>
    <div class="mt-8 flex gap-4">
      <PrimaryButton href="/" label="Home" />
      <PrimaryButton href="/work" label="Work" />
    </div>
  </section>
</PageLayout>
```

**Step 2: Verify and commit**

Run: `npm run dev` — visit `/nonexistent`
Run: `npm run build`

```bash
git add src/pages/404.astro
git commit -m "feat: add 404 page"
```

---

## Task 18: Create prose styles for MDX content

**Files:**
- Create: `src/styles/prose.css`
- Modify: `src/styles/globals.css`

**Step 1: Create prose.css**

Create custom prose styles for work page MDX content. Target `.prose-custom` class. Style:
- Headings (h2, h3) with proper spacing and size
- Paragraphs with reading-optimized line-height (1.75)
- Lists with proper indentation
- Blockquotes with left border
- Code blocks with Geist Mono
- Links in accent color with underline
- Max line length 720px

**Step 2: Import in globals.css**

Add `@import "./prose.css";` to globals.css.

**Step 3: Verify and commit**

Run: `npm run dev` — check case study page renders prose correctly
Run: `npm run build`

```bash
git add -A
git commit -m "feat: add prose styles for MDX content"
```

---

## Task 19: Create MDX components

**Files:**
- Create: `src/components/mdx/MdxCallout.astro`
- Create: `src/components/mdx/MdxDecisionTable.astro`
- Create: `src/components/mdx/MdxFigure.astro`
- Create: `src/components/mdx/MdxQuote.astro`

**Step 1: Create all MDX components**

Build each component following the detailed design spec section 5.4:
- **MdxCallout**: `<aside>` with left border, supports info/warning/note types
- **MdxDecisionTable**: table showing options with pros/cons, highlights chosen
- **MdxFigure**: `<figure>` with `<img>` and `<figcaption>`, lazy-loaded, optional wide variant
- **MdxQuote**: styled `<blockquote>` with attribution

**Step 2: Verify each component renders in MDX**

Add examples to the placeholder case study MDX. Visual check.

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add MDX components (callout, decision table, figure, quote)"
```

---

## Task 20: Set up security headers and robots.txt

**Files:**
- Create: `public/_headers`
- Create: `public/robots.txt`

**Step 1: Create _headers**

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'
```

**Step 2: Create robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://jonrinciari.dev/sitemap-index.xml
```

**Step 3: Commit**

```bash
git add public/_headers public/robots.txt
git commit -m "feat: add security headers and robots.txt"
```

---

## Task 21: Set up sitemap and structured data

**Files:**
- Modify: `astro.config.mjs` (add sitemap integration)
- Create: `src/lib/schema.ts`

**Step 1: Add sitemap**

```bash
npx astro add sitemap
```

Configure in `astro.config.mjs` with `site: 'https://jonrinciari.dev'`.

**Step 2: Create schema.ts**

Build JSON-LD structured data generators:
- `websiteSchema()` — site-wide
- `personSchema()` — for About and Resume
- `articleSchema(entry)` — for Work and Writing pages
- `collectionSchema(items)` — for Work index
- `breadcrumbSchema(items)` — for Work detail pages

**Step 3: Inject structured data into pages**

Add `<script type="application/ld+json">` to BaseLayout (site-wide) and relevant pages.

**Step 4: Verify**

Run: `npm run build`
Check: `dist/sitemap-index.xml` exists

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add sitemap generation and structured data"
```

---

## Task 22: Set up OG image generation

**Files:**
- Create: `src/pages/og/[...slug].png.ts`
- Create: `src/lib/og.ts`

**Step 1: Install satori and dependencies**

```bash
npm install satori sharp
```

**Step 2: Create og.ts helper**

Build a function that takes title, description, and returns an OG image buffer using satori → sharp → PNG. Use Inter font loaded from `public/fonts/`.

**Step 3: Create dynamic OG endpoint**

Create `src/pages/og/[...slug].png.ts` that generates OG images for:
- `og/home.png`
- `og/work/global-commerce-performance.png`
- etc.

**Step 4: Update content schema ogImage defaults**

Point ogImage fields to generated paths.

**Step 5: Verify**

Run: `npm run build`
Check: PNG files exist in `dist/og/`

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: add build-time OG image generation with satori"
```

---

## Task 23: Set up GitHub Actions CI

**Files:**
- Create: `.github/workflows/ci.yml`

**Step 1: Create CI workflow**

```yaml
name: CI

on:
  pull_request:
    branches: [v2]

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npx tsc --noEmit
      - run: npx eslint src/
      - run: npm run build
      # Broken link check
      - run: npx lychee ./dist --no-progress
      # Lighthouse CI (requires LHCI setup)
```

**Step 2: Install ESLint**

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-astro
```

Create minimal `.eslintrc.cjs` or `eslint.config.mjs`.

**Step 3: Install lychee for broken link checking**

Add to CI step or use a GitHub Action for lychee.

**Step 4: Verify CI config is valid YAML**

Run: `npx tsc --noEmit && npx eslint src/ && npm run build`
Expected: All pass locally

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add GitHub Actions CI with typecheck, lint, build, link check"
```

---

## Task 24: Write case study #1 content

**Files:**
- Modify: `src/content/work/global-commerce-performance.mdx`

**Step 1: Write full case study**

Replace placeholder content with full draft following the exact 11-section structure from the detailed design:

1. Executive summary (100–140 words)
2. Context
3. Problem
4. My role
5. Strategy and decisions
6. Architecture
7. Execution and alignment
8. Results
9. Tradeoffs and what I'd do differently
10. Confidentiality note (auto-rendered by WorkLayout)

Use MDX components where appropriate (MdxCallout, MdxDecisionTable).

Target: 1,200–2,000 words.

Set `status: "published"`.

**Step 2: Verify**

Run: `npm run dev` — read through the full page
Run: `npm run build`

**Step 3: Commit**

```bash
git add src/content/work/global-commerce-performance.mdx
git commit -m "content: add Global Commerce Architecture case study"
```

---

## Task 25: Final integration, QA, and polish

**Files:**
- Various touch-ups across all files

**Step 1: Run full build**

```bash
npm run build
```

Fix any errors.

**Step 2: Run typecheck**

```bash
npx tsc --noEmit
```

Fix any type errors.

**Step 3: Visual QA**

Check every page at:
- 375px (iPhone)
- 768px (tablet)
- 1024px (laptop)
- 1440px (desktop)

In both light and dark mode.

**Step 4: Accessibility check**

- Tab through every page — verify focus order and visibility
- Test with VoiceOver if available
- Run Lighthouse accessibility audit
- Verify skip-to-content works
- Verify reduced motion works

**Step 5: Performance check**

Run Lighthouse on built output:
- Performance > 95
- Accessibility > 95
- Best Practices > 95
- SEO > 95

**Step 6: Content check**

- No placeholder text remaining
- All metrics verified
- No junior-sounding phrasing
- All links work
- Resume PDF downloads

**Step 7: Clean up**

- Remove `src/pages/test-components.astro` if it exists
- Verify no console errors in browser

**Step 8: Final commit**

```bash
git add -A
git commit -m "chore: final QA pass and polish"
```

---

## Checklist

- [ ] Task 1: Scaffold Astro on v2 branch
- [ ] Task 2: Tailwind CSS 4
- [ ] Task 3: Design tokens and fonts
- [ ] Task 4: Site data and navigation
- [ ] Task 5: BaseLayout with SEO and dark mode
- [ ] Task 6: SiteHeader with nav and theme toggle
- [ ] Task 7: MobileMenu and SiteFooter
- [ ] Task 8: PageLayout wrapper
- [ ] Task 9: Core UI components
- [ ] Task 10: Interactive client components
- [ ] Task 11: Content Collections config
- [ ] Task 12: Work index and detail pages
- [ ] Task 13: Contact page
- [ ] Task 14: About page
- [ ] Task 15: Resume page and data
- [ ] Task 16: Homepage (all 6 sections)
- [ ] Task 17: 404 page
- [ ] Task 18: Prose styles for MDX
- [ ] Task 19: MDX components
- [ ] Task 20: Security headers and robots.txt
- [ ] Task 21: Sitemap and structured data
- [ ] Task 22: OG image generation
- [ ] Task 23: GitHub Actions CI
- [ ] Task 24: Case study #1 content
- [ ] Task 25: Final QA and polish
