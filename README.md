# aydoon.com

My site brings together AI operations, product, and adoption work, alongside the tools and games I build to test ideas.

[Visit the site](https://aydoon.com/) · [Read the AI adoption case study](https://aydoon.com/case-studies/enterprise-ai-adoption-automattic) · [Browse the Build Lab](https://aydoon.com/builds)

## Design decisions

- **Keep the first visit short.** A compact introduction and three case studies make the work easy to scan. Detailed decisions and results live inside each case.
- **Separate professional work from experiments.** The Build Lab has its own route for tools, games, and prototypes, with clear availability labels.
- **Keep the system simple.** React, typed content, and a static build on GitHub Pages. No chatbot, runtime API, database, or client secrets.

On desktop, an identity rail sits beside the work. On mobile, navigation comes first. The same compact type scale carries through About, Builds, and case studies, with keyboard focus and scroll reset when navigating between routes.

The cases distinguish my ownership, the decisions made, and the available evidence. Dremio AI product work and Dremio University learning metrics remain separate. Editorial and factual boundaries are documented in [AGENTS.md](AGENTS.md).

## Architecture

```text
GitHub Pages
  └─ Static Vite build
       ├─ Split-screen React portfolio homepage
       │    ├─ Sticky identity and current-role rail
       │    └─ Evidence-led case-study system rows
       ├─ Complete Build Lab with project and games filters
       ├─ Concise About/profile route
       ├─ Legacy Work and Games redirects
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

The test suite covers employer positioning, proof and CTAs, the complete project and games catalog, optional links, navigation reading order, route scroll/focus reset, current and legacy case-list anchors, static path handling, the concise About narrative, and critical automated accessibility checks. Before publishing layout changes, also check desktop, tablet, and phone viewports for readable type, compact introductions, and horizontal overflow.

## Deployment and maintenance

- Hosting: GitHub Pages at [aydoon.com](https://aydoon.com/).
- Production branch: `main`.
- Deployment workflow: [`.github/workflows/pages-preview.yml`](.github/workflows/pages-preview.yml).
- Branch and pull-request checks: [`.github/workflows/ci.yml`](.github/workflows/ci.yml).
- Latest layout release notes: [compact portfolio](docs/releases/2026-09-05-compact-portfolio.md).

Push-triggered deployment runs only on `main`. Branch and pull-request CI is verification-only; do not manually dispatch the Pages workflow from a review branch. Ordinary releases do not require DNS or Cloud Run changes. Record the live commit before publication and use a revert commit for rollback rather than rewriting shared history.

Legacy `/work` and `/games` URLs redirect to the homepage and Build Lab. Case-study return links use `/#work`; old `#case-studies` links remain supported. The résumé file retains its stable URL but is intentionally not promoted in the interface.

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
