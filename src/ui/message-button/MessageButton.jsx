import { Link } from "react-scroll";
import { StyledButton } from "./MessageButton.style";

function MessageButton({ children, isLink = false }) {
  if (isLink) {
    return (
      <Link
        to="Contact"
        smooth={true}
        offset={-50}
        duration={500}
        containerId="content-wrapper"
      >
        <StyledButton>{children}</StyledButton>
      </Link>
    );
  }
  return <StyledButton>{children}</StyledButton>;
}

export default MessageButton;
