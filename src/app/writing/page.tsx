import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical writing on distributed systems, data pipelines, applied cryptography and digital identity.",
};

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
}

export default function WritingPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-16">
      <header className="reveal">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Writing
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Technical posts
        </h1>
        <p className="measure mt-4 text-fg-dim">
          Notes from production systems where mistakes are expensive.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-12 font-mono text-sm text-fg-dim">
          No posts published yet.
        </p>
      ) : (
        <ol className="mt-12 divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group block py-8 transition-colors hover:bg-bg-raised"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-fg-dim">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTimeMinutes} min read</span>
                  {post.draft && (
                    <span className="rounded-sm border border-dashed border-border px-1 uppercase tracking-wider">
                      draft
                    </span>
                  )}
                </div>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-fg group-hover:text-accent">
                  {post.title}
                </h2>
                {!post.description.startsWith("TODO") && (
                  <p className="measure mt-2 text-fg-dim">{post.description}</p>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
