import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "/my_first_app";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: pagesBasePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
