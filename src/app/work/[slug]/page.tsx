import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { Mdx } from "@/components/mdx";

// Drafts are prerendered in dev only; excluded from the production build.
export function generateStaticParams() {
  return getCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const description = cs.meta.summary.startsWith("TODO")
    ? undefined
    : cs.meta.summary;
  return {
    title: cs.meta.title,
    description,
    openGraph: {
      title: cs.meta.title,
      description,
      images: [`/work/${slug}/opengraph-image`],
    },
  };
}

function hasReal(value: string) {
  return value && !value.startsWith("TODO");
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const { meta, body } = cs;
  const realMetrics = meta.metrics.filter(
    (m) => hasReal(m.value) && hasReal(m.label),
  );

  return (
    <article className="mx-auto max-w-[var(--container-content)] px-gutter py-16">
      <Link
        href="/work"
        className="font-mono text-xs text-fg-dim hover:text-accent"
      >
        ← Work
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-fg-dim">
          {meta.org && <span>{meta.org}</span>}
          {meta.role && <span aria-hidden="true">·</span>}
          {meta.role && <span>{meta.role}</span>}
          {meta.period && <span aria-hidden="true">·</span>}
          {meta.period && <span>{meta.period}</span>}
        </div>
        <h1 className="mt-4 max-w-[22ch] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {meta.title}
        </h1>
        {meta.liveUrl && /^https?:\/\//.test(meta.liveUrl) && (
          <a
            href={meta.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
          >
            {meta.liveLabel} ↗
          </a>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {meta.problemType.map((t) => (
            <span
              key={t}
              className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim"
            >
              {t}
            </span>
          ))}
          {meta.domain && (
            <span className="rounded-sm border border-accent/40 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-accent">
              {meta.domain}
            </span>
          )}
        </div>
      </header>

      {meta.confidential && (
        <p className="mt-8 rounded-sm border border-border bg-bg-raised px-4 py-3 text-sm text-fg-dim">
          Written at architecture level. Client identities, deployment specifics
          and system internals are omitted under NDA.
        </p>
      )}

      {realMetrics.length > 0 && (
        <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border font-mono sm:grid-cols-3">
          {realMetrics.map((m) => (
            <div key={m.label} className="bg-bg px-4 py-5">
              <dd className="text-3xl font-medium tracking-tight text-fg">
                {m.value}
              </dd>
              <dt className="mt-2 text-[0.65rem] uppercase leading-snug tracking-wider text-fg-dim">
                {m.label}
              </dt>
            </div>
          ))}
        </dl>
      )}

      {meta.stack.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {meta.stack.map((s) => (
            <span
              key={s}
              className="rounded-sm bg-bg-raised px-2 py-0.5 font-mono text-xs text-fg-dim"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="measure mt-10">
        <Mdx source={body} />
      </div>
    </article>
  );
}
