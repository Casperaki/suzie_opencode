# Blank Template

A minimal Next.js starter with TypeScript, Tailwind CSS, and shadcn/ui pre-configured.

## What's Included

- **Next.js** (App Router) with TypeScript in strict mode
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** components: Button, Input, Label, Card, Dropdown Menu, Sheet, Separator, Skeleton, Sonner (toast)
- **Path aliases** configured (`@/` points to project root)
- Error and not-found pages

## Getting Started

1. Clone this template:
   ```bash
   git clone <repo-url> my-app
   cd my-app
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

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_APP_NAME` | Application name shown in browser tab |

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Browse available components at [ui.shadcn.com](https://ui.shadcn.com/docs/components).

## Deploy to Vercel

Push to a Git repository and import into Vercel. No additional configuration needed.
