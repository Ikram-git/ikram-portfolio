const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-[var(--container-content)] flex-col gap-4 px-gutter py-10 font-mono text-xs text-fg-dim sm:flex-row sm:items-center sm:justify-between">
        <p>© {YEAR} Ikram Sattar</p>
        <p className="flex items-center gap-3">
          <span className="uppercase tracking-wider">Hong Kong · UTC+8</span>
          <span aria-hidden="true">·</span>
          <span className="uppercase tracking-wider">Relocating to Europe</span>
        </p>
      </div>
    </footer>
  );
}
