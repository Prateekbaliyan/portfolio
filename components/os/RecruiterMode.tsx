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
  MapPin,
  AppWindow,
  CheckCircle2,
  Layers,
  GraduationCap,
  Award,
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
                ATS-Optimized & Recruiter Fast-Review (&lt; 30 Seconds)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition hover:scale-102 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition cursor-pointer"
            >
              <AppWindow className="w-3.5 h-3.5" />
              <span>Return to OS</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
              aria-label="Close Recruiter Mode"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-200 px-6 bg-white gap-2 py-2">
          {[
            { id: "overview", label: "Overview & Credentials" },
            { id: "projects", label: "Production Projects (06)" },
            { id: "skills", label: "Technical Stack & Foundations" },
            { id: "experience", label: "Experience & Focus" },
            { id: "education", label: "Education (8.38 CGPA)" },
            { id: "contact", label: "Direct Channels" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Identity Banner */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50 border border-blue-100 flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-blue-200 shadow-md shrink-0 bg-white">
                  <Image
                    src="/profile.jpg"
                    alt={personalData.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="space-y-2 text-center md:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h3 className="text-2xl font-black text-slate-900">
                      {personalData.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800">
                      Available for SWE / AI Roles
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 font-mono">
                    {personalData.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {personalData.description}
                  </p>
                </div>
              </div>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase block">Undergraduate CGPA</span>
                  <span className="text-2xl font-black text-blue-600 mt-1 block">8.38 / 10.0</span>
                  <span className="text-[11px] text-slate-500">KIET (2024–2028)</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase block">LeetCode Rigor</span>
                  <span className="text-2xl font-black text-amber-600 mt-1 block">182+ Solved</span>
                  <span className="text-[11px] text-slate-500">C++ Algorithmic</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase block">Certification</span>
                  <span className="text-sm font-black text-slate-900 mt-1 block leading-snug">
                    AWS Cloud Practitioner
                  </span>
                  <span className="text-[11px] text-slate-500">Amazon Web Services</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase block">High School Board</span>
                  <span className="text-2xl font-black text-emerald-600 mt-1 block">94.6%</span>
                  <span className="text-[11px] text-slate-500">Class XII Science</span>
                </div>
              </div>

              {/* Verified Achievements */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  Key Verified Milestones
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {achievementsData.map((ach) => (
                    <div
                      key={ach.title}
                      className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1"
                    >
                      <span className="text-xs font-mono font-bold text-slate-400">{ach.badge || ach.category}</span>
                      <h5 className="font-bold text-slate-900 text-sm">{ach.title}</h5>
                      <p className="text-xs text-slate-600">{ach.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROJECTS */}
          {activeTab === "projects" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {majorProjects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition shadow-2xs space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            PRIORITY #{idx + 1}
                          </span>
                          <span className="text-xs font-mono text-slate-500 uppercase">
                            {proj.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900 mt-0.5">
                          {proj.title}
                        </h4>
                        <p className="text-xs font-mono text-slate-600">{proj.subtitle}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        {proj.liveDemoUrl && (
                          <a
                            href={proj.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition"
                          >
                            <span>Live System</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition"
                          >
                            <GitHubIcon className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block">
                        Architecture Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {proj.keyFeatures.map((h, i) => (
                          <div
                            key={i}
                            className="text-xs text-slate-600 flex items-start gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SKILLS */}
          {activeTab === "skills" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategoryGroups.map((group) => (
                  <div
                    key={group.category}
                    className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-2xs"
                  >
                    <h4 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              {experienceData.map((exp, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-2xs"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{exp.role}</h4>
                      <div className="text-xs font-mono text-blue-600">{exp.type} • {exp.location}</div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{exp.summary}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: EDUCATION */}
          {activeTab === "education" && (
            <div className="space-y-4">
              {educationData.map((edu, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-2xs"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{edu.degree}</h4>
                      <div className="text-xs font-mono text-slate-600">{edu.institution}, {edu.location}</div>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {edu.score}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: CONTACT */}
          {activeTab === "contact" && (
            <div className="space-y-4 max-w-xl mx-auto text-center py-6">
              <div className="w-16 h-16 rounded-3xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Direct Contact Channels</h3>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Actively considering internships & software engineering roles
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-mono font-bold text-slate-800">
                {personalData.email}
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <a
                  href={personalData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0077b5] text-white font-bold text-xs"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalData.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFA116] text-slate-950 font-bold text-xs"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
