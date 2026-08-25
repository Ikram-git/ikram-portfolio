import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software developer from Hong Kong — full-stack, with production work in fintech, on-chain analysis and digital identity. BSc CS, HK PolyU.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-8">
      <AboutSection />
    </div>
  );
}
