# Data Models

## Theme (`src/theme.js`)

```js
PRIMARY    = '#CC6666'  // Muted red — nav, accents, links
ACCENT     = '#444444'  // Dark gray — text, borders
BACKGROUND = '#F9F4ED'  // Warm off-white — page background
```

## Project (`src/projects.js`)

Object keyed by URL slug. Each value:

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL slug (used as route param and object key) |
| `title` | string | Display name |
| `subtext` | string | Short category label |
| `logo` | string\|null | Unused |
| `headline` | string | One-line description |
| `info` | string | Motivation / backstory paragraph |
| `use` | string | Usage instructions |
| `demo` | string\|null | Demo URL (if available) |
| `repo` | string | GitHub repository URL |

Current projects: `yelp-api`, `react-native-swipeable-cards`, `angular-grid-directive`

## Writing (`src/writings.js`)

Array of objects:

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL slug matching `posts/{slug}/` directory |
| `title` | string | Article title |
| `subtext` | string | Word count label |
| `logo` | string | Unused |
| `published` | bool | Whether to show in listings |

## Blog Post Structure (`src/pages/Writing/posts/{slug}/`)

Each post directory contains:
- `index.md` — Markdown content (fetched at runtime)
- `meta.js` — Default export object with `title`, `date`, `cover`, `keywords`
- Cover image file (referenced by `meta.cover`)

## PWA Manifest (`public/manifest.json`)

```json
{
  "short_name": "Jon Rinciari Website",
  "name": "Jon Rinciari - Software Engineer",
  "theme_color": "#CC6666",
  "background_color": "#F9F4ED"
}
```
