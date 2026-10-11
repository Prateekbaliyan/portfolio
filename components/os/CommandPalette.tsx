"use client";

import { useState, useEffect } from "react";
import { AppId } from "@/types/os";
import {
  Search,
  X,
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
  ExternalLink,
} from "lucide-react";
import { personalData } from "@/data/personal";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchApp: (appId: AppId) => void;
  onOpenRecruiter: () => void;
  onOpenResumeModal: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onLaunchApp,
  onOpenRecruiter,
  onOpenResumeModal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) setQuery("");
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    { id: "profile", label: "Open Profile.app", category: "Application", icon: User, run: () => onLaunchApp("profile") },
    { id: "projects", label: "Open Projects.app", category: "Application", icon: FolderGit2, run: () => onLaunchApp("projects") },
    { id: "veristream", label: "Launch VeriStream Deepfake Interceptor", category: "Project", icon: FolderGit2, run: () => onLaunchApp("veristream") },
    { id: "docuaudit", label: "Launch DocuAudit Document Forensics", category: "Project", icon: FolderGit2, run: () => onLaunchApp("docuaudit") },
    { id: "liquiditypulse", label: "Launch LiquidityPulse Quantitative Floor", category: "Project", icon: FolderGit2, run: () => onLaunchApp("liquiditypulse") },
    { id: "ailab", label: "Open AI_Lab.app & Skills Constellation", category: "Application", icon: Brain, run: () => onLaunchApp("ailab") },
    { id: "education", label: "Open Education.app (8.38 CGPA @ KIET)", category: "Application", icon: GraduationCap, run: () => onLaunchApp("education") },
    { id: "achievements", label: "Open Achievements.app (182+ LeetCode)", category: "Application", icon: Award, run: () => onLaunchApp("achievements") },
    { id: "network", label: "Open Network Transmission Hub", category: "Application", icon: Globe, run: () => onLaunchApp("network") },
    { id: "terminal", label: "Open Terminal.app CLI", category: "Application", icon: Terminal, run: () => onLaunchApp("terminal") },
    { id: "game", label: "Play Neural Dodge Mini-Game", category: "Easter Egg", icon: Gamepad2, run: () => onLaunchApp("game") },
    { id: "recruiter", label: "Switch to Recruiter Mode (Under 30s View)", category: "Mode", icon: Briefcase, run: onOpenRecruiter },
    { id: "resume", label: "Preview / Download ATS Resume PDF", category: "Document", icon: FileDown, run: onOpenResumeModal },
    { id: "github", label: "Visit GitHub Profile", category: "Link", icon: ExternalLink, run: () => window.open(personalData.social.github, "_blank") },
    { id: "linkedin", label: "Visit LinkedIn Profile", category: "Link", icon: ExternalLink, run: () => window.open(personalData.social.linkedin, "_blank") },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-150 font-sans"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden space-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search application..."
            className="flex-1 bg-transparent text-slate-900 text-sm outline-none placeholder:text-slate-400 font-sans"
            autoFocus
          />
          <kbd className="px-2 py-0.5 bg-white rounded border border-slate-200 text-xs text-slate-400 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 font-mono">
              No matching applications or commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.run();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-100 transition-colors text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {item.label}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition">
                    Jump ↵
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
