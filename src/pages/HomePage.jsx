import Introduce from "./../components/introduce/Introduce";
import HomeLayout from "../layout/Home/HomeLayout";
import About from "../components/about/about";
import Resume from "../components/resume/Resume";
import Section from "./../ui/section/Section";
// import { useInView } from "react-intersection-observer";

// const section = {
//   height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "2rem",
// };

function HomePage() {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });
  return (
    <HomeLayout>
      <Section>
        <Introduce />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Resume />
      </Section>
    </HomeLayout>
  );
}

export default HomePage;
