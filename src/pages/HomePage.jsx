import Introduce from "./../components/introduce/Introduce";
import HomeLayout from "../layout/Home/HomeLayout";
import About from "../components/about/about";
import Resume from "../components/resume/Resume";
import Animated from "../ui/animated/Animated";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";
import Sidebar from "../components/sidebar/sidebar";
import React, { useEffect } from "react";
import { getUserInfo } from "../services/apiUserInfo";

function HomePage() {
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <HomeLayout>
      <>
        <Sidebar />
        <Introduce />
      </>
      <Animated>
        <About />
      </Animated>
      <Animated
        animationVariants={{
          visible: { opacity: 1, scale: 1.1, transition: { duration: 0.5 } },
          hidden: { opacity: 0, scale: 0.9 },
        }}
      >
        <Resume />
      </Animated>
      <Animated>
        <Skills />
      </Animated>
      <Animated>
        <Contact />
      </Animated>
    </HomeLayout>
  );
}

export default HomePage;
