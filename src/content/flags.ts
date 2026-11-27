// Feature flags. Flip a value and commit (e.g. edit this file on GitHub);
// the site redeploys with the change.
export const flags = {
  // true shows only the logo and "Coming soon"; false shows the full site.
  comingSoon: false,
  // The "Request a booking" form and the links to it. Off: the form is hidden and the hero
  // button says "Contact us" and scrolls to the socials in the footer.
  bookingForm: false,
  // Floating "Request a booking" button on phones (needs bookingForm). Off: on iPhone Safari it took two taps.
  floatingBookingButton: false,
} satisfies Record<string, boolean>;
