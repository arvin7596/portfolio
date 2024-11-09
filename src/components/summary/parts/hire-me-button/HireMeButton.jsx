import { MdOutlineMail } from "react-icons/md";
import { Button, Container, Icon } from "./HireMeButton.style";

function HireMeButton() {
  return (
    <Container>
      <Button href="#hire-me" type="button">
        <Icon>
          <MdOutlineMail />
        </Icon>
        hire me
      </Button>
    </Container>
  );
}

export default HireMeButton;
