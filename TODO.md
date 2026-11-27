# TODO

Planned work, newest ideas at the bottom of each section. Tick items off (and move them to Done) in the PR that completes them.

## Bugs

- [ ] Floating "Request a booking" button on phones takes two taps on iPhone Safari (the first tap expands the toolbar). Currently off via `floatingBookingButton` in `src/content/flags.ts`.
  - Tried without success: more bottom padding, safe-area padding with `viewport-fit=cover`, removing the slide animation, `position: sticky`, floating it 50 to 96px up, and subtracting Safari's toolbar height from its offset.
  - The hero button (same link, not pinned) works, so something pinned near the bottom is the trigger.
  - Not tried yet: a bar pinned to the top of the screen, or a different placement.
  - Can't be reproduced in Playwright's emulation (no Safari toolbar); needs a real iPhone or the Xcode Simulator.

## Before launch

- [ ] Fill in the `[bracketed]` text in `src/components/About/About.tsx` (introduction, areas covered).
- [ ] Fill in the `[bracketed]` WhatsApp number and Facebook page in `src/content/socials.ts` (the footer icon links).
- [ ] Add the real photos (`src/content/photos.ts`, images in `public/images/`).
- [ ] Set `VITE_FORM_ENDPOINT` (repo variable for the deploy, and `.env` locally) and send a test booking.
- [ ] Set `comingSoon` to `false` in `src/content/flags.ts` once ready for customers.
- [ ] Drop `--base=/beanies-site/` from `.github/workflows/deploy.yml` once the custom domain is live.

## Features

- [ ] Decide on a replacement for the floating booking button, or leave it out (see the bug above).

## Ideas / maybe

- [ ] Coming soon page: its own page title and description in `index.html`, and perhaps a contact handle.
- [ ] Test for the "form isn't connected" message (needs a second dev server without an endpoint).
- [ ] Privacy notice if analytics or session replay are ever added.

## Done

- [x] Burger menu open and close animation (#4)
- [x] Coming soon page behind a feature flag (#5)
- [x] Playwright e2e tests, CI workflow and iPhone and Android profiles (#5, #9)
- [x] Coming soon page no longer scrolls on phones
