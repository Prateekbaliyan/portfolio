"use client";

import { AppId, WindowState } from "@/types/os";
import { OSTheme } from "./TopBar";
import {
  User,
  FolderGit2,
  Brain,
  GraduationCap,
  Award,
  Globe,
  Terminal,
  Gamepad2,
  FileDown,
  Briefcase,
  Sparkles,
} from "lucide-react";

interface DockProps {
  windows: WindowState[];
  onLaunchApp: (id: AppId) => void;
  currentTheme?: OSTheme;
  onOpenResumeModal?: () => void;
  onOpenRecruiter?: () => void;
}

export default function Dock({
  windows,
  onLaunchApp,
  currentTheme = "daylight",
  onOpenResumeModal,
  onOpenRecruiter,
}: DockProps) {
  const isDark = currentTheme === "midnight";

  const dockApps: Array<{ id: AppId; name: string; icon: any; color: string; darkColor: string }> = [
    {
      id: "profile",
      name: "Profile",
      icon: User,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      darkColor: "text-blue-400 bg-blue-950/70 border-blue-800/80 shadow-[0_0_12px_rgba(59,130,246,0.15)]",
    },
    {
      id: "projects",
      name: "Projects",
      icon: FolderGit2,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      darkColor: "text-indigo-400 bg-indigo-950/70 border-indigo-800/80 shadow-[0_0_12px_rgba(99,102,241,0.15)]",
    },
    {
      id: "ailab",
      name: "AI Lab",
      icon: Brain,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
      darkColor: "text-cyan-400 bg-cyan-950/70 border-cyan-800/80 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      darkColor: "text-emerald-400 bg-emerald-950/70 border-emerald-800/80 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    },
    {
      id: "achievements",
      name: "Achievements",
      icon: Award,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      darkColor: "text-amber-400 bg-amber-950/70 border-amber-800/80 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    },
    {
      id: "network",
      name: "Network",
      icon: Globe,
      color: "text-violet-600 bg-violet-50 border-violet-200",
      darkColor: "text-violet-400 bg-violet-950/70 border-violet-800/80 shadow-[0_0_12px_rgba(139,92,246,0.15)]",
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: Terminal,
      color: "text-slate-800 bg-slate-100 border-slate-300",
      darkColor: "text-slate-200 bg-slate-800/90 border-slate-700 shadow-[0_0_12px_rgba(148,163,184,0.15)]",
    },
    {
      id: "game",
      name: "Neural Dodge",
      icon: Gamepad2,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      darkColor: "text-rose-400 bg-rose-950/70 border-rose-800/80 shadow-[0_0_12px_rgba(244,63,94,0.15)]",
    },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 select-none">
      <div
        className={`px-3 py-2 rounded-2xl backdrop-blur-2xl border transition-all duration-300 flex items-center gap-1 sm:gap-2 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${
          isDark
            ? "bg-slate-900/85 border-slate-800/90 shadow-slate-950/80 text-white"
            : "bg-white/80 border-slate-200/90 shadow-slate-200/60 text-slate-800"
        }`}
      >
        {/* Main Dock Apps */}
        {dockApps.map((app) => {
          const Icon = app.icon;
          const openWin = windows.find((w) => w.id === app.id);
          const isOpen = openWin && openWin.isOpen && !openWin.isMinimized;

          return (
            <button
              key={app.id}
              onClick={() => onLaunchApp(app.id)}
              className={`relative p-2.5 sm:p-3 rounded-xl transition-all duration-150 flex flex-col items-center group cursor-pointer hover:-translate-y-1.5 ${
                isDark ? "hover:bg-slate-800/80" : "hover:bg-slate-100/90"
              }`}
              title={app.name}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border shadow-xs transition-transform group-hover:scale-110 ${
                  isDark ? app.darkColor : app.color
                }`}
              >
                <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>

              {/* Open Window Indicator Dot */}
              {isOpen && (
                <span
                  className={`w-1.5 h-1.5 rounded-full mt-1 absolute -bottom-1 ${
                    isDark
                      ? "bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
                      : "bg-blue-600 shadow-[0_0_6px_#2563eb]"
                  }`}
                />
              )}

              {/* Tooltip */}
              <span
                className={`absolute -top-8 px-2.5 py-0.5 rounded-md text-[11px] font-sans font-semibold opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-md ${
                  isDark ? "bg-slate-800 text-slate-100 border border-slate-700" : "bg-slate-900 text-white"
                }`}
              >
                {app.name}
              </span>
            </button>
          );
        })}

        {/* Vertical Divider */}
        <div
          className={`h-8 w-px mx-0.5 sm:mx-1 ${
            isDark ? "bg-slate-800" : "bg-slate-200"
          }`}
        />

        {/* Quick ATS Resume Shortcut */}
        {onOpenResumeModal && (
          <button
            onClick={onOpenResumeModal}
            className={`relative p-2.5 sm:p-3 rounded-xl transition-all duration-150 flex flex-col items-center group cursor-pointer hover:-translate-y-1.5 ${
              isDark ? "hover:bg-slate-800/80" : "hover:bg-slate-100/90"
            }`}
            title="Resume PDF"
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border shadow-xs transition-transform group-hover:scale-110 ${
                isDark
                  ? "text-blue-400 bg-blue-950/70 border-blue-800"
                  : "text-blue-600 bg-blue-50 border-blue-200"
              }`}
            >
              <FileDown className="w-5 h-5" />
            </div>
            <span
              className={`absolute -top-8 px-2.5 py-0.5 rounded-md text-[11px] font-sans font-semibold opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-md ${
                isDark ? "bg-slate-800 text-slate-100 border border-slate-700" : "bg-slate-900 text-white"
              }`}
            >
              Resume PDF
            </span>
          </button>
        )}

        {/* Quick Recruiter Mode Shortcut */}
        {onOpenRecruiter && (
          <button
            onClick={onOpenRecruiter}
            className={`relative p-2.5 sm:p-3 rounded-xl transition-all duration-150 flex flex-col items-center group cursor-pointer hover:-translate-y-1.5 ${
              isDark ? "hover:bg-slate-800/80" : "hover:bg-slate-100/90"
            }`}
            title="Recruiter Mode"
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border shadow-xs transition-transform group-hover:scale-110 ${
                isDark
                  ? "text-amber-400 bg-amber-950/70 border-amber-800"
                  : "text-amber-600 bg-amber-50 border-amber-200"
              }`}
            >
              <Briefcase className="w-5 h-5" />
            </div>
            <span
              className={`absolute -top-8 px-2.5 py-0.5 rounded-md text-[11px] font-sans font-semibold opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap shadow-md ${
                isDark ? "bg-slate-800 text-slate-100 border border-slate-700" : "bg-slate-900 text-white"
              }`}
            >
              Recruiter Mode
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
