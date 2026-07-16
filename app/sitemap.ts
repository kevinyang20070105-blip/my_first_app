import type { MetadataRoute } from "next";
import { articles, projects } from "./content/site-content";
import { getSiteUrl } from "./site-url";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getSiteUrl();
  const staticRoutes = ["", "/about", "/projects", "/writing", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-07-15"),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date("2026-07-15"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/writing/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
