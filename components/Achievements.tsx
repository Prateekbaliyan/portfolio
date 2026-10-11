"use client";

import { achievementsData } from "@/data/achievements";
import { Code2, GraduationCap, Award, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, any> = {
  Code2: Code2,
  GraduationCap: GraduationCap,
  Award: Award,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
            <Award className="w-3.5 h-3.5" />
            <span>05 // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            Certifications &amp; Problem Solving
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </div>

        {/* Verified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Award;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-base font-bold text-slate-800 mt-1 font-sans">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
