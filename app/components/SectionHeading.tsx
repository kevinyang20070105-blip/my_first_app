import type { LocalizedText as LocalizedTextValue } from "../content/site-content";
import { LocalizedText } from "./LocalizedText";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: LocalizedTextValue;
  title: LocalizedTextValue;
  description?: LocalizedTextValue;
}) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <span><LocalizedText value={eyebrow} /></span>
      </div>
      <div className="section-heading-main">
        <h2><LocalizedText value={title} /></h2>
        {description && <p><LocalizedText value={description} /></p>}
      </div>
    </div>
  );
}
