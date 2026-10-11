import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { majorProjects } from "@/data/projects";
import ProjectVisualPreview from "@/components/ProjectVisualPreview";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  Calendar,
  Terminal,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return majorProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = majorProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | PRATEEK // AI LAB System Architecture`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = majorProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative selection:bg-blue-600/15">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-lab-grid opacity-70 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Navigation Bar Back Link */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Return to AI Lab Systems</span>
          </Link>

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold">
            SYSTEM // {project.number}
          </span>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">
              Released: {project.year}
            </span>
            {project.featured && (
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-600" /> Flagship Production System
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-sans">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-bold text-slate-700 font-sans">
            {project.subtitle}
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold transition-all shadow-xs"
          >
            <GitHubIcon className="w-4 h-4 text-slate-700" />
            <span>Source Code Repository</span>
          </a>
        </div>

        {/* Visual Live Telemetry / Preview Frame */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <ProjectVisualPreview
            id={project.id}
            title={project.title}
            category={project.category}
            themeColor={project.themeColor}
            image={project.image}
          />
        </div>

        {/* Architectural Abstract */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Architectural Abstract</span>
          </div>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
            {project.fullOverview || project.description}
          </p>
        </div>

        {/* Architecture Details */}
        {project.architectureDetails && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-cyan-600" />
              <span>Multi-Stage Pipeline Implementation</span>
            </div>

            <ul className="grid grid-cols-1 gap-3">
              {project.architectureDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 font-sans"
                >
                  <span className="font-mono text-blue-600 font-bold shrink-0">
                    [{idx + 1}]
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Resume-Style Highlights */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-700 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-violet-600" />
            <span>Production Metrics &amp; Resume Highlights</span>
          </div>

          <ul className="space-y-3">
            {project.resumeBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed font-sans"
              >
                <span className="text-blue-600 font-bold shrink-0 mt-0.5">
                  ▹
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Technical Capabilities */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Key Technical Capabilities
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat) => (
              <div
                key={feat}
                className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Technology Stack */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Full Technology Stack
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-50 text-slate-700 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-sm font-semibold transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to AI Lab Overview</span>
          </Link>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-blue-600 hover:text-blue-700 font-bold transition-colors"
            >
              <span>Visit Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
