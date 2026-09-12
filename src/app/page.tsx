import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Boxes, FileDown, GraduationCap, Landmark, Layers, LifeBuoy, Mail, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { ScaleLedger } from "@/components/scale-ledger";
import { AboutSection } from "@/components/sections/about-section";
import { HiringSection } from "@/components/sections/hiring-section";
import { WorkSection } from "@/components/sections/work-section";
import { PROFILE } from "@/lib/profile";
import { SITE_URL } from "@/lib/site";

/**
 * Home (§4.1). Hero register per spec; proof-strip facts are the non-fabricated
 * attributes from §4.1 Block 2. Selected work reads the featured case studies.
 */

const PROOF = [
  { Icon: Layers, text: "Full-stack — React/Next.js, Java, .NET, Python" },
  { Icon: Landmark, text: "Fintech · on-chain analysis · digital identity" },
  { Icon: Boxes, text: "Microservices · AWS · Docker · Jenkins" },
  { Icon: LifeBuoy, text: "L2/L3 production ops under SLA" },
  { Icon: GraduationCap, text: "BSc CS, HK PolyU" },
  {
    Icon: ShieldCheck,
    text: "HK permanent resident — sponsorship only outside HK",
  },
];

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ikram Sattar",
    jobTitle: "Full-Stack Developer",
    address: { "@type": "PostalAddress", addressLocality: "Hong Kong" },
    url: SITE_URL,
  };

  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div>
          <span className="reveal inline-flex items-center gap-2.5 rounded-full border border-ok/30 bg-ok/10 px-3.5 py-1.5 font-mono text-xs text-ok">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            Open to opportunities
          </span>

          <h1 className="reveal-1 mt-6 max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            I build production systems where{" "}
            <span className="text-gradient">failure is expensive</span>.
          </h1>
          <p className="reveal-2 measure mt-6 text-lg leading-relaxed text-fg-dim">
            Three years shipping software end to end — from a national passport
            portal to on-chain analysis over 18M smart contracts.
          </p>

          <div className="reveal-3 mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/#work"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 font-mono text-sm text-bg shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40 hover:brightness-110"
            >
              See the work
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href="/Ikram_Sattar_Resume.pdf"
              download
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
            <div className="flex items-center gap-1">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-border p-2.5 text-fg-dim transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-2.5 text-fg-dim transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${PROFILE.email}?subject=Role%20enquiry`}
                aria-label="Email"
                className="rounded-full border border-border p-2.5 text-fg-dim transition-colors hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Portrait — round, soft accent glow. */}
        <figure className="reveal-2 order-first lg:order-none">
          <div className="relative mx-auto w-44 sm:w-56 lg:mx-0 lg:w-64">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl"
            />
            <div className="relative rounded-full border border-border bg-bg-raised/60 p-2 ring-1 ring-accent/30">
              <Image
                src="/ikram.jpg"
                alt="Portrait of Ikram Sattar"
                width={1000}
                height={1000}
                className="aspect-square h-auto w-full rounded-full object-cover"
                priority
              />
            </div>
          </div>
          <figcaption className="mt-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.15em] text-fg-dim">
            Ikram Sattar · HKG
          </figcaption>
        </figure>
      </section>

      {/* Proof strip — data face, absorbable without prose (§4.1 Block 2). */}
      <section aria-label="At a glance" data-reveal>
        <ul className="flex flex-wrap gap-2.5">
          {PROOF.map(({ Icon, text }) => (
            <li key={text} className="chip">
              <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* Signature element — scale-ledger strip, between hero and work (§5). */}
      <div className="my-12" data-reveal>
        <ScaleLedger />
      </div>

      {/* One-page sections — same components as the /work, /about and /hiring routes. */}
      <div className="border-t border-border">
        <WorkSection />
      </div>
      <div className="border-t border-border">
        <AboutSection showPortrait={false} />
      </div>
      <div className="border-t border-border">
        <HiringSection />
      </div>
    </div>
  );
}
