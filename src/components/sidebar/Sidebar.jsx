import { HiBars2 } from "react-icons/hi2";
import { useSidebar } from "../../hooks/useSidebar";
import { Button, Container, Menu, Overlay } from "./sidebar.style";
import SidebarList from "./parts/list/SidebarList";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <>
      <Button onClick={toggleSidebar}>
        <HiBars2 />
      </Button>
      <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />
      <Container isOpen={isSidebarOpen}>
        <Menu>
          <SidebarList />
        </Menu>
      </Container>
    </>
  );
}

export default Sidebar;
