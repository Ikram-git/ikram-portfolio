import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CAPABILITIES,
  TIMELINE,
  EDUCATION,
  ACADEMIC_PROJECTS,
  PROFILE,
} from "@/lib/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software developer from Hong Kong — full-stack, with production work in fintech, on-chain analysis and digital identity. BSc CS, HK PolyU.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-16">
      <header className="reveal flex flex-col gap-8 sm:flex-row sm:items-end">
        {/* Instrumentation-framed portrait: hairline border + accent ring. */}
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

      {/* Narrative — plain, skills/stack-led (not a project recap). */}
      <div className="measure mt-8 space-y-4 text-fg-dim">
        <p>
          I&apos;m a software developer based in Hong Kong, with a BSc in Computer
          Science from HK PolyU and around three years of production experience.
        </p>
        <p>
          I work across the stack. On the front end that&apos;s React, Next.js and
          TypeScript; on the back end, Java/Spring Boot, C#/.NET and Python/FastAPI,
          on PostgreSQL. For delivery I use AWS, Docker and Jenkins, and I&apos;ve
          carried L2/L3 production support under SLA. I&apos;m comfortable owning a
          feature end to end and picking up whatever a problem needs.
        </p>
        <p>
          Most of my work sits in fintech, on-chain analysis and digital identity —
          domains where correctness matters. In Hong Kong I&apos;m looking for
          opportunities in finance and fintech, where that background is most
          useful; outside Hong Kong I&apos;m open to general software engineering
          roles, and I&apos;m open to relocation.
        </p>
      </div>

      {/* Work is the main thing — link straight to it. */}
      <div className="mt-8">
        <Link
          href="/work"
          className="inline-flex h-11 items-center rounded-sm bg-accent px-5 font-mono text-sm text-white transition-opacity hover:opacity-90"
        >
          See the work →
        </Link>
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

      {/* Education (with coursework) — kept toward the bottom. */}
      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Education
        </h2>
        <div className="mt-6 border-y border-border py-6">
          <p className="text-lg font-medium text-fg">{EDUCATION.degree}</p>
          <p className="mt-1 text-fg-dim">
            {EDUCATION.institution} · {EDUCATION.period}
          </p>
          {EDUCATION.awards.length > 0 && (
            <p className="mt-2 font-mono text-xs text-accent">
              {EDUCATION.awards.join(" · ")}
            </p>
          )}
          <div className="mt-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim">
              Relevant coursework
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {EDUCATION.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-sm bg-bg-raised px-2 py-0.5 font-mono text-xs text-fg-dim"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic / coursework projects (§4.4). */}
      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Academic projects
        </h2>
        <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
          {ACADEMIC_PROJECTS.map((project) => (
            <li key={project.title} className="bg-bg p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-medium text-fg">{project.title}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-[0.65rem] uppercase tracking-wider text-accent hover:underline"
                  >
                    {project.urlLabel} ↗
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm text-fg-dim">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[0.6rem] uppercase tracking-wider text-fg-dim"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
