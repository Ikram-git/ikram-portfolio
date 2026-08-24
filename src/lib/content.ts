import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");
const isProd = process.env.NODE_ENV === "production";

/* ------------------------------------------------------------------ *
 * Types — mirror the frontmatter contracts in spec §3.1.
 * ------------------------------------------------------------------ */

export type Metric = { label: string; value: string };

export type CaseStudyMeta = {
  title: string;
  slug: string;
  org: string;
  role: string;
  period: string;
  summary: string;
  /** Engineering framing, shown prominently (§1.2 layered positioning). */
  problemType: string[];
  /** The stakes, shown as a secondary tag — not the headline. */
  domain: string;
  stack: string[];
  metrics: Metric[];
  /** Optional screenshot path under /public, e.g. "/work/briva.png". */
  image: string | null;
  /** Optional live/public URL (portal, product, repo). Rendered only when http(s). */
  liveUrl: string | null;
  /** Optional label for the live link, e.g. "Live portal", "Repository". */
  liveLabel: string;
  /** Renders the NDA note and suppresses client names. */
  confidential: boolean;
  featured: boolean;
  order: number;
  draft: boolean;
};

export type Loaded<TMeta> = { meta: TMeta; body: string };

/* ------------------------------------------------------------------ *
 * Low-level file access
 * ------------------------------------------------------------------ */

function readCollection(collection: "work"): {
  slug: string;
  raw: string;
  data: Record<string, unknown>;
  content: string;
}[] {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        raw,
        data,
        content,
      };
    });
}

function str(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}
function strArr(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}
function bool(v: unknown, fallback = false): boolean {
  return typeof v === "boolean" ? v : fallback;
}

/* ------------------------------------------------------------------ *
 * Case studies (/work)
 * ------------------------------------------------------------------ */

function toCaseStudyMeta(
  slug: string,
  data: Record<string, unknown>,
): CaseStudyMeta {
  const metrics = Array.isArray(data.metrics)
    ? data.metrics
        .map((m) => ({
          label: str((m as Record<string, unknown>)?.label),
          value: str((m as Record<string, unknown>)?.value),
        }))
        .filter((m) => m.label || m.value)
    : [];

  return {
    title: str(data.title, slug),
    slug: str(data.slug, slug),
    org: str(data.org),
    role: str(data.role),
    period: str(data.period),
    summary: str(data.summary),
    problemType: strArr(data.problemType),
    domain: str(data.domain),
    stack: strArr(data.stack),
    metrics,
    image: typeof data.image === "string" ? data.image : null,
    liveUrl: typeof data.liveUrl === "string" ? data.liveUrl : null,
    liveLabel: str(data.liveLabel, "Live"),
    confidential: bool(data.confidential),
    featured: bool(data.featured),
    order: typeof data.order === "number" ? data.order : 999,
    draft: bool(data.draft),
  };
}

export function getCaseStudies(opts?: { includeDrafts?: boolean }): CaseStudyMeta[] {
  const includeDrafts = opts?.includeDrafts ?? !isProd;
  return readCollection("work")
    .map(({ slug, data }) => toCaseStudyMeta(slug, data))
    .filter((cs) => includeDrafts || !cs.draft)
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): Loaded<CaseStudyMeta> | null {
  const match = readCollection("work").find((f) => f.slug === slug);
  if (!match) return null;
  return { meta: toCaseStudyMeta(slug, match.data), body: match.content };
}

