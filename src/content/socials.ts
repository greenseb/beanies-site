import { siFacebook, siInstagram, siWhatsapp } from "simple-icons";

export type Social = {
  label: string;
  href: string;
  /** SVG path data, drawn on a 24x24 viewBox */
  icon: string;
};

// Shown as text with a mailto: link in the footer (the link does nothing without a mail app, so the address stays visible)
export const email = "beaniespets@outlook.com";

// Brand icons come from simple-icons (CC0). WhatsApp needs the international number with no + or leading 0
export const socials: Social[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/447843449507",
    icon: siWhatsapp.path,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Beanies-Pet-Services/61578060725283/",
    icon: siFacebook.path,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/beaniespetservices/",
    icon: siInstagram.path,
  },
];
