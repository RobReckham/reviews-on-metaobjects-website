# Website - Reviews on Metaobjects

Marketing/content website for the Reviews on Metaobjects Shopify app.

## Stack

- Next.js (App Router) + Nextra docs theme
- Tailwind CSS v4
- PostHog analytics + Google Analytics
- pnpm

## Commands

```bash
pnpm dev       # dev server
pnpm build     # production build
pnpm start     # start on port 3001
```

## Structure

- `app/(content)/blog/` - blog posts (each folder = one post, `page.jsx`)
- `app/(content)/docs/` - Nextra docs (MDX); sidebar order in `app/(content)/layout.jsx`. Pages with a template in `contract-pages/` (the Developers pages and the pages that show contract examples) are generated from `../app/CONTRACT.md` with `pnpm docs:sync-contract`: edit the template, never the generated `page.mdx`. Code examples use `<Example>` (`components/docs-example.jsx`): a preview with sample data, then a ```liquid and an optional ```css block; the preview is styled with that same CSS plus `components/fo-base.css`, which the same script copies from the app. Keep preview markup and classes identical to the Liquid, so copied code looks like its preview. Every page under Displaying reviews has a `## Where to place it` section right after the intro: a numbered list of spots as "page, position" (like "Product page, around the product title"), no reasons (placement advice is consulting), and only spots that come from Marius, a block setting or how the feature works
- `app/api/docs-md/` - every docs page as Markdown at `<url>.md` (rewrite in `next.config.mjs`), for AI tools
- `app/(legal)/` - legal pages
- `app/layout.jsx` - root layout with GA + PostHog
- `app/sitemap.js` / `app/robots.js` - SEO
- `components/` - shared UI components (navbar, pricing, blog, etc.)
- `utils/` - shared utilities

## Key conventions

- Blog posts are plain JSX pages under `app/(content)/blog/<slug>/page.jsx`
- `components/blog.jsx` exports shared blog UI primitives
- Images served from `assets.reviewsonmetaobjects.com` (CDN)
- Env vars: `NEXT_PUBLIC_APP_NAME`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`
