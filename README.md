# Alex Aidun — professional portfolio and Build Lab

An evidence-led professional portfolio with a first-class home for products, tools, open source, games, and future experiments. The homepage gives hiring teams a fast path to positioning and proof without reducing the wider site to a résumé.

> Safety status: isolated GitHub Pages preview. The preview does not modify `aydoon.com`, DNS, the production Cloud Run service, or the default branch.

## Preview

- GitHub Pages preview: [https://bobuel.github.io/aydoon/](https://bobuel.github.io/aydoon/)
- Production baseline: [https://aydoon.com](https://aydoon.com) — intentionally unchanged during review
- Résumé: `alexander-aidun-resume.pdf`

The public preview is marked `noindex, nofollow` and blocked in `robots.txt` while it is under review. This is search-engine guidance, not access control.

## Product rationale

The experience uses one identity with two clear paths:

1. **Professional impact:** positioning, verified proof, case studies, experience, and résumé.
2. **The making practice:** a complete Build Lab plus a dedicated Games collection.

The homepage curates both paths. It leads with employer evidence, then introduces selected builds, creative work, and a human profile. The complete catalog remains available and can grow without making the homepage progressively longer.

Dremio’s AI portfolio and Dremio University metrics are deliberately separated. Private or unsupported employer claims are not included.

## Architecture

```text
GitHub Pages
  └─ Static Vite build
       ├─ Curated React portfolio homepage
       ├─ Professional Work route
       ├─ Complete Build Lab with filters
       ├─ Games and creative-work collection
       ├─ About/profile route
       ├─ Three prebuilt case-study entry paths
       ├─ Shared typed content model
       └─ Résumé, screenshots, metadata, and social preview
```

The portfolio intentionally has no AI assistant, runtime API, API key, server container, or database. GitHub Actions builds the `codex/employer-portfolio-preview` branch with the `/aydoon/` base path and publishes only the `dist` artifact.

## Local development

Requirements: Node.js 22+

```bash
npm ci
npm run check
npm run preview
```

The local preview opens at `http://127.0.0.1:8080/`. To test the exact GitHub Pages path layout, run `npm run build:pages` followed by `npm run preview:pages`, then open `http://127.0.0.1:8080/aydoon/`.

## Verification

```bash
npm run typecheck
npm test
npm run build
npm run build:pages
npm run scan:secrets
```

The test suite covers employer positioning, proof and CTAs, the complete project catalog, the dedicated games collection, optional links, direct route rendering, static path handling, and critical automated accessibility checks. Branch/PR CI contains no production deployment step.

## Publication boundary

The Pages workflow publishes only this isolated review branch. It does not configure a custom domain. Merging to the default branch, changing `aydoon.com`, publishing the GitHub profile README, or changing repository pins still requires separate approval.
