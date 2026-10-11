"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  ExternalLink,
  Activity,
  AlertTriangle,
  BarChart3,
  RefreshCw,
  Zap,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

export default function LiquidityPulseApp() {
  const [activeTab, setActiveTab] = useState<"l2" | "microstructure" | "anomalies">("l2");
  const [pulseTick, setPulseTick] = useState(0);

  // Subtle simulated tick pulse (explicitly declared as simulation)
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const simulatedBids = [
    { price: "182.45", size: 1420 + (pulseTick % 5) * 40, total: 1420 },
    { price: "182.44", size: 2850 + (pulseTick % 3) * 60, total: 4270 },
    { price: "182.42", size: 5120, total: 9390 },
    { price: "182.40", size: 8400 + (pulseTick % 7) * 80, total: 17790 },
  ];

  const simulatedAsks = [
    { price: "182.46", size: 1250 + (pulseTick % 4) * 50, total: 1250 },
    { price: "182.48", size: 2410 + (pulseTick % 6) * 30, total: 3660 },
    { price: "182.50", size: 6800, total: 10460 },
    { price: "182.52", size: 9100 + (pulseTick % 8) * 90, total: 19560 },
  ];

  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-violet-50 border border-violet-200 text-xs font-mono text-violet-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            QUANTITATIVE INTELLIGENCE & MICROSTRUCTURE
          </div>
          <h2 className="text-2xl font-black text-slate-900">LiquidityPulse</h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            Real-Time Market Microstructure & High-Frequency Order Flow Analytics
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href="https://liquidity-pulse-kqzl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition hover:scale-102"
          >
            <span>Live System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/Prateekbaliyan/liquidity-pulse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-2">
        {[
          { id: "l2", label: "Simulated L2 Order Book" },
          { id: "microstructure", label: "Microstructure Metrics (OFI / VPIN)" },
          { id: "anomalies", label: "Anomaly & Spoofing Detectors" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === tab.id
                ? "bg-violet-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Simulated L2 Order Book View */}
      {activeTab === "l2" && (
        <div className="p-5 rounded-2xl bg-slate-950 text-white font-mono text-xs border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
            <span className="text-cyan-400 font-bold">
              SIMULATED LEVEL 2 ORDER DEPTH (ILLUSTRATIVE REPLAY)
            </span>
            <span className="text-slate-500">MID-PRICE: $182.455</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bids */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-emerald-400 flex justify-between pb-1 border-b border-slate-800">
                <span>BID SIZE</span>
                <span>PRICE ($)</span>
              </div>
              {simulatedBids.map((b, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-1.5 rounded bg-emerald-950/20 border border-emerald-900/30 text-[11px]"
                >
                  <span className="text-emerald-300 font-semibold">{b.size.toLocaleString()}</span>
                  <span className="text-emerald-400 font-bold">{b.price}</span>
                </div>
              ))}
            </div>

            {/* Asks */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-rose-400 flex justify-between pb-1 border-b border-slate-800">
                <span>PRICE ($)</span>
                <span>ASK SIZE</span>
              </div>
              {simulatedAsks.map((a, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-1.5 rounded bg-rose-950/20 border border-rose-900/30 text-[11px]"
                >
                  <span className="text-rose-400 font-bold">{a.price}</span>
                  <span className="text-rose-300 font-semibold">{a.size.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 rounded bg-slate-900 text-slate-400 text-[11px] text-center border border-slate-800">
            Note: Illustrative microstructure simulation for portfolio demonstration. No live trade execution implied.
          </div>
        </div>
      )}

      {/* Microstructure Metrics */}
      {activeTab === "microstructure" && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-slate-500 block">Order Flow Imbalance (OFI)</span>
              <span className="text-lg font-black text-slate-900 mt-1 block">+0.684</span>
              <span className="text-[11px] text-emerald-600 font-medium">Net buying pressure across top 5 levels</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-slate-500 block">VPIN Toxicity Index</span>
              <span className="text-lg font-black text-slate-900 mt-1 block">0.214</span>
              <span className="text-[11px] text-slate-600 font-medium">Low adverse selection risk regime</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono text-slate-500 block">Micro-Price Estimate</span>
              <span className="text-lg font-black text-slate-900 mt-1 block">$182.458</span>
              <span className="text-[11px] text-blue-600 font-medium">Queue-weighted theoretical fair price</span>
            </div>
          </div>
        </div>
      )}

      {/* Anomaly Detectors */}
      {activeTab === "anomalies" && (
        <div className="space-y-2.5">
          {[
            {
              title: "Layering & Spoofing Detector",
              desc: "Monitors non-executed order cancel-to-fill ratios within 50ms windows across outer queue boundaries.",
            },
            {
              title: "Iceberg Order Estimation",
              desc: "Detects hidden volume replenishment by comparing trade print volume against visible Level 2 depth decrements.",
            },
            {
              title: "Transaction Cost Analysis (TCA)",
              desc: "Models implementation shortfall, queue latency degradation, and dynamic market impact.",
            },
          ].map((item, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-bold text-slate-900 block mb-0.5">{item.title}</span>
              <span className="text-slate-600 leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack */}
      <div className="pt-2 border-t border-slate-200">
        <span className="text-xs font-mono text-slate-500 block mb-2 font-bold">SYSTEM TECH STACK</span>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Python",
            "FastAPI",
            "WebSockets",
            "Next.js",
            "TypeScript",
            "NumPy",
            "Pandas",
            "TradingView Charts",
            "Docker",
            "Redis",
            "PostgreSQL",
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
