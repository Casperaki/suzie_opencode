# lib/

Shared utilities, data fetching, and site configuration.

## Files

- `utils.ts` -- Exports `cn()`, a helper that merges Tailwind classes using `clsx` and `tailwind-merge`.
- `constants.ts` -- Central configuration for all site content: site name, nav items, features, pricing plans, FAQs, testimonials, footer links, and social links. Edit this file to change site copy.
- `blog.ts` -- Blog utilities. Reads MDX files from `content/blog/`, parses frontmatter with `gray-matter`, and calculates reading time. Exports `getAllPosts()`, `getPostBySlug()`, and `getAllSlugs()`.

## Extending

Add new utility files here for things like API clients, validation schemas, or analytics helpers.
