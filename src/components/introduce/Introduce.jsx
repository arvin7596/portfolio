import { HiHome } from "react-icons/hi2";
import { Description } from "../../ui/description/Description.style";
import { Container } from "./Introduce.style";
import Header from "../../ui/header/Header";
import ResumeButton from "../resume/parts/resume-button/ResumeButton";
// import { motion } from "framer-motion";
function Introduce() {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 1 }}
    // >
    <Container>
      <Header icon={<HiHome />} title="introduce" isLarge={true}>
        Say Hi from <span>Arvin</span>, Front-End Developer
      </Header>
      <Description>This is description</Description>
      <ResumeButton />
    </Container>
    // </motion.div>
  );
}

export default Introduce;
