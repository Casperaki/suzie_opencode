# components/layout/

Page-level layout components used in the root layout.

## Files

- `navbar.tsx` -- Top navigation bar. Reads `NAV_ITEMS` and `CTA_TEXT`/`CTA_HREF` from `lib/constants.ts`. Includes mobile hamburger menu via `Sheet`.
- `footer.tsx` -- Site footer. Reads `FOOTER_LINKS` and `SOCIAL_LINKS` from `lib/constants.ts`.

## Customization

To change navigation links, edit the constants in `lib/constants.ts` rather than modifying these components directly. Only modify these files to change the visual layout or behavior.
