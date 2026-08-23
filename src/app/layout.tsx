import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import { ThemeScript } from "@/components/theme-script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const SITE_NAME = "Ikram Sattar";
const SITE_DESCRIPTION =
  "Full-stack developer who ships production systems where failure is expensive — fintech and on-chain analysis, digital identity, polyglot microservices, CI/CD and on-call ownership under SLA.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ikramsattar.dev"),
  title: {
    default: `${SITE_NAME} — Full-Stack Developer`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Full-Stack Developer`,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1020", // dark is the default theme
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        <a
          href="#main"
          className="sr-only rounded-sm bg-bg-raised px-3 py-2 font-mono text-xs text-fg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
