# Template: Content Site

A public-facing website with marketing sections, MDX blog, and SEO. No auth, no database.

## Stack Versions (read before writing code)

- **Next.js 16** (App Router) — NOT Next.js 14/15. There are breaking changes.
- **Tailwind CSS v4** — CSS-native config in `app/globals.css`, NOT tailwind.config.ts.
- **shadcn/ui v4** (base-ui) — NOT Radix-based. Components use `@base-ui/react`.

## Critical API Differences

### shadcn/ui v4 (base-ui)

- **No `asChild` prop.** Use the `render` prop instead:
  ```tsx
  // WRONG
  <Button asChild><Link href="/foo">Click</Link></Button>
  
  // RIGHT
  <Button render={<Link href="/foo" />}>Click</Button>
  ```
- **`buttonVariants()` is client-only.** The Button has `"use client"`. You cannot call `buttonVariants()` from a server component. Use inline Tailwind classes on `<Link>` or `<a>` tags in server components.
- **Accordion** has no `type="single"` or `collapsible` props.
- **Adding components:** `npx shadcn@latest add <name> -y`

### Next.js 16

- **`params` and `searchParams` are `Promise<...>`.** You must `await` them:
  ```tsx
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  ```
- **`useActionState`** is imported from `react`, NOT from `react-dom`.
- **Middleware** runs on the edge — no Node.js modules.

### Tailwind v4

- No `tailwind.config.ts`. Theme config is in `app/globals.css` under `@theme inline { }`.
- Custom animations are defined as `@keyframes` at the bottom of `globals.css`.

## File Conventions

- **File naming:** kebab-case for files, PascalCase for components, camelCase for functions/variables.
- **Path alias:** `@/` points to project root.
- **Client components:** Must have `"use client"` if they use hooks.

## Architecture

### Customizing Site Content

**Start with `lib/constants.ts`.** All section content is driven by constants:
- `SITE_NAME`, `SITE_DESCRIPTION`, `SITE_URL`
- `NAV_ITEMS` — navigation links
- `FEATURES` — feature cards (each has an icon from lucide-react, title, description)
- `PLANS` — pricing tiers
- `FAQ_ITEMS` — FAQ questions/answers
- `TESTIMONIALS` — testimonial cards
- `SOCIAL_LINKS`, `FOOTER_LINKS`

Section components in `components/sections/` read from these constants. To change content, edit constants — not the components.

### Adding Blog Posts

Create `.mdx` files in `content/blog/` with this frontmatter:
```mdx
---
title: "Post Title"
description: "Short description"
date: "2024-01-15"
author: "Author Name"
tags: ["tag1", "tag2"]
---
```

Blog utilities in `lib/blog.ts` handle reading, parsing, and sorting.

### Animations

Scroll-based animations use `components/shared/animate-on-scroll.tsx` (IntersectionObserver). Wrap any element to animate it on scroll:
```tsx
<AnimateOnScroll direction="up" delay={100}>
  <div>Animates in</div>
</AnimateOnScroll>
```
Directions: `"up"`, `"down"`, `"left"`, `"right"`, `"none"` (fade only).

### SEO

- Root `layout.tsx` sets default metadata with title template.
- Each page can export `metadata` or `generateMetadata`.
- `app/sitemap.ts` auto-generates sitemap including blog posts.
- `app/robots.ts` generates robots.txt.

### Contact Form

The contact form in `components/sections/contact-form.tsx` submits via server action in `app/actions.ts`. Currently logs to console — wire it to Resend, a database, or any email service.
