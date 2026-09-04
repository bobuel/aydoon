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

The experience uses one identity with two clear destinations:

1. **Professional impact:** the homepage moves directly from positioning to verified proof, three case studies, and contact.
2. **The making practice:** the Build Lab contains the complete catalog, including games and creative work.

The employer narrative connects domain expertise, systems thinking, hands-on building, and adoption. On desktop, the homepage uses a split-screen working surface: a sticky identity rail anchors the profile while a portfolio panel presents three evidence-bearing systems and their workflow logic. The layout becomes a single column on smaller screens. The About page holds a concise personal point of view without repeating the case studies, experience history, or research library. Legacy `/work` and `/games` URLs redirect to the homepage and Build Lab so existing links continue to work. The résumé artifact remains available at its stable URL but is intentionally not linked from the interface.

Dremio's AI product portfolio and Dremio University learning metrics are deliberately separate. Claims must remain résumé-verified or linked to an approved source. Do not add confidential employer details, invented savings, unsupported governance claims, or unverified psychometric claims.

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

The test suite covers employer positioning, proof and CTAs, the complete project and games catalog, optional links, simplified navigation, static path handling, the concise About narrative, and critical automated accessibility checks.

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
