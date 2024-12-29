import { useUserInfo } from "../../../../hooks/useUserInfo";
import { Container, Image } from "./ProfileImage.style";

function ProfileImage({ image }) {
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
}

export default ProfileImage;
