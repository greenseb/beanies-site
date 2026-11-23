import { heroPhoto } from "../../content/photos";
import { ButtonLink } from "../ui";
import {
  Actions,
  Copy,
  HeroPhoto,
  Lead,
  Section,
} from "./Hero.styles";

export function Hero() {
  return (
    <Section id="top">
      <Copy>
        {/* <Eyebrow>PET SERVICES</Eyebrow> */}
        <h1>Care that fits your pet</h1>
        <Lead>
          Walks, pop-ins, sitting and pet taxi, tailored to your pet. Small
          mammals are a speciality.
        </Lead>
        <Actions id="hero-actions">
          <ButtonLink href="#book">Request a booking</ButtonLink>
          <ButtonLink $variant="outline" href="#prices">
            View price list
          </ButtonLink>
        </Actions>
      </Copy>
      <HeroPhoto photo={heroPhoto} />
    </Section>
  );
}
