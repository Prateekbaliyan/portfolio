"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { personalData } from "@/data/personal";
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from "lucide-react";

interface LabTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

interface LogEntry {
  type: "command" | "output" | "error" | "system";
  text: string;
}

export default function LabTerminal({
  isOpen,
  onClose,
  onOpenResumeModal,
}: LabTerminalProps) {
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    {
      type: "system",
      text: "PRATEEK // AI LAB OS [Version 2.4.0-STABLE]\nType 'help' to inspect laboratory commands, or 'projects' to query active systems.",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newLogs: LogEntry[] = [...history, { type: "command", text: `prateek@ai-lab:~$ ${cmd}` }];
    const lower = cmd.toLowerCase();

    switch (lower) {
      case "help":
        newLogs.push({
          type: "output",
          text: `Available Commands:
  help          - Display this command index
  about         - Query engineer bio and architectural focus
  projects      - List active flagship and applied systems
  skills        - List technology constellation
  veristream    - Deep dive into VeriStream (Deepfake Detection)
  docuaudit     - Deep dive into DocuAudit (Document Forensics)
  liquiditypulse- Deep dive into LiquidityPulse (Microstructure)
  github        - Open GitHub profile [${personalData.social.github}]
  leetcode      - Open LeetCode profile [${personalData.stats.leetcode} solved]
  resume        - Download / View ATS Resume
  contact       - Jump to contact terminal
  clear         - Clear terminal buffer
  sudo prateek  - Request elevated lab authorization`,
        });
        break;

      case "about":
        newLogs.push({
          type: "output",
          text: `Prateek Baliyan | AI/ML Engineer & Full-Stack Developer
B.Tech CSE (AI) @ KIET Group of Institutions (2024–2028) • CGPA: 8.38
Specialization: Production AI Systems, Computer Vision, Real-Time Platforms, Quantitative Microstructure.`,
        });
        break;

      case "projects":
        newLogs.push({
          type: "output",
          text: `Flagship Systems:
  01. VeriStream     [CV / Deepfake Detection / rPPG / C2PA]
  02. DocuAudit      [Document Forensics / ELA / PyMuPDF]
  03. LiquidityPulse [Market Microstructure / L2 Depth / VPIN]
  04. AI Tracker     [Behavior Intelligence / Chrome Ext]
  05. Location Intel [Geospatial Demand Heatmaps / OSM]
Type '<project-name>' to open dedicated route.`,
        });
        break;

      case "skills":
        newLogs.push({
          type: "output",
          text: `Core Stack:
  Languages: C++, Python, JavaScript, TypeScript, SQL
  AI / ML: Scikit-learn, Pandas, NumPy, SciPy, OpenCV, Machine Learning, Computer Vision
  Backend: FastAPI, Node.js, Express.js, WebSockets, REST APIs, Redis
  Frontend: React, Next.js, TypeScript, Tailwind CSS, Three.js
  Core CS: DSA (182+ LeetCode), OOP, DBMS, OS, Computer Networks`,
        });
        break;

      case "veristream":
        newLogs.push({ type: "system", text: "Navigating to /projects/veristream..." });
        router.push("/projects/veristream");
        break;

      case "docuaudit":
        newLogs.push({ type: "system", text: "Navigating to /projects/docuaudit..." });
        router.push("/projects/docuaudit");
        break;

      case "liquiditypulse":
        newLogs.push({ type: "system", text: "Navigating to /projects/liquiditypulse..." });
        router.push("/projects/liquiditypulse");
        break;

      case "github":
        newLogs.push({ type: "system", text: "Opening GitHub..." });
        window.open(personalData.social.github, "_blank");
        break;

      case "leetcode":
        newLogs.push({ type: "system", text: "Opening LeetCode..." });
        window.open(personalData.social.leetcode, "_blank");
        break;

      case "resume":
        onOpenResumeModal();
        newLogs.push({ type: "system", text: "Opening Resume modal..." });
        break;

      case "contact":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "sudo prateek":
        newLogs.push({
          type: "output",
          text: "Nice try. You already have root access.",
        });
        break;

      default:
        newLogs.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newLogs);
    setInputVal("");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed bottom-6 right-4 sm:right-8 z-50 w-[94vw] sm:w-[540px] rounded-2xl bg-[#0b0f19] border border-blue-500/30 shadow-[0_20px_50px_rgba(15,23,42,0.4)] overflow-hidden font-mono text-xs animate-in slide-in-from-bottom-5 duration-200"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-slate-300">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-semibold text-slate-200">
            prateek@ai-lab:~ (CLI)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-emerald-400 font-medium">● ACTIVE</span>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={scrollRef}
        className="p-4 h-64 overflow-y-auto space-y-2 text-slate-300 font-mono text-[11px] leading-relaxed selection:bg-blue-500/30"
      >
        {history.map((log, idx) => (
          <div key={idx}>
            {log.type === "command" && (
              <div className="text-blue-400 font-semibold">{log.text}</div>
            )}
            {log.type === "system" && (
              <div className="text-slate-400 whitespace-pre-wrap">{log.text}</div>
            )}
            {log.type === "output" && (
              <div className="text-slate-200 whitespace-pre-wrap">{log.text}</div>
            )}
            {log.type === "error" && (
              <div className="text-rose-400">{log.text}</div>
            )}
          </div>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <form
        onSubmit={handleCommand}
        className="flex items-center gap-2 px-4 py-2.5 bg-slate-950 border-t border-slate-800"
      >
        <span className="text-blue-400 font-bold select-none">
          prateek@ai-lab:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type a command (try 'help')..."
          className="flex-1 bg-transparent text-slate-100 focus:outline-none font-mono text-[11px] placeholder:text-slate-600"
        />
      </form>
    </div>
  );
}
