import SkillItem from "./parts/skill-item/SkillItem";
import { Container } from "./Skills.style";
import Header from "./../../ui/header/Header";
import { HiMiniPuzzlePiece } from "react-icons/hi2";
import { useSkills } from "../../hooks/useSkills";
function Skills() {
  const { skills, loadingSkills } = useSkills();
  if (loadingSkills) return;

  return (
    <>
      <Header title={"my skills"} icon={<HiMiniPuzzlePiece />}>
        My <span>Advantages</span>
      </Header>
      <Container>
        {skills
          .sort((a, b) => a.index - b.index)
          .map((skill) => (
            <SkillItem
              key={skill.id}
              title={skill.title}
              logo={skill.logo}
              index={skill.index}
            />
          ))}
      </Container>
    </>
  );
}

export default Skills;
