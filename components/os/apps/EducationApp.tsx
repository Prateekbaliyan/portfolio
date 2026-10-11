"use client";

import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/education";

export default function EducationApp() {
  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            ACADEMIC RECORD // VERIFIED
          </div>
          <h2 className="text-2xl font-black text-slate-900">Education & Scholastic History</h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            B.Tech in Artificial Intelligence & High School Board Aggregates
          </p>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="space-y-4">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">{item.institution}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono text-xs font-semibold">
                  {item.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
                  {item.score}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-slate-800 text-sm">{item.degree}</h4>
              {item.field && <div className="text-xs text-blue-600 font-mono">{item.field}</div>}
              {item.description && <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
