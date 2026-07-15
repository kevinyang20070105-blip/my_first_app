import Link from "next/link";
import type { Article } from "../content/site-content";
import { LocalizedText } from "./LocalizedText";

export function ArticleRow({ article }: { article: Article }) {
  return (
    <article className="article-row">
      <Link href={`/writing/${article.slug}`} className="article-row-link">
        <div className="article-index">{article.index}</div>
        <div className="article-category"><LocalizedText value={article.category} /></div>
        <div className="article-main">
          <h3><LocalizedText value={article.title} /></h3>
          <p><LocalizedText value={article.excerpt} /></p>
        </div>
        <div className="article-date">
          <time dateTime={article.date}>{article.date.replaceAll("-", ".")}</time>
          <span><LocalizedText value={article.readTime} /></span>
        </div>
        <span className="article-arrow" aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
