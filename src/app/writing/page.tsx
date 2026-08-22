import type { Metadata } from "next";
import { MilestonePlaceholder } from "@/components/milestone-placeholder";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  return (
    <MilestonePlaceholder
      title="Writing"
      milestone="M3 · content pipeline"
      note="Technical posts render from MDX with build-time syntax highlighting, dates, tags and RSS in the content pipeline milestone."
    />
  );
}
