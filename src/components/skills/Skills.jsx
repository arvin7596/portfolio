import SkillItem from "./parts/skill-item/SkillItem";
import { Container } from "./Skills.style";
import Header from "./../../ui/header/Header";
import { HiMiniPuzzlePiece } from "react-icons/hi2";
function Skills() {
  return (
    <>
      <Header title={"my skills"} icon={<HiMiniPuzzlePiece />}>
        My <span>Advantages</span>
      </Header>
      <Container>
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </Container>
    </>
  );
}

export default Skills;
