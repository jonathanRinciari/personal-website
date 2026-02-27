# Components

## Shared Components (`src/components/`)

| Component | Type | Description |
|-----------|------|-------------|
| `BodyText` | Functional | Core typography wrapper. Props: `tag`, `sizer` (multiplier), `altText` (Dosis vs Bitter), `color`. Creates a styled-component dynamically per render. |
| `Footer` | Functional | Renders `FooterNavBar` + copyright line. |
| `FooterNavBar` | Functional | Navigation list (Writing, About, Projects, Resume) with inline SVG icons. Highlights `activeItem`. |
| `NavButton` | Class | Fullscreen nav menu button. Contains icon map for all nav types (writing, about, projects, resume, close, home). Uses `withRouter`. |
| `HeaderNav` | Functional | Fullscreen overlay nav grid. Animates height via `show` prop. Contains 6 `NavButton` instances. |
| `ItemsList` | Functional | Reusable list page layout (title, subtext, item list, SummaryCard, Footer). Used by Projects and Writings pages. |
| `Item` | Functional | Clickable list row with title + subtitle. Hover highlights in PRIMARY color. |
| `SummaryCard` | Functional | Author bio card with headshot, name, tagline, and `FollowBanner`. |
| `Hero` | Functional | Displays profile image (`gitlab.png`) on the Home page. |
| `Logo` | Functional | SVG logo "J } R" in a bordered square. Navigates to `/` on click. |
| `MenuButton` | Functional | Hamburger icon button that triggers nav overlay. |
| `Seo` | Functional | Wraps children with `react-helmet` for `<title>`, `<meta description>`, `<meta keywords>`. |

## Page Components (`src/pages/`)

| Page | File | Type | Route | Description |
|------|------|------|-------|-------------|
| Home | `Home/Home.js` | Function | `/` | Landing page: Hero image, HomeBanner, HomeAbout (featured articles + recent projects). |
| About | `About/About.jsx` | Class | `/about` | Bio page with hero image, personal info, likes/dislikes/motivations/goals lists, FollowBanner. |
| Resume | `Resume/Resume.jsx` | Class | `/resume` | Fetches and renders `resume.md` via react-markdown. |
| Projects | `Projects/Projects.jsx` | Class | `/projects` | Lists all projects from `projects.js` using `ItemsList`. |
| Project | `Project/Project.jsx` | Class | `/projects/:title` | Single project detail: title, headline, motivation, usage, source links, SupportBlock. |
| Writings | `Writings/Writings.jsx` | Class | `/writing` | Lists published writings from `writings.js` using `ItemsList`. |
| Writing | `Writing/Writing.jsx` | Class | `/writing/:title` | Single blog post: loads `index.md` + `meta.js` from `posts/{slug}/`, renders with react-markdown + syntax highlighting. |
| Header | `Header/Header.jsx` | Functional | _(shell)_ | Top bar with Logo + MenuButton. |
| 404 | `404/404.jsx` | Functional | `/404` | Error page with "Sorry..." message. |

## Page-Local Components

- **Home**: `HomeBanner`, `HomeAbout` (class, withRouter), `HomeSection`, `ProfileButton`, `TwitterButton`, `SectionDivider`
- **About**: `AboutHero`, `AboutDetail`, `FollowBanner` (uses `useState`), `SocialButton`
- **Project**: `SupportBlock`, `GithubButton`, `Button`, `AnchorButton`, `CategoryDivider`
- **Writing**: `SyntaxHighlighter` (PureComponent, wraps prism-react-renderer with darcula theme)
