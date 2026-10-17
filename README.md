# Gloob — Cosmic Organization Headquarters ✦

An original character website for **Baby's First Website 2026** (Track 2). Gloob is a baby black hole who dreams of organizing the universe, but his gravity keeps swallowing his work.

> **Implementation in progress.** The responsive headquarters, expressive SVG character, and Stardust Sorting activity are available on the working branch. Lost Moon & Found, Orbit Organizer 3000, final achievements, and the real Snack Drawer dialog are still on the checklist. Do not present this version as the finished submission.

## Local development

Requires **Node.js 24.15.0 or newer within Node 24.x**, and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173/`.

```bash
npm run test:run  # single test pass
npm run test      # watch tests
npm run build     # TypeScript checking + production bundle
npm run preview   # serve the production build locally
```

**Before merge:** commit the generated `package-lock.json` after `npm install`. Verify that `npm run test:run` and `npm run build` pass in the Node 24 environment; these have not yet been run by the authoring agent. Review Gloob on desktop and mobile.

## Deployment

Approved host: **Vercel**, connected to the GitHub repository. Framework: Vite, build: `npm run build`, output: `dist`, base path: `/`. Production should come from `main` only after verified review. No GitHub Pages deployment.

## Build roadmap

See [docs/checklist.md](docs/checklist.md), the approved [scope](docs/scope.md), [PRD](docs/prd.md), and [technical specification](docs/spec.md). This branch is intentionally incomplete.

## Licensing

See [ARTWORK-LICENSE.md](ARTWORK-LICENSE.md). Source code is MIT-licensed, with original Gloob character illustrations excluded and reserved. Self-hosted font binaries and SIL OFL notices are planned but not yet included.
