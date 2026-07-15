import Link from "next/link";
import type { Project } from "../content/site-content";
import { LocalizedText } from "./LocalizedText";
import { ProjectCover } from "./ProjectCover";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card${featured ? " project-card--featured" : ""}`}>
      <Link className="project-card-cover" href={`/projects/${project.slug}`} aria-label={`${project.title.en} project details`}>
        <ProjectCover project={project} />
      </Link>
      <div className="project-card-content">
        <div className="card-meta">
          <span>{project.index}</span>
          <span><LocalizedText value={project.eyebrow} /></span>
          {project.placeholder && (
            <span className="placeholder-label">
              <span className="lang lang-zh">内容占位</span>
              <span className="lang lang-en" lang="en">Placeholder</span>
            </span>
          )}
        </div>
        <h3><LocalizedText value={project.title} /></h3>
        <p><LocalizedText value={project.summary} /></p>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          <span className="lang lang-zh">查看案例</span>
          <span className="lang lang-en" lang="en">View case study</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
