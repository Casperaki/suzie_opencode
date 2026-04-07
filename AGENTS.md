# Template: Blank Starter

A minimal Next.js starter. Extend this template by adding pages, components, and dependencies as needed.

## Stack Versions (read before writing code)

- **Next.js 16** (App Router) — NOT Next.js 14/15. There are breaking changes.
- **Tailwind CSS v4** — CSS-native config, NOT tailwind.config.ts. Theme tokens are in `app/globals.css` under `@theme inline { }`.
- **shadcn/ui v4** (base-ui) — NOT the Radix-based shadcn you may know. Components use `@base-ui/react`, not `@radix-ui`.

## Critical API Differences

### shadcn/ui v4 (base-ui)

- **No `asChild` prop.** Use the `render` prop instead:
  ```tsx
  // WRONG
  <Button asChild><Link href="/foo">Click</Link></Button>
  
  // RIGHT
  <Button render={<Link href="/foo" />}>Click</Button>
  ```
- **`buttonVariants()` is client-only.** The Button component has `"use client"`. You cannot call `buttonVariants()` from a server component. Use inline Tailwind classes on `<Link>` or `<a>` tags instead.
- **Accordion** has no `type="single"` or `collapsible` props. Just use `<Accordion>` directly.
- **Adding components:** `npx shadcn@latest add <name> -y`

### Next.js 16

- **`params` and `searchParams` are `Promise<...>`.** You must `await` them:
  ```tsx
  // WRONG
  export default function Page({ params }: { params: { slug: string } }) {
  
  // RIGHT
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  ```
- **`useActionState`** is imported from `react`, NOT from `react-dom`.
- **Middleware** runs on the edge. Do not import Node.js modules (Prisma, bcrypt, etc.) in `middleware.ts`.

### Tailwind v4

- No `tailwind.config.ts`. All theme configuration lives in `app/globals.css`.
- Custom colors, fonts, and spacing use CSS custom properties inside `@theme inline { }`.

## File Conventions

- **File naming:** kebab-case for files, PascalCase for components, camelCase for functions/variables.
- **Path alias:** `@/` points to project root.
- **Client components:** Any component using hooks (useState, useEffect, etc.) must have `"use client"` at the top.

## What to Modify

- `app/page.tsx` — Replace the starter page with your app.
- `app/layout.tsx` — Update metadata (title, description).
- Add new routes as directories under `app/`.
- Add shadcn components as needed with the CLI.
