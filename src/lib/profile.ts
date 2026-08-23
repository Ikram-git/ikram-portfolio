/**
 * Single source of truth for the person — consumed by /about, /cv, /hiring and
 * the Person JSON-LD. Facts are drawn from Ikram's CV (Aug 2026). Anything not
 * on the CV is a clearly-marked TODO.
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
  email: "sattarikram81@gmail.com",
  github: "https://github.com/Ikram-git",
  linkedin: "https://www.linkedin.com/in/ikram-sattar",
  scheduling: "", // TODO — Cal.com link (optional)
} as const;

/** Capability map grouped by DEPTH, not category (§4.4). Draft tiers below,
 *  grounded in the CV — re-tier honestly: "Deep" = would defend in an
 *  interview; "Working" = used in production; "Familiar" = touched it. */
export const CAPABILITIES: { tier: string; note: string; items: string[] }[] = [
  {
    tier: "Deep",
    note: "Would defend in an interview",
    items: [
      "TypeScript",
      "React / Next.js",
      "Java / Spring Boot",
      "Python / FastAPI",
      "PostgreSQL",
    ],
  },
  {
    tier: "Working",
    note: "Used in production",
    items: [
      "C# / .NET",
      "Node / Express",
      "Flutter / Dart",
      "REST / microservices",
      "AWS",
      "Docker",
      "Jenkins",
      "Supabase",
      "Solidity",
    ],
  },
  {
    tier: "Familiar",
    note: "Touched it",
    items: [
      "RAG / vector databases",
      "BAC · PACE/SAC · ICAO 9303",
      "React Native",
      "Machine learning",
      "Web3.js",
    ],
  },
];

/** Compact, dated timeline (§4.4), from the CV. */
export const TIMELINE: { period: string; title: string; detail: string }[] = [
  {
    period: "2024–present",
    title: "Full-Stack Developer · Toppan Security",
    detail:
      "Public passport & national-ID application portal, built front to back; MEA rollout with L2/L3 support under SLA.",
  },
  {
    period: "2025–present",
    title: "Software Developer (part-time) · HK PolyU",
    detail:
      "LLM-powered Solidity smart-contract auditor and a stablecoin compliance frontend.",
  },
  {
    period: "Jul–Dec 2023",
    title: "Software Developer Trainee · FDM Group",
    detail: "Pre-deployment engineering training — Java, Spring, JDBC, JPA/Hibernate.",
  },
  {
    period: "Jun–Aug 2022",
    title: "Summer Intern · FWD Insurance",
    detail: "Control-M job scheduling scripts; software testing and issue reporting.",
  },
  {
    period: "2019–2023",
    title: "BSc (Hons) Computer Science · HK PolyU",
    detail: "PolyHack 2022 — Best Quantek Capital Research Award.",
  },
];

export const EDUCATION = {
  degree: "BSc (Hons) Computer Science",
  institution: "The Hong Kong Polytechnic University",
  period: "2019–2023",
  awards: ["PolyHack 2022 — Best Quantek Capital Research Award"],
  coursework: [
    "Computer Systems Security",
    "Operating Systems",
    "Machine Learning",
    "Cloud Computing",
    "Database Systems",
    "Software Engineering",
  ],
} as const;

/** For hiring managers (§4.5). */
export const LOOKING_FOR = {
  level: "Full-stack roles — frontend, backend, or both. Open on level and team.",
  focus: ["Fintech & payments", "On-chain analysis", "Digital identity", "Platform"],
  earliestStart: "Around 2 weeks from a signed offer",
} as const;

export const LOGISTICS = {
  noticePeriod: "2 weeks",
  relocation: "Open to relocation; ready to relocate for the right role.",
  funding: "Flexible — happy to discuss relocation support if it's on the table.",
  interviewOverlap:
    "Flexible on interview times across time zones — early-evening HKT overlaps the European working day.",
} as const;
