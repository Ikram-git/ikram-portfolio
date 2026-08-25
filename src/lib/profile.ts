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

/** Capability map grouped by DEPTH, not category (§4.4). Grounded in the CV.
 *  `icon` keys map to lucide icons in the about section's ICON table. */
export type CapabilityItem = { label: string; icon: string };
export const CAPABILITIES: {
  tier: string;
  note: string;
  items: CapabilityItem[];
}[] = [
  {
    tier: "Advanced",
    note: "Primary stack — daily drivers",
    items: [
      { label: "TypeScript", icon: "braces" },
      { label: "React / Next.js", icon: "atom" },
      { label: "Java / Spring Boot", icon: "leaf" },
      { label: "Python / FastAPI", icon: "zap" },
      { label: "PostgreSQL", icon: "database" },
    ],
  },
  {
    tier: "Intermediate",
    note: "Production experience",
    items: [
      { label: "C# / .NET", icon: "hash" },
      { label: "Node.js / Express", icon: "hexagon" },
      { label: "Smart contracts / blockchain", icon: "blocks" },
      { label: "Flutter / Dart", icon: "smartphone" },
      { label: "MySQL", icon: "database" },
      { label: "Linux / shell", icon: "terminal" },
      { label: "REST / microservices", icon: "network" },
      { label: "AWS", icon: "cloud" },
      { label: "Docker", icon: "container" },
      { label: "Jenkins", icon: "workflow" },
      { label: "Supabase", icon: "database-zap" },
      { label: "Vercel", icon: "triangle" },
    ],
  },
  {
    tier: "Familiar",
    note: "Hands-on exposure",
    items: [
      { label: "RAG / vector databases", icon: "brain" },
      { label: "BAC · PACE/SAC · ICAO 9303", icon: "shield-check" },
      { label: "React Native", icon: "smartphone" },
      { label: "Machine learning", icon: "brain-circuit" },
      { label: "Web3.js", icon: "link" },
      { label: "Firebase", icon: "flame" },
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
    "Systems Programming",
    "Data Structures",
    "Accounting for Decision Making",
  ],
} as const;

/** Coursework / academic projects from the BSc (§4.4). */
export const ACADEMIC_PROJECTS: {
  title: string;
  description: string;
  skills: string[];
  url: string | null;
  urlLabel: string;
}[] = [
  {
    title: "UTXO-based blockchain platform",
    description:
      "A blockchain system with block mining, transactions, a peer-to-peer network, and database storage for blocks and transactions.",
    skills: ["Python", "Blockchain", "Cryptography"],
    url: "https://github.com/Ikram-git/E-payment",
    urlLabel: "GitHub",
  },
  {
    title: "NFT trading platform",
    description:
      "A group web app to store, buy and sell NFTs, using encryption to keep trading secure.",
    skills: ["React", "Node.js", "MongoDB", "RSA"],
    url: "https://github.com/Ikram-git/NFT-website",
    urlLabel: "GitHub",
  },
  {
    title: "Spaceship Titanic (Kaggle)",
    description:
      "Predicting which passengers were transported to an alternate dimension. Final score 0.81.",
    skills: ["Data mining", "DNN", "CatBoost"],
    url: "https://drive.google.com/file/d/1AXR1CtYnK7I3c1pRegpU7TTcu5jA0esX/view",
    urlLabel: "Reference",
  },
  {
    title: "Don't Overfit II (Kaggle)",
    description:
      "20,000 test rows against only a handful of training samples — the challenge was not overfitting the tiny training set.",
    skills: ["K-means", "Logistic regression"],
    url: null,
    urlLabel: "",
  },
  {
    title: "Linux character device driver",
    description: "A Linux character device driver built for a systems course.",
    skills: ["C", "Linux / Unix"],
    url: null,
    urlLabel: "",
  },
];

/** For hiring managers (§4.5). */
export const LOOKING_FOR = {
  level: "Software engineering — full-stack, backend or frontend. Open on level and team.",
  where: [
    "Hong Kong — finance & fintech. Permanent resident: no sponsorship, no visa step.",
    "Outside Hong Kong — general software development roles, with employer sponsorship (routes below).",
  ],
  focus: [
    "Finance & fintech",
    "On-chain analysis",
    "Digital identity",
    "General software development (outside HK)",
  ],
  earliestStart: "Around 2 weeks from a signed offer",
} as const;

export const LOGISTICS = {
  noticePeriod: "2 weeks",
  relocation: "Open to relocation; ready to relocate for the right role.",
  funding: "Flexible — happy to discuss relocation support if it's on the table.",
  interviewOverlap:
    "Flexible on interview times across time zones — early-evening HKT overlaps the European working day.",
} as const;
