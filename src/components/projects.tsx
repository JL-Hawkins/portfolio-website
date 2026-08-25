import { useState } from "react";

import {
  featuredProjects,
  cadProjects,
  type Project,
} from "../data/projects";

import ProjectCard from "./projectCard";
import ProjectModal from "./projectModal";

import "./projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <h2>Engineering Projects</h2>

      <h3 className="projects-subheading projects-subheading-first">
        Featured Projects
      </h3>

      <div className="projects-grid featured-projects">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            size="large"
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <h3 className="projects-subheading">
        CAD Projects
      </h3>

      <div className="projects-grid cad-projects">
        {cadProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            size="small"
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;