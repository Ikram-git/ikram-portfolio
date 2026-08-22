import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPosts, getPost } from "@/lib/content";
import { Mdx } from "@/components/mdx";

// Drafts are prerendered in dev only; excluded from the production build.
export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const description = post.meta.description.startsWith("TODO")
    ? undefined
    : post.meta.description;
  return {
    title: post.meta.title,
    description,
    alternates: post.meta.canonical
      ? { canonical: post.meta.canonical }
      : undefined,
    openGraph: {
      type: "article",
      title: post.meta.title,
      description,
      publishedTime: post.meta.publishedAt || undefined,
    },
  };
}

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, body } = post;

  return (
    <article className="mx-auto max-w-[var(--container-content)] px-gutter py-16">
      <Link
        href="/writing"
        className="font-mono text-xs text-fg-dim hover:text-accent"
      >
        ← Writing
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-fg-dim">
          <time dateTime={meta.publishedAt}>{formatDate(meta.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{meta.readingTimeMinutes} min read</span>
          {meta.draft && (
            <span className="rounded-sm border border-dashed border-border px-1 uppercase tracking-wider">
              draft
            </span>
          )}
        </div>
        <h1 className="mt-4 max-w-[24ch] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {meta.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {meta.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim"
            >
              #{t}
            </span>
          ))}
        </div>
      </header>

      <div className="measure mt-10">
        <Mdx source={body} />
      </div>

      <footer className="measure mt-16 border-t border-border pt-6 font-mono text-xs text-fg-dim">
        Ikram Sattar — backend systems engineer, relocating to Europe.{" "}
        <Link href="/hiring" className="text-accent hover:underline">
          Hiring?
        </Link>
      </footer>
    </article>
  );
}
