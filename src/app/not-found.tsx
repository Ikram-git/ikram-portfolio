import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        HTTP 404 · check digit failed
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        No record at this route.
      </h1>
      <p className="measure mt-4 text-fg-dim">
        The path didn&apos;t resolve to a page. It may have moved, or never
        existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-sm border border-border px-5 font-mono text-sm text-fg transition-colors hover:border-accent"
      >
        ← Back to home
      </Link>
    </div>
  );
}
