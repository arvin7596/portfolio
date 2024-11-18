import { HiHome } from "react-icons/hi2";
import { Description } from "../../ui/description/Description.style";
import { Container } from "./Introduce.style";
import Header from "../../ui/header/Header";
import ResumeButton from "../resume/parts/resume-button/ResumeButton";
import { useIntroduce } from "./useIntroduce";

function Introduce() {
  const { userInfo, loadingUserInfo } = useIntroduce();
  if (loadingUserInfo) return <></>;

  return (
    <Container>
      <Header icon={<HiHome />} title="introduce" isLarge={true}>
        Say Hi from <span>{userInfo.name}</span>, {userInfo.job}
      </Header>
      <Description>{userInfo["introduce_description"]}</Description>
      <ResumeButton />
    </Container>
  );
}

export default Introduce;
