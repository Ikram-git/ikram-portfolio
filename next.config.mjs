/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Allow a separate build output dir (e.g. NEXT_DIST_DIR=.next-build) so an
  // ad-hoc `next build` never corrupts a running `next dev`'s .next cache.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Portfolio is static-first; App Router pages are statically generated where possible.
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
