# AGENTS.md — personal-website

> AI assistant context for a React 16 personal portfolio and blog site.

## Project Overview

Single-page application built with ejected Create React App. Displays portfolio projects, blog articles (markdown), resume, and about page. PWA-enabled with service worker.

**Stack**: React 16.9 · styled-components 4 · react-router-dom 5 · react-markdown · react-helmet · react-ga · Webpack 4

**Run**: `npm start` (dev) · `npm run build` (production) · `npm test` (jest)

## Directory Structure

```
src/
├── index.js              # Entry: ReactDOM.render, Router, GA init, service worker
├── App.js                # Shell: CSS Grid layout, menu state, Header + HeaderNav + Router
├── Router.jsx            # Route definitions (Switch/Route/Redirect)
├── theme.js              # Color constants: PRIMARY=#CC6666, ACCENT=#444444, BACKGROUND=#F9F4ED
├── projects.js           # Project data (object keyed by slug)
├── writings.js           # Blog post metadata (array)
├── components/           # 12 shared components
│   ├── BodyText.jsx      # Core typography (sizer multiplier, altText font toggle)
│   ├── Footer.jsx        # FooterNavBar + copyright
│   ├── FooterNavBar.jsx  # Nav list with SVG icons
│   ├── NavButton.jsx     # Fullscreen nav menu button (class, withRouter)
│   ├── HeaderNav.jsx     # Fullscreen nav overlay grid
│   ├── ItemsList.jsx     # Reusable list page layout
│   ├── Item.jsx          # Clickable list row
│   ├── SummaryCard.jsx   # Author bio card
│   ├── Hero.jsx          # Profile image
│   ├── Logo.jsx          # SVG "J } R" logo
│   ├── MenuButton.jsx    # Hamburger icon
│   └── Seo.jsx           # react-helmet wrapper
├── pages/
│   ├── Home/             # Landing: Hero, HomeBanner, HomeAbout (featured articles + projects)
│   ├── About/            # Bio: AboutHero, AboutDetail, FollowBanner (useState), SocialButton
│   ├── Resume/           # Renders resume.md via react-markdown
│   ├── Projects/         # Lists projects via ItemsList
│   ├── Project/          # Single project detail: SupportBlock, GithubButton, AnchorButton
│   ├── Writings/         # Lists published writings via ItemsList
│   ├── Writing/          # Single blog post: loads posts/{slug}/index.md + meta.js
│   │   └── posts/{slug}/ # Each post: index.md, meta.js, cover image
│   ├── Header/           # Logo + MenuButton
│   └── 404/              # Error page
└── assets/images/        # Static images (profile, forest, gitlab, commit)
```

## Coding Patterns

- **Styling**: styled-components `css` template literal prop (not separate styled files). Responsive via media queries at 767/768/992/1200px breakpoints.
- **Typography**: Always use `<BodyText>` with `sizer` (font-size multiplier) and `altText` (true=Dosis sans-serif, false=Bitter serif).
- **Components**: Mostly class components. Functional components: Home, Header, ErrorPage, Hero, Footer, all shared components except NavButton.
- **State**: Local state only (no Redux/Context). App manages `showMenu`. FollowBanner uses `useState`.
- **Routing**: react-router v5 `withRouter` HOC for programmatic navigation via `this.props.history.push()`.
- **SEO**: Wrap every page's render in `<SEO title="" description="" keywords="">`.
- **Content loading**: Blog posts loaded at runtime via `require()` + `fetch()` for markdown, `require()` for meta.js and cover images.

## Adding Content

### New Blog Post
1. Create `src/pages/Writing/posts/{slug}/` with `index.md`, `meta.js` (exports `{ title, date, cover, keywords }`), and cover image
2. Add entry to `src/writings.js`: `{ url: "{slug}", title: "...", subtext: "N words", published: true }`

### New Project
Add entry to `src/projects.js` object with key matching URL slug. Required fields: `url`, `title`, `subtext`, `headline`, `info`, `use`, `repo`. Optional: `demo`.

## Known Issues

- `writings.js` references `ngrx-state-management-overview` but no matching post directory exists → runtime 404
- `BodyText` creates a new styled-component on every render (performance anti-pattern)
- `GithubButton` uses a Twitter SVG icon instead of GitHub icon
- Only one test exists (`App.test.js` smoke test)

## Detailed Documentation

See `.agents/summary/index.md` for a full documentation index with links to architecture, components, interfaces, data models, workflows, and dependencies.
