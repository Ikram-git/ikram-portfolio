import { LEDGER, type LedgerMetric } from "@/lib/metrics";

/**
 * Scale-ledger strip — the site's signature element (spec §5 fallback).
 * Raw production numbers in the instrumentation/mono treatment. Server
 * component, zero client JS. Internal hairlines come from a 1px grid gap over a
 * border-coloured ground (robust across wrapping). Quiet staggered reveal via
 * CSS only; static under prefers-reduced-motion (`.reveal` in globals.css).
 */
export function ScaleLedger() {
  return (
    <section aria-label="Production scale" className="font-mono">
      <div className="flex items-center justify-between pb-3 pt-4 text-[0.65rem] uppercase tracking-[0.25em] text-fg-dim">
        <span>Production ledger</span>
        <span aria-hidden="true">§ scale</span>
      </div>
      <dl className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {LEDGER.map((metric, i) => (
          <LedgerCell key={metric.label} metric={metric} index={i} />
        ))}
      </dl>
    </section>
  );
}

function LedgerCell({
  metric,
  index,
}: {
  metric: LedgerMetric;
  index: number;
}) {
  const { value, unit, label, todo } = metric;

  return (
    <div
      className="reveal bg-bg px-4 py-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <dd className="flex items-baseline gap-1.5">
        {todo ? (
          <>
            <span className="text-4xl font-medium leading-none text-fg-dim">
              —
            </span>
            <span className="rounded-sm border border-dashed border-border px-1 py-0.5 text-[0.6rem] uppercase tracking-wider text-fg-dim">
              todo
            </span>
          </>
        ) : (
          <span className="text-4xl font-medium leading-none tracking-tight text-fg">
            {value}
          </span>
        )}
      </dd>
      <dd className="mt-2 text-xs text-fg-dim">{unit}</dd>
      <dt className="mt-3 text-[0.65rem] uppercase leading-snug tracking-[0.15em] text-fg-dim">
        {label}
      </dt>
    </div>
  );
}
