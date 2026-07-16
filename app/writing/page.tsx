import type { Metadata } from "next";
import { ArticleRow } from "../components/ArticleRow";
import { articles } from "../content/site-content";

export const metadata: Metadata = {
  title: "Writing / 文章",
  description: "Writing by Kv on trustworthy systems, Web3 products, and reproducible research.",
  alternates: { canonical: "writing" },
};

export default function WritingPage() {
  return (
    <div className="page-shell shell">
      <header className="page-hero page-hero--index">
        <div className="page-hero-kicker"><span>03</span><span>RESEARCH & WRITING</span></div>
        <h1>
          <span className="lang lang-zh">把推理过程公开，<br /><em>而不只公布结论。</em></span>
          <span className="lang lang-en" lang="en">Make the reasoning public—<br /><em>not just the conclusion.</em></span>
        </h1>
        <div className="page-hero-intro">
          <p>
            <span className="lang lang-zh">关于可信系统、开放网络与研究方法的编辑草稿。内容结构支持后续持续添加。</span>
            <span className="lang lang-en" lang="en">Editorial drafts on trustworthy systems, open networks, and research methods. The content model is ready for ongoing publication.</span>
          </p>
        </div>
      </header>

      <section className="writing-index" aria-label="Article list">
        <div className="index-header"><span>INDEX</span><span>03 ENTRIES / 2026</span></div>
        <div className="article-list">
          {articles.map((article) => <ArticleRow article={article} key={article.slug} />)}
        </div>
      </section>
    </div>
  );
}
