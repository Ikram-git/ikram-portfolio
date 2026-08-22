/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Portfolio is static-first; App Router pages are statically generated where possible.
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
