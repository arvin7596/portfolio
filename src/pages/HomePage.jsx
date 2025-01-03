import Introduce from "./../components/introduce/Introduce";
import HomeLayout from "../layout/Home/HomeLayout";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import Animated from "../ui/animated/Animated";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";
import Sidebar from "../components/sidebar/sidebar";
import React, { useEffect } from "react";
import { getUserInfo } from "../services/apiUserInfo";
import Section from "../ui/section/Section";
import { Element, Link } from "react-scroll";
import Scroll from "react-scroll";
import Portfolio from "../components/portfolio/Portfolio";
const ScrollLink = Scroll.ScrollLink;

function HomePage() {
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <HomeLayout>
      <Section title="Home">
        <Sidebar />
        <Introduce />
      </Section>
      <Section title="About">
        <Animated>
          <About />
        </Animated>
      </Section>
      <Section title="Resume">
        <Animated>
          <Resume />
        </Animated>
      </Section>
      <Section title="Skills">
        <Animated>
          <Skills />
        </Animated>
      </Section>
      <Section title="Portfolio">
        <Animated>
          <Portfolio />
        </Animated>
      </Section>
      <Section title="Contact">
        <Animated>
          <Contact />
        </Animated>
      </Section>
    </HomeLayout>
  );
}

export default HomePage;
