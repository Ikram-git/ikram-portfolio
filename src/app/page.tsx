import Link from "next/link";
import { ScaleLedger } from "@/components/scale-ledger";

/**
 * M1 foundation shell. Hero register per spec §4.1; proof-strip facts are the
 * non-fabricated attributes from §4.1 Block 2. Case studies, the MRZ band,
 * writing and metrics arrive in M2–M4 — deliberately not stubbed with invented
 * numbers here.
 */

const PROOF = [
  "Java · .NET · TypeScript · Python",
  "Microservices · AWS · Docker · Jenkins",
  "Cross-region production, MEA",
  "L2/L3 on-call under SLA",
  "BSc CS, HK PolyU",
  "Sponsorship required — see /hiring",
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter">
      <section className="reveal py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Backend systems engineer
        </p>
        <h1 className="mt-6 max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          I build backend systems where failure is expensive.
        </h1>
        <p className="measure mt-6 text-lg leading-relaxed text-fg-dim">
          Three years shipping production infrastructure — polyglot microservices
          behind a national identity programme deployed across MEA, and on-chain
          compliance tooling for stablecoin monitoring. Java, .NET, TypeScript,
          AWS. Based in Hong Kong, relocating to Europe.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex h-11 items-center rounded-sm bg-accent px-5 font-mono text-sm text-white transition-opacity hover:opacity-90"
          >
            See the work
          </Link>
          <Link
            href="/hiring"
            className="inline-flex h-11 items-center rounded-sm border border-border px-5 font-mono text-sm text-fg transition-colors hover:border-accent"
          >
            Hiring? Start here →
          </Link>
        </div>
      </section>

      {/* Proof strip — data face, absorbable without prose (§4.1 Block 2). */}
      <section aria-label="At a glance" className="border-y border-border py-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fg-dim">
          {PROOF.map((fact) => (
            <li key={fact} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-accent">
                ▸
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </section>

      {/* Signature element — scale-ledger strip, between hero and work (§5). */}
      <div className="my-12">
        <ScaleLedger />
      </div>
    </div>
  );
}
