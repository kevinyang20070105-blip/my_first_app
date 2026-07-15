import type { Metadata } from "next";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/site-content";

export const metadata: Metadata = {
  title: "Projects / 项目",
  description: "Selected Web3 and AI research prototypes and systems explorations by Kv.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="page-shell shell">
      <header className="page-hero page-hero--index">
        <div className="page-hero-kicker"><span>02</span><span>SELECTED PROJECTS</span></div>
        <h1>
          <span className="lang lang-zh">从问题出发，<br /><em>用原型寻找答案。</em></span>
          <span className="lang lang-en" lang="en">Start with the problem.<br /><em>Test the answer through prototypes.</em></span>
        </h1>
        <div className="page-hero-intro">
          <p>
            <span className="lang lang-zh">以下案例目前是用于展示网站结构的概念内容。待收到真实简历后，将替换为可验证的项目、贡献和结果。</span>
            <span className="lang lang-en" lang="en">These case studies currently demonstrate the portfolio structure. They will be replaced with verified work, contributions, and outcomes once the résumé is supplied.</span>
          </p>
        </div>
      </header>

      <section className="projects-index" aria-label="Project list">
        {projects.map((project, index) => (
          <ProjectCard project={project} featured={index === 0} key={project.slug} />
        ))}
      </section>
    </div>
  );
}
