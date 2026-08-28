# Alex Aidun — employer portfolio

An evidence-led portfolio for an enterprise AI product and adoption leader. This branch replaces the original prototype shell with employer-focused case studies, selected builds, a server-side portfolio assistant, and a deployment path that keeps review traffic isolated from production.

> Safety status: branch preview only. This repository does not auto-deploy, modify DNS, or target the production Cloud Run service.

## Preview

- Production baseline: [https://aydoon.com](https://aydoon.com) — intentionally unchanged during branch review
- Local preview: `npm run build && npm start`, then open `http://localhost:8080`
- Cloud Run preview: deployed manually to the authenticated `aydoon-employer-preview` service; record the generated Google URL in the review PR
- Résumé: `/alexander-aidun-resume.pdf`

Final QA captures are stored in `artifacts/preview-desktop.png` and `artifacts/preview-mobile.png`. The pre-change production baseline is stored under `baseline/`.

## Product rationale

The experience is organized around what a hiring team needs to verify quickly:

1. A crisp positioning statement: **Enterprise AI Product & Adoption Leader**.
2. Four verified proof points with careful attribution.
3. Case studies that make context, ownership, product decisions, adoption evidence, and lessons explicit.
4. Working prototypes and open-source projects as secondary evidence—not a wall of undifferentiated cards.
5. Direct résumé, GitHub, LinkedIn, email, and case-study paths.

Dremio’s AI portfolio and Dremio University metrics are deliberately separated. Private or unsupported employer claims are not included.

## Architecture

```text
Browser
  ├─ React + React Router (homepage and direct case-study routes)
  ├─ Shared typed profile/case-study/project content
  └─ POST /api/chat
         │
         ▼
Node / Express in the same Cloud Run container
  ├─ Zod request validation
  ├─ payload, history, message, response, and rate limits
  ├─ grounded system context with explicit claim boundaries
  └─ Gemini API key read only from server environment
```

Vite outputs the browser bundle to `dist/client`. esbuild bundles the Express entry point to `dist/server/index.js`. Express serves both the API and SPA fallback so direct case-study routes work in Cloud Run.

## Secure local setup

Requirements: Node.js 22+

```bash
npm ci
npm run check
npm start
```

Chat is optional locally. To enable it, provide `GEMINI_API_KEY` and `GEMINI_MODEL` only to the server process. Never add either to a Vite-prefixed variable. `.env.example` documents the supported server settings without containing a secret.

Security controls include Helmet headers, preview-wide `X-Robots-Tag: noindex, nofollow`, a 12 KB JSON limit, six-message history, 600-character messages, bounded output, request-rate limiting, and logs that exclude prompts and responses.

## Verification

```bash
npm run typecheck
npm test
npm run build
npm run scan:secrets
docker build -t aydoon-employer-preview .
```

The test suite covers homepage proof and CTAs, optional-link behavior, direct case-study rendering, critical automated accessibility checks, API validation, safe errors, response shape, preview indexing headers, and rate limiting.

Branch/PR CI runs type checking, tests, production builds, and the secret scan. It contains no deployment step.

## Authenticated Cloud Run preview

`cloudbuild.preview.yaml` is intentionally scoped to `aydoon-employer-preview`, uses `--no-allow-unauthenticated`, references a preview-only Secret Manager secret, and caps instances for review. Before submitting it manually:

1. Set the Google Cloud project and create the preview-only Artifact Registry repository, service account, and secret named in the file.
2. Confirm the active account and project.
3. Submit this branch commit only.
4. Record the generated `run.app` URL and revision.
5. Verify `X-Robots-Tag`, authentication, résumé access, direct routes, `/health`, and `/api/chat`.
6. Recheck [aydoon.com](https://aydoon.com) against `baseline/production.json`.

Do not rename the preview service to the production service and do not add `--allow-unauthenticated` during review.

## Release boundary

Production requires a separate, explicit approval after factual and visual review. Merge, production traffic migration, DNS changes, GitHub profile publication, metadata changes, and pin changes are outside this preview branch’s automation.

