"use client";

import { useState } from "react";
import {
  ShieldCheck,
  ExternalLink,
  Activity,
  Scan,
  FileCheck2,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

export default function VeriStreamApp() {
  const [activeStep, setActiveStep] = useState<
    "signal" | "face" | "rppg" | "provenance" | "report"
  >("face");

  const concepts = [
    { name: "rPPG Pulse Extraction", desc: "Chrominance-based blood volume pulse tracking across facial regions of interest." },
    { name: "Corneal Illumination", desc: "Disparity analysis between left and right eye specular reflections." },
    { name: "Micro-Tremor Analysis", desc: "Sub-pixel facial landmark displacement to capture physiological tremor." },
    { name: "C2PA & SynthID", desc: "Cryptographic provenance validation and latent watermark inspection." },
    { name: "Adaptive Sensor Fusion", desc: "Kalman filtering and temporal smoothing across asynchronous forensic estimators." },
    { name: "HMAC-SHA256 Reports", desc: "Tamper-evident chain of custody generation for forensic court admissibility." },
  ];

  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-4xl mx-auto">
      {/* App Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ENTERPRISE DEEPFAKE INTERCEPTOR
          </div>
          <h2 className="text-2xl font-black text-slate-900">VeriStream</h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            Real-Time Multimodal Forensic Analysis & Tampering Interceptor
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href="https://veri-stream.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition hover:scale-102"
          >
            <span>Live System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/Prateekbaliyan/Veri-stream"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      {/* Interactive Forensic Pipeline Steps */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
          Interactive Forensic Pipeline
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {[
            { id: "signal", label: "Video Signal", icon: Activity },
            { id: "face", label: "Face Analysis", icon: Scan },
            { id: "rppg", label: "Physiological rPPG", icon: Activity },
            { id: "provenance", label: "Provenance", icon: Lock },
            { id: "report", label: "Forensic Report", icon: FileCheck2 },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeStep === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveStep(item.id as any)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-50 border-blue-400 text-blue-900 shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon className={`w-4 h-4 mb-1.5 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                <div className="text-xs font-bold leading-tight">{item.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Pipeline Stage Monitor */}
      <div className="p-5 rounded-2xl bg-slate-900 text-white font-mono text-xs border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
          <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            TELEMETRY STAGE: {activeStep.toUpperCase()}
          </span>
          <span className="text-emerald-400">STATUS: RECEPTIVE // WEBSOCKET LIVE</span>
        </div>

        {activeStep === "signal" && (
          <div className="space-y-3 py-2">
            <p className="text-slate-300">
              Low-latency chunked video streaming via FastAPI WebSockets. Frames normalized with OpenCV, converted to YCrCb for chrominance signal separation, and queued for micro-tremor batching.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-slate-800 border border-slate-700">Frame Queue: 30 FPS</div>
              <div className="p-2 rounded bg-slate-800 border border-slate-700">Buffer Jitter: &lt; 8ms</div>
              <div className="p-2 rounded bg-slate-800 border border-slate-700">WebSocket: Connected</div>
            </div>
          </div>
        )}

        {activeStep === "face" && (
          <div className="space-y-3 py-2">
            <p className="text-slate-300">
              Facial Landmark & Mesh Alignment. 68 anatomical fiducials tracked frame-by-frame. Evaluates corneal illumination disparity between eyes to detect synthetic lighting inconsistencies characteristic of diffusion models.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-slate-800 border border-slate-700">Facial Mesh: 468 points</div>
              <div className="p-2 rounded bg-slate-800 border border-slate-700">Corneal Ratio: 0.982 Δ</div>
              <div className="p-2 rounded bg-slate-800 border border-slate-700">Blink Cadence: Normal</div>
            </div>
          </div>
        )}

        {activeStep === "rppg" && (
          <div className="space-y-3 py-2">
            <p className="text-slate-300">
              Remote Photoplethysmography (rPPG). Extracts diffuse dermal light reflectance across forehead and cheek regions to detect subcutaneous blood volume pulses. Deepfakes fail to reproduce organic vascular waveforms.
            </p>
            <div className="p-3 rounded bg-slate-950 border border-slate-800 text-center font-bold text-cyan-400">
              [ rPPG Waveform: 0.95 Hz Peak Frequency // Organic Heartbeat Signature Verified ]
            </div>
          </div>
        )}

        {activeStep === "provenance" && (
          <div className="space-y-3 py-2">
            <p className="text-slate-300">
              Cryptographic Provenance Verification. Checks for C2PA manifest assertions, digital camera signatures, and latent frequency artifacts (SynthID-related inspection).
            </p>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2 rounded bg-slate-800 border border-slate-700">C2PA JUMBF Manifest: Checked</div>
              <div className="p-2 rounded bg-slate-800 border border-slate-700">DCT Frequency Residuals: Clean</div>
            </div>
          </div>
        )}

        {activeStep === "report" && (
          <div className="space-y-3 py-2">
            <p className="text-slate-300">
              Forensic Report Engine. Compiles multi-sensor observations into an exportable ReportLab PDF protected with HMAC-SHA256 signature chain of custody.
            </p>
            <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700 text-emerald-400 font-mono text-[11px]">
              SHA-256 Digest: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </div>
          </div>
        )}
      </div>

      {/* Concepts Matrix */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
          Architectural Core Concepts
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {concepts.map((c, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <span className="font-bold text-slate-900 block mb-0.5">{c.name}</span>
              <span className="text-slate-600 leading-relaxed">{c.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="pt-2 border-t border-slate-200">
        <span className="text-xs font-mono text-slate-500 block mb-2 font-bold">SYSTEM TECH STACK</span>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Python",
            "FastAPI",
            "WebSockets",
            "OpenCV",
            "NumPy",
            "SciPy",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "ReportLab",
            "Docker",
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
