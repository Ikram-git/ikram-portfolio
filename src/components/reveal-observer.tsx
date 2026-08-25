"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-reveal driver. Marks <html> as reveal-ready (so the CSS only hides
 * [data-reveal] elements when JS is actually running), then reveals each one
 * as it enters the viewport. Re-runs on route changes.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    // Anything already in view on load shows immediately (no pop-in above the fold).
    for (const el of els) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add("in-view");
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of els) {
      if (!el.classList.contains("in-view")) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
