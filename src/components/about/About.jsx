import { HiMiniUser } from "react-icons/hi2";
import Header from "../../ui/header/Header";
import { Container, Description } from "./About.style";

function About() {
  return (
    <Container>
      <Header icon={<HiMiniUser />} title="about">
        Say Hi from <span>Arvin</span>, Front-End Developer
      </Header>
      <Description>This is description</Description>
    </Container>
  );
}

export default About;
