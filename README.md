# Mobile App UI Design — SPACE for ET

This repository contains the SPA prototype "SPACE for ET" — a mobile-first web app (Vite + React + TypeScript) focused on space science education and Ethiopia's contributions to space exploration.

## Quick local dev

1. Install dependencies
```bash
npm install
```

2. Run dev server
```bash
npm run dev
# open http://localhost:5173
```

3. Build for production
```bash
npm run build
# production output goes to the `dist/` folder (Vite default)
```

---

## Deploying to Vercel (recommended)

This project is configured to deploy to Vercel as a static site. The repository already contains `vercel.json` that tells Vercel to run the static build and serve the SPA correctly (routes all requests to `index.html`) and sets `dist` as the build output.

There are two easy ways to deploy: connect the GitHub repo in the Vercel dashboard, or use the Vercel CLI.

### Option A — GitHub integration (automatic)
1. Go to https://vercel.com and sign in (or create an account).
2. Click "New Project" → "Import Git Repository" → choose your GitHub repository (ermizamr/SPACE-FOR-ET).
3. Vercel should auto-detect the framework. If prompted, set:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: leave default (`npm install`)
4. Click "Deploy".
5. Every push to the connected branch (e.g., main) will trigger a new deployment.

### Option B — Vercel CLI (manual)
1. Install Vercel CLI (if not installed)
```bash
npm i -g vercel
```
2. Run deploy from repository root
```bash
vercel --prod
```
3. Follow the interactive prompts. When asked for:
   - Build command: use `npm run build`
   - Output directory: use `dist`

---

## Important Vercel notes & troubleshooting

- Node version: this project declares `engines.node >= 18` in package.json. In Vercel you can set a specific Node version in Project Settings if needed.
- Build output: Vite writes production assets to `dist/`. `vercel.json` is set to use `@vercel/static-build` with `distDir: "dist"`.
- SPA routing: `vercel.json` routes requests to `index.html` so client-side routing works on refresh.
- Cache and service worker:
  - If you use the PWA service worker (public/sw.js), clients can show stale content after a deploy. Recommended:
    - Bump the SW cache name on each deploy, and include `self.skipWaiting()` in `install` and `self.clients.claim()` in `activate` so the new SW activates promptly.
    - For local troubleshooting, open DevTools → Application → Service Workers → Unregister, then clear site data and hard reload.
- If you see an older version after deploy:
  1. Confirm the deployment on Vercel dashboard completed successfully and its commit SHA matches your merge.
  2. Clear the SW or site data in the browser and reload.
  3. If the problem is widespread, bump the SW cache name and deploy again.

---

## How Explore topic pages are wired (quick dev notes)

- Explore topics emit a hyphenated id (e.g. `telescopes`, `solar-system`) when clicked.
- App listens for that id and maps to the corresponding topic screen.
- If navigation doesn't work, check:
  - DevTools console logs for `ExploreScreen` click events and `App` handler logs.
  - That your running code is the latest build (service worker may need unregistering during development).

---

## Contributing / PR workflow

1. Create a branch for your feature:
```bash
git checkout -b feat/your-feature
```
2. Implement and test locally:
```bash
npm run dev
```
3. Commit and push changes, open a PR against `main`.
4. When merged, Vercel will automatically deploy the merged commit (if GitHub integration is configured).

---

## Contact

If you'd like to reach out, use the contact link in the app which opens the project's Telegram channel:
https://t.me/channel_of_ermi

---

Enjoy building! 🚀
