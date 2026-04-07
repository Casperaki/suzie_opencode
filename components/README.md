# components/

All React components, organized by purpose.

## Subdirectories

- `ui/` -- shadcn/ui primitives (Button, Card, etc.). See its own README.
- `layout/` -- Page-level layout components (navbar, footer).
- `sections/` -- Landing page sections driven by data in `lib/constants.ts`.
- `blog/` -- Blog-specific components (post card, post layout, MDX rendering).
- `shared/` -- Reusable wrapper components (e.g., `SectionWrapper`).

## Client vs server components

Components are server components by default. Files that use hooks, browser APIs, or event handlers have `"use client"` at the top. The `sections/contact-form.tsx` and `blog/mdx-components.tsx` are client components; most others are server components.
