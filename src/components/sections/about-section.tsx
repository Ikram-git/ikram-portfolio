import {
  ArrowRight,
  Atom,
  Blocks,
  Braces,
  Brain,
  BrainCircuit,
  Cloud,
  Container,
  Database,
  DatabaseZap,
  Flame,
  FlaskConical,
  GraduationCap,
  Hash,
  Hexagon,
  History,
  Leaf,
  Link as LinkIcon,
  Network,
  ShieldCheck,
  Smartphone,
  Terminal,
  Triangle,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  CAPABILITIES,
  TIMELINE,
  EDUCATION,
  ACADEMIC_PROJECTS,
  PROFILE,
} from "@/lib/profile";

/** Capability `icon` key → lucide glyph (see CAPABILITIES in lib/profile). */
const CAPABILITY_ICONS: Record<string, LucideIcon> = {
  atom: Atom,
  blocks: Blocks,
  braces: Braces,
  brain: Brain,
  "brain-circuit": BrainCircuit,
  cloud: Cloud,
  container: Container,
  database: Database,
  "database-zap": DatabaseZap,
  flame: Flame,
  hash: Hash,
  hexagon: Hexagon,
  leaf: Leaf,
  link: LinkIcon,
  network: Network,
  "shield-check": ShieldCheck,
  smartphone: Smartphone,
  terminal: Terminal,
  triangle: Triangle,
  workflow: Workflow,
  zap: Zap,
};

/** About — shared by the /about route and the one-page home (§4.4). */
export function AboutSection({ showPortrait = true }: { showPortrait?: boolean }) {
  return (
    <section id="about" className="scroll-mt-24 py-12">
      <header className="reveal flex flex-col gap-8 sm:flex-row sm:items-end">
        {/* Instrumentation-framed portrait: hairline border + accent ring. */}
        {showPortrait && (
          <figure className="shrink-0">
            <div className="w-40 rounded-full border border-border p-2 ring-1 ring-accent/20 sm:w-48">
              <Image
                src="/ikram.jpg"
                alt="Portrait of Ikram Sattar"
                width={1000}
                height={1000}
                className="aspect-square h-auto w-full rounded-full object-cover grayscale-[0.12]"
              />
            </div>
          </figure>
        )}

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {PROFILE.name}
          </h2>
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
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 font-mono text-sm text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40 hover:brightness-110"
        >
          See the work
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Capability map — grouped by depth (§4.4). */}
      <section className="mt-16">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <Wrench className="h-4 w-4" aria-hidden="true" />
          Capabilities
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {CAPABILITIES.map((group) => (
            <div key={group.tier} className="card p-5">
              <div className="flex items-baseline justify-between font-mono">
                <span className="text-sm font-medium text-fg">{group.tier}</span>
                <span className="text-[0.65rem] uppercase tracking-wider text-fg-dim">
                  {group.note}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = CAPABILITY_ICONS[item.icon];
                  return (
                    <li key={item.label} className="chip">
                      {Icon && (
                        <Icon
                          className="h-3.5 w-3.5 text-accent"
                          aria-hidden="true"
                        />
                      )}
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline (§4.4). */}
      <section className="mt-16">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <History className="h-4 w-4" aria-hidden="true" />
          Timeline
        </h2>
        <ol className="relative mt-6 space-y-8 border-l border-border pl-6">
          {TIMELINE.map((entry) => (
            <li key={entry.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
              />
              <span className="font-mono text-xs text-accent">
                {entry.period}
              </span>
              <p className="mt-1 font-medium text-fg">{entry.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-fg-dim">
                {entry.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education (with coursework) — kept toward the bottom. */}
      <section className="mt-16">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <GraduationCap className="h-4 w-4" aria-hidden="true" />
          Education
        </h2>
        <div className="card mt-6 p-6">
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
                <span key={course} className="chip">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic / coursework projects (§4.4). */}
      <section className="mt-16">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <FlaskConical className="h-4 w-4" aria-hidden="true" />
          Academic projects
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {ACADEMIC_PROJECTS.map((project) => (
            <li key={project.title} className="card card-hover p-5">
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
    </section>
  );
}
