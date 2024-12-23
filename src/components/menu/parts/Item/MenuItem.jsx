import { Tooltip } from "react-tooltip";
import { Container } from "./MenuItem.style";
import { Link } from "react-scroll";

function MenuItem({ Icon, title }) {
  return (
    <>
      <Container
        data-tooltip-id={title}
        data-tooltip-content={title}
        data-tooltip-place="left"
      >
        <Link
          to={title}
          smooth={true}
          offset={-50}
          duration={500}
          containerId="content-wrapper"
          activeClass="active"
          spy={true}
        >
          <Icon />
        </Link>
      </Container>
      <Tooltip id={title} />
    </>
  );
}

export default MenuItem;
