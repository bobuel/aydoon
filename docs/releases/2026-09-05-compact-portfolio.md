# Compact portfolio release — September 5, 2026

## Production baseline

- Previous live commit: `da6b4eb6631eb828fbf824a583ac552f1d67122a`.
- Previous successful Pages run: https://github.com/bobuel/aydoon/actions/runs/33629998271.
- Live homepage returned HTTP 200 before publication; JavaScript asset was `/assets/index-CHLMcyVt.js`.
- Baseline Last-Modified: `Wed, 02 Sep 2026 12:27:45 GMT`.
- Release source branch: `codex/hybrid-material-portfolio`.
- Hosting remains GitHub Pages. No DNS, Cloud Run, résumé, or secrets changes.

## Approved direction

Keep the split-screen homepage and “Design is the premium.” Compact the inner pages and mobile introduction, shorten case titles, remove decorative homepage workflow chips and indices, keep metrics inline, and repair case-list navigation. Workflow explanations and verified evidence remain inside the case studies.

Navigation now resets scroll and moves keyboard focus into new route content. Case-list return links use `/#work`; the old `#case-studies` anchor remains supported. Builds uses a single introduction, followed immediately by filters and projects. Project headings are level two beneath the page title.

## Verification

- TypeScript, all 16 unit/component tests, static builds, and secret scan passed.
- Browser-checked desktop, tablet, 390px phone, and 320px narrow-phone layouts.
- At 390px, the profile rail decreased from 680px to about 334px; the first case title moved from about 1,050px to 594px down the document.
- Checked route scroll/focus reset and case-list return positioning in the browser.
- Verified narrow-screen content reflows without horizontal overflow.
- No new adoption outcomes or employer claims were invented. A concrete decision/result example remains the next evidence improvement.

## Release and rollback

Publish only the validated commit. GitHub Actions reruns verification before deployment. Check the deployed homepage, About, Builds, all three cases, legacy redirects, résumé URL, sitemap, robots, canonical URLs, and the new JavaScript asset.

If a critical regression appears, restore the baseline content through a new revert commit; do not rewrite main history or change DNS. Preserve unrelated Windows-incompatible prompt-history paths, which appear deleted locally but are not part of this release.
