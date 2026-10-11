"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import ProjectVisualPreview from "./ProjectVisualPreview";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  isHeroFeatured?: boolean;
}

export default function ProjectCard({
  project,
  isHeroFeatured = false,
}: ProjectCardProps) {
  const isTopThree = project.priority <= 3;
  const isVeriStream = project.id === "veristream";

  return (
    <article
      className={`relative group rounded-3xl transition-all duration-300 ${
        isVeriStream
          ? "p-6 sm:p-8 lg:p-10 bg-white border-2 border-emerald-500/50 hover:border-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.08)]"
          : isTopThree
          ? "p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-blue-300 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)]"
          : "p-6 bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Content Side */}
        <div
          className={`${
            isTopThree ? "lg:col-span-7" : "lg:col-span-12"
          } flex flex-col justify-between space-y-6`}
        >
          {/* Header Row: Number, Category, Featured Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                SYSTEM // {project.number}
              </span>
              <span className="text-xs font-mono font-medium text-slate-500">
                {project.category}
              </span>
            </div>

            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                FLAGSHIP SYSTEM
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1.5">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 group-hover:text-blue-600 transition-colors"
            >
              <h3
                className={`font-extrabold tracking-tight text-slate-900 font-sans ${
                  isVeriStream
                    ? "text-2xl sm:text-3xl md:text-4xl"
                    : isTopThree
                    ? "text-xl sm:text-2xl md:text-3xl"
                    : "text-xl sm:text-2xl"
                }`}
              >
                {project.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <p className="text-sm sm:text-base font-semibold text-slate-700">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Resume Highlights for Top Flagship Projects */}
          {isTopThree && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-bold">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                Technical Highlights &amp; Architecture
              </span>
              <ul className="space-y-2">
                {project.resumeBullets.slice(0, 3).map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans"
                  >
                    <span className="text-blue-600 mt-1 shrink-0 font-bold">
                      ▹
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium text-slate-700 bg-slate-50 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
            {/* Live Demo Button (Only if available) */}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* GitHub Repository */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-all shadow-xs"
            >
              <GitHubIcon className="w-4 h-4 text-slate-700" />
              <span>Source Code</span>
            </a>

            {/* Dynamic Route Detail Link */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-600 hover:text-blue-600 text-xs sm:text-sm font-semibold transition-colors ml-auto"
            >
              <span>Explore Environment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Visual Preview Side (Right 5 cols on top 3 projects) */}
        {isTopThree && (
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <Link
              href={`/projects/${project.slug}`}
              className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              title={`View ${project.title} Architecture`}
            >
              <ProjectVisualPreview
                id={project.id}
                title={project.title}
                category={project.category}
                themeColor={project.themeColor}
                image={project.image}
              />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
