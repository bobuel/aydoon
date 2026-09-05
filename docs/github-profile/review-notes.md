# GitHub presentation review — September 5, 2026

Prepared for review only. Do not merge, update the live profile or repository metadata, change pins, or deploy the website without approval.

## Prepared changes

- [Profile README](README.md): replace the live `bobuel/bobuel` README only after approval. Keeps “Design is the premium.”, uses plain-language AI operations/product/adoption positioning, removes the résumé CTA and old banner, and links to the custom domain.
- [Proposed metadata](metadata.json): profile bio and website, repository descriptions and website fields. The existing three pins are retained. This file is a proposal, not an automation.
- [Website repository README](../../README.md): a visitor-facing introduction, direct live links, design decisions, then technical documentation. No website code or public assets are changed. Add a current screenshot before final publication; browser screenshot export timed out during preparation, so no stale or broken image is included.
- [Brassline README draft](brassline-README.md): a clear Play link and honest distinction between the web export and editable source. Review the play description and add a current gameplay screenshot before publishing this draft.
- [Retrieval cleanup PR #1](https://github.com/bobuel/retrieval-guard/pull/1): root-level package and CI, implemented-versus-exploratory scope, concise product rationale, and accurate test boundaries. No new licensing declaration.
- [Bloom showcase PR #1](https://github.com/bobuel/bloom-taxonomy-quiz-builder-skill/pull/1): workflow visual, sample source/output, current case-study links, and archive/sample validation. The 1,000+ use signal belongs to BloomGPT, not this skill.

## Adoption artifact: needs approved material

Do not publish an empty showcase or imply that a new example is an employer work product. Select one real artifact that can be shared, then explain it in roughly one page:

1. What user workflow or behavior needed to change?
2. What did Alex own, and who else contributed?
3. Which design decision mattered, and what alternative was rejected?
4. How did rollout, guidance, and feedback work?
5. How was behavior assessed? Include the time window, denominator, and source if reporting a metric. If outcomes were not measured, say so.
6. What changed after feedback, or what would Alex change next?

Possible inputs: an approved AI Guides exercise, workflow-selection rubric, or rollout checklist. Remove employer-confidential content and distinguish illustrative examples from observed results. No new outcome claims have been added in this preparation.

## Repository hygiene: separate decision

The website's default branch contains two large JSON files under `migrated_prompt_history/`. Their filenames contain colons, which also interfere with ordinary Windows checkouts. They are not part of the static site build.

Do not silently delete them or rewrite Git history. A content audit should report finding types and locations without repeating private text or credential values. Removing a file in a future commit would not erase older public copies. Any confirmed exposed credentials would need separate revocation or rotation.

This preparation preserves both tracked files. A limited check of their current public blobs found no matches for Google API-key, GitHub-token, AWS access-key, Slack-token, or private-key-header patterns. That does not establish that the files contain no private information. Neither this check nor the existing client-bundle secret scan is a full privacy or Git-history audit.

## Local verification

- Website: TypeScript, all 18 tests, standard and custom-domain production builds, and the client-bundle secret scan passed. The production JS/CSS asset names match the current release.
- Draft bio length, preferred tagline, absence of the résumé CTA and legacy site URLs, balanced Markdown code fences, and relative links checked.
- Retrieval: Ruff passed; 39 unit and adapter-integration tests passed on Python 3.11. The 25 model tests were deliberately deselected. One existing Pydantic deprecation warning remains.
- Bloom: archive instructions match `SKILL.md`; sample JSON contains exactly six unique Bloom levels. The workflow now enforces archive/source equality as well.

## Approval boundaries

1. Review the profile copy, metadata proposal, and repository introductions.
2. Review the two existing PRs and their latest checks; model-download tests are distinct from adapter tests.
3. After approval, publish repository changes individually. Merging the website README branch into `main` will trigger its normal Pages workflow even though the site source is unchanged.
4. Publish the profile README and apply metadata separately. Do not add a résumé CTA or change repository visibility.
