"use client";

import { useState } from "react";
import {
  X,
  FileDown,
  ExternalLink,
  AlertCircle,
  FileText,
  Copy,
  Check,
  Eye,
  ListFilter,
} from "lucide-react";
import { personalData } from "@/data/personal";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"viewer" | "summary">("viewer");

  if (!isOpen) return null;

  const pdfUrl = "/Prateek_Baliyan_Resume.pdf";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}${pdfUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <h3
                id="resume-modal-title"
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-sans"
              >
                Curriculum Vitae / Resume
              </h3>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                VERIFIED ATS
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Prateek Baliyan • AI/ML &amp; Full-Stack Engineer • KIET CSE (AI)
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher Tabs */}
            <div className="flex p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono">
              <button
                onClick={() => setActiveTab("viewer")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "viewer"
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-cyan-300 font-bold shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
              <button
                onClick={() => setActiveTab("summary")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "summary"
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-cyan-300 font-bold shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Quick Brief</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {activeTab === "viewer" ? (
            <div className="w-full h-[58vh] sm:h-[62vh] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex flex-col">
              <object
                data={`${pdfUrl}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="p-8 text-center flex flex-col items-center justify-center h-full space-y-4">
                  <FileText className="w-12 h-12 text-slate-400" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    PDF preview is ready for viewing and direct download.
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open PDF in New Window
                  </a>
                </div>
              </object>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 font-mono text-xs pb-3 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-white">
                  FILE: Prateek_Baliyan_Resume.pdf
                </span>
                <span className="text-blue-600 dark:text-cyan-400 font-bold">
                  Single-Page ATS Certified
                </span>
              </div>
              <div className="space-y-3 text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    Technical Profile &amp; Focus
                  </h4>
                  <p>
                    {personalData.title} specializing in artificial intelligence, computer vision,
                    quantitative microstructure systems, and scalable full-stack applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    Flagship Built Systems
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>
                      <strong className="text-slate-900 dark:text-white">VeriStream:</strong> Low-latency video deepfake interceptor using frequency analysis and spatial consistency checks.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">DocuAudit:</strong> Enterprise PDF forensics analyzer detecting copy-move tampering, ELA anomalies, and metadata forgery.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-white">LiquidityPulse:</strong> High-frequency market microstructure order-book visualization and imbalance engine.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    Verified Academic &amp; Problem-Solving Credentials
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>
                      B.Tech in CSE (Artificial Intelligence), {personalData.educationShort.institution} (2024–2028) — CGPA {personalData.stats.cgpa}
                    </li>
                    <li>
                      LeetCode: {personalData.stats.leetcode} DSA Problems Solved in C++ (Binary Search, Graphs, Dynamic Programming)
                    </li>
                    <li>
                      Certification: AWS Certified Cloud Practitioner
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
          {/* Direct Download Button */}
          <a
            href={pdfUrl}
            download="Prateek_Baliyan_Resume.pdf"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 active:scale-[0.98]"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          {/* View in Browser in New Tab */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all border border-slate-200 dark:border-slate-700"
          >
            <span>View Fullscreen</span>
            <ExternalLink className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          </a>

          {/* Copy Direct Link */}
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-sm font-semibold transition-all cursor-pointer shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Graceful Fallback Notice */}
        <div className="flex items-start gap-2 pt-0.5 text-[11px] font-mono text-slate-400">
          <AlertCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
          <span>
            Source PDF: /public/Prateek_Baliyan_Resume.pdf • Direct ATS-compliant PDF ready for recruiters and HR systems.
          </span>
        </div>
      </div>
    </div>
  );
}
