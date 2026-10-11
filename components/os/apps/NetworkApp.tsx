"use client";

import { useState } from "react";
import {
  Globe,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Share2,
  FileDown,
  Sparkles,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";
import { personalData } from "@/data/personal";

interface NetworkAppProps {
  onOpenResumeModal: () => void;
}

export default function NetworkApp({ onOpenResumeModal }: NetworkAppProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const channels = [
    {
      id: "github",
      name: "GitHub",
      url: personalData.social.github,
      handle: "@Prateekbaliyan",
      desc: "Open-source repositories, system architectures, and forensic implementations.",
      icon: GitHubIcon,
      color: "bg-slate-900 text-white hover:bg-slate-800",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: personalData.social.linkedin,
      handle: "prateek-baliyan-9b7543328",
      desc: "Professional engineering profile, network updates, and academic credentials.",
      icon: LinkedInIcon,
      color: "bg-[#0077b5] text-white hover:bg-[#006396]",
    },
    {
      id: "leetcode",
      name: "LeetCode",
      url: personalData.social.leetcode,
      handle: "@prateekbaliyan",
      desc: "182+ algorithmic problems solved in C++ spanning trees, graphs, and dynamic programming.",
      icon: LeetCodeIcon,
      color: "bg-[#FFA116] text-slate-950 hover:bg-[#e68e0d]",
    },
  ];

  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            TELECOMMUNICATION ARRAY
          </div>
          <h2 className="text-2xl font-black text-slate-900">Network & External Transmission Hub</h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            Direct Developer Transmission Nodes // Available for Engineering Roles
          </p>
        </div>
        <button
          onClick={onOpenResumeModal}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition hover:scale-102 cursor-pointer self-start sm:self-auto"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>Download ATS Resume</span>
        </button>
      </div>

      {/* Direct Transmission Email Card */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-slate-50 border border-blue-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-blue-600 uppercase block">Direct Transmission</span>
            <div className="text-base font-bold text-slate-900">{personalData.email}</div>
            <p className="text-xs text-slate-500">Available for Summer / Fall SWE & AI/ML opportunities</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200 transition cursor-pointer"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
          </button>
          <a
            href={`mailto:${personalData.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm"
          >
            <span>Compose</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Network Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {channels.map((chan) => {
          const Icon = chan.icon;
          return (
            <div
              key={chan.id}
              className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">{chan.handle}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{chan.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{chan.desc}</p>
                </div>
              </div>

              <a
                href={chan.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl font-bold text-xs transition shadow-2xs ${chan.color}`}
              >
                <span>Connect on {chan.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
