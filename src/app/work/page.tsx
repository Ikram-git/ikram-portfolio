import type { Metadata } from "next";
import { WorkSection } from "@/components/sections/work-section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engineering case studies — full-stack systems, on-chain analysis, digital identity, and product ownership.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-8">
      <WorkSection />
    </div>
  );
}
