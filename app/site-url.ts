const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || null;

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/+$/, "") ?? "";

  return `${basePath}${normalizedPath}`;
}

export async function getSiteUrl() {
  if (configuredSiteUrl) return configuredSiteUrl;

  const { headers } = await import("next/headers");
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");

  return `${protocol}://${host}`;
}
