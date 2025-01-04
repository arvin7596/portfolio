import SkillItem from "./parts/skill-item/SkillItem";
import { Container } from "./Skills.style";
import Header from "./../../ui/header/Header";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { useSkills } from "../../hooks/useSkills";
import Spinner from "../../ui/spinner/Spinner";
function Skills() {
  const { skills, loadingSkills } = useSkills();
  if (loadingSkills) return <Spinner />;

  return (
    <>
      <Header title={"my skills"} icon={<HiOutlinePuzzlePiece />}>
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
