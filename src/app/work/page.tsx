import type { Metadata } from "next";
import { MilestonePlaceholder } from "@/components/milestone-placeholder";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <MilestonePlaceholder
      title="Selected work"
      milestone="M3 · content pipeline"
      note="Case studies load from MDX in the content pipeline milestone: distributed identity platform, 18M-contract retrieval pipeline, secure document authentication, and Briva."
    />
  );
}
