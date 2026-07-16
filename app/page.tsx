import type { Metadata } from "next";
import Link from "next/link";
import { ArticleRow } from "./components/ArticleRow";
import { LocalizedText } from "./components/LocalizedText";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { articles, capabilities, focusAreas, profile, projects } from "./content/site-content";
import { withBasePath } from "./site-url";

export const metadata: Metadata = {
  title: "Web3 × AI Researcher & Independent Builder",
};

export default function Home() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-meta">
          <p>KV / 2026</p>
          <p>
            <span className="status-dot" aria-hidden="true" />
            <span className="lang lang-zh">上海 · 面向全球</span>
            <span className="lang lang-en" lang="en">Shanghai · Working globally</span>
          </p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="lang lang-zh">研究者 / 独立开发者 / 学生</span>
              <span className="lang lang-en" lang="en">Researcher / Independent builder / Student</span>
            </p>
            <h1 id="hero-title">
              <span className="lang lang-zh">
                研究开放网络，<br />理解智能系统，<br /><em>构建可用之物。</em>
              </span>
              <span className="lang lang-en" lang="en">
                Research open networks.<br />Understand intelligence.<br /><em>Build useful things.</em>
              </span>
            </h1>
          </div>

          <div className="hero-aside">
            <div className="hero-signal" aria-hidden="true">
              <div className="signal-line signal-line--a" />
              <div className="signal-line signal-line--b" />
              <div className="signal-point signal-point--a" />
              <div className="signal-point signal-point--b" />
              <span>01</span>
            </div>
            <p><LocalizedText value={profile.shortBio} /></p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/projects">
                <span className="lang lang-zh">查看项目</span>
                <span className="lang lang-en" lang="en">Explore projects</span>
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button--ghost" href="/contact">
                <span className="lang lang-zh">联系我</span>
                <span className="lang lang-en" lang="en">Get in touch</span>
              </Link>
            </div>
            <a className="resume-link" href={withBasePath("/Kv-Resume-Placeholder.txt")} download>
              <span className="lang lang-zh">下载简历（占位文件）</span>
              <span className="lang lang-en" lang="en">Download résumé (placeholder)</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </div>
      </section>

      <section className="focus-section shell section-space" aria-labelledby="focus-title">
        <SectionHeading
          index="01"
          eyebrow={{ zh: "当前关注", en: "Current focus" }}
          title={{ zh: "下一代基础设施，值得被认真理解。", en: "The next layer of infrastructure deserves careful thought." }}
          description={{ zh: "我关注技术如何改变信任、协作与知识生产，而不只关注技术本身。", en: "I focus on how technology reshapes trust, coordination, and knowledge—not only the technology itself." }}
        />
        <div className="focus-grid" id="focus-title">
          {focusAreas.map((area) => (
            <article className="focus-item" key={area.number}>
              <span>{area.number}</span>
              <h3><LocalizedText value={area.title} /></h3>
              <p><LocalizedText value={area.text} /></p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section shell section-space" aria-labelledby="projects-title">
        <SectionHeading
          index="02"
          eyebrow={{ zh: "精选项目", en: "Selected projects" }}
          title={{ zh: "从问题出发，用原型寻找答案。", en: "Start with the problem. Test the answer through prototypes." }}
        />
        <div id="projects-title" className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
        <div className="section-more">
          <Link className="text-link text-link--large" href="/projects">
            <span className="lang lang-zh">浏览全部项目</span>
            <span className="lang lang-en" lang="en">View all projects</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="writing-section shell section-space" aria-labelledby="writing-title">
        <SectionHeading
          index="03"
          eyebrow={{ zh: "研究与文章", en: "Research & writing" }}
          title={{ zh: "把推理过程公开，而不只公布结论。", en: "Make the reasoning public—not just the conclusion." }}
          description={{ zh: "关于可信系统、开放网络与研究方法的持续笔记。", en: "Ongoing notes on trustworthy systems, open networks, and research methods." }}
        />
        <div className="article-list" id="writing-title">
          {articles.map((article) => <ArticleRow article={article} key={article.slug} />)}
        </div>
        <div className="section-more">
          <Link className="text-link text-link--large" href="/writing">
            <span className="lang lang-zh">阅读全部文章</span>
            <span className="lang lang-en" lang="en">Read all writing</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="about-preview shell section-space" aria-labelledby="about-preview-title">
        <div className="about-preview-grid">
          <div>
            <p className="section-kicker"><span>04</span><span><span className="lang lang-zh">关于我</span><span className="lang lang-en" lang="en">About me</span></span></p>
          </div>
          <div className="about-preview-copy">
            <h2 id="about-preview-title">
              <span className="lang lang-zh">先建立证据，<br />再形成判断，<br /><em>最后用原型检验。</em></span>
              <span className="lang lang-en" lang="en">Build the evidence.<br />Form a point of view.<br /><em>Then test it by making.</em></span>
            </h2>
            <p>
              <span className="lang lang-zh">我在 Web3、AI 与软件构建的交叉处学习和实践。相比追逐每一个新概念，我更关心技术如何改变协作、所有权与知识工作的方式。</span>
              <span className="lang lang-en" lang="en">I learn and build at the intersection of Web3, AI, and software. Rather than chasing every new idea, I focus on how technology changes coordination, ownership, and knowledge work.</span>
            </p>
            <div className="capability-list">
              {capabilities.map((capability, index) => (
                <div key={capability.en}>
                  <span>0{index + 1}</span>
                  <span><LocalizedText value={capability} /></span>
                </div>
              ))}
            </div>
            <Link className="text-link text-link--large" href="/about">
              <span className="lang lang-zh">进一步了解</span>
              <span className="lang lang-en" lang="en">More about me</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-banner shell" aria-labelledby="contact-banner-title">
        <p className="section-kicker"><span>05</span><span>OPEN CHANNEL</span></p>
        <div className="contact-banner-main">
          <h2 id="contact-banner-title">
            <span className="lang lang-zh">有值得一起研究或构建的问题吗？</span>
            <span className="lang lang-en" lang="en">Have a problem worth researching or building?</span>
          </h2>
          <Link href="/contact" className="round-link" aria-label="Contact Kv">
            <span className="lang lang-zh">开始交流</span>
            <span className="lang lang-en" lang="en">Start a conversation</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
