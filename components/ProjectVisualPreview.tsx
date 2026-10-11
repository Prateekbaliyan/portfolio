"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  FileSearch,
  TrendingUp,
  Clock,
  MapPin,
  Cpu,
  Fingerprint,
  Zap,
} from "lucide-react";

interface ProjectVisualPreviewProps {
  id: string;
  title: string;
  category: string;
  themeColor: {
    primary: string;
    border: string;
    glow: string;
  };
  image?: string;
}

export default function ProjectVisualPreview({
  id,
  title,
  themeColor,
  image,
}: ProjectVisualPreviewProps) {
  const [imageError, setImageError] = useState(false);

  // If image provided and hasn't errored, try rendering Next.js Image
  if (image && !imageError) {
    return (
      <div className="relative w-full h-full min-h-[240px] sm:min-h-[280px] bg-[#0b0d13] rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Elegant domain-specific interactive terminal/dashboard mockup
  if (id === "veristream") {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-5 rounded-xl bg-[#090b10] border border-emerald-500/20 font-mono flex flex-col justify-between text-xs relative overflow-hidden group">
        {/* Subtle grid and ambient backdrop */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-400 text-[11px] ml-2">
              telemetry::veristream-core (live)
            </span>
          </div>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px]">
            <Activity className="w-3 h-3 animate-pulse" />
            ISO/IEC 30107-3 PAD
          </span>
        </div>

        {/* Central telemetry grid */}
        <div className="relative z-10 grid grid-cols-2 gap-2.5 my-3">
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400 flex items-center justify-between">
              <span>rPPG Pulse Flow</span>
              <span className="text-emerald-400">Biological</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">72.4 BPM</div>
            <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-400 h-full w-[82%]" />
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400 flex items-center justify-between">
              <span>Corneal Disparity</span>
              <span className="text-emerald-400">Symmetric</span>
            </div>
            <div className="text-sm font-bold text-white mt-1">0.038 Δlux</div>
            <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-400 h-full w-[94%]" />
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">C2PA Manifest</div>
            <div className="text-xs font-semibold text-emerald-300 mt-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Cryptographic Sign Ok
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">Temporal EMA Fusion</div>
            <div className="text-xs font-semibold text-white mt-1">
              Verdict: AUTHENTIC (98.4%)
            </div>
          </div>
        </div>

        {/* Bottom stream footer */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-zinc-400">
          <span className="text-emerald-400">● 60 FPS WebSocket Stream</span>
          <span className="text-zinc-400">HMAC-SHA256 Encrypted</span>
        </div>
      </div>
    );
  }

  if (id === "docuaudit") {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-5 rounded-xl bg-[#090b10] border border-cyan-500/20 font-mono flex flex-col justify-between text-xs relative overflow-hidden group">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="text-zinc-400 text-[11px] ml-2">
              forensic::docuaudit-inspector
            </span>
          </div>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px]">
            <FileSearch className="w-3 h-3" />
            Multi-Stage Pipeline
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-2.5 my-3">
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">Error Level Analysis</div>
            <div className="text-xs font-semibold text-cyan-300 mt-1">
              ELA Residual: Uniform (0.012)
            </div>
            <div className="text-[10px] text-zinc-400 mt-1">No Cloned Pixels</div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">Copy-Move (ORB+DBSCAN)</div>
            <div className="text-xs font-semibold text-emerald-400 mt-1">
              Zero Duplicates Found
            </div>
            <div className="text-[10px] text-zinc-400 mt-1">Clustering Verified</div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">PyMuPDF Byte-Stream</div>
            <div className="text-xs font-semibold text-white mt-1">
              Revisions: Clean Incremental
            </div>
            <div className="text-[10px] text-zinc-400 mt-1">Fonts Intact</div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">PKCS#7 & Checksums</div>
            <div className="text-xs font-semibold text-cyan-400 mt-1 flex items-center gap-1">
              <Fingerprint className="w-3 h-3" /> ByteRange Valid
            </div>
            <div className="text-[10px] text-zinc-400 mt-1">GSTIN / PAN Verified</div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-zinc-400">
          <span className="text-cyan-400">SHA-256 Chain-of-Custody Logged</span>
          <span className="text-zinc-400">PDF Audit Report Ready</span>
        </div>
      </div>
    );
  }

  if (id === "liquiditypulse") {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[300px] p-4 sm:p-5 rounded-xl bg-[#090b10] border border-violet-500/20 font-mono flex flex-col justify-between text-xs relative overflow-hidden group">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-44 h-44 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
            <span className="text-zinc-400 text-[11px] ml-2">
              quant::liquiditypulse-terminal
            </span>
          </div>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30 text-[10px]">
            <TrendingUp className="w-3 h-3" />
            L2 Depth Stream
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-2.5 my-3">
          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">Order Flow Imbalance (OFI)</div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">+0.384</div>
            <div className="text-[10px] text-zinc-400 mt-1">Aggressive Buy Delta</div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">VPIN Toxicity Index</div>
            <div className="text-sm font-bold text-violet-300 mt-0.5">0.142</div>
            <div className="text-[10px] text-emerald-400 mt-1">Normal Flow (Safe)</div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">Micro-Price vs Mid</div>
            <div className="text-xs font-semibold text-white mt-1">
              $184.220 / Mid: $184.200
            </div>
            <div className="text-[10px] text-zinc-400 mt-1">Weight: Bid Heavy</div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
            <div className="text-[10px] text-zinc-400">Spoofing & Iceberg Monitor</div>
            <div className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1">
              <Zap className="w-3 h-3" /> Clean Depth
            </div>
            <div className="text-[10px] text-zinc-400 mt-1">No Layering Detected</div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-zinc-400">
          <span className="text-violet-400">Sub-ms Tick Replay & TCA</span>
          <span className="text-zinc-400">Redis Pub/Sub Connected</span>
        </div>
      </div>
    );
  }

  if (id === "ai-productivity-tracker") {
    return (
      <div className="w-full h-full min-h-[220px] p-4 rounded-xl bg-[#090b10] border border-blue-500/20 font-mono flex flex-col justify-between text-xs relative overflow-hidden">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-blue-400 flex items-center gap-1.5 text-[11px]">
            <Clock className="w-3.5 h-3.5" /> Behavior Analytics Engine
          </span>
          <span className="text-[10px] text-zinc-400">Chrome Extension Active</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="p-2 rounded bg-black/40 border border-white/10">
            <span className="text-[10px] text-zinc-400">Productivity Score</span>
            <div className="text-base font-bold text-blue-400 mt-0.5">88%</div>
          </div>
          <div className="p-2 rounded bg-black/40 border border-white/10">
            <span className="text-[10px] text-zinc-400">Daily Streak</span>
            <div className="text-base font-bold text-emerald-400 mt-0.5">14 Days</div>
          </div>
        </div>
        <div className="text-[10px] text-zinc-400 pt-1 border-t border-white/10">
          Classification: 7.2h Deep Work • 0.8h Neutral • 0.3h Distraction
        </div>
      </div>
    );
  }

  // Location Intelligence
  return (
    <div className="w-full h-full min-h-[220px] p-4 rounded-xl bg-[#090b10] border border-amber-500/20 font-mono flex flex-col justify-between text-xs relative overflow-hidden">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <span className="text-amber-400 flex items-center gap-1.5 text-[11px]">
          <MapPin className="w-3.5 h-3.5" /> OpenStreetMap Geospatial Analytics
        </span>
        <span className="text-[10px] text-zinc-400">Demand Heatmaps</span>
      </div>
      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="p-2 rounded bg-black/40 border border-white/10">
          <span className="text-[10px] text-zinc-400">Opportunity Index</span>
          <div className="text-base font-bold text-amber-400 mt-0.5">92 / 100</div>
        </div>
        <div className="p-2 rounded bg-black/40 border border-white/10">
          <span className="text-[10px] text-zinc-400">Footfall Density</span>
          <div className="text-base font-bold text-white mt-0.5">High Potential</div>
        </div>
      </div>
      <div className="text-[10px] text-zinc-400 pt-1 border-t border-white/10">
        Radius Query: 1.5km • Commercial Density Analyzed • Gap Score: High
      </div>
    </div>
  );
}
