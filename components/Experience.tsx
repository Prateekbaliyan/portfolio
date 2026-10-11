"use client";

import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            Experience &amp; Engineering Learning
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 shadow-xs transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 font-sans">{exp.summary}</p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1.5 text-xs font-mono text-slate-500 shrink-0">
                  <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Resume-aligned authentic bullets */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-sans"
                  >
                    <span className="text-blue-600 font-bold mt-1 text-base shrink-0">
                      ▹
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technical tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white text-slate-700 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
