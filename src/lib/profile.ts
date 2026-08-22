/**
 * Single source of truth for the person — consumed by /about, /cv, /hiring and
 * the Person JSON-LD. Only facts stated by Ikram or the spec are hard-coded;
 * anything personal that hasn't been confirmed is a clearly-marked TODO.
 */

export const PROFILE = {
  name: "Ikram Sattar",
  role: "Full-Stack Developer",
  tagline:
    "I build production systems where failure is expensive — fintech, on-chain analysis and digital identity.",
  location: "Hong Kong",
  timezone: "HKT (UTC+8)",
  nationality: "Pakistani",
  residency: "Hong Kong permanent resident",
  email: "sattarikram1@gmail.com",
  github: "https://github.com/Ikram-git",
  linkedin: "https://www.linkedin.com/in/ikram-sattar",
  scheduling: "", // TODO — Cal.com link (optional)
} as const;

/** Capability map grouped by DEPTH, not category (§4.4). Honest tiering reads
 *  senior. Draft below — re-tier honestly: "Deep" = would defend in an
 *  interview; "Working" = used in production; "Familiar" = touched it. */
export const CAPABILITIES: { tier: string; note: string; items: string[] }[] = [
  {
    tier: "Deep",
    note: "Would defend in an interview",
    items: ["TypeScript", "React / Next.js", "Python"], // TODO — confirm
  },
  {
    tier: "Working",
    note: "Used in production",
    items: [
      "Java / Spring Boot",
      "C# / .NET",
      "FastAPI",
      "Node / Express",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Jenkins",
    ],
  },
  {
    tier: "Familiar",
    note: "Touched it",
    items: [
      "Vector search / RAG",
      "Solidity / EVM bytecode",
      "NFC / ICAO 9303",
      "Supabase",
      "Deepgram / Google STT",
    ],
  },
];

/** Compact, dated timeline (§4.4). Fill TODO dates/roles. */
export const TIMELINE: { period: string; title: string; detail: string }[] = [
  {
    period: "2024–2026",
    title: "Full-Stack Developer · Toppan Security",
    detail:
      "Public passport & national-ID application portal, built front to back.",
  },
  {
    period: "TODO",
    title: "TODO — role · FDM Group",
    detail: "TODO — what you did at FDM.",
  },
  {
    period: "2019–2023",
    title: "BSc (Hons) Computer Science · Hong Kong PolyU",
    detail: "PolyHack 2022 award.",
  },
];

export const EDUCATION = {
  degree: "BSc (Hons) Computer Science",
  institution: "The Hong Kong Polytechnic University",
  period: "2019–2023",
  awards: ["PolyHack 2022"],
} as const;

/** For hiring managers (§4.5). */
export const LOOKING_FOR = {
  level: "Mid-level full-stack (frontend + backend)",
  focus: ["Fintech & payments", "On-chain analysis", "Digital identity", "Platform"],
  earliestStart: "2 weeks from a signed offer",
} as const;

export const LOGISTICS = {
  noticePeriod: "2 weeks",
  relocation: "Open to relocation; ready to relocate for the right role.",
  funding: "TODO — self-funded relocation, or support needed?",
  interviewOverlap:
    "Comfortable interviewing across the HKT/European overlap (early-evening HKT).",
} as const;
