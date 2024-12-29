import { SlSocialGithub, SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { Container, Link } from "./SocialProfiles.style";

function SocialProfiles({ linkedin, github, instagram }) {
  return (
    <Container>
      <Link href={linkedin} target={"_blank"}>
        <TiSocialLinkedin />
      </Link>
      <Link href={github} target={"_blank"}>
        <SlSocialGithub />
      </Link>
      <Link href={instagram} target={"_blank"}>
        <SlSocialInstagram />
      </Link>
    </Container>
  );
}

export default SocialProfiles;
