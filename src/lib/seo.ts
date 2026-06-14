export const SITE_NAME = "Zac Wojcik";
export const SITE_DESCRIPTION =
  "Security engineer helping developers write secure code and design secure systems.";

// TODO: set to the production origin (no trailing slash) so og:image / og:url
// resolve to absolute URLs. Social platforms ignore relative image paths.
export const SITE_URL = "https://cazcik.com";

// Default social card. Add a 1200x630 image at public/images/og-default.png.
export const DEFAULT_OG_IMAGE = "/images/og-default.png";

interface SeoOptions {
  title?: string;
  description?: string;
  /** Absolute URL or site-relative path (e.g. "/images/foo.png"). */
  image?: string;
  /** Site-relative path of the current page, for og:url. */
  path?: string;
}

/** Resolve a site-relative path to an absolute URL; pass through absolute URLs. */
function absolute(pathOrUrl: string) {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

/**
 * Build a meta array for a route's `head`. Pass a `title` to override the
 * site default; deeper routes win since TanStack merges matched heads in order.
 */
export function seo({ title, description, image, path }: SeoOptions = {}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
  const desc = description ?? SITE_DESCRIPTION;
  const imageUrl = absolute(image ?? DEFAULT_OG_IMAGE);

  const tags = [
    { title: fullTitle },
    { name: "description", content: desc },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: desc },
    { name: "twitter:image", content: imageUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: desc },
    { property: "og:image", content: imageUrl },
    ...(path ? [{ property: "og:url", content: absolute(path) }] : []),
  ];

  return tags;
}
