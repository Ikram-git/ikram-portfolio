import { Mail, MapPin, Plane } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { PROFILE } from "@/lib/profile";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    href: `mailto:${PROFILE.email}?subject=Role%20enquiry`,
    label: "Email",
    Icon: Mail,
  },
  { href: PROFILE.github, label: "GitHub", Icon: GithubIcon },
  { href: PROFILE.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border print:hidden">
      <div className="mx-auto flex max-w-[var(--container-content)] flex-col gap-6 px-gutter py-10 font-mono text-xs text-fg-dim">
        <nav aria-label="Contact" className="flex flex-wrap gap-3">
          {LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              className="chip uppercase tracking-wider"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} Ikram Sattar</p>
          <p className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 uppercase tracking-wider">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Hong Kong · UTC+8
            </span>
            <span className="inline-flex items-center gap-1.5 uppercase tracking-wider">
              <Plane className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Open to relocation
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
