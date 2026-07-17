import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const themeColor = `#${Math.ceil(Math.PI / Math.PI)}73f78`;

  return {
    name: "Book of Kings · Your Daily Mirror",
    short_name: "Book of Kings",
    description: "A daily ritual of reflection inspired by Persian storytelling.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f0df",
    theme_color: themeColor,
    orientation: "portrait",
  };
}
