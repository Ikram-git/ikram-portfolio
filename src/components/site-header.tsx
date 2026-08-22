import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/hiring", label: "Hiring" },
  { href: "/cv", label: "CV" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-[var(--container-content)] items-center justify-between gap-4 px-gutter">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-fg hover:text-accent"
        >
          IKRAM SATTAR
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-fg-dim transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
