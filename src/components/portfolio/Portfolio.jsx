import { useState } from "react";
import PortfolioModal from "./parts/modal/PortfolioModal";
import { motion } from "framer-motion";
import { ProjectList } from "./Portfolio.style";
import Header from "../../ui/header/Header";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import PortfolioCard from "./parts/card/PortfolioCard";
import { useProjects } from "../../hooks/useProjects";
import Spinner from "../../ui/spinner/Spinner";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projects, loadingProjects } = useProjects();
  if (loadingProjects) return <Spinner />;
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderProjects = () => {
    const groupedProjects = [];
    let buffer = [];
    projects
      .sort((a, b) => a.index - b.index)
      .forEach((project) => {
        if (project.type === "primary") {
          // Add buffer of secondary projects
          if (buffer.length > 0) {
            groupedProjects.push([...buffer]);
            buffer = [];
          }
          // Add primary project as a single item
          groupedProjects.push([project]);
        } else if (project.type === "secondary") {
          buffer.push(project);
          if (buffer.length === 2) {
            groupedProjects.push([...buffer]);
            buffer = [];
          }
        }
      });
    if (buffer.length > 0) groupedProjects.push([...buffer]);
    return groupedProjects.map((group, index) => (
      <ProjectList key={index} isPrimary={group.length === 1}>
        {group.map((project) => (
          <PortfolioCard
            key={project.id}
            as={motion.div}
            title={project.title}
            cover={project.cover}
            images={project.images}
            badges={project.badges}
            link={project.link}
            onClick={() => openModal(project)}
          />
        ))}
      </ProjectList>
    ));
  };
  return (
    <>
      <Header title="resume" icon={<HiOutlineSquares2X2 />}>
        Featured & <span>Projects</span>
      </Header>
      {renderProjects()}
      {isModalOpen && (
        <PortfolioModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}

export default Portfolio;
