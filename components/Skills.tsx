"use client";

import { useState } from "react";
import { skillCategoryGroups, SkillItem } from "@/data/skills";
import { majorProjects } from "@/data/projects";
import {
  Code,
  Brain,
  Eye,
  Layout,
  Server,
  Database,
  TrendingUp,
  Cpu,
  Wrench,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import Link from "next/link";

const categoryIconMap: Record<string, any> = {
  LANGUAGES: Code,
  "AI / ML": Brain,
  "COMPUTER VISION": Eye,
  FRONTEND: Layout,
  BACKEND: Server,
  DATABASE: Database,
  QUANT: TrendingUp,
  "CORE CS": Cpu,
  TOOLS: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const allCategories = ["ALL", ...skillCategoryGroups.map((g) => g.category)];

  const displayedGroups =
    activeCategory === "ALL"
      ? skillCategoryGroups
      : skillCategoryGroups.filter((g) => g.category === activeCategory);

  // Helper to resolve project titles from slugs
  const getProjectTitles = (slugs: string[]) => {
    return slugs
      .map((slug) => majorProjects.find((p) => p.slug === slug)?.title)
      .filter(Boolean) as string[];
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
              <Layers className="w-3.5 h-3.5" />
              <span>03 // CONSTELLATION & FOUNDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Technology Constellation &amp; Engineering Stack
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 max-w-md">
            Interactive technology graph. Hover any node to trace production-grade
            architectural implementations across flagship systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active Node Live HUD */}
        <div className="min-h-[52px] p-3 px-4 rounded-xl bg-white border border-blue-200 shadow-xs flex items-center justify-between transition-all">
          {hoveredSkill ? (
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="font-bold text-blue-700">
                NODE: {hoveredSkill.name} [{hoveredSkill.category}]
              </span>
              {hoveredSkill.usedInProjects.length > 0 ? (
                <div className="flex items-center gap-2 text-slate-600">
                  <span>→ Implemented in:</span>
                  <div className="flex items-center gap-1.5">
                    {getProjectTitles(hoveredSkill.usedInProjects).map((title) => (
                      <span
                        key={title}
                        className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[11px] font-semibold"
                      >
                        {title}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <span className="text-slate-400">
                  Fundamental engineering competency
                </span>
              )}
            </div>
          ) : (
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Hover any technology node to inspect connected project architectures
            </div>
          )}
        </div>

        {/* Skills Constellation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map((group) => {
            const Icon = categoryIconMap[group.category] || Code;
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-xs font-bold text-slate-900 tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {group.tag}
                  </span>
                </div>

                {/* Node Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isHovered = hoveredSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all text-left cursor-default ${
                          isHovered
                            ? "bg-blue-600 text-white shadow-xs scale-105"
                            : "bg-slate-50 hover:bg-blue-50/80 text-slate-700 border border-slate-200/80"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            skill.usedInProjects.length > 0
                              ? "bg-blue-500"
                              : "bg-slate-400"
                          }`}
                        />
                        <span>{skill.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Section: ENGINEERING FOUNDATIONS & 182+ LEETCODE */}
        <div className="p-8 rounded-2xl bg-white border border-blue-200 shadow-md space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>ENGINEERING FOUNDATIONS</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-sans">
                Computer Science Fundamentals &amp; Algorithmic Rigor
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl font-sans">
                Rigorous grounding in low-level systems, theoretical computer science,
                and scalable data structure optimization.
              </p>
            </div>

            {/* LeetCode Solved Pill */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center md:text-right shrink-0">
              <div className="text-3xl font-extrabold font-mono text-blue-700">
                182+
              </div>
              <div className="text-xs font-mono font-semibold text-slate-700">
                LeetCode Problems Solved in C++
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                Two Pointers • Trees • Graphs • DP
              </div>
            </div>
          </div>

          {/* 5 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Data Structures & Algorithms",
                detail: "Algorithmic complexity, dynamic programming, tree traversals, and amortized bounds.",
                badge: "C++ Rigor",
              },
              {
                title: "Object-Oriented Programming",
                detail: "Polymorphism, abstraction, solid design patterns, modular architecture.",
                badge: "OOP",
              },
              {
                title: "Database Management Systems",
                detail: "ACID guarantees, indexing strategies, relational schema design, caching layers.",
                badge: "DBMS",
              },
              {
                title: "Operating Systems",
                detail: "Process scheduling, multithreading, concurrency locks, virtual memory management.",
                badge: "Kernel & OS",
              },
              {
                title: "Computer Networks",
                detail: "OSI stack, TCP/IP sockets, WebSockets, TLS handshake, cryptographic protocols.",
                badge: "Sockets & Protocols",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-blue-700 border border-slate-200">
                    {pillar.badge}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 font-sans mt-2">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Algorithmic Flow Visualizer Simulation */}
          <div className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs space-y-2 overflow-x-auto">
            <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-blue-400">
                <GitBranch className="w-3.5 h-3.5" />
                Algorithm Flow Telemetry [C++ DSA Engine]
              </span>
              <span>182 Verified Solutions</span>
            </div>
            <div className="text-[11px] text-emerald-400">
              [Binary Search Tree &amp; Graph Traversal]: root(0x7F) → left(0x3B) → right(0x9E) • Depth-First Order Locked
            </div>
            <div className="text-[11px] text-slate-400">
              Memory: O(1) Auxiliary Space • Optimal Time Bound: O(N log N) • Zero Memory Leaks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
