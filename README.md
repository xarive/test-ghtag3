# Deploy to Vercel (one-click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?repository-url=https://github.com/<USERNAME>/<REPO>&integration-ids=&external-id=)

> Replace `<USERNAME>/<REPO>` in the link above with your repository path after you push the project to GitHub, or drag & drop this folder into Vercel's dashboard.

## Notes for this Next.js app
- This project uses the **Next.js App Router** (the `app/` directory). Vercel fully supports this.
- The included `vercel.json` provides:
  - Clean URLs (no `.html`)
  - Static asset caching headers for long-term caching
  - Basic security headers

## How to deploy
1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and connect your GitHub repo OR click the **Deploy with Vercel** button above after replacing the repo path.
3. Vercel will auto-detect Next.js and install/build automatically (`npm install` + `npm run build`).
4. If your app needs environment variables, set them in the Vercel dashboard (Project Settings → Environment Variables).

## Local preview
```bash
# npm
npm install
npm run dev

# or pnpm
pnpm install
pnpm dev

# or yarn
yarn
yarn dev
```



