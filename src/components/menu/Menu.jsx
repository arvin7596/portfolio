import MenuItem from "./parts/Item/MenuItem";
import { Container, List } from "./Menu.style";
import { MENU_ITEMS } from "../../constants/menu";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

function Menu() {
  const sectionIds = MENU_ITEMS.map((item) => item.title);
  const activeSection = useIntersectionObserver(sectionIds);

  return (
    <Container>
      <List>
        {MENU_ITEMS.map((item) => {
          return (
            <MenuItem
              key={item.title}
              Icon={item.icon}
              title={item.title}
              isActive={activeSection === item.title}
            />
          );
        })}
      </List>
    </Container>
  );
}

export default Menu;
