import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((p) => ({
    url: `https://cazcik.me${p.url}`,
    lastModified: new Date(p.date),
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://cazcik.me${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes, ...posts];
}
