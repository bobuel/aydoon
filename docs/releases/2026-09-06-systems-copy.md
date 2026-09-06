# Systems-focused copy release — September 6, 2026

Alex selected the systems-focused local preview and explicitly requested publication.

## Baseline and rollback

- Production before this release: `2696a005e97441d22d241c1996d73a7a52642d99`.
- Successful previous Pages run: `33987451440`.
- Previous live homepage assets: `index-CwfJVuNp.js` and `index-cjbb6l71.css`.
- Baseline homepage: HTTP 200; ETag `W/"6a9c6e93-b46"`; Last-Modified `Sat, 05 Sep 2026 19:33:39 GMT`.
- Rollback: revert this release on `main` and let the existing GitHub Pages workflow redeploy. Never force-push or change DNS.

## Approved scope

- Promote the selected systems introduction, fuller career background, systems/design-thinking perspective, and About copy.
- Keep OpenAI Champions as program participation and AI cost management as something Alex helps with. No endorsement, certification, sole budget ownership, or savings claims.
- Promote the reviewed Automattic operations detail and Dremio cross-department automation bullet; retain all evidence and keep DremioU metrics separate from AI product work.
- Use this exact homepage paragraph, ending in body-sized bold text rather than a heading:

  AI makes coding cheaper. The value shifts toward the decisions that shape what gets built, how it’s evaluated and monitored, how people experience it, and what it achieves. **Design is the premium.**

- Preserve the Hybrid layout, complete project catalog, navigation, stable résumé URL without a résumé CTA, static architecture, and custom-domain metadata.
- Local comparison controls and alternate copy options are not included in the release.

## Verification

Before publication, run `npm run check`, `npm run build:pages:production`, and `npm run scan:secrets`. Production integration tests cover the approved paragraph and bold semantics, profile and operations wording, navigation, case content, optional links, direct routes, focus, metadata, and automated accessibility. Compare the promoted source against the chosen local version.

After Pages succeeds, verify all 11 established public paths and compare deployed JavaScript and CSS bytes to the validated custom-domain build. Browser visual QA is not claimed; Alex reviewed the interactive local prototype.

Local pre-release checks passed: TypeScript, all 66 tests (40 repository tests plus 26 local comparison tests), standard and custom-domain builds, and secret scanning. Seven route comparisons confirmed identical main content and identity markup between the promoted implementation and the selected systems preview. Custom-domain assets: `index-B9E2XRLC.js` and `index-BBDMpvut.css`.
