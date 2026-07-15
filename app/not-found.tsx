import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found shell">
      <p>404 / SIGNAL LOST</p>
      <h1>
        <span className="lang lang-zh">这条路径没有找到。</span>
        <span className="lang lang-en" lang="en">This path leads nowhere.</span>
      </h1>
      <Link className="button button--primary" href="/">
        <span className="lang lang-zh">返回首页</span>
        <span className="lang lang-en" lang="en">Return home</span>
        <span aria-hidden="true">↗</span>
      </Link>
    </div>
  );
}
