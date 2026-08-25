import type { Metadata } from "next";
import { HiringSection } from "@/components/sections/hiring-section";

export const metadata: Metadata = {
  title: "Hiring",
  description:
    "For hiring managers: what I'm looking for, work authorisation explained plainly, sponsorship routes with official-source links, and logistics.",
};

export default function HiringPage() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-gutter py-8">
      <HiringSection />
    </div>
  );
}
