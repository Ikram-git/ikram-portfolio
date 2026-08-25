import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { ArrowUpRight } from "lucide-react";
import { getCaseStudies } from "@/lib/content";

function imageExists(image: string | null): image is string {
  return !!image && fs.existsSync(path.join(process.cwd(), "public", image));
}

/** Work — shared by the /work route and the one-page home (§4.2). */
export function WorkSection() {
  const studies = getCaseStudies();

  return (
    <section id="work" className="scroll-mt-24 py-12">
      <header data-reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Selected work
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Engineering case studies
        </h2>
      </header>

      <ol className="mt-12 grid gap-6 sm:grid-cols-2">
        {studies.map((cs, i) => (
          <li key={cs.slug} className="card card-hover group overflow-hidden">
            <Link href={`/work/${cs.slug}`} className="flex h-full flex-col">
              {imageExists(cs.image) && (
                <div className="overflow-hidden border-b border-border">
                  <Image
                    src={cs.image}
                    alt={`Screenshot of ${cs.title}`}
                    width={1280}
                    height={800}
                    className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between font-mono text-xs text-fg-dim">
                  <span className="text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-2">
                    {cs.confidential && (
                      <span className="uppercase tracking-wider">NDA</span>
                    )}
                    <ArrowUpRight
                      className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                  {cs.title}
                </h3>
                {cs.summary && !cs.summary.startsWith("TODO") && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fg-dim">
                    {cs.summary}
                  </p>
                )}
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {cs.problemType.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
