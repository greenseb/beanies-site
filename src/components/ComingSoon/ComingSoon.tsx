import { assetUrl } from "../../content/assetUrl";
import { logo } from "../../content/photos";
import { Page } from "./ComingSoon.styles";

export function ComingSoon() {
  return (
    <Page id="main">
      <img src={assetUrl(logo.src)} alt={logo.alt} />
      <h1>coming soon</h1>
    </Page>
  );
}
