import { Tooltip } from "react-tooltip";
import { Container } from "./MenuItem.style";

function MenuItem({ Icon, title }) {
  return (
    <>
      <Container
        data-tooltip-id={title}
        data-tooltip-content={title}
        data-tooltip-place="left"
      >
        <Icon />
      </Container>
      <Tooltip id={title} />
    </>
  );
}

export default MenuItem;
