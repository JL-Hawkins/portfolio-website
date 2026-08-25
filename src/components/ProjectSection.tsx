import type { ReactNode } from "react";

type ProjectSectionProps = {
  title: string;
  children: ReactNode;
};

export default function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <div className="project-section">
      <h3 className="project-section-title">{title}</h3>
      <p className="project-section-text">{children}</p>
    </div>
  );
}