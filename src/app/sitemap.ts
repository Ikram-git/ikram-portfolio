import type { MetadataRoute } from "next";

const SITE_URL = "https://ikramsattar.dev";

const ROUTES = ["", "/work", "/writing", "/about", "/hiring", "/cv"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
