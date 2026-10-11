"use client";

import { Award, CheckCircle2, ShieldCheck, Terminal, ExternalLink } from "lucide-react";
import { achievementsData } from "@/data/achievements";
import { LeetCodeIcon } from "@/components/Icons";

export default function AchievementsApp() {
  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            SYSTEM CREDENTIALS // VERIFIED
          </div>
          <h2 className="text-2xl font-black text-slate-900">Verified Achievements & Milestones</h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            Algorithmic Rigor, Industry Certifications & Deployed Architectures
          </p>
        </div>
      </div>

      {/* Main Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievementsData.map((item) => (
          <div
            key={item.title}
            className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono font-bold text-slate-500">{item.badge || item.category}</span>
                <span className="text-xs font-mono text-slate-400">{item.value}</span>
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-base leading-snug">{item.title}</h3>
                <div className="text-xs font-semibold text-blue-600 font-mono mt-0.5">{item.subtitle}</div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LeetCode Algorithmic Focus Callout */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-blue-50/40 border border-amber-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
            <LeetCodeIcon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">LeetCode Algorithmic Record</h4>
            <p className="text-xs text-slate-600 font-mono">
              182+ Problems Solved in C++ // Focus on Graph Theory, Dynamic Programming & Heaps
            </p>
          </div>
        </div>
        <a
          href="https://leetcode.com/u/prateekbaliyan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition shrink-0"
        >
          <span>View LeetCode Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
