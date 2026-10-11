"use client";

import { useState } from "react";
import {
  FileText,
  ExternalLink,
  ShieldAlert,
  Layers,
  Search,
  CheckCircle2,
  FileCheck,
  Binary,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

export default function DocuAuditApp() {
  const [selectedLayer, setSelectedLayer] = useState<
    "ela" | "noise" | "dbscan" | "revision" | "font" | "pkcs7"
  >("ela");

  const layers = [
    {
      id: "ela",
      name: "ELA (Error Level Analysis)",
      desc: "Analyzes JPEG compression grid discrepancies across localized pixel blocks to isolate digitally spliced or re-saved regions.",
      signal: "Localized high-frequency edge variance detected in seal signature area.",
    },
    {
      id: "noise",
      name: "Noise Residuals",
      desc: "Filters high-frequency sensor PRNU (Photo-Response Non-Uniformity) to confirm uniform photographic noise across the document surface.",
      signal: "Background noise distribution matches homogeneous flatbed scanner profile.",
    },
    {
      id: "dbscan",
      name: "ORB + DBSCAN Copy-Move",
      desc: "Extracts oriented FAST features and clusters duplicated geometry via spatial density to expose cloned text or duplicated rubber stamps.",
      signal: "Zero density spatial clusters matching duplicate stamp geometry.",
    },
    {
      id: "revision",
      name: "PDF Revision & Incremental Updates",
      desc: "Parses cross-reference tables (xref) and trailer dictionaries to identify hidden previous revisions and stealth modifications.",
      signal: "Single incremental update recorded: Trailer xref root uncompromised.",
    },
    {
      id: "font",
      name: "Font Anomaly Detection",
      desc: "Inspects embedded Type1/TrueType font descriptors, glyph width metrics, and kerning deviations against original baseline.",
      signal: "All glyph tables match embedded font descriptor metrics strictly.",
    },
    {
      id: "pkcs7",
      name: "PKCS#7 & ByteRange Validation",
      desc: "Cryptographically audits /ByteRange coverage to guarantee digital signature envelopes encompass the entire binary payload.",
      signal: "ByteRange covers [0, 48291, 52387, 89441] without trailing unhashed gaps.",
    },
  ];

  const currentLayer = layers.find((l) => l.id === selectedLayer)!;

  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            DIGITAL DOCUMENT FORENSIC SUITE
          </div>
          <h2 className="text-2xl font-black text-slate-900">DocuAudit</h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            End-to-End PDF & Image Tampering Inspection & Chain of Custody
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href="https://docu-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition hover:scale-102"
          >
            <span>Live System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/Prateekbaliyan/docu-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      {/* Forensic Layer Selector */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
          Forensic Inspection Layers (Click to Switch Layer)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {layers.map((layer) => {
            const isSelected = selectedLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id as any)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-50 border-blue-400 text-blue-900 shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <div className="text-xs font-bold leading-tight">{layer.name}</div>
                <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                  {layer.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Simulation of Document Layer */}
      <div className="p-5 rounded-2xl bg-slate-900 text-white font-mono text-xs border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
          <span className="flex items-center gap-2 text-cyan-400 font-bold">
            <Layers className="w-4 h-4" />
            INSPECTING LAYER: {currentLayer.name.toUpperCase()}
          </span>
          <span className="text-emerald-400">STATUS: AUDITED</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="text-slate-300 leading-relaxed">{currentLayer.desc}</div>
          <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Observation: {currentLayer.signal}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
          <div className="p-2 rounded bg-slate-800/80 border border-slate-700">PyMuPDF Stream Parser</div>
          <div className="p-2 rounded bg-slate-800/80 border border-slate-700">OpenCV Mask Residuals</div>
          <div className="p-2 rounded bg-slate-800/80 border border-slate-700">SHA-256 Integrity Verified</div>
        </div>
      </div>

      {/* Forensic Verification Validators */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
          Chain of Custody & Document Validators
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="font-bold text-slate-900 block mb-0.5">SHA-256 Immutable Audit Log</span>
            <span className="text-slate-600">
              Each inspected asset generates an immutable hash chain to establish court-admissible forensic verification.
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="font-bold text-slate-900 block mb-0.5">Metadata & XMP Reconciliation</span>
            <span className="text-slate-600">
              Cross-references creation date, modification markers, and PDF producer strings to spot timeline discrepancies.
            </span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="pt-2 border-t border-slate-200">
        <span className="text-xs font-mono text-slate-500 block mb-2 font-bold">SYSTEM TECH STACK</span>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Python",
            "FastAPI",
            "Next.js",
            "TypeScript",
            "OpenCV",
            "PyMuPDF",
            "Scikit-learn",
            "NumPy",
            "SciPy",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
