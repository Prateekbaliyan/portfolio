"use client";

import {
  Code,
  GraduationCap,
  Layers,
  Terminal,
  Cpu,
  Brain,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { personalData } from "@/data/personal";

export default function About() {
  const stats = [
    {
      value: personalData.stats.cgpa,
      label: "Current CGPA",
      detail: "KIET Group of Institutions (2024–2028)",
      icon: GraduationCap,
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-200",
    },
    {
      value: personalData.stats.leetcode,
      label: "LeetCode Solved",
      detail: "Data Structures & Algorithms in C++",
      icon: Code,
      color: "text-cyan-600",
      bg: "bg-cyan-50 border-cyan-200",
    },
    {
      value: "06",
      label: "Production Systems",
      detail: "Deepfake CV, Forensics, Quant & Full-Stack",
      icon: Layers,
      color: "text-violet-600",
      bg: "bg-violet-50 border-violet-200",
    },
    {
      value: "AI Spec",
      label: "Undergraduate Track",
      detail: "Computer Science & Engineering (AI)",
      icon: Brain,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
    },
  ];

  const domainPillars = [
    {
      title: "Computer Vision & Forensics",
      description:
        "Multimodal deepfake detection, rPPG vascular pulse analysis, ELA document forgery inspection, and C2PA cryptographical provenance.",
      icon: ShieldCheck,
      accentBg: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Quantitative Systems & Microstructure",
      description:
        "Tick-level Level 2 order books, Order Flow Imbalance (OFI), VPIN toxic flow index, and market manipulation detection heuristics.",
      icon: TrendingUp,
      accentBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    {
      title: "High-Throughput Full-Stack",
      description:
        "Asynchronous FastAPI & Node.js backends, low-latency WebSocket duplex telemetry, Redis caching, and typed Next.js dashboards.",
      icon: Cpu,
      accentBg: "bg-violet-50 text-violet-700 border-violet-200",
    },
    {
      title: "Machine Learning Pipelines",
      description:
        "Reproducible data preprocessing, feature engineering, cross-validated classification & regression benchmarks, and statistical evaluation.",
      icon: Brain,
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // IDENTITY & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            About Me &amp; Technical Philosophy
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </div>

        {/* Narrative & Interactive Identity Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-800 leading-relaxed font-sans font-medium">
              I&apos;m a Computer Science &amp; Engineering (Artificial Intelligence) undergraduate focused on building practical AI systems and scalable software.
            </p>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              My interests span Machine Learning, Computer Vision, Full-Stack Development, backend engineering, real-time systems, and quantitative analytics.
            </p>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              I enjoy taking ideas from technical concepts to working products — designing the architecture, implementing the intelligent pipeline, building the interface, and deploying the system.
            </p>

            {/* Academic Institution Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Academic Institution
                </span>
                <p className="text-sm font-bold text-slate-900 font-sans">
                  KIET Group of Institutions, Ghaziabad
                </p>
                <p className="text-xs text-slate-500 font-sans">
                  B.Tech in Computer Science &amp; Engineering (Artificial Intelligence)
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold">
                  2024 – 2028
                </span>
                <p className="text-xs font-mono font-bold text-emerald-600 mt-1">
                  8.38 CGPA
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`p-5 rounded-2xl ${stat.bg} border transition-all flex flex-col justify-between space-y-4 shadow-xs`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-[10px] font-mono text-slate-500">
                      VERIFIED
                    </span>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold font-mono text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-700 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {stat.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Domain Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
          {domainPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-sm transition-all duration-300 flex items-start gap-4"
              >
                <div className={`p-3 rounded-xl border ${pillar.accentBg} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
