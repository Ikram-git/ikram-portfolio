import type { Metadata } from "next";
import { CAPABILITIES, TIMELINE, EDUCATION, PROFILE } from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer from Hong Kong — fintech, on-chain analysis and digital identity. BSc CS, HK PolyU.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-16">
      <header className="reveal">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          About
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {PROFILE.name}
        </h1>
      </header>

      {/* Narrative — four short paragraphs (§4.4). TODO prose. */}
      <div className="measure mt-8 space-y-4 text-fg-dim">
        <p>
          <span className="rounded-sm bg-bg-raised px-1 font-mono text-xs text-accent">
            TODO
          </span>{" "}
          Where you&apos;re from and how you got into software — Hong Kong, PolyU.
        </p>
        <p>
          <span className="rounded-sm bg-bg-raised px-1 font-mono text-xs text-accent">
            TODO
          </span>{" "}
          The path — FDM, then Toppan; what you built and owned.
        </p>
        <p>
          <span className="rounded-sm bg-bg-raised px-1 font-mono text-xs text-accent">
            TODO
          </span>{" "}
          Why high-stakes production systems — fintech, on-chain analysis,
          identity — became the thing you care about.
        </p>
        <p>
          <span className="rounded-sm bg-bg-raised px-1 font-mono text-xs text-accent">
            TODO
          </span>{" "}
          Where you&apos;re going next.
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
