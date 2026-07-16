import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LocalizedText } from "../../components/LocalizedText";
import { articles, getArticle } from "../../content/site-content";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title.en,
    description: article.excerpt.en,
    alternates: { canonical: `writing/${article.slug}` },
    openGraph: {
      type: "article",
      title: `${article.title.en} — Kv`,
      description: article.excerpt.en,
      url: `writing/${article.slug}`,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const currentIndex = articles.findIndex((item) => item.slug === article.slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <article className="article-detail page-shell shell">
      <header className="article-hero">
        <div className="detail-breadcrumb">
          <Link href="/writing">
            <span className="lang lang-zh">文章</span>
            <span className="lang lang-en" lang="en">Writing</span>
          </Link>
          <span>/</span>
          <span>{article.index}</span>
        </div>
        <div className="article-meta">
          <span><LocalizedText value={article.category} /></span>
          <time dateTime={article.date}>{article.date.replaceAll("-", ".")}</time>
          <span><LocalizedText value={article.readTime} /></span>
          <span className="placeholder-label"><LocalizedText value={article.status} /></span>
        </div>
        <h1><LocalizedText value={article.title} /></h1>
        <p className="article-deck"><LocalizedText value={article.excerpt} /></p>
      </header>

      <div className="article-layout">
        <aside className="article-aside">
          <span>THESIS</span>
          <p><LocalizedText value={article.thesis} /></p>
        </aside>
        <div className="article-body">
          {article.sections.map((section, index) => (
            <section key={section.heading.en}>
              <div className="article-section-index">0{index + 1}</div>
              <h2><LocalizedText value={section.heading} /></h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.en}><LocalizedText value={paragraph} /></p>
              ))}
            </section>
          ))}

          <div className="draft-note">
            <span>EDITORIAL NOTE</span>
            <p>
              <span className="lang lang-zh">本文为展示内容模型的示例草稿。正式发布前，请由 Kv 审阅论点、补充来源并确认日期。</span>
              <span className="lang lang-en" lang="en">This is a sample draft demonstrating the content model. Before publication, Kv should review the argument, add sources, and confirm the date.</span>
            </p>
          </div>
        </div>
      </div>

      <nav className="next-project" aria-label="Next article">
        <span>
          <span className="lang lang-zh">下一篇文章</span>
          <span className="lang lang-en" lang="en">Next article</span>
        </span>
        <Link href={`/writing/${nextArticle.slug}`}>
          <span><LocalizedText value={nextArticle.title} /></span>
          <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </article>
  );
}
