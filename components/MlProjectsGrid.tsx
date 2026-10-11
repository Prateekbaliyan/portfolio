"use client";

import { mlSubProjects } from "@/data/projects";
import { Brain } from "lucide-react";

export default function MlProjectsGrid() {
  const coreCompetencies = [
    "Data Preprocessing",
    "Feature Engineering",
    "Exploratory Data Analysis (EDA)",
    "Classification",
    "Regression",
    "Clustering",
    "Model Evaluation",
    "Statistical Visualization",
  ];

  const mlStack = [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
  ];

  return (
    <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-8">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 mb-2">
            <Brain className="w-3.5 h-3.5 text-cyan-600" />
            <span>APPLIED MACHINE LEARNING LAB</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
            Machine Learning &amp; Statistical Modeling
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl font-sans">
            Empirical machine learning implementations covering end-to-end data
            pipelines, cross-validation, and predictive analytics.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 md:justify-end">
          {mlStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white text-slate-700 border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Core Competencies Badges */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
          ML Pipeline Methodologies:
        </span>
        <div className="flex flex-wrap gap-2">
          {coreCompetencies.map((comp) => (
            <span
              key={comp}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white text-cyan-800 border border-cyan-200 shadow-2xs"
            >
              ✓ {comp}
            </span>
          ))}
        </div>
      </div>

      {/* Sub-projects 5-card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        {mlSubProjects.map((sub) => (
          <div
            key={sub.title}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200">
                  {sub.type}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Scikit-learn
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 font-sans tracking-tight">
                {sub.title}
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-sans">
                {sub.description}
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <div className="flex flex-wrap gap-1">
                {sub.focus.map((f) => (
                  <span
                    key={f}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/60"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
