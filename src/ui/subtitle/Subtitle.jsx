import { Container } from "./Subtitle.style";

function Subtitle({ icon, title }) {
  return (
    <Container>
      {icon}
      {title}
    </Container>
  );
}

export default Subtitle;
