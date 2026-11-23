import { assetUrl } from "../../content/assetUrl";
import { logo } from "../../content/photos";
import { Bar, Handle } from "./Footer.styles";

export function Footer() {
  return (
    <Bar id="contact">
      <img src={assetUrl(logo.src)} alt={logo.alt} />
      <p>[YOUR EMAIL] · [YOUR PHONE NUMBER]</p>
      <Handle href="https://www.instagram.com/beaniespetservices/">@beaniespetservices</Handle>
    </Bar>
  );
}
