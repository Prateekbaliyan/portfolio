import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRATEEK // AI LAB — AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Prateek Baliyan — Computer Science (AI) undergraduate building AI/ML, computer vision, full-stack, quantitative, and real-time systems.",
  keywords: [
    "Prateek Baliyan",
    "AI LAB",
    "AI Engineer",
    "Machine Learning",
    "Full-Stack Developer",
    "Computer Vision",
    "Quantitative Engineering",
    "VeriStream",
    "DocuAudit",
    "LiquidityPulse",
    "Deepfake Detection",
    "Document Forensics",
    "Market Microstructure",
    "KIET",
  ],
  authors: [{ name: "Prateek Baliyan" }],
  creator: "Prateek Baliyan",
  openGraph: {
    title: "PRATEEK // AI LAB — AI/ML Engineer & Full-Stack Developer",
    description:
      "Interactive digital AI laboratory of Prateek Baliyan. Exploring production-oriented AI systems, computer vision pipelines, real-time quant platforms, and full-stack software.",
    url: "https://prateekbaliyan.dev",
    siteName: "PRATEEK // AI LAB",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRATEEK // AI LAB — Prateek Baliyan",
    description:
      "Computer Science (AI) undergraduate building AI systems, computer vision, quantitative platforms, and full-stack software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-blue-600/15 selection:text-blue-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
