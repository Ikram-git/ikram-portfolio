/**
 * Canonical site URL — single source for metadata, sitemap, robots, OG tags
 * and JSON-LD. ikramsattar.dev is not yet purchased/live (spec §11 #7); the
 * resume currently points recruiters at the Vercel URL below, so that's what
 * self-references must resolve to. Swap via NEXT_PUBLIC_SITE_URL once the
 * custom domain is live — no other file needs to change.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ikram-portfolio-gamma.vercel.app";

export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");
