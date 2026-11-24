import { aboutPhoto } from "../../content/photos";
import { AboutPhoto, Copy, Row, Section } from "./About.styles";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Row>
        <AboutPhoto photo={aboutPhoto} />
        <Copy>
          <h2 id="about-title">About Beanies</h2>
          <p>Hello! I'm Natasha and this is my dog Winnie.</p>
          <p>
            I started Beanies as nothing makes me happier than spending time
            with animals, so I thought why not make my passion part of my every
            day life.
          </p>
          <p>
            I have worked with animals of all shapes and sizes - in many sectors
            of the industry - since I was 14 years old. I am also qualified with
            BSc Honours in Animal Behaviour and Welfare.
          </p>
          <p>
            My mission is to ensure all your pets needs are catered for. Whether
            that be daily exercise, a welfare pop-in, or sitting/boarding whilst
            you're away.
          </p>
          <p>
            Please get in touch with any questions or enquiries, we'd love to
            hear from you.
          </p>
        </Copy>
      </Row>
    </Section>
  );
}
