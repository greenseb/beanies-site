import { assetUrl } from "../../content/assetUrl";
import { logo } from "../../content/photos";
import { email } from "../../content/socials";
import { SocialLinks } from "../SocialLinks";
import { Bar, Email } from "./Footer.styles";

export function Footer() {
  return (
    <Bar id="contact">
      <img src={assetUrl(logo.src)} alt={logo.alt} />
      <Email href={`mailto:${email}`}>{email}</Email>
      <SocialLinks />
    </Bar>
  );
}
