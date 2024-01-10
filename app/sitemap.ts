import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cazcik.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cazcik.me/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 2,
    },
  ];
}
