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
} from "lucide-react";
import { personalData } from "@/data/personal";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/Prateek_Baliyan_Resume.pdf`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3
                id="resume-modal-title"
                className="text-xl font-bold text-slate-900 font-sans"
              >
                Curriculum Vitae / Resume
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-mono">
              Prateek Baliyan • AI/ML &amp; Full-Stack Engineer • KIET CSE (AI)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Close Resume Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ATS Resume Summary Brief */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center justify-between text-slate-700 font-mono text-xs pb-2 border-b border-slate-200">
            <span className="font-semibold">FILE: Prateek_Baliyan_Resume.pdf</span>
            <span className="text-blue-600 font-bold">ATS Optimized</span>
          </div>
          <div className="space-y-1.5 text-slate-600 font-sans">
            <p className="font-semibold text-slate-800">
              Technical Profile Highlights:
            </p>
            <ul className="space-y-1 pl-4 list-disc text-xs text-slate-600">
              <li>
                <strong className="text-slate-800">Core Disciplines:</strong> AI /
                Machine Learning, Computer Vision, Quantitative Microstructure,
                Full-Stack Systems.
              </li>
              <li>
                <strong className="text-slate-800">Flagship Systems:</strong>{" "}
                VeriStream (Real-Time Deepfake Interceptor), DocuAudit (Document
                Forensics), LiquidityPulse (L2 Order Book Terminal).
              </li>
              <li>
                <strong className="text-slate-800">Credentials:</strong> 8.38
                CGPA (KIET CSE AI), 182+ LeetCode DSA Problems, AWS Cloud
                Certified.
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          {/* Direct Download Button */}
          <a
            href="/Prateek_Baliyan_Resume.pdf"
            download="Prateek_Baliyan_Resume.pdf"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          {/* View in Browser in New Tab */}
          <a
            href="/Prateek_Baliyan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-all border border-slate-200"
          >
            <span>View in Browser</span>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>

          {/* Copy Direct Link */}
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-all cursor-pointer shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
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
        <div className="flex items-start gap-2 pt-1 text-[11px] font-mono text-slate-400">
          <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <span>
            Note: Resume will download from /public/Prateek_Baliyan_Resume.pdf.
            If replacing the file, maintain this path to update automatically.
          </span>
        </div>
      </div>
    </div>
  );
}
