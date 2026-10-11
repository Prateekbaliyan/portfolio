"use client";

import { useState } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import AiCoreCanvas from "./AiCoreCanvas";
import {
  ArrowDown,
  Mail,
  FileDown,
  Terminal,
  Activity,
  Sparkles,
  ExternalLink,
  MapPin,
  GraduationCap,
  Cpu,
  Layers,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
  onOverrideTrigger: () => void;
}

export default function Hero({
  onOpenResumeModal,
  onOpenTerminal,
  onOverrideTrigger,
}: HeroProps) {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectSatelliteProject = (projectId: string) => {
    scrollToSection("projects");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-lab-ambient"
    >
      <div className="max-w-7xl w-full mx-auto space-y-10">
        {/* Top Status & Lab Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200/60 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              SYSTEM ONLINE
            </span>
            <span className="text-slate-500 hidden sm:inline">
              // AI CORE STABLE
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 text-[11px]">
            <span>PROJECTS LOADED: 06</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-600 font-semibold">DSA: 182+</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-600 font-semibold">CGPA: 8.38</span>
            <button
              onClick={onOpenTerminal}
              className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-colors cursor-pointer"
              title="Launch Lab CLI"
            >
              <Terminal className="w-3 h-3 text-blue-600" />
              <span>CLI Tray</span>
            </button>
          </div>
        </div>

        {/* Hero Main Grid: Left Narrative + Right Integrated 3D Core & Identity Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Bio, Tags & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Live Focus Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200 shadow-sm text-xs font-mono text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span className="text-blue-600 font-bold">PRATEEK // AI LAB</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600 font-medium">
                {personalData.currentlyBuilding}
              </span>
            </div>

            {/* Main Name & Large Supporting Line */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 font-sans">
                {personalData.name}
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
                {personalData.heroTagline}
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-600 font-sans pt-1">
                {personalData.title}
              </h2>
            </div>

            {/* Academic Brief */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-slate-500 font-mono">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                KIET Group of Institutions (2024 – 2028)
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-600 font-bold">8.38 CGPA</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalData.location}
              </span>
            </div>

            {/* Narrative Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
              {personalData.description}
            </p>

            {/* Floating Technical Labels */}
            <div className="flex flex-wrap gap-2 pt-1">
              {personalData.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold text-slate-700 bg-white/90 border border-slate-200/90 shadow-xs hover:border-blue-500/40 hover:text-blue-600 transition-all"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Explore Systems Primary CTA */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] cursor-pointer"
              >
                <span>EXPLORE SYSTEMS</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* View GitHub */}
              <a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold transition-all shadow-xs"
              >
                <GitHubIcon className="w-4 h-4 text-slate-700" />
                <span>VIEW GITHUB</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* Download Resume */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-50 hover:bg-violet-100 border border-violet-200 text-violet-700 text-sm font-semibold transition-all shadow-xs cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-violet-600" />
                <span>DOWNLOAD RESUME</span>
              </button>

              {/* Contact */}
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold transition-all shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>CONTACT</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D PRATEEK_CORE + Futuristic Identity Frame with Real Photo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            {/* 3D Interactive AI Core Canvas */}
            <div className="w-full h-72 sm:h-80 relative rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200/80 shadow-md overflow-hidden">
              <AiCoreCanvas
                onSelectProject={handleSelectSatelliteProject}
                onOverrideTrigger={onOverrideTrigger}
              />
            </div>

            {/* Futuristic Transparent Identity Panel with Real Photo */}
            <div className="w-full max-w-sm rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-md p-4 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pb-2 border-b border-slate-200/60">
                <span className="flex items-center gap-1.5 font-semibold text-blue-600">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  IDENTITY // BIOMETRIC NODE
                </span>
                <span>SEC_AUTH: 0x9B75</span>
              </div>

              <div className="flex items-center gap-4">
                {/* Photo Frame Container */}
                <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-slate-100 border border-slate-300 shrink-0 shadow-inner">
                  {!imageError ? (
                    <Image
                      src="/profile.jpg"
                      alt="Prateek Baliyan"
                      fill
                      priority
                      sizes="(max-width: 640px) 96px, 120px"
                      className="object-cover object-top"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50 text-blue-700 font-mono font-bold text-lg">
                      PB
                    </div>
                  )}
                </div>

                {/* Identity Metadata Labels */}
                <div className="space-y-1.5 font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      IDENTITY
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {personalData.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      ROLE
                    </span>
                    <span className="text-blue-700 font-semibold text-[11px]">
                      AI / ML ENGINEER
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      STATUS
                    </span>
                    <span className="text-emerald-600 font-medium text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      BUILDING INTELLIGENT SYSTEMS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
