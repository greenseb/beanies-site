// Feature flags. Flip a value and commit (e.g. edit this file on GitHub);
// the site redeploys with the change.
export const flags = {
  // true shows only the logo and "Coming soon"; false shows the full site.
  comingSoon: false,
} satisfies Record<string, boolean>;
