import "./projectCard.css";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  size: "large" | "small";
  onClick: () => void;
};

function ProjectCard({
  project,
  size,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      className={`project-card project-card-${size}`}
      onClick={onClick}
    >
      <div>
        <span className="project-card-title">
          {project.title}
        </span>

        <span className="project-card-subtitle">
          {project.subtitle}
        </span>
      </div>

      <span className="project-card-link">
        Learn More →
      </span>
    </button>
  );
}

export default ProjectCard;