"use client";

import { useState, useRef, useEffect } from "react";
import { AppId } from "@/types/os";
import { Terminal, Send, Sparkles, CornerDownLeft } from "lucide-react";
import { personalData } from "@/data/personal";

interface TerminalAppProps {
  onLaunchApp: (appId: AppId) => void;
  onOpenRecruiter: () => void;
  onOpenResumeModal: () => void;
}

interface CommandEntry {
  command: string;
  output: string | React.ReactNode;
}

export default function TerminalApp({
  onLaunchApp,
  onOpenRecruiter,
  onOpenResumeModal,
}: TerminalAppProps) {
  const [history, setHistory] = useState<CommandEntry[]>([
    {
      command: "sysinfo",
      output: (
        <div className="text-cyan-300 space-y-1">
          <div>PRATEEK OS // KERNEL v3.4.0-release</div>
          <div>User: prateek_guest // Host: prateekverse.local</div>
          <div>Status: ONLINE // Type &apos;help&apos; for available commands.</div>
        </div>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let res: string | React.ReactNode = "";

    if (lower === "help") {
      res = (
        <div className="space-y-1 text-slate-300">
          <div>Available Commands:</div>
          <div>  about         - Display developer profile information</div>
          <div>  projects      - Launch Projects Explorer application</div>
          <div>  open &lt;app&gt;    - Launch specific app (veristream, docuaudit, liquiditypulse, ailab, etc.)</div>
          <div>  skills        - Open AI Lab and skill constellation</div>
          <div>  education     - View verified academic credentials & CGPA</div>
          <div>  achievements  - Inspect LeetCode count & AWS Certification</div>
          <div>  contact       - Open Network transmission hub</div>
          <div>  recruiter     - Toggle instant ATS-aligned Recruiter Mode</div>
          <div>  resume        - Preview / download ATS PDF resume</div>
          <div>  play          - [SECRET] Launch Neural Dodge mini-game simulation</div>
          <div>  whoami        - Print active session developer identity</div>
          <div>  clear         - Clear terminal display buffer</div>
        </div>
      );
    } else if (lower === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (lower === "whoami") {
      res = `Prateek Baliyan — AI / ML Engineer & Full-Stack Developer (KIET Group of Institutions, 8.38 CGPA)`;
    } else if (lower === "about") {
      onLaunchApp("profile");
      res = "Opening PROFILE.app...";
    } else if (lower === "projects") {
      onLaunchApp("projects");
      res = "Launching PROJECTS.app...";
    } else if (lower === "skills" || lower === "ailab") {
      onLaunchApp("ailab");
      res = "Opening AI_LAB.app...";
    } else if (lower === "education") {
      onLaunchApp("education");
      res = "Opening EDUCATION.app...";
    } else if (lower === "achievements") {
      onLaunchApp("achievements");
      res = "Opening ACHIEVEMENTS.app...";
    } else if (lower === "contact" || lower === "network") {
      onLaunchApp("network");
      res = "Opening NETWORK.app...";
    } else if (lower === "play" || lower === "game") {
      onLaunchApp("game");
      res = "Initializing Neural Dodge mini-game simulation...";
    } else if (lower === "recruiter") {
      onOpenRecruiter();
      res = "Switching to Recruiter Mode...";
    } else if (lower === "resume") {
      onOpenResumeModal();
      res = "Opening Resume PDF Preview modal...";
    } else if (lower.startsWith("open ")) {
      const target = lower.replace("open ", "").trim();
      if (target === "veristream") {
        onLaunchApp("veristream");
        res = "Launching VeriStream Deepfake Telemetry Chamber...";
      } else if (target === "docuaudit") {
        onLaunchApp("docuaudit");
        res = "Launching DocuAudit Forensic Suite...";
      } else if (target === "liquiditypulse") {
        onLaunchApp("liquiditypulse");
        res = "Launching LiquidityPulse Quantitative Floor...";
      } else if (target === "ailab" || target === "skills") {
        onLaunchApp("ailab");
        res = "Launching AI Lab Constellation...";
      } else if (target === "profile") {
        onLaunchApp("profile");
        res = "Launching Profile Application...";
      } else if (target === "game") {
        onLaunchApp("game");
        res = "Launching Neural Dodge...";
      } else {
        res = `Unknown app: '${target}'. Type 'help' for options.`;
      }
    } else if (lower === "sudo" || lower.startsWith("sudo ")) {
      res = "Permission denied: Root key is preserved by Prateek.";
    } else if (lower === "date") {
      res = new Date().toUTCString();
    } else {
      res = `Command not recognized: '${trimmed}'. Type 'help' for list of commands.`;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: res }]);
    setInputVal("");
  };

  return (
    <div
      className="p-4 w-full h-full min-h-[380px] bg-slate-950 text-slate-100 font-mono text-xs flex flex-col justify-between select-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal History */}
      <div className="space-y-3 overflow-y-auto pr-1 flex-1">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="text-slate-500 font-bold">prateek@os:~$</span>
              <span>{entry.command}</span>
            </div>
            <div className="text-slate-300 leading-relaxed pl-2">{entry.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt */}
      <form onSubmit={handleRunCommand} className="pt-3 border-t border-slate-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold shrink-0">prateek@os:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help', 'projects', 'play'..."
          className="flex-1 bg-transparent text-white outline-none font-mono text-xs placeholder:text-slate-600"
          autoFocus
        />
        <button type="submit" className="text-slate-500 hover:text-cyan-400 p-1">
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
