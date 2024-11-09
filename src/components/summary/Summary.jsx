import { Container, Description, Email, Location } from "./Summary.style";
import Header from "./parts/header/header";
import HireMeButton from "./parts/hire-me-button/HireMeButton";
import ProfileImage from "./parts/profile-image/ProfileImage";
import SocialProfiles from "./parts/social-profile/SocialProfiles";

function Summary() {
  return (
    <Container>
      <Header />
      <ProfileImage />
      <Email>arvinghaffari75@gmail.com</Email>
      <Location>Based in Berlin, Germany</Location>
      <Description>© 2023 Sanaz. All Rights Reserved</Description>
      <SocialProfiles />
      <HireMeButton />
    </Container>
  );
}

export default Summary;
