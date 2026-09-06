# Writing: editorial and publication rules

Alex approved publication of the initial four articles on September 6, 2026, following local review. These are edited, employer-neutral adaptations of his writing, not workplace-document exports. The original archive and its internal metadata remain outside this repository.

## Voice and content

- Preserve Alex's non-employer-specific wording where it works, including substantial passages. Use concrete explanations and direct recommendations.
- No employer names, colleague stories, internal systems, URLs, identifiers, policies, account arrangements, contracts, rollout details, or employer-specific examples in Writing.
- Use new, clearly labeled fictional examples instead of anonymizing distinctive workplace stories.
- Do not reproduce internal prompts, skill files, policy language, screenshots, or another person's contributions.
- Do not turn fictional examples into claims about work Alex performed or add unmeasured savings and outcomes.
- Keep changing vendor instructions and pricing claims out of these evergreen pieces.
- No rhetorical question endings, inflated credentials, or marketing banner titled “Thought leadership.”

The initial collection leads with cost management and reusable workflows, then shared context and daily briefings. The main homepage integrates the model-of-tomorrow framing with the existing design commentary. Details and examples stay inside the articles.

## Local editing

Run `npm run dev` and open `http://127.0.0.1:3000/writing`. Article data lives in `writing/pieces.json`; editing it restarts the local Vite server. Only local development includes draft entries. `npm run preview` serves the production build.

Example records use typed labels and fields, rendered as compact definition lists. Keep their hypothetical labels visible. Reading times and draft-output checks include example text.

## Future publications

1. Obtain Alex's approval of the specific source and wording before any public push, including a feature branch or pull request.
2. Keep unapproved source outside public Git history. Generalizing text does not automatically make it approved.
3. Mark only approved entries `published`. Do not remove the draft filter or its regression tests.
4. Run `npm run check`, both Pages builds, and `npm run scan:secrets`.
5. Publish only with explicit authorization, using the main-branch Pages workflow. Verify the homepage, Writing index, article URLs, metadata, and sitemap after deployment.

Vite filters article data before injecting it into the client. Static routes and the sitemap use the same published-only registry. Every build scans output for draft slugs, titles, body text, and example values. Never import unfiltered article JSON into client code or move drafts into `public/`.

These checks protect build output, not source pushed to GitHub. They also cannot determine confidentiality or ownership; editorial review remains necessary.

The website holds edited writing. GitHub may later supplement it with separately approved reusable examples, not a mirror of the original archive.
