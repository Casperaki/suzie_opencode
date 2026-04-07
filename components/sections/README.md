# components/sections/

Landing page sections. Each component renders one section of the home page.

## Files

- `hero.tsx` -- Hero banner with headline and CTA button.
- `features.tsx` -- Feature grid. Reads `FEATURES` from `lib/constants.ts`.
- `pricing.tsx` -- Pricing cards. Reads `PLANS` from `lib/constants.ts`.
- `testimonials.tsx` -- Customer testimonials. Reads `TESTIMONIALS` from `lib/constants.ts`.
- `faq.tsx` -- Accordion FAQ. Reads `FAQ_ITEMS` from `lib/constants.ts`.
- `cta.tsx` -- Call-to-action banner.
- `contact-form.tsx` -- Contact form (client component). Submits via server action in `app/actions.ts`.

## How they work

All section data (features, plans, FAQs, testimonials) is defined in `lib/constants.ts`. To change content, edit the constants -- not the components. The components handle layout and styling only.

## Adding a new section

1. Create a new file in this directory.
2. Use `SectionWrapper` from `components/shared/` for consistent spacing.
3. Add it to `app/page.tsx` in the desired position.
