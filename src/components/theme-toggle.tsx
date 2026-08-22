"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be unavailable — theme still applies for the session */
    }
    setTheme(next);
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-8 items-center gap-2 rounded-sm border border-border px-2 font-mono text-xs text-fg-dim transition-colors hover:border-accent hover:text-fg"
    >
      {/* Suppress mismatch: server renders neutral until mounted resolves the real theme. */}
      <span aria-hidden="true">{mounted ? (theme === "dark" ? "◐" : "◑") : "◐"}</span>
      <span className="uppercase tracking-wider">
        {mounted ? theme : "theme"}
      </span>
    </button>
  );
}
