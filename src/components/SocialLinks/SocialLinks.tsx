import { socials } from "../../content/socials";
import { Icon, IconLink, List } from "./SocialLinks.styles";

export function SocialLinks() {
  return (
    <List aria-label="Get in touch">
      {socials.map(({ label, href, icon }) => (
        <li key={label}>
          <IconLink href={href} aria-label={label} title={label}>
            <Icon viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d={icon} />
            </Icon>
          </IconLink>
        </li>
      ))}
    </List>
  );
}
