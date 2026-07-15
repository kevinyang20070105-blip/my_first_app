import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LocalizedText } from "../../components/LocalizedText";
import { ProjectCover } from "../../components/ProjectCover";
import { getProject, projects } from "../../content/site-content";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title.en,
    description: project.summary.en,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title.en} — Kv`,
      description: project.summary.en,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="project-detail page-shell shell">
      <header className="detail-hero">
        <div className="detail-breadcrumb">
          <Link href="/projects">
            <span className="lang lang-zh">项目</span>
            <span className="lang lang-en" lang="en">Projects</span>
          </Link>
          <span>/</span>
          <span>{project.index}</span>
        </div>
        <div className="detail-title-row">
          <div>
            <p className="detail-eyebrow"><LocalizedText value={project.eyebrow} /></p>
            <h1><LocalizedText value={project.title} /></h1>
          </div>
          <p><LocalizedText value={project.summary} /></p>
        </div>
        <div className="detail-tags">
          {project.stack.map((item) => <span key={item}>{item}</span>)}
          {project.placeholder && (
            <span className="placeholder-label">
              <span className="lang lang-zh">内容占位</span>
              <span className="lang lang-en" lang="en">Placeholder content</span>
            </span>
          )}
        </div>
      </header>

      <ProjectCover project={project} />

      <section className="case-section">
        <div className="case-label"><span>01</span><span>CONTEXT</span></div>
        <div className="case-copy case-copy--large"><p><LocalizedText value={project.context} /></p></div>
      </section>

      <section className="case-section">
        <div className="case-label"><span>02</span><span>CHALLENGE</span></div>
        <div className="case-copy">
          <h2>
            <span className="lang lang-zh">需要回答的问题</span>
            <span className="lang lang-en" lang="en">The question to answer</span>
          </h2>
          <p><LocalizedText value={project.challenge} /></p>
        </div>
      </section>

      <section className="case-section">
        <div className="case-label"><span>03</span><span>CONTRIBUTION</span></div>
        <div className="case-copy">
          <h2>
            <span className="lang lang-zh">我的贡献</span>
            <span className="lang lang-en" lang="en">My contribution</span>
          </h2>
          <ol className="contribution-list">
            {project.contribution.map((item, index) => (
              <li key={item.en}>
                <span>0{index + 1}</span>
                <span><LocalizedText value={item} /></span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="case-section case-section--outcome">
        <div className="case-label"><span>04</span><span>OUTCOME</span></div>
        <div className="case-copy">
          <h2>
            <span className="lang lang-zh">结果与待验证项</span>
            <span className="lang lang-en" lang="en">Outcome & verification</span>
          </h2>
          <p><LocalizedText value={project.outcome} /></p>
          <a className="button button--primary" href={project.externalUrl} target="_blank" rel="noreferrer">
            <span className="lang lang-zh">查看 GitHub 主页</span>
            <span className="lang lang-en" lang="en">Visit GitHub profile</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <nav className="next-project" aria-label="Next project">
        <span>
          <span className="lang lang-zh">下一个项目</span>
          <span className="lang lang-en" lang="en">Next project</span>
        </span>
        <Link href={`/projects/${nextProject.slug}`}>
          <span><LocalizedText value={nextProject.title} /></span>
          <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </article>
  );
}
