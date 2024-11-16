import MenuItem from "./parts/Item/MenuItem";
import { Container } from "./Menu.style";
import { MENU_ITEMS } from "../../constants/menu";
function Menu() {
  return (
    <Container>
      {MENU_ITEMS.map((item) => {
        return (
          <MenuItem key={item.title} Icon={item.icon} title={item.title} />
        );
      })}
    </Container>
  );
}

export default Menu;
