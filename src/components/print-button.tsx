"use client";

import { Printer } from "lucide-react";

/**
 * Triggers the browser print dialog (→ "Save as PDF"). The printed output uses
 * the same rendered page data, so the PDF can never drift from the page (§4.5).
 * Hidden in the print output itself.
 */
export function PrintButton({ label = "Print" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 font-mono text-xs text-fg transition-colors hover:border-accent hover:text-accent print:hidden"
    >
      <Printer className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </button>
  );
}
