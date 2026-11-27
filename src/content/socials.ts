import { siFacebook, siInstagram, siWhatsapp } from "simple-icons";

export type Social = {
  label: string;
  href: string;
  /** SVG path data, drawn on a 24x24 viewBox */
  icon: string;
};

// Shown as text with a mailto: link in the footer (the link does nothing without a mail app, so the address stays visible)
export const email = "beaniespets@outlook.com";

// Brand icons come from simple-icons (CC0). Replace the [bracketed] parts with the real details
export const socials: Social[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/07843449507",
    icon: siWhatsapp.path,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Beanies-Pet-Services/61578060725283/?mibextid=wwXIfr&rdid=TC6GT9cClnZ8L2kT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BfArpTLQz%2F%3Fmibextid%3DwwXIfr",
    icon: siFacebook.path,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/beaniespetservices/",
    icon: siInstagram.path,
  },
];
