import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cazcik.me",
      lastModified: new Date(),
    },
  ];
}
