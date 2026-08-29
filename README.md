# Alex Aidun — employer portfolio

An evidence-led, static portfolio for an enterprise AI product and adoption leader. The site is designed for hiring teams that need to verify positioning, outcomes, product judgment, and hands-on work quickly.

> Safety status: isolated GitHub Pages preview. The preview does not modify `aydoon.com`, DNS, the production Cloud Run service, or the default branch.

## Preview

- GitHub Pages preview: [https://bobuel.github.io/aydoon/](https://bobuel.github.io/aydoon/)
- Production baseline: [https://aydoon.com](https://aydoon.com) — intentionally unchanged during review
- Résumé: `alexander-aidun-resume.pdf`

The public preview is marked `noindex, nofollow` and blocked in `robots.txt` while it is under review. This is search-engine guidance, not access control.

## Product rationale

The experience is organized around what a hiring team needs to verify quickly:

1. A crisp positioning statement: **Enterprise AI Product & Adoption Leader**.
2. Four résumé-verified proof points with careful attribution.
3. Case studies that make context, ownership, decisions, adoption evidence, and lessons explicit.
4. Working prototypes and open-source projects as secondary evidence.
5. Direct résumé, GitHub, LinkedIn, email, and case-study paths.

Dremio’s AI portfolio and Dremio University metrics are deliberately separated. Private or unsupported employer claims are not included.

## Architecture

```text
GitHub Pages
  └─ Static Vite build
       ├─ React portfolio homepage
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

The test suite covers employer positioning, proof and CTAs, optional links, direct case-study rendering, static path handling, and critical automated accessibility checks. Branch/PR CI contains no production deployment step.

## Publication boundary

The Pages workflow publishes only this isolated review branch. It does not configure a custom domain. Merging to the default branch, changing `aydoon.com`, publishing the GitHub profile README, or changing repository pins still requires separate approval.
