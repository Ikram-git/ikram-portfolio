import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engineering case studies — full-stack systems, on-chain analysis, digital identity, and product ownership.",
};

function imageExists(image: string | null): image is string {
  return !!image && fs.existsSync(path.join(process.cwd(), "public", image));
}

export default function WorkPage() {
  const studies = getCaseStudies();

  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-16">
      <header className="reveal">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Selected work
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Engineering case studies
        </h1>
        <p className="measure mt-4 text-fg-dim">
          Each is framed by its engineering problem, with the domain supplying
          the stakes.
        </p>
      </header>

      <ol className="mt-12 divide-y divide-border border-y border-border">
        {studies.map((cs, i) => (
          <li key={cs.slug}>
            <Link
              href={`/work/${cs.slug}`}
              className="group flex flex-col gap-5 py-8 transition-colors hover:bg-bg-raised sm:flex-row sm:items-start"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs text-fg-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {cs.confidential && (
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim">
                      NDA
                    </span>
                  )}
                </div>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-fg group-hover:text-accent">
                  {cs.title}
                </h2>
                {cs.summary && !cs.summary.startsWith("TODO") && (
                  <p className="measure mt-2 text-fg-dim">{cs.summary}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.problemType.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {imageExists(cs.image) && (
                <div className="w-full overflow-hidden rounded-sm border border-border sm:w-56 sm:shrink-0">
                  <Image
                    src={cs.image}
                    alt={`Screenshot of ${cs.title}`}
                    width={1280}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
              )}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
