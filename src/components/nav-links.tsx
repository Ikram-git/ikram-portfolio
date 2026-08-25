"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Primary nav with active-section highlighting.
 *
 * On the one-page home, an IntersectionObserver tracks which section
 * (#work / #about / #hiring) is in view and highlights its nav item; above
 * the first section nothing is active. On the standalone routes the active
 * item comes from the pathname instead.
 */

export type NavItem = { href: string; label: string };

const SECTION_IDS = ["work", "about", "hiring"] as const;

function sectionOf(href: string): string | null {
  const m = href.match(/^\/#(\w+)$/);
  return m?.[1] ?? null;
}

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    // The active section is the one crossing the upper-middle band of the
    // viewport; scrolling above all sections clears the highlight.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            return;
          }
        }
        // No section in the band — if we're above the first one, clear.
        const first = sections[0];
        if (first && first.getBoundingClientRect().top > window.innerHeight * 0.4) {
          setActiveSection(null);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    for (const el of sections) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  function isActive(item: NavItem): boolean {
    const section = sectionOf(item.href);
    if (section) {
      // Standalone routes double as their section (e.g. /about ↔ #about).
      if (pathname === `/${section}`) return true;
      return pathname === "/" && activeSection === section;
    }
    return pathname === item.href;
  }

  const base =
    "rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors";
  const idle = "text-fg-dim hover:bg-bg-raised hover:text-fg";
  const active = "bg-accent/15 text-accent";

  return (
    <ul className="hidden items-center gap-1 sm:flex">
      {items.map((item) => {
        const cls = `${base} ${isActive(item) ? active : idle}`;
        return (
          <li key={item.href}>
            {item.href.endsWith(".pdf") ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className={cls}>
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
