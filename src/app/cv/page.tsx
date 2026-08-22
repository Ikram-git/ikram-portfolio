import type { Metadata } from "next";
import { MilestonePlaceholder } from "@/components/milestone-placeholder";

export const metadata: Metadata = { title: "CV" };

export default function CvPage() {
  return (
    <MilestonePlaceholder
      title="Curriculum vitae"
      milestone="M4 · pages"
      note="Semantic HTML CV with a print stylesheet for clean A4, a one-page PDF download, and Person JSON-LD arrive in the pages milestone."
    />
  );
}
