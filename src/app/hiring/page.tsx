import type { Metadata } from "next";
import { ArrowRight, ClipboardList, Mail, ShieldCheck, Target } from "lucide-react";
import { PROFILE, LOOKING_FOR, LOGISTICS } from "@/lib/profile";
import { VISA_ROUTES, LAST_VERIFIED } from "@/lib/visa-routes";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Hiring",
  description:
    "For hiring managers: what I'm looking for, work authorisation explained plainly, sponsorship routes with official-source links, and logistics.",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
      <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-fg-dim sm:w-44">
        {label}
      </span>
      <div className="text-fg-dim">{children}</div>
    </div>
  );
}

function isTodo(v: string) {
  return v.startsWith("TODO");
}

export default function HiringPage() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-16">
      <header className="reveal flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            For hiring managers
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hiring me: the honest logistics
          </h1>
          <p className="measure mt-4 text-fg-dim">
            I&apos;m a {PROFILE.residency} and {PROFILE.nationality} national,
            based in {PROFILE.location}. In Hong Kong I&apos;m looking for
            opportunities in finance and fintech — as a permanent resident I
            need no sponsorship there. Outside Hong Kong I&apos;m open to
            general software development roles, which means employer
            sponsorship almost everywhere. Here&apos;s exactly what that
            involves for you — no surprises.
          </p>
        </div>
        <PrintButton label="One-pager (PDF)" />
      </header>

      {/* What I'm looking for */}
      <section className="mt-14">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <Target className="h-4 w-4" aria-hidden="true" />
          What I&apos;m looking for
        </h2>
        <p className="measure mt-3 text-sm text-fg-dim">
          A rough shape, not a checklist — if the role is interesting and you
          sponsor, I&apos;d like to talk.
        </p>
        <div className="card mt-4 divide-y divide-border px-5">
          <Row label="Level">{LOOKING_FOR.level}</Row>
          <Row label="Where">
            <ul className="space-y-1">
              {LOOKING_FOR.where.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </Row>
          <Row label="Interests">
            {LOOKING_FOR.focus.join(" · ")}
            <span className="mt-1 block text-xs italic">
              Open to adjacent teams too.
            </span>
          </Row>
          <Row label="Earliest start">{LOOKING_FOR.earliestStart}</Row>
        </div>
      </section>

      {/* Work authorisation table */}
      <section className="mt-14">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Work authorisation, plainly
        </h2>
        <p className="measure mt-3 text-sm text-fg-dim">
          <strong className="font-medium text-fg">In Hong Kong: nothing to
          do.</strong>{" "}
          I&apos;m a permanent resident with full right to work — no visa, no
          sponsorship, no lead time. The table below is for roles outside Hong
          Kong: the sponsorship routes that apply to me, with the salary floor,
          what you&apos;d do, and rough timelines. As a non-EU/UK national I
          also need an entry visa (e.g. an MVV for the Netherlands) — a
          standard step your immigration team handles.
        </p>

        <div className="card mt-6 overflow-x-auto px-5 py-1">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-y border-border font-mono text-[0.65rem] uppercase tracking-wider text-fg-dim">
                <th className="py-3 pr-4 font-medium">Route</th>
                <th className="py-3 pr-4 font-medium">Salary floor (2026)</th>
                <th className="py-3 pr-4 font-medium">What you do</th>
                <th className="py-3 pr-4 font-medium">Timeline</th>
                <th className="py-3 font-medium">Source</th>
              </tr>
            </thead>
            <tbody>
              {VISA_ROUTES.map((r) => (
                <tr key={r.country} className="border-b border-border align-top">
                  <td className="py-4 pr-4">
                    <div className="font-medium text-fg">
                      {r.flag} {r.country}
                    </div>
                    <div className="text-xs text-fg-dim">{r.route}</div>
                  </td>
                  <td className="py-4 pr-4 text-fg-dim">{r.threshold}</td>
                  <td className="py-4 pr-4 text-fg-dim">
                    {r.employer}
                    {r.note && (
                      <span className="mt-1 block text-xs italic">{r.note}</span>
                    )}
                  </td>
                  <td className="py-4 pr-4 text-fg-dim">{r.timeline}</td>
                  <td className="py-4">
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent hover:underline"
                    >
                      {r.sourceLabel} ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="measure mt-4 text-xs text-fg-dim">
          These are each country&apos;s <em>visa salary floor</em> — the legal
          minimum for the route, not my salary expectation. Figures last verified{" "}
          {LAST_VERIFIED}; thresholds are indexed and change, so confirm the
          current figure at the linked official source.
        </p>
      </section>

      {/* Logistics */}
      <section className="mt-14">
        <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <ClipboardList className="h-4 w-4" aria-hidden="true" />
          Logistics
        </h2>
        <div className="card mt-4 divide-y divide-border px-5">
          <Row label="Notice period">
            {isTodo(LOGISTICS.noticePeriod) ? (
              <TodoInline text="current notice period" />
            ) : (
              LOGISTICS.noticePeriod
            )}
          </Row>
          <Row label="Relocation">{LOGISTICS.relocation}</Row>
          <Row label="Funding">
            {isTodo(LOGISTICS.funding) ? (
              <TodoInline text="self-funded or support needed?" />
            ) : (
              LOGISTICS.funding
            )}
          </Row>
          <Row label="Interviews">{LOGISTICS.interviewOverlap}</Row>
        </div>
      </section>

      <section className="mt-14 border-t border-border pt-6">
        <a
          href={`mailto:${PROFILE.email}?subject=Role%20enquiry`}
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 font-mono text-sm text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40 hover:brightness-110"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email me
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </section>
    </div>
  );
}

function TodoInline({ text }: { text: string }) {
  return (
    <span className="font-mono text-xs text-fg-dim">
      <span className="rounded-sm bg-bg-raised px-1 text-accent">TODO</span>{" "}
      {text}
    </span>
  );
}
