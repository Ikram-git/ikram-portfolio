import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { NavLinks, type NavItem } from "@/components/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { PROFILE } from "@/lib/profile";

// Anchors into the one-page home — the standalone routes still exist for deep
// links, but primary navigation scrolls the single page. CV serves the actual
// PDF (single source of truth), not the generated /cv page.
const NAV: NavItem[] = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#hiring", label: "Hiring" },
  { href: "/Ikram_Sattar_Resume.pdf", label: "CV" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/75 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-[var(--container-content)] items-center justify-between gap-4 px-gutter">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-fg transition-colors hover:text-accent"
        >
          IKRAM<span className="text-accent">.</span>SATTAR
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1">
          <NavLinks items={NAV} />

          <div className="ml-2 hidden items-center gap-1 border-l border-border pl-3 sm:flex">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 text-fg-dim transition-colors hover:bg-bg-raised hover:text-fg"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-fg-dim transition-colors hover:bg-bg-raised hover:text-fg"
            >
              <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
