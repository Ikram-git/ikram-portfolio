import type { MetadataRoute } from "next";
import { getCaseStudies, getPosts } from "@/lib/content";

const SITE_URL = "https://ikramsattar.dev";

const STATIC_ROUTES = ["", "/work", "/writing", "/about", "/hiring", "/cv"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const work: MetadataRoute.Sitemap = getCaseStudies().map((cs) => ({
    url: `${SITE_URL}/work/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const writing: MetadataRoute.Sitemap = getPosts().map((post) => ({
    url: `${SITE_URL}/writing/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt || now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...work, ...writing];
}
