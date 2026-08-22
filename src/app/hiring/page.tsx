import type { Metadata } from "next";
import { MilestonePlaceholder } from "@/components/milestone-placeholder";

export const metadata: Metadata = { title: "Hiring" };

export default function HiringPage() {
  return (
    <MilestonePlaceholder
      title="For hiring managers"
      milestone="M4 · pages"
      note="Availability, work authorisation (Pakistani national, Hong Kong PR — sponsorship required), route/salary tables with dated official-source links, logistics, and a downloadable one-pager arrive in the pages milestone."
    />
  );
}
