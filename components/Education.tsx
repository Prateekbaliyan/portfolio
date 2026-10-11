"use client";

import { educationData } from "@/data/education";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 // ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            Education &amp; Scholastic History
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 shadow-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                    {edu.institution}
                  </h3>
                  {edu.location && (
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {edu.location}
                    </span>
                  )}
                </div>

                <div className="text-sm sm:text-base font-semibold text-blue-700 font-sans">
                  {edu.degree} {edu.field ? `— ${edu.field}` : ""}
                </div>

                {edu.description && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pt-1">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="flex md:flex-col items-start md:items-end justify-between md:justify-center gap-2 border-t md:border-t-0 pt-4 md:pt-0 border-slate-200 shrink-0">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white text-slate-700 border border-slate-200">
                  {edu.period}
                </span>

                <div className="text-right">
                  <div className="text-2xl font-mono font-extrabold text-slate-900">
                    {edu.score}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 font-medium">
                    {edu.scoreLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
