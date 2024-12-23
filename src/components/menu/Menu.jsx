import MenuItem from "./parts/Item/MenuItem";
import { Container, List } from "./Menu.style";
import { MENU_ITEMS } from "../../constants/menu";
function Menu() {
  return (
    <Container>
      <List>
        {MENU_ITEMS.map((item) => {
          return (
            <MenuItem key={item.title} Icon={item.icon} title={item.title} />
          );
        })}
      </List>
    </Container>
  );
}

export default Menu;
