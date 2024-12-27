import { Container } from "./Resume.style";
import ResumeItem from "./parts/resume-item/ResumeItem";
import Header from "./../../ui/header/Header";
import { HiMiniBriefcase } from "react-icons/hi2";
import { useResume } from "../../hooks/useResume";

function Resume() {
  const { resume, loadingResume } = useResume();
  if (loadingResume) return;
  const items = resume.reduce((acc, item) => {
    let group = acc.find((group) => group.start_year === item.start_year);
    if (!group) {
      group = { start_year: item.start_year, items: [] };
      acc.push(group);
    }
    group.items.push(item);
    return acc;
  }, []);

  return (
    <>
      <Header title="resume" icon={<HiMiniBriefcase />}>
        Education & <span>Experience</span>
      </Header>
      <Container>
        {items
          .sort((a, b) => b.start_year - a.start_year)
          .map((data) => (
            <ResumeItem data={data} key={data.id} />
          ))}
      </Container>
    </>
  );
}

export default Resume;
