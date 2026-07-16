import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { getSiteUrl } from "./site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getSiteUrl();
  const metadataBase = new URL(`${siteUrl}/`);
  const socialImageUrl = `${siteUrl}/og.png`;

  return {
    metadataBase,
    title: {
      default: "Kv — Web3 × AI Researcher & Independent Builder",
      template: "%s — Kv",
    },
    description:
      "Kv 的个人网站：Web3、人工智能与独立开发领域的研究、项目和文章。Research, projects, and writing across Web3, AI, and independent software.",
    applicationName: "Kv Portfolio",
    authors: [{ name: "Kv" }],
    creator: "Kv",
    keywords: [
      "Kv",
      "Web3 research",
      "AI research",
      "independent developer",
      "Web3 研究",
      "人工智能",
    ],
    alternates: { canonical: `${siteUrl}/` },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      alternateLocale: "en_US",
      url: siteUrl,
      siteName: "Kv — Research & Building",
      title: "Kv — Researching what becomes infrastructure next",
      description: "Web3 × AI research, independent building, and clear technical writing.",
      images: [
        {
          url: socialImageUrl,
          width: 1536,
          height: 1024,
          alt: "Kv — Web3 × AI researcher and independent builder",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kv — Web3 × AI Researcher",
      description: "Researching open networks, intelligent systems, and the products between them.",
      images: [socialImageUrl],
    },
    icons: {
      icon: `${siteUrl}/favicon.png`,
      shortcut: `${siteUrl}/favicon.png`,
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f1efe8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" data-language="zh" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          <span className="lang lang-zh">跳到正文</span>
          <span className="lang lang-en" lang="en">Skip to content</span>
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
