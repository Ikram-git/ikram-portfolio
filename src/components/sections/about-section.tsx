import {
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
import { CAPABILITIES, TIMELINE, EDUCATION, PROFILE } from "@/lib/profile";

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

/**
 * About — capabilities, timeline, education. Identity details (name, blurb,
 * facts) live in the home hero / proof strip; the portrait header renders only
 * on the standalone /about route.
 */
export function AboutSection({ showPortrait = true }: { showPortrait?: boolean }) {
  return (
    <section id="about" className="scroll-mt-24 py-12">
      {showPortrait && (
        <header data-reveal className="flex flex-col gap-8 sm:flex-row sm:items-end">
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
      )}

      {/* Capability map — grouped by depth (§4.4). */}
      <section className={showPortrait ? "mt-16" : undefined}>
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <Wrench className="h-4 w-4" aria-hidden="true" />
          Capabilities
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {CAPABILITIES.map((group, gi) => (
            <div
              key={group.tier}
              className="card p-5"
              data-reveal
              style={{ "--reveal-delay": `${gi * 90}ms` } as React.CSSProperties}
            >
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
          {TIMELINE.map((entry, ti) => (
            <li
              key={entry.title}
              className="relative"
              data-reveal
              style={{ "--reveal-delay": `${ti * 70}ms` } as React.CSSProperties}
            >
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

      {/* Education — compact card. */}
      <section className="mt-16">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <GraduationCap className="h-4 w-4" aria-hidden="true" />
          Education
        </h2>
        <div className="card mt-6 p-6" data-reveal>
          <p className="text-lg font-medium text-fg">{EDUCATION.degree}</p>
          <p className="mt-1 text-fg-dim">
            {EDUCATION.institution} · {EDUCATION.period}
          </p>
          {EDUCATION.awards.length > 0 && (
            <p className="mt-2 font-mono text-xs text-accent">
              {EDUCATION.awards.join(" · ")}
            </p>
          )}
        </div>
      </section>
    </section>
  );
}
