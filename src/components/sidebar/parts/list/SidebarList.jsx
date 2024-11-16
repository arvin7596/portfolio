import { SIDEBAR_ITEMS } from "../../../../constants/sidebar";
import { Icon, List, SidebarItem } from "./SidebarList.style";

function SidebarList() {
  return (
    <List>
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem key={item.title}>
          <Icon>{item.icon}</Icon>
          {item.title}
        </SidebarItem>
      ))}
    </List>
  );
}

export default SidebarList;
