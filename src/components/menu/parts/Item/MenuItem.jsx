import { Tooltip } from "react-tooltip";
import { Container } from "./MenuItem.style";
import { Link } from "react-scroll";

function MenuItem({ Icon, title, isActive }) {
  return (
    <>
      <Container
        data-tooltip-id={title}
        data-tooltip-content={title}
        data-tooltip-place="left"
        className={isActive ? "active" : ""}
      >
        <Link
          to={title}
          smooth={true}
          offset={-80}
          duration={500}
          containerId="content-wrapper"
        >
          <Icon />
        </Link>
      </Container>
      <Tooltip id={title} />
    </>
  );
}

export default MenuItem;
