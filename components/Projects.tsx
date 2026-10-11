"use client";

import { majorProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import MlProjectsGrid from "./MlProjectsGrid";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
  const sortedProjects = [...majorProjects].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>02 // FLAGSHIP SYSTEM WORLDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Production AI &amp; Software Systems
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 rounded-full" />
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-md">
            Interactive system worlds spanning real-time deepfake detection,
            digital document forensics, and high-frequency quantitative market microstructure.
          </p>
        </div>

        {/* Major Projects Stack */}
        <div className="space-y-10">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Applied Machine Learning Grid */}
        <MlProjectsGrid />
      </div>
    </section>
  );
}
