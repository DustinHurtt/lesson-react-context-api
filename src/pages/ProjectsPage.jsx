// src/pages/ProjectsPage.jsx

import { useState, useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projects-data.json";

function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);

  const { theme } = useContext(ThemeContext)

  return (
    <div className={"ProjectsPage " + theme}>
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
