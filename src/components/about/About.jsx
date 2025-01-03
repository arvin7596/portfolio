import { HiOutlineUser } from "react-icons/hi2";
import Header from "../../ui/header/Header";
import { Container, Description } from "./About.style";
import { useUserInfo } from "../../hooks/useUserInfo";

function About() {
  const { userInfo, loadingUserInfo } = useUserInfo();
  if (loadingUserInfo) return <></>;
  const specialWords = userInfo.about.split(" ").slice(-2);
  let normalText = userInfo.about.split(" ");
  normalText = normalText.slice(0, normalText.length - 2);
  return (
    <Container>
      <Header icon={<HiOutlineUser />} title="about">
        {normalText.join(" ")} <span>{specialWords.join(" ")}</span>
      </Header>
      <Description>{userInfo["about_description"]}</Description>
    </Container>
  );
}

export default About;
