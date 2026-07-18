import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Book of Kings · Your Daily Mirror",
    short_name: "Book of Kings",
    description: "A daily ritual of reflection inspired by Persian storytelling.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f0df",
    theme_color: "#24569a",
  };
}
