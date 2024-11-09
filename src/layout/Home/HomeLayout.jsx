import { Container, Content } from "./HomeLayout.style";
import Summary from "./../../components/summary/Summary";
function HomeLayout({ children }) {
  return (
    <>
      <Summary />
      <Container>
        <Content>{children}</Content>
      </Container>
      ;
    </>
  );
}

export default HomeLayout;
