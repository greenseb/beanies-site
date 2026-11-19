import { aboutPhoto } from "../../content/photos";
import { AboutPhoto, Copy, Row, Section } from "./About.styles";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Row>
        <AboutPhoto photo={aboutPhoto} />
        <Copy>
          <h2 id="about-title">About Beanies</h2>
          <p>[Write a short introduction here: who you are, your experience with pets, and what you love about looking after them.]</p>
          <p>[Add the areas you cover and anything customers should know before they book.]</p>
        </Copy>
      </Row>
    </Section>
  );
}
