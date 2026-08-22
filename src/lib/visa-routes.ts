/**
 * Sponsorship routes shown on /hiring (spec §2.1).
 *
 * IMPORTANT (§11 #4): every figure is indexed and changes — the NL thresholds
 * update twice a year, and personal circumstances (Pakistani national, HK PR)
 * add an entry-visa/MVV step. RE-VERIFY against the official source on launch
 * day and update `LAST_VERIFIED`. Do not present these as guaranteed.
 */

export const LAST_VERIFIED = "2026-08-22"; // TODO — re-verify on launch day

export type VisaRoute = {
  flag: string;
  country: string;
  route: string;
  /** Salary floor, kept as a short string with its own qualifier. */
  threshold: string;
  /** What the employer has to do. */
  employer: string;
  /** Rough processing timeline. */
  timeline: string;
  /** Official source. */
  sourceLabel: string;
  sourceUrl: string;
  note?: string;
};

export const VISA_ROUTES: VisaRoute[] = [
  {
    flag: "🇳🇱",
    country: "Netherlands",
    route: "Highly Skilled Migrant",
    threshold:
      "€4,357/mo (under 30) or €5,942/mo (30+), excl. 8% holiday allowance",
    employer: "Must be an IND-recognised sponsor; no labour-market test",
    timeline: "~2 weeks via a recognised sponsor",
    sourceLabel: "ind.nl",
    sourceUrl: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant",
    note: "Strongest fit. As a non-EU national I'd also need an MVV entry visa.",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    route: "EU Blue Card",
    threshold: "€45,934.20/yr (IT/shortage) or €50,700/yr (standard)",
    employer: "Standard job offer; IT specialists can qualify on experience",
    timeline: "4–12 weeks in-country; 6–20 weeks by embassy",
    sourceLabel: "Make it in Germany",
    sourceUrl: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card",
  },
  {
    flag: "🇮🇪",
    country: "Ireland",
    route: "Critical Skills Employment Permit",
    threshold: "€40,904 (from 1 March 2026)",
    employer: "Job offer; no labour-market needs test",
    timeline: "8–12 weeks",
    sourceLabel: "enterprise.gov.ie",
    sourceUrl:
      "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    route: "Skilled Worker",
    threshold: "£41,700 general / ~£42,000 going rate for SOC 2134",
    employer: "Must hold a sponsor licence and assign a CoS",
    timeline: "~3–8 weeks after CoS",
    sourceLabel: "gov.uk",
    sourceUrl: "https://www.gov.uk/skilled-worker-visa",
  },
];
