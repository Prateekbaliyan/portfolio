"use client";

import { useState } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { majorProjects, mlSubProjects } from "@/data/projects";
import { skillCategoryGroups } from "@/data/skills";
import { educationData } from "@/data/education";
import { achievementsData } from "@/data/achievements";
import { experienceData } from "@/data/experience";
import {
  X,
  ExternalLink,
  FileDown,
  Mail,
  Phone,
  MapPin,
  Gamepad2,
  CheckCircle2,
  Layers,
  GraduationCap,
  Award,
  Terminal,
  Cpu,
  Brain,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";

interface RecruiterModeProps {
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export default function RecruiterMode({
  onClose,
  onOpenResumeModal,
}: RecruiterModeProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "projects" | "skills" | "experience" | "education" | "contact"
  >("overview");

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-200 p-3 sm:p-6 flex items-center justify-center font-sans"
    >
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white font-mono text-xs font-bold tracking-wider">
              RECRUITER MODE
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Prateek Baliyan • Professional Summary
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                AI / ML Engineer &amp; Full-Stack Developer • KIET CSE (AI) 2024–2028
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer"
              title="Return to 3D Game"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Back to Game</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 py-2 border-b border-slate-100 bg-white overflow-x-auto no-scrollbar">
          {[
            { id: "overview", label: "Executive Overview" },
            { id: "projects", label: "Production Projects (06)" },
            { id: "skills", label: "Technical Stack & Foundations" },
            { id: "experience", label: "Self-Directed Experience" },
            { id: "education", label: "Education & Credentials" },
            { id: "contact", label: "Contact & Links" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-700 font-bold border border-blue-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* 1. OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-24 rounded-2xl overflow-hidden bg-slate-200 border border-slate-300 shrink-0 shadow-sm">
                    <Image
                      src="/profile.jpg"
                      alt="Prateek Baliyan"
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {personalData.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold">
                        AVAILABLE FOR INTERNSHIPS
                      </span>
                    </div>
                    <p className="text-xs font-mono font-semibold text-blue-700">
                      {personalData.title}
                    </p>
                    <p className="text-xs text-slate-500 font-mono">
                      B.Tech CSE (AI) • KIET Group of Institutions (2024–2028) • CGPA: 8.38
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={personalData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    title="GitHub"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-100"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalData.social.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-amber-600 hover:bg-slate-100"
                    title="LeetCode (182+ Solved)"
                  >
                    <LeetCodeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Current CGPA", val: "8.38", sub: "KIET CSE (AI)" },
                  { label: "LeetCode Solved", val: "182+", sub: "C++ Data Structures" },
                  { label: "Production Systems", val: "06", sub: "CV, Forensics, Quant" },
                  { label: "Certification", val: "AWS", sub: "Certified Cloud Practitioner" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs"
                  >
                    <div className="text-2xl font-extrabold font-mono text-blue-700">
                      {s.val}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-1">
                      {s.label}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Paragraph */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                  Professional Statement
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  I&apos;m a Computer Science &amp; Engineering (Artificial Intelligence) undergraduate building production-oriented AI systems, computer vision pipelines, real-time data platforms, and full-stack software. My technical interests span machine learning, forensics tampering detection, quantitative market microstructure, and high-throughput systems.
                </p>
              </div>
            </div>
          )}

          {/* 2. PROJECTS TAB */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              {majorProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                          {p.number}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900">
                          {p.title}
                        </h4>
                        {p.featured && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                            FLAGSHIP
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5">
                        {p.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {p.liveDemoUrl && (
                        <a
                          href={p.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200"
                      >
                        <GitHubIcon className="w-3 h-3 text-slate-700" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {p.resumeBullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span className="text-blue-600 font-bold shrink-0">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 text-slate-600 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* ML Grid Summary */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 font-mono">
                  Applied Machine Learning Lab Models
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {mlSubProjects.map((m) => (
                    <div
                      key={m.title}
                      className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1"
                    >
                      <div className="font-bold text-slate-900">{m.title}</div>
                      <div className="text-[10px] font-mono text-blue-600">
                        {m.type}
                      </div>
                      <p className="text-[11px] text-slate-600">{m.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. SKILLS TAB */}
          {activeTab === "skills" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skillCategoryGroups.map((g) => (
                  <div
                    key={g.category}
                    className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold text-slate-900">
                        {g.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {g.tag}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {g.skills.map((s) => (
                        <span
                          key={s.name}
                          className="px-2 py-1 rounded-md text-xs font-mono bg-slate-50 border border-slate-200 text-slate-700"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Engineering Foundations Pill */}
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-800">
                    CORE CS &amp; ALGORITHMIC RIGOR
                  </span>
                  <span className="font-mono text-xs font-extrabold text-blue-700">
                    182+ LeetCode Solved in C++
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono text-slate-700">
                  <div className="p-2 rounded bg-white border border-blue-200 text-center">
                    Data Structures &amp; Algorithms
                  </div>
                  <div className="p-2 rounded bg-white border border-blue-200 text-center">
                    Object-Oriented Programming
                  </div>
                  <div className="p-2 rounded bg-white border border-blue-200 text-center">
                    Database Management (DBMS)
                  </div>
                  <div className="p-2 rounded bg-white border border-blue-200 text-center">
                    Operating Systems
                  </div>
                  <div className="p-2 rounded bg-white border border-blue-200 text-center">
                    Computer Networks
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. EXPERIENCE TAB */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              {experienceData.map((e, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {e.role}
                      </h4>
                      <p className="text-xs font-mono text-blue-700 font-semibold">
                        {e.type} • {e.location}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 font-mono text-xs text-slate-700 font-semibold">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{e.summary}</p>
                  <ul className="space-y-2">
                    {e.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                      >
                        <span className="text-blue-600 font-bold shrink-0">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 5. EDUCATION TAB */}
          {activeTab === "education" && (
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900">
                      {edu.institution}
                    </h4>
                    <p className="text-xs text-blue-700 font-semibold font-mono">
                      {edu.degree} {edu.field ? `— ${edu.field}` : ""}
                    </p>
                    {edu.description && (
                      <p className="text-xs text-slate-500 pt-1">
                        {edu.description}
                      </p>
                    )}
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="text-xs font-mono text-slate-500">
                      {edu.period}
                    </span>
                    <div className="text-xl font-bold font-mono text-slate-900">
                      {edu.score}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {edu.scoreLabel}
                    </div>
                  </div>
                </div>
              ))}

              {/* Achievements row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {achievementsData.map((a, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <div className="text-xl font-bold font-mono text-blue-700">
                      {a.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      {a.subtitle}
                    </div>
                    <p className="text-[11px] text-slate-500">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. CONTACT TAB */}
          {activeTab === "contact" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-base font-bold font-mono text-blue-700 block hover:underline"
                  >
                    {personalData.email}
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1">
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-base font-bold font-mono text-slate-900 block"
                  >
                    +91 {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personalData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center font-mono text-xs font-bold text-slate-800 flex items-center justify-center gap-2"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={personalData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center font-mono text-xs font-bold text-blue-700 flex items-center justify-center gap-2"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalData.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center font-mono text-xs font-bold text-amber-600 flex items-center justify-center gap-2"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                  <span>LeetCode Profile</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
