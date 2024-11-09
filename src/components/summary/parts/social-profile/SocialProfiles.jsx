import { SlSocialGithub, SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { Container, Link } from "./SocialProfiles.style";

function SocialProfiles() {
  return (
    <Container>
      <Link
        href={"https://www.linkedin.com/in/hosseinisanaz/"}
        target={"_blank"}
      >
        <TiSocialLinkedin />
      </Link>
      <Link href={"https://github.com/HosseiniSanaz"} target={"_blank"}>
        <SlSocialGithub />
      </Link>
      <Link href={"https://www.instagram.com/ooshoo7/"} target={"_blank"}>
        <SlSocialInstagram />
      </Link>
    </Container>
  );
}

export default SocialProfiles;
