# Approved left-column layout

Alex approved the localhost left-column philosophy option with top contact links for publication.

- Previous production commit: `817c599ed503d78328e76ca2c4d27562e5dae0c0`.
- Move the approved homepage design paragraph into the sidebar in place of the overlapping philosophy paragraph. Preserve its exact wording and bold ending.
- Put GitHub, LinkedIn, and Email under the name and role.
- Put Work, Builds, Games, Writing, and About in primary navigation, with correct active states.
- Remove the bottom profile links and viewport-height sidebar spacing.
- Keep the paragraph off inner pages, all case studies and writing unchanged, and local preview selectors out of production.
- Release through existing GitHub Pages workflow; no DNS or hosting changes.
- Rollback: revert this release on main and rerun Pages. Do not force-push.

Required checks: typecheck, complete test suite, standard and production Pages builds, secret scan, and live routes/assets/metadata verification after deployment.
