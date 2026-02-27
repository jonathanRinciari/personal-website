# Documentation Index — personal-website

> **For AI assistants**: This file is the primary entry point. Read this first to understand what documentation exists and where to find detailed information. Each file below contains focused information on a specific aspect of the codebase.

## Quick Reference

- **Stack**: React 16 (ejected CRA) + styled-components + react-router v5
- **Purpose**: Personal portfolio and blog site
- **Routes**: `/`, `/about`, `/resume`, `/projects`, `/projects/:title`, `/writing`, `/writing/:title`, `/404`
- **Theme**: PRIMARY=#CC6666, ACCENT=#444444, BACKGROUND=#F9F4ED

## Documentation Files

| File | Purpose | Consult when... |
|------|---------|-----------------|
| [codebase_info.md](codebase_info.md) | Project metadata, versions, scripts, git info | You need basic project facts (name, version, how to run) |
| [architecture.md](architecture.md) | System architecture, design patterns, layout system | You need to understand how the app is structured, the component hierarchy, or CSS grid layout |
| [components.md](components.md) | All shared and page-level components with props and types | You need to find, modify, or create a component |
| [interfaces.md](interfaces.md) | Routes, component prop APIs, external links | You need route definitions, component prop signatures, or external URLs |
| [data_models.md](data_models.md) | Theme constants, project/writing data shapes, blog post structure | You need to add content (blog post, project) or modify theme colors |
| [workflows.md](workflows.md) | App startup, navigation, blog loading, how to add content | You need to understand runtime behavior or add new content |
| [dependencies.md](dependencies.md) | Runtime, build, and dev dependencies with purposes | You need to understand what libraries are used or add a new dependency |

## Key Relationships

- `architecture.md` → provides the structural context for understanding `components.md`
- `data_models.md` → defines the data shapes consumed by components in `components.md`
- `workflows.md` → describes how components from `components.md` interact at runtime
- `interfaces.md` → documents the prop contracts between components listed in `components.md`

## Common Tasks

| Task | Start with |
|------|-----------|
| Add a new blog post | `workflows.md` → "Adding a New Blog Post" + `data_models.md` → "Blog Post Structure" |
| Add a new project | `workflows.md` → "Adding a New Project" + `data_models.md` → "Project" |
| Change theme colors | `data_models.md` → "Theme" |
| Add a new page/route | `interfaces.md` → "Routing" + `architecture.md` → "Design Patterns" |
| Modify navigation | `components.md` → NavButton, HeaderNav, FooterNavBar |
| Update SEO metadata | `components.md` → Seo + `interfaces.md` → "SEO" |
