import { ImageResponse } from "next/og";
import { getCaseStudies, getCaseStudy } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case study";

export function generateStaticParams() {
  return getCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  const title = cs?.meta.title ?? "Ikram Sattar";
  const org = cs?.meta.org ?? "";
  const tags = cs?.meta.problemType.slice(0, 3).join("  ·  ") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1020",
          color: "#E8E6DF",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#8A8FA0", fontSize: 24, letterSpacing: 4 }}>
          {org.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.1,
            maxWidth: 960,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #232A42",
            paddingTop: 28,
            fontSize: 24,
            color: "#8A8FA0",
          }}
        >
          <span style={{ display: "flex", color: "#7B5CFF" }}>ikramsattar.dev</span>
          <span style={{ display: "flex" }}>{tags}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
