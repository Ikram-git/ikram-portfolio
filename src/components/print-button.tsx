"use client";

/**
 * Triggers the browser print dialog (→ "Save as PDF"). The printed output uses
 * the same rendered page data, so the PDF can never drift from the page (§4.5).
 * Hidden in the print output itself.
 */
export function PrintButton({ label = "Download PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-10 items-center rounded-sm border border-border px-4 font-mono text-xs text-fg transition-colors hover:border-accent print:hidden"
    >
      ↓ {label}
    </button>
  );
}
