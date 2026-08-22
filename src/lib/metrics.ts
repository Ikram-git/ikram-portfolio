/**
 * Scale-ledger data (spec §5 fallback + §8.1 metrics gap).
 *
 * The strip's value is that every number is REAL and defensible in an
 * interview — and, potentially, an immigration filing. Do NOT invent figures.
 * Entries marked `todo: true` render a visible placeholder until Ikram sources
 * the number; fill `value`/`unit` and drop the flag to promote them.
 *
 * `18M smart contracts` is the one figure the spec records as already sourced
 * (§4.2, §8.1). Everything else is pending.
 */
export type LedgerMetric = {
  /** The headline figure, e.g. "18M". Ignored for display when `todo`. */
  value: string;
  /** Short unit/qualifier under the figure, e.g. "contracts". */
  unit: string;
  /** Uppercase caption, e.g. "Retrieval eval set". */
  label: string;
  /** Which case study / claim this number comes from — for sourcing, not shown. */
  source: string;
  /** When true, renders a placeholder cell instead of a real figure. */
  todo?: boolean;
};

export const LEDGER: LedgerMetric[] = [
  {
    value: "18M",
    unit: "smart contracts",
    label: "Retrieval eval set",
    source: "contract-analysis-pipeline",
  },
  {
    value: "TODO",
    unit: "regions",
    label: "Cross-region production, MEA",
    source: "distributed-identity-platform",
    todo: true,
  },
  {
    value: "TODO",
    unit: "services",
    label: "Polyglot microservices",
    source: "distributed-identity-platform",
    todo: true,
  },
  {
    value: "TODO",
    unit: "uptime",
    label: "Under SLA, L2/L3 on-call",
    source: "distributed-identity-platform",
    todo: true,
  },
];
