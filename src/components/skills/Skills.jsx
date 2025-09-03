import SkillItem from "./parts/skill-item/SkillItem";
// import { Container } from "./Skills.style";
import Header from "./../../ui/header/Header";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { useSkills } from "../../hooks/useSkills";
import Spinner from "../../ui/spinner/Spinner";
import { Col, Row } from "../../ui/grid/Grid";
function Skills() {
  const { skills, loadingSkills } = useSkills();
  if (loadingSkills) return <Spinner />;

  return (
    <>
      <Header title={"my skills"} icon={<HiOutlinePuzzlePiece />}>
        My <span>Advantages</span>
      </Header>
      <Row gap={16}>
        {skills
          .sort((a, b) => a.index - b.index)
          .map((skill) => (
            <Col
              key={skill.id}
              xs={6}
              sm={4}
              md={3}
              style={{ padding: "0 8px" }}
            >
              <SkillItem
                title={skill.title}
                logo={skill.logo}
                index={skill.index}
              />
            </Col>
          ))}
      </Row>
    </>
  );
}

export default Skills;
