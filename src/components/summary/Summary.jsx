import { useUserInfo } from "../../hooks/useUserInfo";
import MessageButton from "../../ui/message-button/MessageButton";
import { Container, Description, Email, Location } from "./Summary.style";
import Header from "./parts/header/Header";
import ProfileImage from "./parts/profile-image/ProfileImage";
import SocialProfiles from "./parts/social-profile/SocialProfiles";

function Summary() {
  const { userInfo, loadingUserInfo } = useUserInfo();
  if (loadingUserInfo) return;
  const year = new Date();
  return (
    <Container>
      <Header logo={userInfo.logo} />
      <ProfileImage image={userInfo.image} />
      <Email>{userInfo.email}</Email>
      <Location>Based in Augsburg, Germany</Location>
      <Description>
        © {year.getFullYear()} {userInfo.name}. All Rights Reserved
      </Description>
      <SocialProfiles
        linkedin={userInfo.linkedin}
        github={userInfo.github}
        instagram={userInfo.instagram}
      />
      <MessageButton isLink={true}>contact me</MessageButton>
    </Container>
  );
}

export default Summary;
