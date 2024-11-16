import { Container, Content } from "./HomeLayout.style";
import Summary from "./../../components/summary/Summary";
import Menu from "../../components/menu/Menu";
function HomeLayout({ children }) {
  return (
    <>
      <Summary />
      <Menu />
      <Container>
        <Content>{children}</Content>
      </Container>
      ;
    </>
  );
}

export default HomeLayout;
