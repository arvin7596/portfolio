import Subtitle from "../subtitle/Subtitle";
import { Container, StyledHeader, SubtitleContainer } from "./Header.style";

function Header({ icon, title, children, isLarge }) {
  return (
    <Container>
      <SubtitleContainer>
        <Subtitle icon={icon} title={title} />
      </SubtitleContainer>
      <StyledHeader isLarge={isLarge}>{children}</StyledHeader>
    </Container>
  );
}

export default Header;
