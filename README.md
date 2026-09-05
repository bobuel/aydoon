# aydoon.com

My site brings together AI operations, product, and adoption work, alongside the tools and games I build to test ideas.

[Visit the site](https://aydoon.com/) · [Read the AI adoption case study](https://aydoon.com/case-studies/enterprise-ai-adoption-automattic) · [Browse builds](https://aydoon.com/builds) · [Play games](https://aydoon.com/games)

## Design decisions

- **Keep the first visit short.** A compact introduction and three case studies make the work easy to scan. Detailed decisions and results live inside each case.
- **Make browsing straightforward.** Work, Builds, and Games switch the content beside a stable identity panel. Builds includes all tools, games, and prototypes; Games narrows the list to games. Availability labels and real links make clear what can be tried.
- **Keep the system simple.** React, typed content, and a static build on GitHub Pages. No chatbot, runtime API, database, or client secrets.

The selected Hybrid design uses a light identity sidebar, simple rows, and one compact type scale. On mobile, the sidebar becomes a short introduction above navigation. About, Builds, Games, and case studies use the same shell, with keyboard focus and scroll reset when navigating between routes. Alex Aidun is the name heading; “Design is the premium.” is the tagline.

The cases distinguish my ownership, the decisions made, and the available evidence. Dremio AI product work and Dremio University learning metrics remain separate. Editorial and factual boundaries are documented in [AGENTS.md](AGENTS.md).

## Architecture

```text
GitHub Pages
  └─ Static Vite build
       ├─ Shared Hybrid React shell
       │    ├─ Sticky identity and current-role rail
       │    └─ Work / Builds / Games navigation and flat rows
       ├─ Complete project catalog including Brassline
       ├─ Concise About/profile route
       ├─ Legacy Work redirect and shared case-list anchors
       ├─ Three prebuilt case-study entry paths
       ├─ Shared typed content model
       └─ Résumé, screenshots, metadata, and social preview
```

## Local development

Requirements: Node.js 22+

```bash
npm ci
npm run check
npm run build:pages:production
npm run preview
```

The standard local preview is `http://127.0.0.1:8080/`. `npm run build:pages` remains available for testing the repository-path build locally, while `npm run build:pages:production` produces the exact custom-domain build for `https://aydoon.com`.

## Verification

Before publication, run:

```bash
npm run typecheck
npm test
npm run build
npm run build:pages:production
npm run scan:secrets
```

The Hybrid integration suite covers the production app entry point, persistent identity, all navigation views, complete case content, project availability and links, route scroll/focus reset, shared anchors, metadata changes, and serious/critical automated accessibility checks. Historical component tests remain available for the earlier design.

## Deployment and maintenance

- Hosting: GitHub Pages at [aydoon.com](https://aydoon.com/).
- Production branch: `main`.
- Deployment workflow: [`.github/workflows/pages-preview.yml`](.github/workflows/pages-preview.yml).
- Branch and pull-request checks: [`.github/workflows/ci.yml`](.github/workflows/ci.yml).
- Latest layout release notes: [Hybrid production](docs/releases/2026-09-05-hybrid.md).

Push-triggered deployment runs only on `main`. Branch and pull-request CI is verification-only; do not manually dispatch the Pages workflow from a review branch. Ordinary releases do not require DNS or Cloud Run changes. Record the live commit before publication and use a revert commit for rollback rather than rewriting shared history.

Legacy `/work` redirects to the homepage. `/games` opens the Games view directly. Case-study return links use `/#work`; old `#case-studies` links remain supported. The résumé file retains its stable URL but is intentionally not promoted in the interface. Local comparison designs are not part of the production build or deployment.

After a deployment, smoke-test:

- `/`
- `/about`
- `/work`
- `/builds`
- `/games`
- All three `/case-studies/...` routes
- `/alexander-aidun-resume.pdf`
- `/sitemap.xml`
- `/robots.txt`

Also confirm the deployed JavaScript asset contains the intended new copy, since HTML-only checks cannot see text rendered by React.

## Working with Codex

Durable project and release instructions live in [`AGENTS.md`](./AGENTS.md). It is the first handoff reference for a new Codex task. Keep it focused on stable operating rules; use commits and pull requests for historical detail.
