import type { LocalizedText as LocalizedTextValue } from "../content/site-content";

export function LocalizedText({ value }: { value: LocalizedTextValue }) {
  return (
    <>
      <span className="lang lang-zh">{value.zh}</span>
      <span className="lang lang-en" lang="en">
        {value.en}
      </span>
    </>
  );
}
