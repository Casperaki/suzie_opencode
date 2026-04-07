# components/ui/

Primitive UI components from [shadcn/ui](https://ui.shadcn.com/). These are copied into the project (not installed as a package) so you can customize them freely.

## Current components

button, card, dropdown-menu, input, label, separator, sheet, skeleton, sonner (toast)

## Adding more components

```bash
npx shadcn@latest add <component-name>
```

This downloads the component source into this directory. Configuration lives in `components.json` at the project root.

## Notes

- All components use the `cn()` utility from `lib/utils.ts` for class merging.
- Styling is driven by CSS custom properties defined in `app/globals.css`.
- Do not manually create files here -- use the CLI so dependencies are handled automatically.
