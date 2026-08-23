import type { Metadata } from "next";
import Image from "next/image";
import { CAPABILITIES, TIMELINE, EDUCATION, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer from Hong Kong — fintech, on-chain analysis and digital identity. BSc CS, HK PolyU.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-16">
      <header className="reveal flex flex-col gap-8 sm:flex-row sm:items-end">
        {/* Instrumentation-framed portrait: hairline border + mono caption. */}
        <figure className="shrink-0">
          <div className="w-40 rounded-full border border-border p-2 ring-1 ring-accent/20 sm:w-48">
            <Image
              src="/ikram.jpg"
              alt="Portrait of Ikram Sattar"
              width={1000}
              height={1000}
              className="aspect-square h-auto w-full rounded-full object-cover grayscale-[0.12]"
              priority
            />
          </div>
        </figure>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {PROFILE.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-fg-dim">
            {PROFILE.role} · {PROFILE.location}
          </p>
        </div>
      </header>

      {/* Narrative — four short paragraphs (§4.4), grounded in the CV. */}
      <div className="measure mt-8 space-y-4 text-fg-dim">
        <p>
          I&apos;m a full-stack developer based in Hong Kong. I studied Computer
          Science at HK PolyU, where a virtual-asset project at PolyHack 2022 won
          the Best Quantek Capital Research Award and got me hooked on building
          things where the numbers actually matter.
        </p>
        <p>
          After a summer at FWD Insurance and FDM Group&apos;s engineering
          programme, I joined Toppan Security, where I&apos;ve shipped a public
          passport and national-ID application portal front to back — a React/Next.js
          front end over C#/.NET and Java/Spring Boot services — and deployed it
          across the MEA region while carrying L2/L3 support under SLA.
        </p>
        <p>
          Alongside that I build on the fintech and on-chain side: an LLM Solidity
          auditor over 18 million smart contracts and a stablecoin compliance
          frontend at HK PolyU, and Briva, a live meeting-notes SaaS I run solo. The
          common thread is systems where a mistake is expensive — identity,
          payments, compliance — and the discipline that demands.
        </p>
        <p>
          I&apos;m now looking for a full-stack role where that experience is an
          asset, and I&apos;m open to relocation.
        </p>
      </div>

      {/* Capability map — grouped by depth (§4.4). */}
      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Capabilities
        </h2>
        <div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-3">
          {CAPABILITIES.map((group) => (
            <div key={group.tier} className="bg-bg p-5">
              <div className="flex items-baseline justify-between font-mono">
                <span className="text-sm font-medium text-fg">{group.tier}</span>
                <span className="text-[0.65rem] uppercase tracking-wider text-fg-dim">
                  {group.note}
                </span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-fg-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline (§4.4). */}
      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Timeline
        </h2>
        <ol className="mt-6 divide-y divide-border border-y border-border">
          {TIMELINE.map((entry) => (
            <li
              key={entry.title}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-6"
            >
              <span className="shrink-0 font-mono text-xs text-fg-dim sm:w-28">
                {entry.period}
              </span>
              <div>
                <p className="font-medium text-fg">{entry.title}</p>
                <p className="text-sm text-fg-dim">{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Education (§4.4). */}
      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Education
        </h2>
        <div className="mt-6 border-y border-border py-5">
          <p className="font-medium text-fg">{EDUCATION.degree}</p>
          <p className="text-sm text-fg-dim">
            {EDUCATION.institution} · {EDUCATION.period}
          </p>
          {EDUCATION.awards.length > 0 && (
            <p className="mt-1 font-mono text-xs text-fg-dim">
              {EDUCATION.awards.join(" · ")}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
