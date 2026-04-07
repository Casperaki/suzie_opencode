# app/

Next.js App Router directory. All routes are file-based.

## Structure

- `layout.tsx` -- Root layout. Sets fonts (Geist), global metadata, and renders the `<Toaster />` for toast notifications.
- `page.tsx` -- Home page (`/`).
- `globals.css` -- Tailwind CSS imports and CSS custom properties for theming.
- `error.tsx` -- Global error boundary (client component).
- `not-found.tsx` -- Custom 404 page.

## Adding routes

Create a folder with a `page.tsx` inside it. For example, `app/about/page.tsx` becomes `/about`.

## Route groups

Use parenthesized folders like `(marketing)` to organize routes without affecting the URL. Each group can have its own `layout.tsx`.
