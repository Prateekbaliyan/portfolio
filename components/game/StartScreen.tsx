"use client";

import { useState } from "react";
import { Gamepad2, Briefcase, HelpCircle, Sparkles, ArrowRight, X } from "lucide-react";

interface StartScreenProps {
  onEnterWorld: () => void;
  onOpenRecruiter: () => void;
}

export default function StartScreen({
  onEnterWorld,
  onOpenRecruiter,
}: StartScreenProps) {
  const [controlsModal, setControlsModal] = useState(false);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 font-sans selection:bg-blue-600/15 overflow-hidden">
      {/* Background ambient geometry & technical grid */}
      <div className="absolute inset-0 bg-lab-grid opacity-75 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Card */}
      <div className="relative max-w-2xl w-full p-8 sm:p-12 rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-2xl text-center space-y-8 animate-in zoom-in-95 duration-300">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          <span>PRATEEKVERSE v3.0 // OPEN WORLD ONLINE</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 font-sans">
            PRATEEKVERSE
          </h1>
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
            Explore. Build. Discover.
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-md mx-auto pt-1">
            A fully playable 3D open-world developer portfolio by Prateek Baliyan.
            Physical exploration meets production-grade engineering.
          </p>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Enter World Button */}
          <button
            onClick={onEnterWorld}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-[0_8px_25px_rgba(37,99,235,0.3)] hover:scale-102 cursor-pointer"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>ENTER WORLD</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Recruiter Mode Button */}
          <button
            onClick={onOpenRecruiter}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md hover:scale-102 cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>RECRUITER MODE</span>
          </button>

          {/* Controls Button */}
          <button
            onClick={() => setControlsModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer shadow-xs"
          >
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>CONTROLS</span>
          </button>
        </div>

        {/* Verified Facts Ticker */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-[11px] font-mono text-slate-500">
          <span>B.Tech CSE (AI) • KIET</span>
          <span>•</span>
          <span className="text-blue-600 font-bold">CGPA: 8.38</span>
          <span>•</span>
          <span className="text-emerald-600 font-bold">182+ LeetCode (C++)</span>
          <span>•</span>
          <span>AWS Certified</span>
        </div>
      </div>

      {/* Controls Information Modal */}
      {controlsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative max-w-md w-full p-6 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 font-mono font-bold text-sm text-slate-900">
                <Gamepad2 className="w-4 h-4 text-blue-600" />
                <span>PRATEEKVERSE // GAME CONTROLS</span>
              </div>
              <button
                onClick={() => setControlsModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-slate-700">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                <span>Movement</span>
                <span className="font-bold text-blue-700">W, A, S, D / Arrow Keys</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                <span>Sprint</span>
                <span className="font-bold text-blue-700">Shift</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                <span>Jump</span>
                <span className="font-bold text-blue-700">Spacebar</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                <span>Interact Terminal</span>
                <span className="font-bold text-emerald-600">E key or Click Prompt</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                <span>World Map &amp; Fast Travel</span>
                <span className="font-bold text-violet-600">M key</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                <span>Pause Menu / Recruiter Mode</span>
                <span className="font-bold text-slate-900">ESC key</span>
              </div>
            </div>

            <button
              onClick={() => setControlsModal(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold shadow-xs cursor-pointer"
            >
              GOT IT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
