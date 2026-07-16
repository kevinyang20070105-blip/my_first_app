import type { Metadata } from "next";
import Link from "next/link";
import { CopyWechatButton } from "../components/CopyWechatButton";
import { LocalizedText } from "../components/LocalizedText";
import { profile } from "../content/site-content";

export const metadata: Metadata = {
  title: "Contact / 联系",
  description: "Contact Kv for Web3 and AI research, internships, open-source work, and thoughtful collaboration.",
  alternates: { canonical: "contact" },
};

export default function ContactPage() {
  return (
    <div className="page-shell shell contact-page">
      <header className="contact-hero">
        <div className="page-hero-kicker"><span>04</span><span>OPEN CHANNEL</span></div>
        <h1>
          <span className="lang lang-zh">有值得一起研究<br />或构建的问题吗？</span>
          <span className="lang lang-en" lang="en">Have a problem worth<br />researching or building?</span>
        </h1>
        <p>
          <span className="lang lang-zh">欢迎就研究合作、实习机会、开源项目或有意思的技术问题与我联系。</span>
          <span className="lang lang-en" lang="en">I’m open to research collaborations, internships, open-source projects, and thoughtful technical conversations.</span>
        </p>
      </header>

      <section className="contact-methods" aria-label="Contact methods">
        <article className="contact-method contact-method--primary">
          <div className="contact-method-meta"><span>01</span><span>EMAIL</span></div>
          <h2>{profile.email}</h2>
          <a className="text-link text-link--large" href={`mailto:${profile.email}`}>
            <span className="lang lang-zh">发送邮件</span>
            <span className="lang lang-en" lang="en">Write an email</span>
            <span aria-hidden="true">↗</span>
          </a>
        </article>

        <article className="contact-method">
          <div className="contact-method-meta"><span>02</span><span>GITHUB</span></div>
          <h2>{profile.githubLabel}</h2>
          <a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">
            <span className="lang lang-zh">查看 GitHub</span>
            <span className="lang lang-en" lang="en">View GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </article>

        <article className="contact-method">
          <div className="contact-method-meta"><span>03</span><span>WECHAT</span></div>
          <h2 id="wechat-id">{profile.wechat}</h2>
          <CopyWechatButton value={profile.wechat} />
        </article>
      </section>

      <section className="contact-note">
        <div>
          <span className="status-dot" aria-hidden="true" />
          <span className="lang lang-zh">当前开放机会</span>
          <span className="lang lang-en" lang="en">Currently open</span>
        </div>
        <p><LocalizedText value={profile.availability} /></p>
        <Link className="text-link" href="/about">
          <span className="lang lang-zh">了解我的方向</span>
          <span className="lang lang-en" lang="en">See what I work on</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}
