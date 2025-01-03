import { HiOutlineHome } from "react-icons/hi2";
import {
  Container,
  Experience,
  ExperienceItem,
  ExperienceSubtitle,
  ExperienceTitle,
  Description,
} from "./Introduce.style";
import Header from "../../ui/header/Header";
import ResumeButton from "../resume/parts/resume-button/ResumeButton";
import { useUserInfo } from "../../hooks/useUserInfo";

function Introduce() {
  const { userInfo, loadingUserInfo } = useUserInfo();
  if (loadingUserInfo) return <></>;
  const today = new Date();
  const years =
    today.getYear() - new Date(userInfo["work_start_year"]).getYear();
  return (
    <Container>
      <Header icon={<HiOutlineHome />} title="introduce" isLarge={true}>
        Say Hi from <span>{userInfo.name}</span>, {userInfo.job}
      </Header>
      <Description>{userInfo["introduce_description"]}</Description>
      <ResumeButton />
      <Experience>
        <ExperienceItem>
          <ExperienceTitle>{years - 1}+</ExperienceTitle>
          <ExperienceSubtitle>Years of Experience</ExperienceSubtitle>
        </ExperienceItem>
        <ExperienceItem>
          <ExperienceTitle>{userInfo["project_completed"]}+</ExperienceTitle>
          <ExperienceSubtitle>Projects Completed</ExperienceSubtitle>
        </ExperienceItem>
      </Experience>
    </Container>
  );
}

export default Introduce;
