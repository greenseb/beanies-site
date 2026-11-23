# Beanies Pet Services website

Vite + React + TypeScript + styled-components, managed with pnpm. See README.md for setup.

## Commands

- `pnpm dev`: dev server
- `pnpm build`: type-check (`tsc --noEmit`) then build to `dist/`. Run it after changes to confirm nothing is broken.

## Structure and conventions

- Each component has its own folder in `src/components/`: `Name.tsx`, `Name.styles.ts`, `Name.types.ts` (only if it has types of its own) and `index.ts` exporting the component. `App.tsx` imports from the folder.
- Shared building blocks (`Wrap`, buttons, `SectionTitle`, `Photo`) live in `src/components/ui/`.
- Colours, fonts and radius come from the theme in `src/theme.ts`. Don't hard-code them in styles.
- Page content lives in `src/content/`: `services.ts` drives the price list, `photos.ts` holds the photo slots.
- The design is meant to stay as the original static site: don't change colours, fonts, spacing or copy unless asked.
- Keep it accessible: menu `aria-expanded`, Escape to close, skip link, form labels and the live status message.
- Leave the [bracketed] text and photo placeholders for the owner to fill in.
- Planned work lives in `TODO.md`. Check it before starting, and tick items off (moving them to Done) in the PR that completes them.
- The booking form endpoint comes from `VITE_FORM_ENDPOINT` (see `.env.example`). Keep the "not connected" message when it's unset.

## Commits

- Only commit when asked.
- Write the subject line as a short imperative summary of what changed (e.g. "Anchor hero photo crop to the top"), under about 70 characters. Not "Update files" or "Fix stuff". Include a prefix like "fix:" or "feat:" depending on the change.
- Add a body when the change isn't obvious from the subject: say what changed and why, in a few lines or bullets.
- Keep unrelated changes in separate commits.
