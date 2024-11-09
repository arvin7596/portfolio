import { Container } from "./Resume.style";
import ResumeItem from "./parts/resume-item/ResumeItem";
import Header from "./../../ui/header/Header";
import { HiMiniBriefcase } from "react-icons/hi2";

function Resume() {
  return (
    <>
      <Header title="resume" icon={<HiMiniBriefcase />}>
        Education & <span>Experience</span>
      </Header>
      <Container>
        <ResumeItem />
        <ResumeItem />
        <ResumeItem />
      </Container>
    </>
  );
}

export default Resume;
