# Content Site Template

A public-facing website with marketing pages, MDX blog, and SEO optimization. Built with Next.js, Tailwind CSS, and shadcn/ui.

## What's Included

- **Homepage** with hero, features, testimonials, pricing, FAQ, CTA, and contact form sections
- **Blog** powered by MDX files with frontmatter, tags, and reading time
- **SEO** with per-page metadata, Open Graph, sitemap, and robots.txt
- **Responsive** navbar with mobile menu and multi-column footer
- **Contact form** with Zod validation and server action

## Getting Started

1. Clone this template:
   ```bash
   git clone <repo-url> my-site
   cd my-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Customizing Content

All site content is driven by **`lib/constants.ts`**. Edit this file to change:

- Site name and description
- Navigation items
- Feature cards
- Pricing tiers
- FAQ questions
- Testimonials
- Social links
- Footer links

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A short description for SEO and post cards."
date: "2024-01-15"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL of your site (used for SEO, sitemap, OG) |

## Deploy to Vercel

Push to a Git repository and import into Vercel. No additional configuration needed.
