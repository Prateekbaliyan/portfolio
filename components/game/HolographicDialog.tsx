"use client";

import Image from "next/image";
import { InteractiveObject } from "@/types/game";
import { majorProjects, mlSubProjects } from "@/data/projects";
import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";
import { achievementsData } from "@/data/achievements";
import ProjectVisualPreview from "@/components/ProjectVisualPreview";
import {
  X,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  Brain,
  GraduationCap,
  Award,
  CheckCircle2,
  FileDown,
  Mail,
  MapPin,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from "@/components/Icons";

interface HolographicDialogProps {
  object: InteractiveObject;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export default function HolographicDialog({
  object,
  onClose,
  onOpenResumeModal,
}: HolographicDialogProps) {
  // Check if object matches a major project
  const project = majorProjects.find(
    (p) =>
      p.id === object.type ||
      p.slug === object.type ||
      (object.type === "veristream" && p.id === "veristream") ||
      (object.type === "docuaudit" && p.id === "docuaudit") ||
      (object.type === "liquiditypulse" && p.id === "liquiditypulse") ||
      (object.type === "tracker" && p.id === "ai-productivity-tracker") ||
      (object.type === "location" && p.id === "location-intelligence")
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 font-sans"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Holographic Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono text-xs font-bold text-blue-700 tracking-wider">
              PRATEEKVERSE // TELEMETRY TERMINAL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* 1. MAJOR PROJECT INTERACTION (VeriStream, DocuAudit, LiquidityPulse, Tracker, Location) */}
          {project && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                      {project.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold">
                        FLAGSHIP SYSTEM
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs"
                    >
                      <span>VIEW LIVE PROJECT</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs"
                  >
                    <GitHubIcon className="w-3.5 h-3.5 text-slate-700" />
                    <span>VIEW GITHUB</span>
                  </a>
                </div>
              </div>

              {/* 3D / Live Telemetry Visualizer Frame */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
                <ProjectVisualPreview
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  themeColor={project.themeColor}
                  image={project.image}
                />
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.fullOverview || project.description}
              </p>

              {/* Engineering Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-mono font-bold uppercase text-slate-500">
                  Engineering Highlights &amp; Telemetry:
                </span>
                <ul className="space-y-2">
                  {project.resumeBullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-sans"
                    >
                      <span className="text-blue-600 font-bold shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 2. DEVELOPER CITY PROFILE TERMINAL */}
          {object.type === "profile" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {personalData.name}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-blue-700">
                    {personalData.title}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">CGPA</span>
                  <span className="text-lg font-bold text-blue-700">8.38</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">LEETCODE</span>
                  <span className="text-lg font-bold text-emerald-600">182+</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">COLLEGE</span>
                  <span className="text-xs font-bold text-slate-900">KIET (2024-2028)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">CLOUD</span>
                  <span className="text-xs font-bold text-violet-700">AWS Certified</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                &ldquo;I build intelligent systems, AI-powered applications and full-stack products with a focus on machine learning, computer vision, data and scalable software.&rdquo;
              </p>
            </div>
          )}

          {/* 3. BIOMETRIC IDENTITY FRAME WITH REAL PHOTO */}
          {object.type === "photo_card" && (
            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="relative w-36 h-44 rounded-2xl overflow-hidden bg-slate-200 border-2 border-blue-500/50 shadow-md shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Prateek Baliyan"
                  fill
                  sizes="180px"
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-3 font-mono text-xs">
                <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                  BIOMETRIC IDENTITY PASS
                </span>
                <div className="space-y-1">
                  <div className="text-lg font-extrabold text-slate-900 font-sans">
                    PRATEEK BALIYAN
                  </div>
                  <div className="text-xs text-blue-700 font-semibold">
                    ROLE: AI / ML ENGINEER &amp; FULL-STACK DEVELOPER
                  </div>
                  <div className="text-xs text-slate-500">
                    B.Tech CSE (AI) • KIET Group of Institutions, Ghaziabad (2024–2028)
                  </div>
                  <div className="text-xs text-emerald-600 font-bold pt-1">
                    STATUS: BUILDING INTELLIGENT SYSTEMS • CGPA: 8.38
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. AI CORE MODULES */}
          {object.type === "ai_core" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-200">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    AI Core Intelligence Modules
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    Select a sub-system to review verified pipelines and implementations.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-blue-700">
                    MACHINE LEARNING
                  </span>
                  <p className="text-xs text-slate-600">
                    Python, NumPy, Pandas, Scikit-learn, Regression, Classification, Clustering, Data Preprocessing, Model Evaluation.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-cyan-700">
                    COMPUTER VISION
                  </span>
                  <p className="text-xs text-slate-600">
                    OpenCV, Image Processing, Facial Analysis, Feature Extraction, Remote Photoplethysmography (rPPG).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-mono font-bold text-violet-700">
                    DATA &amp; ANALYTICS
                  </span>
                  <p className="text-xs text-slate-600">
                    Pandas, NumPy, Statistical Visualization, Exploratory Data Analysis, Outlier Filtering.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. APPLIED ML RESEARCH STATIONS */}
          {object.type === "ml_lab" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-mono">
                Applied Machine Learning Models
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mlSubProjects.map((m) => (
                  <div
                    key={m.title}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{m.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        {m.type}
                      </span>
                    </div>
                    <p className="text-slate-600">{m.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {m.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. ACADEMY CREDENTIALS */}
          {object.type === "academy" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-sans">
                    Academic Timeline &amp; Credentials
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    Verified Scholastic Records
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {educationData.map((e, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        {e.institution}
                      </div>
                      <div className="text-xs text-blue-700 font-mono">
                        {e.degree} {e.field ? `— ${e.field}` : ""}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-extrabold font-mono text-slate-900">
                        {e.score}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">
                        {e.scoreLabel} ({e.period})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. ACHIEVEMENT OBELISK */}
          {object.type === "achievements" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-pink-50 text-pink-600 border border-pink-200">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-sans">
                    Verified Achievements &amp; Problem Solving
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    182+ LeetCode Solutions &amp; AWS Cloud Certification
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {achievementsData.map((a, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <div className="text-2xl font-bold font-mono text-blue-700">
                      {a.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      {a.subtitle}
                    </div>
                    <p className="text-[11px] text-slate-600">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. CONNECTION TERMINAL & RESUME */}
          {object.type === "contact" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Let&apos;s Build Something Intelligent.
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  Open to software engineering, AI/ML, full-stack, and quant engineering internship opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">EMAIL</span>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm font-bold text-blue-700 hover:underline"
                  >
                    {personalData.email}
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">PHONE</span>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-sm font-bold text-slate-900"
                  >
                    +91 {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={onOpenResumeModal}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </button>
                <a
                  href={personalData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs inline-flex items-center gap-1.5 border border-slate-200"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-blue-700 font-semibold text-xs inline-flex items-center gap-1.5 border border-slate-200"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalData.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-amber-600 font-semibold text-xs inline-flex items-center gap-1.5 border border-slate-200"
                >
                  <LeetCodeIcon className="w-3.5 h-3.5" />
                  <span>LeetCode (182+)</span>
                </a>
              </div>
            </div>
          )}

          {/* Direct link helpers */}
          {object.type === "github" && (
            <div className="text-center space-y-4 py-4">
              <h3 className="text-xl font-bold text-slate-900">GitHub Profile</h3>
              <p className="text-xs text-slate-500 font-mono">
                Explore open-source repositories and code architectures.
              </p>
              <a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold shadow-md"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>OPEN GITHUB IN NEW TAB</span>
              </a>
            </div>
          )}

          {object.type === "linkedin" && (
            <div className="text-center space-y-4 py-4">
              <h3 className="text-xl font-bold text-slate-900">LinkedIn Profile</h3>
              <p className="text-xs text-slate-500 font-mono">
                Connect for internship discussions and professional networking.
              </p>
              <a
                href={personalData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold shadow-md"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>OPEN LINKEDIN IN NEW TAB</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
