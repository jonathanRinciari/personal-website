# Dependencies

## Runtime Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^16.9.0 | UI framework |
| `react-dom` | ^16.9.0 | DOM rendering |
| `react-router` | ^5.0.1 | Routing core |
| `react-router-dom` | ^5.0.1 | DOM routing bindings |
| `react-router-scroll-top` | ^0.2.1 | Scroll to top on navigation |
| `styled-components` | ^4.3.2 | CSS-in-JS styling |
| `react-helmet` | ^5.2.1 | Document head management (SEO) |
| `react-ga` | ^2.6.0 | Google Analytics integration |
| `react-markdown` | ^4.2.2 | Markdown rendering for blog posts and resume |
| `react-syntax-highlighter` | ^11.0.2 | Code block syntax highlighting |
| `prismjs` | ^1.17.1 | Syntax highlighting language grammars |

## Build Dependencies (ejected CRA)

| Package | Purpose |
|---------|---------|
| `webpack` 4.39 | Module bundler |
| `babel-loader` / `babel-preset-react-app` | JSX/ES6+ transpilation |
| `babel-plugin-styled-components` | styled-components SSR + debugging |
| `css-loader` / `style-loader` / `mini-css-extract-plugin` | CSS processing |
| `html-webpack-plugin` | HTML template injection |
| `workbox-webpack-plugin` | Service worker generation (PWA) |
| `terser-webpack-plugin` | JS minification |
| `eslint` + `eslint-config-react-app` | Linting |
| `jest` + `jest-environment-jsdom-fourteen` | Testing |

## Dev Dependencies

| Package | Purpose |
|---------|---------|
| `http-server` | Local static server for testing PWA (`npm run start-sw`) |

## External Resources (CDN)

- Google Fonts: `Bitter` (serif, primary text), `Dosis` (sans-serif, alt text)
- Google Analytics: UA-149353833-1
