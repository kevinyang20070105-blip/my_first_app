import type { Project } from "../content/site-content";

export function ProjectCover({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-cover project-cover--${project.theme}${compact ? " project-cover--compact" : ""}`} aria-hidden="true">
      <div className="cover-grid" />
      <div className="cover-orbit cover-orbit--one" />
      <div className="cover-orbit cover-orbit--two" />
      <span className="cover-index">{project.index}</span>
      <span className="cover-mark">KV / LAB</span>
      <div className="cover-node cover-node--one" />
      <div className="cover-node cover-node--two" />
    </div>
  );
}
