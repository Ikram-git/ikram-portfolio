import type { Metadata } from "next";
import {
  PROFILE,
  CAPABILITIES,
  TIMELINE,
  EDUCATION,
} from "@/lib/profile";
import { getCaseStudies } from "@/lib/content";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae — ${PROFILE.name}, ${PROFILE.role}.`,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  email: `mailto:${PROFILE.email}`,
  address: { "@type": "PostalAddress", addressLocality: PROFILE.location },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: EDUCATION.institution,
  },
  url: "https://ikramsattar.dev",
};

export default function CvPage() {
  const studies = getCaseStudies();

  return (
    <div className="mx-auto max-w-3xl px-gutter py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="mb-8 flex items-center justify-between print:hidden">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Curriculum vitae
        </p>
        <PrintButton label="Download PDF" />
      </div>

      <article>
        <header className="border-b border-border pb-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="mt-1 text-fg-dim">{PROFILE.role}</p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-fg-dim">
            <span>{PROFILE.location}</span>
            <a href={`mailto:${PROFILE.email}`} className="text-accent">
              {PROFILE.email}
            </a>
            <a href={PROFILE.github} className="text-accent">
              {PROFILE.github.replace("https://", "")}
            </a>
            <a href={PROFILE.linkedin} className="text-accent">
              {PROFILE.linkedin.replace("https://www.", "")}
            </a>
          </p>
          <p className="measure mt-4 text-sm text-fg-dim">{PROFILE.tagline}</p>
        </header>

        {/* Selected work */}
        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Selected work
          </h2>
          <ul className="mt-4 space-y-5">
            {studies.map((cs) => (
              <li key={cs.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-fg">{cs.title}</h3>
                  <span className="font-mono text-xs text-fg-dim">
                    {cs.org} · {cs.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-fg-dim">
                  {cs.stack.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience timeline */}
        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Experience &amp; education
          </h2>
          <ul className="mt-4 space-y-4">
            {TIMELINE.map((entry) => (
              <li key={entry.title} className="flex gap-4">
                <span className="shrink-0 font-mono text-xs text-fg-dim">
                  {entry.period}
                </span>
                <div>
                  <p className="font-medium text-fg">{entry.title}</p>
                  <p className="text-sm text-fg-dim">{entry.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Skills
          </h2>
          <dl className="mt-4 space-y-2">
            {CAPABILITIES.map((group) => (
              <div key={group.tier} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="shrink-0 font-mono text-xs uppercase tracking-wider text-fg-dim sm:w-24">
                  {group.tier}
                </dt>
                <dd className="text-sm text-fg-dim">{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Education
          </h2>
          <p className="mt-4 font-medium text-fg">{EDUCATION.degree}</p>
          <p className="text-sm text-fg-dim">
            {EDUCATION.institution} · {EDUCATION.period} ·{" "}
            {EDUCATION.awards.join(", ")}
          </p>
        </section>
      </article>
    </div>
  );
}
