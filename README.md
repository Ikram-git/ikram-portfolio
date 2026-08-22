# ikramsattar.dev

Personal portfolio for Ikram Sattar — backend-leaning full-stack engineer. Static-first
Next.js site built on an "instrumentation" design system (machine-readable formats,
monospaced data, specification typography).

The repo is intended to be read: it is itself part of the portfolio.

## Stack

| Layer          | Choice                                            |
| -------------- | ------------------------------------------------- |
| Framework      | Next.js (App Router), static where possible       |
| Language       | TypeScript, `strict: true`                        |
| Styling        | Tailwind CSS v4 (tokens as CSS vars in `@theme`)  |
| Fonts          | Geist + Geist Mono, self-hosted via `next/font`   |
| Hosting        | Vercel (planned)                                  |

Content (MDX case studies + posts), the MRZ signature band, and the `/hiring` PDF
generator arrive in later milestones — see `ARCHITECTURE.md`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

## Checks

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint (next config)
npm run build       # production build
npm run check       # all three
```

CI (`.github/workflows/ci.yml`) runs typecheck, lint, build, then a Lighthouse budget
that fails under 0.95 on performance, accessibility, best-practices and SEO
(`lighthouserc.json`).

## Design tokens

Defined once in `src/app/globals.css`:

- Raw palette → `--ink`, `--paper`, `--uv`, `--verify`, `--rule`, …
- Semantic roles (`--bg`, `--fg`, `--accent`, …) are theme-switchable and mapped to
  Tailwind utilities via `@theme inline`, so `bg-bg` / `text-fg` / `text-accent` react
  to the runtime theme.

Dark is the default; light inverts ground/text and keeps the violet accent. The theme
is resolved before first paint by an inline script (`theme-script.tsx`), respects
`prefers-color-scheme`, and persists to `localStorage`.

## Build milestones

- **M1 — Foundation** ✅ Next.js + TS + Tailwind v4, tokens, self-hosted fonts, layout
  shell, theme toggle, CI + Lighthouse budget, deployable shell.
- **M2 — Signature** — MRZ machine-readable band (OCR-B, check-digit arithmetic, a11y).
- **M3 — Content pipeline** — MDX loading, Shiki, `/work` + `/writing`, RSS, OG images.
- **M4 — Pages** — Home, `/hiring` (+ PDF), `/about`, `/cv`.
- **M5 — Hardening** — a11y + contrast audit, Lighthouse per route, print stylesheet.
- **M6 — Launch** — domain, analytics, Person schema.
