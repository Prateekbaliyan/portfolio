"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { personalData } from "@/data/personal";
import {
  Search,
  Home,
  FolderGit2,
  Code,
  Mail,
  FileDown,
  X,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  category: "Flagship Systems" | "Navigation" | "Social & Network" | "Actions";
  icon: any;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResumeModal,
}: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    onClose();
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands: CommandItem[] = [
    {
      id: "veristream",
      label: "Explore VeriStream (Deepfake Detection & Forensic Interceptor)",
      category: "Flagship Systems",
      icon: FolderGit2,
      action: () => {
        onClose();
        router.push("/projects/veristream");
      },
      shortcut: "1",
    },
    {
      id: "docuaudit",
      label: "Explore DocuAudit (Digital Document Forensics)",
      category: "Flagship Systems",
      icon: FolderGit2,
      action: () => {
        onClose();
        router.push("/projects/docuaudit");
      },
      shortcut: "2",
    },
    {
      id: "liquiditypulse",
      label: "Explore LiquidityPulse (Market Microstructure & Order Book)",
      category: "Flagship Systems",
      icon: FolderGit2,
      action: () => {
        onClose();
        router.push("/projects/liquiditypulse");
      },
      shortcut: "3",
    },
    {
      id: "home",
      label: "Go to Home Core",
      category: "Navigation",
      icon: Home,
      action: () => scrollTo("hero"),
      shortcut: "H",
    },
    {
      id: "skills",
      label: "View Skills & Constellation",
      category: "Navigation",
      icon: Code,
      action: () => scrollTo("skills"),
      shortcut: "S",
    },
    {
      id: "education",
      label: "View Education & Academic History",
      category: "Navigation",
      icon: GraduationCap,
      action: () => scrollTo("education"),
    },
    {
      id: "experience",
      label: "View Experience & Learning Timeline",
      category: "Navigation",
      icon: Briefcase,
      action: () => scrollTo("experience"),
    },
    {
      id: "contact",
      label: "Contact Prateek Baliyan",
      category: "Navigation",
      icon: Mail,
      action: () => scrollTo("contact"),
      shortcut: "C",
    },
    {
      id: "resume",
      label: "Download Resume (PDF)",
      category: "Actions",
      icon: FileDown,
      action: () => {
        onClose();
        onOpenResumeModal();
      },
      shortcut: "R",
    },
    {
      id: "github",
      label: "GitHub Profile",
      category: "Social & Network",
      icon: GitHubIcon,
      action: () => {
        window.open(personalData.social.github, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      category: "Social & Network",
      icon: LinkedInIcon,
      action: () => {
        window.open(personalData.social.linkedin, "_blank");
        onClose();
      },
    },
    {
      id: "leetcode",
      label: `LeetCode Profile (${personalData.stats.leetcode} Problems)`,
      category: "Social & Network",
      icon: LeetCodeIcon,
      action: () => {
        window.open(personalData.social.leetcode, "_blank");
        onClose();
      },
    },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filtered.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-900/35 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or query laboratory systems..."
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] bg-slate-100 text-slate-500 rounded-md border border-slate-200 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-400">
              No matching laboratory commands found
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${
                        isSelected ? "text-blue-600" : "text-slate-400"
                      }`}
                    />
                    <span className="font-sans">{cmd.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {cmd.category}
                    </span>
                    {cmd.shortcut && (
                      <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-500 rounded">
                        {cmd.shortcut}
                      </kbd>
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Bottom Help Tip */}
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Use ↑ ↓ to navigate, Enter to select</span>
          <span className="text-blue-600 font-semibold">PRATEEK // AI LAB</span>
        </div>
      </div>
    </div>
  );
}
