# Aydoon portfolio working agreements

## Project purpose

This repository powers `https://aydoon.com`, Alex Aidun's employer-facing portfolio and Build Lab. The primary positioning is enterprise AI product, systems, and adoption leadership supported by verified evidence and hands-on building.

## Production boundary

- GitHub Pages serves the production site from `main` through `.github/workflows/pages-preview.yml`.
- Only `main` may deploy. Branch and pull-request workflows are verification-only.
- Start meaningful work from the latest `origin/main` on a `codex/` branch.
- Do not push or merge to `main` unless the user explicitly requests publication.
- Normal content and code releases require no DNS or Cloud Run changes.
- Do not add an AI agent, runtime API, client secret, server dependency, or database unless the user explicitly changes the static-site architecture.
- The systems-thinking launch commit is `22fbf4b`. Commit `40bec76` is the immediately preceding production version and a historical rollback reference. For later releases, prefer reverting the faulty release over rewriting shared history.

## Factual and editorial rules

- Use only résumé-verified facts or claims backed by an approved source.
- Keep Dremio AI product work separate from Dremio University learning metrics.
- Do not add confidential employer details, invented savings, unsupported governance claims, or unverified psychometric claims.
- Preserve the distinction between sourced research findings and Alex's interpretation of their organizational implications.
- The Anthropic finding is approximately 70% of planning decisions by people and 80% of execution decisions by Claude in the studied Claude Code sessions.
- The OpenAI finding is that 43.5% of occupation-specific ChatGPT messages cross occupational boundaries. Broader ownership and fewer handoffs are Alex's interpretation, not OpenAI's stated finding.
- Maintain the current concise hierarchy. Add new homepage material only when it improves employer comprehension enough to justify additional scrolling.

## Important files

- `content.ts`: verified profile, proof, project, and case-study content.
- `types.ts`: typed content model.
- `components/EmployerPortfolio.tsx`: homepage.
- `components/AboutPage.tsx`: systems-thinking and AI-adoption narrative.
- `styles.css`: global responsive presentation.
- `index.html`: metadata, social tags, canonical data, and Person JSON-LD.
- `public/alexander-aidun-resume.pdf`: public résumé; preserve the URL.
- `scripts/prepare-static-routes.mjs`: direct-route output for GitHub Pages.
- `.github/workflows/ci.yml`: branch and pull-request verification.
- `.github/workflows/pages-preview.yml`: production Pages deployment despite the legacy filename.

## Required verification

Run these before requesting publication:

```bash
npm run check
npm run build:pages:production
npm run scan:secrets
```

After deployment, verify the homepage, About, Work, Builds, every case-study route, résumé, sitemap, and robots file on `https://aydoon.com`. Confirm that the live JavaScript asset contains the new React-rendered copy and that canonical metadata uses the custom domain.

## Release discipline

- Keep changes reviewable and preserve unrelated user work.
- Never force-push `main` or use destructive Git recovery for routine releases.
- Record the live commit before publication so rollback is unambiguous.
- If production verification fails, revert the release promptly and confirm the prior site is restored.
- Update `README.md` and this file whenever hosting, deployment, verification, or factual boundaries materially change.
