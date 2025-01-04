import { Container } from "./Header.style";

function Header({ logo }) {
  return (
    <Container>
      <img src={logo} width={300} />
    </Container>
  );
}

export default Header;
