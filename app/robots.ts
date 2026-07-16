import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

export const dynamic = "force-static";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteUrl = await getSiteUrl();

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
