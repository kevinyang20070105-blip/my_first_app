import Link from "next/link";
import { navItems } from "../content/site-content";
import { LanguageToggle } from "./LanguageToggle";
import { LocalizedText } from "./LocalizedText";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Kv home">
          Kv<span aria-hidden="true">.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.slice(1).map((item) => (
            <Link href={item.href} key={item.href}>
              <LocalizedText value={item.label} />
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageToggle />
          <Link className="header-contact" href="/contact">
            <span className="lang lang-zh">联系</span>
            <span className="lang lang-en" lang="en">Contact</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
