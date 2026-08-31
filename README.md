# Alex Aidun — professional portfolio and Build Lab

The source for [aydoon.com](https://aydoon.com): an evidence-led professional portfolio presenting Alex Aidun as an enterprise AI product, systems, and adoption leader. The site pairs employer-facing proof and case studies with a complete Build Lab for products, tools, open source work, games, and experiments.

## Production

- Live site: [https://aydoon.com](https://aydoon.com)
- Hosting: GitHub Pages
- Production branch: `main`
- Deployment workflow: `.github/workflows/pages-preview.yml`
- Launch commit for the systems-thinking narrative: `22fbf4b`
- Pre-narrative rollback reference: `40bec76`

Only pushes to `main` deploy the public site. Branches and pull requests run CI but cannot publish to the GitHub Pages production environment. Ordinary content releases do not require DNS or Cloud Run changes.

## Product rationale

The experience uses one identity with two clear paths:

1. **Professional impact:** positioning, verified proof, case studies, experience, and résumé.
2. **The making practice:** a complete Build Lab plus a dedicated Games collection.

The employer narrative connects domain expertise, systems thinking, hands-on building, and adoption. The homepage gives hiring teams a short path to positioning and evidence; deeper routes hold the full case studies and project catalog.

Dremio's AI product portfolio and Dremio University learning metrics are deliberately separate. Claims must remain résumé-verified or linked to an approved source. Do not add confidential employer details, invented savings, unsupported governance claims, or unverified psychometric claims.

## Architecture

```text
GitHub Pages
  └─ Static Vite build
       ├─ React portfolio homepage
       ├─ Professional Work route
       ├─ Complete Build Lab with filters
       ├─ Games and creative-work collection
       ├─ About/profile route
       ├─ Three prebuilt case-study entry paths
       ├─ Shared typed content model
       └─ Résumé, screenshots, metadata, and social preview
```

The public site intentionally has no AI assistant, runtime API, API key, server container, or database. The repository's production artifact is a static Vite build.

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

The test suite covers employer positioning, proof and CTAs, the project catalog, games, optional links, direct-route rendering, static path handling, the About narrative, research attribution, and critical automated accessibility checks.

After a deployment, smoke-test:

- `/`
- `/about`
- `/work`
- `/builds`
- All three `/case-studies/...` routes
- `/alexander-aidun-resume.pdf`
- `/sitemap.xml`
- `/robots.txt`

Also confirm the deployed JavaScript asset contains the intended new copy, since HTML-only checks cannot see text rendered by React.

## Working with Codex

Durable project and release instructions live in [`AGENTS.md`](./AGENTS.md). It is the first handoff reference for a new Codex task. Keep it focused on stable operating rules; use commits and pull requests for historical detail.
