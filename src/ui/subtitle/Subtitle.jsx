import { Container, Title } from "./Subtitle.style";

function Subtitle({ icon, title }) {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
    </Container>
  );
}

export default Subtitle;
