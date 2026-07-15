"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../content/site-content";
import { LanguageToggle } from "./LanguageToggle";
import { LocalizedText } from "./LocalizedText";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="mobile-menu-button"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      {open && (
        <div className="mobile-menu-panel" id="mobile-navigation-panel">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
                <LocalizedText value={item.label} />
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
          <LanguageToggle compact />
        </div>
      )}
    </div>
  );
}
