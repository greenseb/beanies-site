# Beanies Pet Services website

A Vite + React + TypeScript site styled with styled-components. Package manager: pnpm.

## Commands

```sh
pnpm install   # install dependencies (once)
pnpm dev       # start the dev server at http://localhost:5173
pnpm build     # type-check and build to dist/
pnpm preview   # serve the built site locally
```

The contents of `dist/` can go on any static host (Netlify, Cloudflare Pages, GitHub Pages, Vercel).

## Swapping in photos

1. Put your image files in `public/images/` (e.g. `hero.jpg`, `pet-1.jpg`).
2. Open `src/content/photos.ts` and, for each photo, add `src` and update `alt`:

   ```ts
   export const heroPhoto: PhotoSlot = {
     src: "/images/hero.jpg",
     alt: "A spaniel waiting for a walk",
     placeholder: "Hero photo placeholder: a happy pet",
   };
   ```

   The dashed placeholder shows until a photo has a `src`. There is one entry each for the hero and about photos, and three in `galleryPhotos` (add or remove entries to change the number).

## Things to fill in

- **About text, email and phone.** Look for the text in [square brackets] in `src/components/About/About.tsx` and `src/components/Footer/Footer.tsx`.
- **Prices and services.** Edit the array in `src/content/services.ts`.
- **Colours and fonts.** Edit `src/theme.ts`.

## Connecting the booking form

The form posts to a Formspree-style endpoint.

1. Create a free form at formspree.io with the destination email address.
2. Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to the form URL (e.g. `https://formspree.io/f/abcdwxyz`).
3. Restart `pnpm dev`. For a hosted build, set the same variable in your host's environment settings before building.

Until it is set, the form shows a "not connected" message instead of sending.

## Old static site

The original HTML/CSS/JS version is kept in `legacy/` for reference. It isn't part of the build.
