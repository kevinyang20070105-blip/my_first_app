import type { Metadata } from "next";
import Link from "next/link";
import { LocalizedText } from "../components/LocalizedText";
import { capabilities, focusAreas, profile } from "../content/site-content";
import { withBasePath } from "../site-url";

export const metadata: Metadata = {
  title: "About / 关于",
  description: "About Kv—research approach, capabilities, and current focus across Web3 and AI.",
  alternates: { canonical: "about" },
};

export default function AboutPage() {
  return (
    <div className="page-shell shell">
      <header className="page-hero page-hero--about">
        <div className="page-hero-kicker">
          <span>01</span>
          <span className="lang lang-zh">关于我</span>
          <span className="lang lang-en" lang="en">About</span>
        </div>
        <h1>
          <span className="lang lang-zh">在新技术的噪声里，<br /><em>寻找值得验证的问题。</em></span>
          <span className="lang lang-en" lang="en">Finding questions worth testing<br /><em>amid the noise of emerging technology.</em></span>
        </h1>
        <div className="page-hero-intro">
          <p><LocalizedText value={profile.shortBio} /></p>
          <p className="availability"><span className="status-dot" aria-hidden="true" /><LocalizedText value={profile.availability} /></p>
        </div>
      </header>

      <section className="manifesto-section ruled-section">
        <p className="aside-label">APPROACH / 01—03</p>
        <div className="manifesto-copy">
          <p className="manifesto-lead">
            <span className="lang lang-zh">我不把研究看作“收集更多资料”，而是建立一条别人能够复核的判断路径。</span>
            <span className="lang lang-en" lang="en">I do not see research as collecting more information. I see it as building a path of judgment that others can retrace.</span>
          </p>
          <div className="manifesto-columns">
            <p>
              <span className="lang lang-zh">从明确问题边界开始，比较不同来源的证据质量，记录不确定性与反例，再把形成的观点压缩成清晰的文字或可测试的产品原型。</span>
              <span className="lang lang-en" lang="en">I start by defining the boundary of a question, compare the quality of different sources, record uncertainty and counterevidence, then compress the view into clear writing or a testable product prototype.</span>
            </p>
            <p>
              <span className="lang lang-zh">这种方法让我能在快速变化的 Web3 与 AI 领域保持好奇，同时避免把速度误认为理解。</span>
              <span className="lang lang-en" lang="en">This lets me stay curious in fast-moving Web3 and AI fields without confusing speed for understanding.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="about-focus ruled-section">
        <p className="aside-label">CURRENT FOCUS</p>
        <div>
          <h2>
            <span className="lang lang-zh">现在，我在思考这些问题。</span>
            <span className="lang lang-en" lang="en">Questions I am exploring now.</span>
          </h2>
          <div className="about-focus-list">
            {focusAreas.map((area) => (
              <article key={area.number}>
                <span>{area.number}</span>
                <div>
                  <h3><LocalizedText value={area.title} /></h3>
                  <p><LocalizedText value={area.text} /></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section ruled-section">
        <p className="aside-label">CAPABILITIES</p>
        <div>
          <h2>
            <span className="lang lang-zh">把研究推进到可使用的结果。</span>
            <span className="lang lang-en" lang="en">Move research toward something people can use.</span>
          </h2>
          <div className="capabilities-large">
            {capabilities.map((capability, index) => (
              <div key={capability.en}>
                <span>0{index + 1}</span>
                <h3><LocalizedText value={capability} /></h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-note ruled-section" id="resume">
        <p className="aside-label">RÉSUMÉ / STATUS</p>
        <div>
          <h2>
            <span className="lang lang-zh">真实履历待补充，结构已经就绪。</span>
            <span className="lang lang-en" lang="en">The structure is ready for verified experience.</span>
          </h2>
          <p>
            <span className="lang lang-zh">当前工作区没有收到正式简历，因此网站没有虚构学校、实习、奖项或项目数据。上传简历后，可直接替换集中内容文件与下载文件。</span>
            <span className="lang lang-en" lang="en">No formal résumé was available in the workspace, so the site does not invent education, internships, awards, or project metrics. Once supplied, those fields and the download can be replaced centrally.</span>
          </p>
          <div className="inline-actions">
            <a className="button button--primary" href={withBasePath("/Kv-Resume-Placeholder.txt")} download>
              <span className="lang lang-zh">下载占位简历</span>
              <span className="lang lang-en" lang="en">Download placeholder</span>
              <span aria-hidden="true">↓</span>
            </a>
            <Link className="button button--ghost" href="/contact">
              <span className="lang lang-zh">联系 Kv</span>
              <span className="lang lang-en" lang="en">Contact Kv</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
