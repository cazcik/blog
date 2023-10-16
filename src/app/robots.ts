import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    sitemap: "https://cazcik.me/sitemap.xml",
    host: "https://cazcik.me",
  };
}
