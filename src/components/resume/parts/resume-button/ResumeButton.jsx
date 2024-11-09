import { HiArrowDown } from "react-icons/hi2";
import { Icon, Image, Container } from "./ResumeButton.style";

function ResumeButton() {
  return (
    <Container>
      <Image src="resume-button.png" />
      <Icon>{<HiArrowDown />}</Icon>
    </Container>
  );
}

export default ResumeButton;
