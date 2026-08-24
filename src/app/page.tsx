import Link from "next/link";
import Image from "next/image";
import { ScaleLedger } from "@/components/scale-ledger";
import { getCaseStudies } from "@/lib/content";

/**
 * Home (§4.1). Hero register per spec; proof-strip facts are the non-fabricated
 * attributes from §4.1 Block 2. Selected work reads the featured case studies.
 */

const PROOF = [
  "Full-stack — React/Next.js, Java, .NET, Python",
  "Fintech · on-chain analysis · digital identity",
  "Microservices · AWS · Docker · Jenkins",
  "L2/L3 production ops under SLA",
  "BSc CS, HK PolyU",
  "Sponsorship required — see /hiring",
];

export default function HomePage() {
  const featured = getCaseStudies()
    .filter((cs) => cs.featured)
    .slice(0, 3);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ikram Sattar",
    jobTitle: "Full-Stack Developer",
    address: { "@type": "PostalAddress", addressLocality: "Hong Kong" },
    url: "https://ikramsattar.dev",
  };

  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="reveal grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Full-stack developer
        </p>
        <h1 className="mt-6 max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          I build production systems where failure is expensive.
        </h1>
        <p className="measure mt-6 text-lg leading-relaxed text-fg-dim">
          Three years shipping software end to end — from a public passport and
          national-ID application portal to an on-chain analysis platform over 18
          million smart contracts. Frontend and backend, across React/Next.js,
          Java, .NET and Python, with a focus on fintech and digital identity.
          Based in Hong Kong, open to relocation.
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
        </div>

        {/* Portrait — round, hairline border + soft accent ring. */}
        <figure className="order-first lg:order-none">
          <div className="mx-auto w-44 rounded-full border border-border p-2 ring-1 ring-accent/20 sm:w-56 lg:mx-0 lg:w-64">
            <Image
              src="/ikram.jpg"
              alt="Portrait of Ikram Sattar"
              width={1000}
              height={1000}
              className="aspect-square h-auto w-full rounded-full object-cover grayscale-[0.1]"
              priority
            />
          </div>
          <figcaption className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.15em] text-fg-dim">
            Ikram Sattar · HKG
          </figcaption>
        </figure>
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

      {/* Block 3 — Selected work (§4.1). */}
      <section aria-labelledby="work-heading" className="py-12">
        <div className="flex items-baseline justify-between">
          <h2
            id="work-heading"
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Selected work
          </h2>
          <Link
            href="/work"
            className="font-mono text-xs text-fg-dim hover:text-accent"
          >
            All work →
          </Link>
        </div>

        <ol className="mt-6 divide-y divide-border border-y border-border">
          {featured.map((cs, i) => (
            <li key={cs.slug}>
              <Link
                href={`/work/${cs.slug}`}
                className="group block py-7 transition-colors hover:bg-bg-raised"
              >
                <div className="flex items-baseline justify-between gap-4 font-mono text-xs text-fg-dim">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {cs.confidential && (
                    <span className="uppercase tracking-wider">NDA</span>
                  )}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-fg group-hover:text-accent">
                  {cs.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cs.problemType.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

    </div>
  );
}
