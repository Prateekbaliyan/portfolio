"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AppId, WindowState, DesktopIconDef } from "@/types/os";
import TopBar, { OSTheme } from "./TopBar";
import Dock from "./Dock";
import WindowFrame from "./WindowFrame";
import CommandPalette from "./CommandPalette";
import HelpModal from "./HelpModal";
import ProfileApp from "./apps/ProfileApp";
import ProjectsApp from "./apps/ProjectsApp";
import VeriStreamApp from "./apps/VeriStreamApp";
import DocuAuditApp from "./apps/DocuAuditApp";
import LiquidityPulseApp from "./apps/LiquidityPulseApp";
import AiLabApp from "./apps/AiLabApp";
import EducationApp from "./apps/EducationApp";
import AchievementsApp from "./apps/AchievementsApp";
import NetworkApp from "./apps/NetworkApp";
import TerminalApp from "./apps/TerminalApp";
import NeuralDodgeGame from "./apps/NeuralDodgeGame";
import { personalData } from "@/data/personal";
import {
  User,
  FolderGit2,
  Brain,
  GraduationCap,
  Award,
  Globe,
  Terminal,
  Gamepad2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Filter,
  FileDown,
  Briefcase,
  Palette,
  RotateCcw,
  Activity,
  CheckCircle2,
} from "lucide-react";

interface DesktopProps {
  onOpenRecruiter: () => void;
  onOpenResumeModal: () => void;
}

interface ContextMenuState {
  isOpen: boolean;
  x: number;
  y: number;
}

export default function Desktop({ onOpenRecruiter, onOpenResumeModal }: DesktopProps) {
  // Theme & Audio state
  const [currentTheme, setCurrentTheme] = useState<OSTheme>("daylight");
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");

  // Right-Click Context Menu State
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({ isOpen: false, x: 0, y: 0 });

  // Web Audio UI Sound Synthesizer
  const playSound = useCallback((type: "click" | "launch" | "tab") => {
    if (!audioEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === "launch") {
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
      } else if (type === "tab") {
        osc.frequency.setValueAtTime(650, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
      } else {
        osc.frequency.setValueAtTime(520, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.06);
      }
    } catch {
      // Audio not permitted or supported
    }
  }, [audioEnabled]);

  // Window states dictionary
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: "profile",
      title: "PROFILE.app // Prateek Baliyan",
      iconName: "User",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 80, y: 65 },
      size: { width: 780, height: 600 },
    },
    {
      id: "projects",
      title: "PROJECTS.app // File Explorer",
      iconName: "FolderGit2",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 120, y: 75 },
      size: { width: 840, height: 620 },
    },
    {
      id: "veristream",
      title: "VERISTREAM.exe // Real-Time Deepfake Interceptor",
      iconName: "ShieldCheck",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 140, y: 80 },
      size: { width: 820, height: 620 },
    },
    {
      id: "docuaudit",
      title: "DOCUAUDIT.exe // Document Forensics Suite",
      iconName: "FileCheck2",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 160, y: 85 },
      size: { width: 820, height: 620 },
    },
    {
      id: "liquiditypulse",
      title: "LIQUIDITYPULSE.exe // Quantitative Trading Floor",
      iconName: "TrendingUp",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 170, y: 90 },
      size: { width: 820, height: 620 },
    },
    {
      id: "ailab",
      title: "AI_LAB.app // Neural Architecture & Skills",
      iconName: "Brain",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 150, y: 80 },
      size: { width: 800, height: 580 },
    },
    {
      id: "education",
      title: "EDUCATION.app // Scholastic Record",
      iconName: "GraduationCap",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 180, y: 90 },
      size: { width: 720, height: 560 },
    },
    {
      id: "achievements",
      title: "ACHIEVEMENTS.app // Verified Milestones",
      iconName: "Award",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 200, y: 95 },
      size: { width: 740, height: 560 },
    },
    {
      id: "network",
      title: "NETWORK.app // Communication Hub",
      iconName: "Globe",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 210, y: 100 },
      size: { width: 750, height: 560 },
    },
    {
      id: "terminal",
      title: "TERMINAL.app // PrateekOS Interactive Shell",
      iconName: "Terminal",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 190, y: 90 },
      size: { width: 680, height: 480 },
    },
    {
      id: "game",
      title: "NEURAL_DODGE.exe // Simulation Easter Egg",
      iconName: "Gamepad2",
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      position: { x: 230, y: 70 },
      size: { width: 600, height: 520 },
    },
  ]);

  const [activeWindowId, setActiveWindowId] = useState<AppId | null>(null);
  const [highestZIndex, setHighestZIndex] = useState(20);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  // Desktop Icons definitions with category tags
  const desktopIcons: Array<DesktopIconDef & { category: "ai" | "core" | "cred" }> = [
    { id: "profile", title: "PROFILE.app", subtitle: "Developer Bio", icon: "User", category: "core", color: "text-blue-600 bg-blue-50 border-blue-200" },
    { id: "projects", title: "PROJECTS.app", subtitle: "06 Applications", icon: "FolderGit2", category: "core", badge: "06", color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    { id: "ailab", title: "AI_LAB.app", subtitle: "Neural Models", icon: "Brain", category: "ai", color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
    { id: "education", title: "EDUCATION.app", subtitle: "8.38 CGPA", icon: "GraduationCap", category: "cred", badge: "8.38", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { id: "achievements", title: "ACHIEVEMENTS.app", subtitle: "182+ LeetCode", icon: "Award", category: "cred", badge: "182+", color: "text-amber-600 bg-amber-50 border-amber-200" },
    { id: "network", title: "NETWORK.app", subtitle: "Transmissions", icon: "Globe", category: "core", color: "text-violet-600 bg-violet-50 border-violet-200" },
    { id: "terminal", title: "TERMINAL.app", subtitle: "Ctrl + `", icon: "Terminal", category: "core", color: "text-slate-800 bg-slate-100 border-slate-300" },
    { id: "game", title: "NEURAL_DODGE.exe", subtitle: "Mini-Game", icon: "Gamepad2", category: "ai", color: "text-rose-600 bg-rose-50 border-rose-200" },
  ];

  // Global Keyboard Shortcuts (Ctrl+K, Ctrl+`, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === "`" && (e.ctrlKey || e.altKey)) {
        e.preventDefault();
        handleLaunchApp("terminal");
      }
      if (e.key === "Escape") {
        if (contextMenu.isOpen) setContextMenu({ isOpen: false, x: 0, y: 0 });
        else if (commandPaletteOpen) setCommandPaletteOpen(false);
        else if (helpOpen) setHelpOpen(false);
        else if (activeWindowId) handleCloseWindow(activeWindowId);
      }
    };

    const handleWindowClick = () => {
      if (contextMenu.isOpen) {
        setContextMenu({ isOpen: false, x: 0, y: 0 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleWindowClick);
    };
  }, [commandPaletteOpen, helpOpen, activeWindowId, contextMenu.isOpen]);

  // Right-Click Context Menu Handler
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    playSound("click");
    setContextMenu({
      isOpen: true,
      x: Math.min(e.clientX, window.innerWidth - 220),
      y: Math.min(e.clientY, window.innerHeight - 320),
    });
  };

  // Window Management Handlers
  const handleBringToFront = (id: AppId) => {
    setActiveWindowId(id);
    const newZ = highestZIndex + 1;
    setHighestZIndex(newZ);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: newZ, isMinimized: false } : w))
    );
  };

  const handleLaunchApp = (id: AppId) => {
    playSound("launch");
    const newZ = highestZIndex + 1;
    setHighestZIndex(newZ);
    setActiveWindowId(id);
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, isOpen: true, isMinimized: false, zIndex: newZ }
          : w
      )
    );
  };

  const handleCloseWindow = (id: AppId) => {
    playSound("click");
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false, isMaximized: false } : w))
    );
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const handleMinimizeWindow = (id: AppId) => {
    playSound("click");
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const handleToggleMaximize = (id: AppId) => {
    playSound("click");
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
  };

  const handleCloseAllWindows = () => {
    playSound("click");
    setWindows((prev) => prev.map((w) => ({ ...w, isOpen: false, isMaximized: false })));
    setActiveWindowId(null);
  };

  // Render contents of each window
  const renderWindowContent = (id: AppId) => {
    switch (id) {
      case "profile":
        return <ProfileApp onOpenResumeModal={onOpenResumeModal} />;
      case "projects":
        return <ProjectsApp onLaunchApp={handleLaunchApp} />;
      case "veristream":
        return <VeriStreamApp />;
      case "docuaudit":
        return <DocuAuditApp />;
      case "liquiditypulse":
        return <LiquidityPulseApp />;
      case "ailab":
        return <AiLabApp />;
      case "education":
        return <EducationApp />;
      case "achievements":
        return <AchievementsApp />;
      case "network":
        return <NetworkApp onOpenResumeModal={onOpenResumeModal} />;
      case "terminal":
        return (
          <TerminalApp
            onLaunchApp={handleLaunchApp}
            onOpenRecruiter={onOpenRecruiter}
            onOpenResumeModal={onOpenResumeModal}
          />
        );
      case "game":
        return <NeuralDodgeGame onClose={() => handleCloseWindow("game")} />;
      default:
        return null;
    }
  };

  const renderIconComponent = (name: string) => {
    switch (name) {
      case "User": return <User className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "FolderGit2": return <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "Brain": return <Brain className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "Award": return <Award className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "Globe": return <Globe className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "Terminal": return <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />;
      case "Gamepad2": return <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      default: return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  // Theme styling definitions
  const themeBackgroundClasses: Record<OSTheme, string> = {
    daylight: "bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900",
    holographic: "bg-gradient-to-br from-[#f0fdfa] via-[#e0f2fe] to-[#f8fafc] text-slate-900",
    midnight: "bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#1e1b4b] text-slate-100",
  };

  const isDark = currentTheme === "midnight";

  return (
    <div
      onContextMenu={handleContextMenu}
      className={`relative w-full h-screen overflow-hidden font-sans select-none transition-colors duration-500 ${themeBackgroundClasses[currentTheme]}`}
    >
      {/* Background Architectural Grid & Ambient Aura */}
      <div className="absolute inset-0 bg-lab-grid opacity-50 pointer-events-none" />
      <div
        className={`absolute top-1/4 left-1/4 w-[34rem] h-[34rem] rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isDark ? "bg-cyan-500/10" : "bg-blue-500/8"
        }`}
      />
      <div
        className={`absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isDark ? "bg-violet-500/10" : "bg-cyan-500/8"
        }`}
      />

      {/* 1. TOP SYSTEM BAR */}
      <TopBar
        onOpenRecruiter={onOpenRecruiter}
        onOpenTerminal={() => handleLaunchApp("terminal")}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenHelp={() => setHelpOpen(true)}
        audioEnabled={audioEnabled}
        onToggleAudio={() => setAudioEnabled((prev) => !prev)}
        currentTheme={currentTheme}
        onChangeTheme={(t) => setCurrentTheme(t)}
      />

      {/* 2. DESKTOP MAIN SURFACE */}
      <main className="relative pt-12 pb-24 px-4 sm:px-6 h-full flex flex-col justify-between overflow-hidden">
        {/* TOP SECTION: CENTERED APPLICATION LAUNCHER CONSOLE */}
        <div className="w-full max-w-5xl mx-auto z-10 flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-300">
          {/* Glass Console Container */}
          <div
            className={`w-full rounded-3xl p-3 sm:p-4 backdrop-blur-2xl border transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${
              isDark
                ? "bg-slate-900/60 border-slate-800 shadow-slate-950/40"
                : "bg-white/60 border-slate-200/90 shadow-slate-200/50"
            }`}
          >
            {/* Top Bar of the Console: Interactive Filter Pills & Status */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-200/60 dark:border-slate-800 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 font-bold text-slate-500 dark:text-slate-400">
                <Filter className="w-3.5 h-3.5 text-blue-500" />
                <span className="hidden sm:inline uppercase">QUICK LAUNCHER //</span>
                <span>CATEGORY FILTER:</span>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1">
                {[
                  { id: "all", label: "All (8)" },
                  { id: "ai", label: "AI & Forensics" },
                  { id: "core", label: "Full-Stack & OS" },
                  { id: "cred", label: "Credentials" },
                ].map((cat) => {
                  const isActive = activeCategoryFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        playSound("tab");
                        setActiveCategoryFilter(cat.id);
                      }}
                      className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer font-semibold ${
                        isActive
                          ? "bg-blue-600 text-white shadow-xs scale-102"
                          : isDark
                          ? "bg-slate-800/80 hover:bg-slate-700 text-slate-300"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Application Icons Centered Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2.5 sm:gap-3 justify-center">
              {desktopIcons.map((app) => {
                const isDimmed = activeCategoryFilter !== "all" && app.category !== activeCategoryFilter;

                return (
                  <button
                    key={app.id}
                    onClick={() => handleLaunchApp(app.id)}
                    className={`group p-2.5 sm:p-3 rounded-2xl backdrop-blur-md border transition-all duration-200 flex flex-col items-center text-center cursor-pointer relative hover:-translate-y-1.5 hover:shadow-lg ${
                      isDimmed ? "opacity-35 scale-95" : "opacity-100"
                    } ${
                      isDark
                        ? "bg-slate-800/50 hover:bg-slate-800/90 border-slate-700/60"
                        : "bg-white/80 hover:bg-white border-slate-200/90"
                    }`}
                  >
                    {/* Badge */}
                    {app.badge && (
                      <span className="absolute top-1.5 right-1.5 px-1.5 py-0.2 rounded-full bg-blue-600 text-white font-mono text-[9px] font-bold shadow-xs">
                        {app.badge}
                      </span>
                    )}

                    {/* App Icon Container with Hover Glow */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shadow-2xs mb-1.5 transition-transform group-hover:scale-110 ${app.color}`}
                    >
                      {renderIconComponent(app.icon)}
                    </div>

                    {/* Title */}
                    <span
                      className={`font-bold text-[11px] sm:text-xs block truncate w-full transition ${
                        isDark
                          ? "text-slate-100 group-hover:text-cyan-400"
                          : "text-slate-900 group-hover:text-blue-600"
                      }`}
                    >
                      {app.title}
                    </span>

                    {/* Subtitle */}
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block truncate w-full">
                      {app.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* CENTER SECTION: DESKTOP HERO IDENTITY WIDGET */}
        <div
          className={`max-w-3xl mx-auto w-full my-auto z-0 p-6 sm:p-8 rounded-3xl backdrop-blur-2xl border shadow-xl space-y-6 animate-in zoom-in-95 duration-200 transition-colors duration-300 ${
            isDark
              ? "bg-slate-900/70 border-slate-800 text-slate-100"
              : "bg-white/80 border-slate-200/90 text-slate-900"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Real unaltered photo from /public/profile.jpg inside futuristic frame */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-lg shrink-0 bg-white">
              <Image
                src="/profile.jpg"
                alt={personalData.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 py-0.5 bg-slate-900/80 backdrop-blur-xs text-center text-[9px] font-mono font-bold text-cyan-300">
                VERIFIED ID
              </div>
            </div>

            {/* Profile Intro */}
            <div className="space-y-2 flex-1">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold ${
                  isDark
                    ? "bg-blue-950/60 border-blue-800 text-cyan-300"
                    : "bg-blue-50 border-blue-200 text-blue-700"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span>PRATEEK OS // SYSTEM STATUS: ONLINE</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
                  {personalData.name}
                </h1>
                <p className="text-sm font-semibold text-blue-500 font-mono mt-0.5">
                  {personalData.title}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed max-w-xl">
                I build intelligent systems, AI-powered applications and full-stack products across machine learning, computer vision, data and software engineering.
              </p>
            </div>
          </div>

          {/* Real verified stats ticker indicators */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t ${
              isDark ? "border-slate-800" : "border-slate-100"
            }`}
          >
            <div
              className={`p-2.5 rounded-xl border text-center ${
                isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200/80"
              }`}
            >
              <span className="text-[10px] font-mono text-slate-400 block">SYSTEM STATUS</span>
              <span className="font-bold text-xs text-emerald-500 flex items-center justify-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                ONLINE
              </span>
            </div>
            <div
              className={`p-2.5 rounded-xl border text-center ${
                isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200/80"
              }`}
            >
              <span className="text-[10px] font-mono text-slate-400 block">AI MODULES</span>
              <span className="font-bold text-xs text-cyan-500 mt-0.5 block">ACTIVE</span>
            </div>
            <div
              className={`p-2.5 rounded-xl border text-center ${
                isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200/80"
              }`}
            >
              <span className="text-[10px] font-mono text-slate-400 block">PRODUCTION APPS</span>
              <span className="font-bold text-xs text-blue-500 mt-0.5 block">06 PROJECTS</span>
            </div>
            <div
              className={`p-2.5 rounded-xl border text-center ${
                isDark ? "bg-slate-800/40 border-slate-800" : "bg-slate-50 border-slate-200/80"
              }`}
            >
              <span className="text-[10px] font-mono text-slate-400 block">LEETCODE RIGOR</span>
              <span className="font-bold text-xs text-amber-500 mt-0.5 block">182+ PROBLEMS</span>
            </div>
          </div>

          {/* Quick Start Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
            <button
              onClick={() => handleLaunchApp("projects")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition hover:scale-102 cursor-pointer"
            >
              <span>Explore Projects.app</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleLaunchApp("profile")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs border transition cursor-pointer ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200"
              }`}
            >
              <User className="w-3.5 h-3.5 text-blue-500" />
              <span>Full Profile</span>
            </button>
            <button
              onClick={() => setHelpOpen(true)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs border transition cursor-pointer ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>How To Explore</span>
            </button>
          </div>
        </div>

        {/* 3. DOCK AT THE BOTTOM (Fully night-mode adaptive) */}
        <Dock
          windows={windows}
          onLaunchApp={handleLaunchApp}
          currentTheme={currentTheme}
          onOpenResumeModal={onOpenResumeModal}
          onOpenRecruiter={onOpenRecruiter}
        />
      </main>

      {/* 4. RENDER OPEN WINDOWS (With dark mode styling) */}
      {windows.map((win) => {
        if (!win.isOpen) return null;
        return (
          <WindowFrame
            key={win.id}
            win={win}
            isDark={isDark}
            isActive={activeWindowId === win.id}
            onFocus={() => handleBringToFront(win.id)}
            onClose={() => handleCloseWindow(win.id)}
            onMinimize={() => handleMinimizeWindow(win.id)}
            onToggleMaximize={() => handleToggleMaximize(win.id)}
          >
            {renderWindowContent(win.id)}
          </WindowFrame>
        );
      })}

      {/* 5. RIGHT-CLICK DESKTOP CONTEXT MENU */}
      {contextMenu.isOpen && (
        <div
          style={{ top: contextMenu.y, left: contextMenu.x }}
          className={`fixed z-50 w-56 rounded-2xl p-1.5 backdrop-blur-2xl border shadow-2xl animate-in zoom-in-95 duration-150 font-sans text-xs ${
            isDark
              ? "bg-slate-900/95 border-slate-800 text-slate-200 shadow-slate-950/80"
              : "bg-white/95 border-slate-200/90 text-slate-800 shadow-slate-200/80"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-2.5 py-1 text-[10px] font-mono text-slate-400 font-bold border-b border-slate-200/60 dark:border-slate-800 mb-1">
            PRATEEK OS // MENU
          </div>
          <button
            onClick={() => {
              handleLaunchApp("projects");
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition cursor-pointer text-left font-semibold"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Open Projects Explorer</span>
          </button>
          <button
            onClick={() => {
              handleLaunchApp("profile");
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition cursor-pointer text-left font-semibold"
          >
            <User className="w-3.5 h-3.5" />
            <span>Open Developer Profile</span>
          </button>
          <button
            onClick={() => {
              handleLaunchApp("ailab");
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition cursor-pointer text-left font-semibold"
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Open AI Lab Constellation</span>
          </button>
          <button
            onClick={() => {
              onOpenRecruiter();
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition cursor-pointer text-left font-semibold text-blue-500 hover:text-white"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Launch Recruiter Mode</span>
          </button>
          <button
            onClick={() => {
              handleLaunchApp("terminal");
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition cursor-pointer text-left font-semibold"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Launch Terminal CLI</span>
          </button>
          <button
            onClick={() => {
              handleLaunchApp("game");
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition cursor-pointer text-left font-semibold text-rose-500 hover:text-white"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Play Neural Dodge Mini-Game</span>
          </button>

          <div className="my-1 border-t border-slate-200/60 dark:border-slate-800" />

          <button
            onClick={() => {
              onOpenResumeModal();
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition cursor-pointer text-left font-semibold"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Resume PDF</span>
          </button>
          <button
            onClick={() => {
              setCurrentTheme((t) => (t === "daylight" ? "midnight" : "daylight"));
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-blue-600 hover:text-white transition cursor-pointer text-left font-semibold"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Toggle Day/Night Mode</span>
          </button>
          <button
            onClick={() => {
              handleCloseAllWindows();
              setContextMenu({ isOpen: false, x: 0, y: 0 });
            }}
            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-slate-700 hover:text-white transition cursor-pointer text-left font-semibold text-slate-400"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Close All Windows</span>
          </button>
        </div>
      )}

      {/* 6. COMMAND PALETTE MODAL (Ctrl + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onLaunchApp={handleLaunchApp}
        onOpenRecruiter={onOpenRecruiter}
        onOpenResumeModal={onOpenResumeModal}
      />

      {/* 7. HELP MODAL */}
      <HelpModal
        isOpen={helpOpen}
        onClose={() => setHelpOpen(false)}
        onOpenRecruiter={onOpenRecruiter}
      />
    </div>
  );
}
