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
- New Writing pieces must be employer-neutral, with newly written hypothetical examples rather than anonymized internal stories or copied templates. Keep source archives, internal metadata, colleagues' contributions, and workplace-specific details outside the repository.
- Alex permits substantial reuse of his own non-employer-specific prose. Preserve his concrete explanations and direct recommendations; generalization does not require rewriting every sentence or adding “I would.”
- Alex approved the initial four Writing articles and their publication on September 6, 2026. Future pieces and material revisions still need approval. A draft status only protects build output, not public Git history: do not push unapproved source to a public branch or pull request. Follow `docs/writing-review.md`.
- Preserve the distinction between sourced research findings and Alex's interpretation of their organizational implications.
- The Anthropic finding is approximately 70% of planning decisions by people and 80% of execution decisions by Claude in the studied Claude Code sessions.
- The OpenAI finding is that 43.5% of occupation-specific ChatGPT messages cross occupational boundaries. Broader ownership and fewer handoffs are Alex's interpretation, not OpenAI's stated finding.
- Maintain the current concise hierarchy. Add new homepage material only when it improves employer comprehension enough to justify additional scrolling.
- Omit redundant section labels such as “Portfolio,” “Selected work,” and “What I build” when headings or navigation already provide that context. Keep useful case categories, role context, project availability, and accessible labels.
- The approved production design is Hybrid: a light, persistent identity sidebar, flat content rows, and Work / Builds / Writing / About links. Alex Aidun is the primary name heading; “Design is the premium.” is the tagline. Keep the compact type scale, muted palette, and small inline evidence. Do not restore the navy rail, boxed project grids, oversized numbers, or local design-switching controls.
- The September 6 Writing release integrates building for the model of tomorrow while delivering useful work today into the existing homepage paragraph. It ends with “Design is the premium.” in body-sized bold, not a heading. Preserve that connection to evaluations, monitoring, user experience, and outcomes. Rhetorical question endings and checklist-like definitions are not Alex's writing style. Keep the paragraph off inner pages. The approved left-column layout places it in the homepage sidebar in place of the overlapping philosophy paragraph. Keep contact links near the name, remove bottom profile navigation, and align the main navigation at the top; do not reintroduce a viewport-height sticky rail.
- The sidebar includes education, documentation, AI product leadership, hands-on building, and systems/design thinking. OpenAI Champions is program participation, not certification, endorsement, or employment. Alex helps with AI cost management; do not imply sole budget ownership or quantified savings.
- The sidebar comes before content on mobile and has no fixed minimum height. Keep workflow detail inside case studies, not decorative homepage chips. About and Writing belong in the top primary navigation; GitHub, LinkedIn, and Email sit beneath the name and role.
- Keep inner-page titles at the shared compact scale (maximum 36px at default text size), case metrics modest, and body copy readable. Do not restore oversized editorial heroes. `/#work` is the case-list destination; old `#case-studies` links remain supported.

## Important files

- `content.ts`: verified profile, proof, project, and case-study content.
- `types.ts`: typed content model.
- `writing/pieces.json`: the approved employer-neutral articles, with per-entry publication status. `writing/registry.mjs` filters content before Vite injects it; never import unfiltered drafts into client code.
- `components/Writing.tsx` and `writing/content.ts`: the compact index, article reading view, and permitted client content. Keep route names distinct from root TypeScript filenames so Vite does not serve a module at an HTML route.
- `components/HybridPortfolio.tsx`: production shell, primary navigation and Builds filters, About, case studies, metadata, and shared anchors. The older page components are not production entry points.
- `hybrid.css`: production responsive presentation. The older `styles.css` is not imported by the production entry point.
- `tests/HybridPortfolio.test.tsx`: production integration, route, content, optional-link, focus, metadata, and accessibility regression tests.
- `index.html`: metadata, social tags, canonical data, and Person JSON-LD.
- `public/alexander-aidun-resume.pdf`: public résumé; preserve the URL.
- `scripts/prepare-static-routes.mjs`: direct-route output for GitHub Pages.
- `scripts/verify-writing-build.mjs`: required build-output check for accidental draft publication. Published writing alone may appear in static routes and the sitemap.
- `.github/workflows/ci.yml`: branch and pull-request verification.
- `.github/workflows/pages-preview.yml`: production Pages deployment despite the legacy filename.

## Required verification

Run these before requesting publication:

```bash
npm run check
npm run build:pages:production
npm run scan:secrets
```

After deployment, verify the homepage, About, Builds, Games, every case-study route, Writing and every published article, the legacy Work redirect, résumé, sitemap, and robots file on `https://aydoon.com`. Builds uses All / Tools / Games filters with URL query state; /games redirects to /builds?filter=games. Verify direct filters and browser history. Confirm that the live JavaScript asset contains the new React-rendered copy and that canonical metadata uses the custom domain. Writing routes and sitemap entries are generated from published entries only.

## Release discipline

- Keep changes reviewable and preserve unrelated user work.
- Never force-push `main` or use destructive Git recovery for routine releases.
- Record the live commit before publication so rollback is unambiguous.
- If production verification fails, revert the release promptly and confirm the prior site is restored.
- Update `README.md` and this file whenever hosting, deployment, verification, or factual boundaries materially change.
