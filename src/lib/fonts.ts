import { Geist, Geist_Mono } from "next/font/google";

/**
 * Self-hosted via next/font — no runtime Google Fonts CDN request.
 * Geist = display + body (§6.2 "precise technical grotesk").
 * Geist Mono = utility/data face: metrics, labels, dates, tags, code.
 * OCR-B (MRZ band) is added in M2, reserved for the signature band alone.
 */
export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
