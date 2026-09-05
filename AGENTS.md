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
- Omit redundant section labels such as “Portfolio,” “Selected work,” and “What I build” when headings or navigation already provide that context. Keep useful case categories, role context, project availability, and accessible labels.
- The approved production design is Hybrid: a light, persistent identity sidebar, flat content rows, and Work / Builds / Games links. Alex Aidun is the primary name heading; “Design is the premium.” is the tagline. Keep the compact type scale, muted palette, and small inline evidence. Do not restore the navy rail, boxed project grids, oversized numbers, or local design-switching controls.
- The sidebar comes before content on mobile and has no fixed minimum height. Keep workflow detail inside case studies, not decorative homepage chips. About remains linked from the profile links and directly accessible.
- Keep inner-page titles at the shared compact scale (maximum 36px at default text size), case metrics modest, and body copy readable. Do not restore oversized editorial heroes. `/#work` is the case-list destination; old `#case-studies` links remain supported.

## Important files

- `content.ts`: verified profile, proof, project, and case-study content.
- `types.ts`: typed content model.
- `components/HybridPortfolio.tsx`: production shell, Work / Builds / Games navigation, About, case studies, metadata, and shared anchors. The older page components are not production entry points.
- `hybrid.css`: production responsive presentation. The older `styles.css` is not imported by the production entry point.
- `tests/HybridPortfolio.test.tsx`: production integration, route, content, optional-link, focus, metadata, and accessibility regression tests.
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

After deployment, verify the homepage, About, Builds, Games, every case-study route, the legacy Work redirect, résumé, sitemap, and robots file on `https://aydoon.com`. Games now has its own filtered view rather than redirecting to Builds. Confirm that the live JavaScript asset contains the new React-rendered copy and that canonical metadata uses the custom domain.

## Release discipline

- Keep changes reviewable and preserve unrelated user work.
- Never force-push `main` or use destructive Git recovery for routine releases.
- Record the live commit before publication so rollback is unambiguous.
- If production verification fails, revert the release promptly and confirm the prior site is restored.
- Update `README.md` and this file whenever hosting, deployment, verification, or factual boundaries materially change.
