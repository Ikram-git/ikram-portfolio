# Architecture

## Rendering model

Static-first Next.js App Router. Pages are statically generated at build time; there is
no database, no auth, and no API routes (an OG-image route is planned for M3). This keeps
first-load JS small and the perf budget achievable.

## Directory layout

```
src/
  app/
    layout.tsx          root shell: fonts, ThemeScript, header, main, footer
    page.tsx            home (M1 foundation content)
    globals.css         Tailwind import + design tokens + base styles
    robots.ts           robots.txt route
    sitemap.ts          sitemap.xml route
    not-found.tsx       custom 404
    work|writing|about|hiring|cv/page.tsx   route placeholders until their milestone
  components/
    site-header.tsx     primary nav + theme toggle
    site-footer.tsx     footer meta
    theme-script.tsx    inline no-FOUC theme resolver (render-blocking)
    theme-toggle.tsx    client toggle; writes data-theme + localStorage
    milestone-placeholder.tsx   temporary route stub
  lib/
    fonts.ts            self-hosted Geist / Geist Mono via next/font
```

## Theming

Two layers of CSS custom properties in `globals.css`:

1. **Raw palette** (`--ink`, `--paper`, `--uv`, …) — the fixed brand colours.
2. **Semantic roles** (`--bg`, `--fg`, `--fg-dim`, `--border`, `--accent`, `--ok`) —
   what components actually consume. Overridden under `:root[data-theme="light"]`.

`@theme inline` maps the semantic roles to Tailwind colour utilities as `var()`
references (not baked values), so utilities like `bg-bg` and `text-accent` follow the
runtime theme with no rebuild.

Theme resolution order (before first paint, via `theme-script.tsx`):
`localStorage.theme` → `prefers-color-scheme` → dark default.

## Fonts

`next/font/google` downloads and self-hosts Geist (display/body) and Geist Mono
(utility/data) at build time — no runtime CDN request, `display: swap`, subset to latin.
OCR-B is intentionally deferred to M2 and reserved for the MRZ band alone.

## Content pipeline (M3, planned)

MDX in `content/work/*.mdx` and `content/writing/*.mdx`, parsed with `gray-matter`,
typed frontmatter, Shiki for build-time highlighting (zero client JS for code). No CMS.

## Performance & CI

- Budget enforced in CI via `@lhci/cli` against `lighthouserc.json` (≥0.95 all axes).
- No third-party scripts beyond a single analytics beacon (added at launch).
