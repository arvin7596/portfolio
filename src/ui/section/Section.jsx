import { Element } from "react-scroll";
import { Container } from "./Section.style";

function Section({ title, children }) {
  return (
    <Element name={title}>
      <Container>{children}</Container>
    </Element>
  );
}

export default Section;
