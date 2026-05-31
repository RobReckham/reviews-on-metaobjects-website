# Website - Reviews on Metaobjects

Marketing/content website for the Reviews on Metaobjects Shopify app.

## Business context

You fill find all context in the symlinked context folder:
@.context/*

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
