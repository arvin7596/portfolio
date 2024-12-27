import Animated from "../../../../ui/animated/Animated";
import { Container, Icon, Title } from "./SkillItem.style";

function SkillItem({ title, logo, index }) {
  if (index % 2 === 0) {
    return (
      <Animated
        animationVariants={
          index === 2 || index === 6
            ? {
                visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                hidden: { opacity: 0, y: 70 },
              }
            : {
                visible: { opacity: 1, x: 0, transition: { duration: 1 } },
                hidden: { opacity: 0, x: 70 },
              }
        }
      >
        <Container>
          <Icon src={logo} alt={`${title} logo`} />
          <Title>{title}</Title>
        </Container>
      </Animated>
    );
  }
  return (
    <Animated
      animationVariants={{
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: -70 },
      }}
    >
      <Container>
        <Icon src={logo} alt={`${title} logo`} />
        <Title>{title}</Title>
      </Container>
    </Animated>
  );
}

export default SkillItem;
