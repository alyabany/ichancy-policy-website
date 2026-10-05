<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# AGENTS.md

## Structural decisions

- Static hosting (GitHub Pages) support: `vite.config.ts` enables `tanstackStart.prerender` so `dist/client/` contains a fully prerendered `index.html`. Why: GitHub Pages is static-only; prerendering makes the SSR route serveable as static HTML.
- The Tuco logo is served from `public/tuco-logo.png` (real file) instead of the lovable-assets pointer (`/__l5e/...`), which only resolves on Lovable hosting. Why: static hosts cannot serve platform-runtime asset URLs.
- `.github/workflows/deploy-pages.yml` builds the project and deploys `dist/client/` to GitHub Pages on every push to `main`. `npm install` is used (no package-lock.json in the repo).
