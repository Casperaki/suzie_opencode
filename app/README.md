# app/

Next.js App Router directory for the content/marketing site.

## Structure

- `layout.tsx` -- Root layout with fonts, navbar, footer, and `<Toaster />`.
- `page.tsx` -- Landing page. Composes section components (Hero, Features, Pricing, etc.).
- `globals.css` -- Tailwind CSS imports and theme variables.
- `actions.ts` -- Server actions (e.g., contact form submission).
- `loading.tsx` -- Global loading skeleton.
- `error.tsx` / `not-found.tsx` -- Error and 404 pages.
- `robots.ts` / `sitemap.ts` -- SEO configuration for crawlers.

## Blog routes

- `blog/page.tsx` -- Blog listing page. Reads all posts from `content/blog/`.
- `blog/[slug]/page.tsx` -- Individual blog post page. Uses the slug to load MDX content.

## Adding pages

Create a folder with `page.tsx` inside. For example, `app/about/page.tsx` becomes `/about`.
