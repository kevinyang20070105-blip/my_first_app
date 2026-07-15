"use client";

import { useEffect, useState } from "react";

type Language = "zh" | "en";

function applyLanguage(language: Language) {
  document.documentElement.dataset.language = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  window.localStorage.setItem("kv-language", language);
  window.dispatchEvent(new CustomEvent("kv-language-change", { detail: language }));
}

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("kv-language");
    const initial: Language = saved === "en" ? "en" : "zh";
    applyLanguage(initial);
    const initialSync = window.setTimeout(() => setLanguage(initial), 0);

    const sync = (event: Event) => {
      setLanguage((event as CustomEvent<Language>).detail);
    };

    window.addEventListener("kv-language-change", sync);
    return () => {
      window.clearTimeout(initialSync);
      window.removeEventListener("kv-language-change", sync);
    };
  }, []);

  const nextLanguage = language === "zh" ? "en" : "zh";
  const label = language === "zh" ? "Switch to English" : "切换至中文";

  return (
    <button
      type="button"
      className={`language-toggle${compact ? " language-toggle--compact" : ""}`}
      aria-label={label}
      title={label}
      onClick={() => {
        setLanguage(nextLanguage);
        applyLanguage(nextLanguage);
      }}
    >
      <span aria-hidden="true" className={language === "zh" ? "is-active" : ""}>
        中
      </span>
      <span className="language-divider" aria-hidden="true" />
      <span aria-hidden="true" className={language === "en" ? "is-active" : ""}>
        EN
      </span>
    </button>
  );
}
