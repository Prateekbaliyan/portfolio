"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Search,
  Terminal,
  HelpCircle,
  Briefcase,
  Cpu,
  Volume2,
  VolumeX,
  Palette,
} from "lucide-react";

export type OSTheme = "daylight" | "holographic" | "midnight";

interface TopBarProps {
  onOpenRecruiter: () => void;
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
  onOpenHelp: () => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  currentTheme: OSTheme;
  onChangeTheme: (theme: OSTheme) => void;
}

export default function TopBar({
  onOpenRecruiter,
  onOpenTerminal,
  onOpenCommandPalette,
  onOpenHelp,
  audioEnabled,
  onToggleAudio,
  currentTheme,
  onChangeTheme,
}: TopBarProps) {
  const [timeStr, setTimeStr] = useState("12:00 PM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const nextTheme = () => {
    if (currentTheme === "daylight") onChangeTheme("holographic");
    else if (currentTheme === "holographic") onChangeTheme("midnight");
    else onChangeTheme("daylight");
  };

  const isDark = currentTheme === "midnight";

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-9 z-50 backdrop-blur-md border-b px-3 sm:px-4 flex items-center justify-between text-xs font-sans select-none transition-colors duration-300 ${
        isDark
          ? "bg-slate-900/80 border-slate-800 text-slate-200"
          : "bg-white/80 border-slate-200/80 text-slate-800"
      }`}
    >
      {/* Left: OS Branding & System Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 font-bold tracking-tight">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-black text-[13px] tracking-wider">PRATEEK OS</span>
        </div>
        <div
          className={`hidden sm:flex items-center gap-2 pl-2 border-l font-mono text-[11px] ${
            isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"
          }`}
        >
          <span className="text-emerald-500 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            ONLINE
          </span>
          <span className="opacity-40">|</span>
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>AI CORE 100%</span>
          </span>
        </div>
      </div>

      {/* Center: Search shortcut */}
      <div className="hidden md:flex items-center">
        <button
          onClick={onOpenCommandPalette}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono transition cursor-pointer border ${
            isDark
              ? "bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border-slate-700"
              : "bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200/80"
          }`}
        >
          <Search className="w-3 h-3 text-slate-400" />
          <span>Search PRATEEK OS...</span>
          <kbd
            className={`px-1.5 py-0.2 rounded border text-[10px] ${
              isDark
                ? "bg-slate-900 border-slate-700 text-slate-400"
                : "bg-white border-slate-300 text-slate-500"
            }`}
          >
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right: Actions, Recruiter Mode, Theme, Audio & Clock */}
      <div className="flex items-center gap-2">
        {/* Recruiter Mode Button */}
        <button
          onClick={onOpenRecruiter}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-xs cursor-pointer hover:scale-102"
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RECRUITER MODE</span>
          <span className="sm:hidden">RECRUITER</span>
        </button>

        {/* Theme Switcher Button */}
        <button
          onClick={nextTheme}
          title={`Switch Theme (Current: ${currentTheme})`}
          className={`p-1.5 rounded-full transition cursor-pointer ${
            isDark ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-600"
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
        </button>

        {/* Audio Toggle */}
        <button
          onClick={onToggleAudio}
          title={audioEnabled ? "Sound Feedback Enabled (Click to Mute)" : "Sound Muted (Click to Unmute)"}
          className={`p-1.5 rounded-full transition cursor-pointer ${
            isDark ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-600"
          }`}
        >
          {audioEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-blue-500" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
          )}
        </button>

        {/* Terminal Quick Button */}
        <button
          onClick={onOpenTerminal}
          title="Terminal (Ctrl + `)"
          className={`p-1.5 rounded-full transition cursor-pointer ${
            isDark ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-600"
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
        </button>

        {/* Help / Guide */}
        <button
          onClick={onOpenHelp}
          title="How to explore"
          className={`p-1.5 rounded-full transition cursor-pointer ${
            isDark ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-600"
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>

        {/* Clock */}
        <div
          className={`pl-2 border-l font-mono font-bold text-[11px] ${
            isDark ? "border-slate-800 text-slate-200" : "border-slate-200 text-slate-700"
          }`}
        >
          {timeStr}
        </div>
      </div>
    </header>
  );
}
