import { HiArrowDown } from "react-icons/hi2";
import { Icon, Image, Container, LinkButton } from "./ResumeButton.style";
import { Link } from "react-scroll";

function ResumeButton() {
  return (
    <LinkButton
      to="Resume"
      smooth={true}
      offset={-50}
      duration={500}
      containerId="content-wrapper"
      style={{}}
    >
      <Container>
        <Image src="resume-button.png" />
        <Icon>
          <HiArrowDown />
        </Icon>
      </Container>
    </LinkButton>
  );
}

export default ResumeButton;
