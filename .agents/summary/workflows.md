# Workflows

## Application Startup

```mermaid
sequenceDiagram
    participant Browser
    participant index.js
    participant ReactGA
    participant App
    participant Router

    Browser->>index.js: Load bundle
    index.js->>ReactGA: initialize(UA-ID) + pageview("/")
    index.js->>Browser: ReactDOM.render(<Router><App/></Router>)
    index.js->>Browser: serviceWorker.register()
    App->>Router: Render <AppRouter/>
    Router->>Browser: Match route → render page component
```

## Navigation Flow

```mermaid
sequenceDiagram
    participant User
    participant MenuButton
    participant App
    participant HeaderNav
    participant NavButton
    participant ReactGA

    User->>MenuButton: Click hamburger
    MenuButton->>App: toggleMenu()
    App->>HeaderNav: show=true
    HeaderNav->>User: Animate overlay open
    User->>NavButton: Click nav item
    NavButton->>App: history.push(url)
    NavButton->>App: handleOnClose()
    App->>HeaderNav: show=false
    App->>ReactGA: pageview(pathname) via history listener
```

## Blog Post Loading

```mermaid
sequenceDiagram
    participant User
    participant Writing
    participant FileSystem
    participant ReactMarkdown

    User->>Writing: Navigate to /writing/:title
    Writing->>Writing: componentDidMount()
    Writing->>FileSystem: require(`./posts/${slug}/index.md`)
    Writing->>FileSystem: require(`./posts/${slug}/meta.js`)
    Writing->>FileSystem: require(`./posts/${slug}/${meta.cover}`)
    FileSystem-->>Writing: markdown text, meta object, cover image
    Writing->>Writing: setState({ md, meta, cover })
    Writing->>ReactMarkdown: Render markdown with CodeBlock renderer
```

## Adding a New Blog Post

1. Create directory: `src/pages/Writing/posts/{slug}/`
2. Add `index.md` with article content
3. Add `meta.js` exporting `{ title, date, cover, keywords }`
4. Add cover image file
5. Add entry to `src/writings.js` array with `url: "{slug}"`, `published: true`

## Adding a New Project

1. Add entry to `src/projects.js` object with a unique key matching the desired URL slug
2. Fill in all fields: `url`, `title`, `subtext`, `headline`, `info`, `use`, `repo`, optionally `demo`
