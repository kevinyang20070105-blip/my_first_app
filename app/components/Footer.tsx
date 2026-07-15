import Link from "next/link";
import { navItems, profile } from "../content/site-content";
import { LocalizedText } from "./LocalizedText";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p className="footer-statement">
          <span className="lang lang-zh">在 Web3、AI 与独立开发的交叉处持续研究与构建。</span>
          <span className="lang lang-en" lang="en">
            Researching and building where Web3, AI, and independent software meet.
          </span>
        </p>
        <Link className="footer-email" href={`mailto:${profile.email}`}>
          {profile.email}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="wordmark wordmark--footer" href="/" aria-label="Kv home">
            Kv<span aria-hidden="true">.</span>
          </Link>
          <p><LocalizedText value={profile.role} /></p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <span className="footer-label">Index</span>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <LocalizedText value={item.label} />
            </Link>
          ))}
        </nav>

        <div className="footer-social">
          <span className="footer-label">Elsewhere</span>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <Link href="/contact">
            WeChat <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Kv. <span className="lang lang-zh">保留所有权利。</span><span className="lang lang-en" lang="en">All rights reserved.</span></p>
        <p>
          <span className="status-dot" aria-hidden="true" />
          <span className="lang lang-zh">可接受实习与合作机会</span>
          <span className="lang lang-en" lang="en">Open to internships & collaborations</span>
        </p>
      </div>
    </footer>
  );
}
