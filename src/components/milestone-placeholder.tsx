/**
 * Temporary route placeholder so primary nav never 404s on the M1 shell.
 * Each real page replaces this in its milestone (M3 content, M4 pages).
 */
export function MilestonePlaceholder({
  title,
  milestone,
  note,
}: {
  title: string;
  milestone: string;
  note: string;
}) {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {milestone}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="measure mt-4 text-fg-dim">{note}</p>
    </div>
  );
}
