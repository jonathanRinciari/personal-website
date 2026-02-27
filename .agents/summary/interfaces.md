# Interfaces & APIs

## Routing

All routes defined in `src/Router.jsx`:

| Route | Component | Params |
|-------|-----------|--------|
| `/` | Home | — |
| `/about` | About | — |
| `/resume` | Resume | — |
| `/projects` | Projects | — |
| `/projects/:title` | Project | `title` = key in `projects.js` |
| `/writing` | Writings | — |
| `/writing/:title` | Writing | `title` = slug matching `posts/{slug}/` directory |
| `/404` | ErrorPage | — |
| `*` | Redirect → `/404` | — |

## Key Component Props

### BodyText
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tag` | string | `"span"` | HTML element to render |
| `sizer` | number | `1` | Font-size multiplier across breakpoints |
| `altText` | bool | `false` | `true` = Dosis (sans-serif), `false` = Bitter (serif) |
| `color` | string | — | Text color |

### ItemsList
| Prop | Type | Description |
|------|------|-------------|
| `title` | string | Page heading |
| `subtext` | string | Description paragraph |
| `items` | array | Items to list |
| `activeTab` | string | Highlighted footer nav item |
| `handleNavigation` | func | Footer nav callback |
| `handleItemClick` | func | Item click callback |

### NavButton
| Prop | Type | Description |
|------|------|-------------|
| `type` | string | One of: `home`, `about`, `writing`, `projects`, `resume`, `close` |
| `show` | bool | Controls icon/text visibility (animated) |
| `active` | bool | Highlights as current route |
| `handleOnClick` | func | Close menu callback |

### SEO (Seo.jsx)
| Prop | Type | Description |
|------|------|-------------|
| `title` | string | Page `<title>` |
| `description` | string | Meta description |
| `keywords` | string | Meta keywords |

## External Links

- Twitter: `https://twitter.com/jonrinciari`
- LinkedIn: `https://www.linkedin.com/in/jonathan-rinciari-91072a137`
- GitHub: `https://github.com/jonathanrinciari`
- Email: `rinciarijoc@gmail.com`
