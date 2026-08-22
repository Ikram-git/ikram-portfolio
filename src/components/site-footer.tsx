import { PROFILE } from "@/lib/profile";

const YEAR = new Date().getFullYear();

const LINKS = [
  { href: `mailto:${PROFILE.email}?subject=Role%20enquiry`, label: "Email" },
  { href: PROFILE.github, label: "GitHub" },
  { href: PROFILE.linkedin, label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border print:hidden">
      <div className="mx-auto flex max-w-[var(--container-content)] flex-col gap-6 px-gutter py-10 font-mono text-xs text-fg-dim">
        <nav aria-label="Contact" className="flex flex-wrap gap-x-5 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="uppercase tracking-wider text-fg-dim transition-colors hover:text-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} Ikram Sattar</p>
          <p className="flex items-center gap-3">
            <span className="uppercase tracking-wider">Hong Kong · UTC+8</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase tracking-wider">Open to relocation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
