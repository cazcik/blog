import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zac Wojcik",
    short_name: "Zac Wojcik",
    description: "Zac Wojcik",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/images/ice.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
