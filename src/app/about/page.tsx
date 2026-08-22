import type { Metadata } from "next";
import { MilestonePlaceholder } from "@/components/milestone-placeholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <MilestonePlaceholder
      title="About"
      milestone="M4 · pages"
      note="Narrative, a depth-tiered capability map, dated timeline and education land in the pages milestone."
    />
  );
}
