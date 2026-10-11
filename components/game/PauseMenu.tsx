"use client";

import {
  Play,
  Map,
  Trophy,
  Briefcase,
  HelpCircle,
  Volume2,
  VolumeX,
  LogOut,
  X,
} from "lucide-react";

interface PauseMenuProps {
  onResume: () => void;
  onOpenMap: () => void;
  onOpenQuests: () => void;
  onOpenRecruiter: () => void;
  onOpenControls: () => void;
  onExitToTitle: () => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
}

export default function PauseMenu({
  onResume,
  onOpenMap,
  onOpenQuests,
  onOpenRecruiter,
  onOpenControls,
  onExitToTitle,
  audioEnabled,
  onToggleAudio,
}: PauseMenuProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-150 font-sans"
    >
      <div className="relative max-w-sm w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 space-y-6 text-center">
        {/* Header */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
            GAME PAUSED
          </span>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight pt-1">
            PRATEEKVERSE
          </h3>
          <p className="text-xs text-slate-500 font-mono">
            Explore. Build. Discover.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 font-mono text-xs">
          <button
            onClick={onResume}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xs cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>RESUME EXPLORATION</span>
          </button>

          <button
            onClick={() => {
              onResume();
              onOpenMap();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 cursor-pointer"
          >
            <Map className="w-4 h-4 text-blue-600" />
            <span>WORLD MAP &amp; FAST TRAVEL [M]</span>
          </button>

          <button
            onClick={() => {
              onResume();
              onOpenQuests();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>MISSIONS &amp; QUESTS</span>
          </button>

          <button
            onClick={onOpenRecruiter}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>RECRUITER MODE (INSTANT)</span>
          </button>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={onToggleAudio}
              className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 cursor-pointer"
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Audio: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span>Audio: OFF</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenControls}
              className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
              <span>Controls</span>
            </button>
          </div>

          <button
            onClick={onExitToTitle}
            className="w-full flex items-center justify-center gap-2 py-2 text-slate-400 hover:text-slate-700 text-[11px] pt-2"
          >
            <LogOut className="w-3 h-3" />
            <span>Exit to Start Screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
