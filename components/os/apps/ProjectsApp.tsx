"use client";

import { majorProjects, mlSubProjects } from "@/data/projects";
import { AppId } from "@/types/os";
import {
  ExternalLink,
  FolderGit2,
  Terminal,
  ShieldCheck,
  FileCheck2,
  TrendingUp,
  Cpu,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface ProjectsAppProps {
  onLaunchApp: (appId: AppId) => void;
}

export default function ProjectsApp({ onLaunchApp }: ProjectsAppProps) {
  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-5xl mx-auto">
      {/* File Explorer Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            FILE SYSTEM: /SYSTEM/APPLICATIONS/PROJECTS
          </div>
          <h2 className="text-2xl font-black text-slate-900">Installed Production Applications</h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            06 Production Systems // Click OPEN to launch interactive OS sub-window
          </p>
        </div>
      </div>

      {/* Primary Flagship Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {majorProjects.map((project, idx) => {
          let targetAppId: AppId | null = null;
          if (project.id === "veristream") targetAppId = "veristream";
          if (project.id === "docuaudit") targetAppId = "docuaudit";
          if (project.id === "liquiditypulse") targetAppId = "liquiditypulse";

          return (
            <div
              key={project.id}
              className={`p-5 rounded-3xl border transition-all duration-200 space-y-4 ${
                idx === 0
                  ? "bg-gradient-to-br from-white via-blue-50/30 to-white border-blue-300 shadow-md md:col-span-2"
                  : "bg-white border-slate-200/90 shadow-2xs hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      0{idx + 1}.exe
                    </span>
                    <span className="text-xs font-mono text-blue-600 font-bold uppercase">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{project.title}</h3>
                  <p className="text-xs font-mono text-slate-500">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                {targetAppId && (
                  <button
                    onClick={() => onLaunchApp(targetAppId!)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition hover:scale-102 cursor-pointer"
                  >
                    <span>OPEN PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition"
                  >
                    <span>LIVE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Applied ML District Section */}
      <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="font-bold text-slate-900 text-sm">Applied Machine Learning Research District</h4>
            <p className="text-xs text-slate-500 font-mono">
              Classical ML, Ensemble Trees, Regression & Clustering Projects
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-mono font-bold">
            05 Models
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {mlSubProjects.map((ml) => (
            <div
              key={ml.title}
              className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2"
            >
              <span className="text-xs font-bold text-slate-900 block">{ml.title}</span>
              <p className="text-[11px] text-slate-600 line-clamp-2">{ml.description}</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {ml.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
