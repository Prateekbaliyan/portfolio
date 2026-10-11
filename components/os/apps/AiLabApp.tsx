"use client";

import { useState } from "react";
import {
  Brain,
  Cpu,
  Layers,
  Database,
  Terminal,
  Code2,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function AiLabApp() {
  const [selectedCluster, setSelectedCluster] = useState<string>("ai");

  const clusters = [
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
      description: "Classical statistical modeling, neural representations, and computer vision pipelines.",
      technologies: [
        "Machine Learning",
        "Computer Vision",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "OpenCV",
        "Regression & Classification",
        "Clustering (DBSCAN / K-Means)",
        "Feature Engineering",
        "Model Evaluation",
      ],
    },
    {
      id: "languages",
      title: "Languages & Runtimes",
      icon: Code2,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      description: "Low-level algorithmic implementation, systems development, and full-stack scripting.",
      technologies: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      id: "backend",
      title: "Backend & Systems",
      icon: Terminal,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description: "High-throughput asynchronous microservices, WebSocket channels, and API architectures.",
      technologies: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "JWT Authentication",
        "ReportLab",
      ],
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: Layers,
      color: "text-violet-600 bg-violet-50 border-violet-200",
      description: "Production web architectures, responsive interfaces, and interactive 3D simulations.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "TradingView Lightweight Charts",
      ],
    },
    {
      id: "database",
      title: "Databases & In-Memory Cache",
      icon: Database,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      description: "Relational modeling, document stores, and distributed sub-millisecond caching.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Schema Indexing"],
    },
    {
      id: "corecs",
      title: "Core Computer Science",
      icon: Cpu,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      description: "Fundamental principles governing efficient computation, concurrency, and architecture.",
      technologies: [
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems (OS)",
        "Computer Networks (CN)",
      ],
    },
    {
      id: "tools",
      title: "DevOps, Cloud & Tooling",
      icon: Wrench,
      color: "text-slate-600 bg-slate-50 border-slate-200",
      description: "Containerization, cloud architecture, version control, and development environments.",
      technologies: [
        "AWS Cloud (Practitioner Certified)",
        "Docker",
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
      ],
    },
  ];

  const currentCluster = clusters.find((c) => c.id === selectedCluster) || clusters[0];

  return (
    <div className="p-6 space-y-6 text-slate-800 font-sans max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-700 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            AI & ENGINEERING CONSTELLATION
          </div>
          <h2 className="text-2xl font-black text-slate-900">AI Core & Skill Architecture</h2>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            Interactive Node Constellation // Zero Fake Percentage Bars
          </p>
        </div>
      </div>

      {/* Cluster Node Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
        {clusters.map((cluster) => {
          const Icon = cluster.icon;
          const isSelected = selectedCluster === cluster.id;
          return (
            <button
              key={cluster.id}
              onClick={() => setSelectedCluster(cluster.id)}
              className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-102"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-blue-600"}`} />
              <span className="text-[11px] font-bold leading-tight line-clamp-1">{cluster.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Selected Cluster Deep-Dive */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/30 border border-slate-200/90 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              {currentCluster.title}
            </h3>
            <p className="text-xs text-slate-600 font-mono">{currentCluster.description}</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-mono font-bold">
            {currentCluster.technologies.length} Nodes
          </span>
        </div>

        {/* Technology Node Pills */}
        <div className="flex flex-wrap gap-2.5">
          {currentCluster.technologies.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-blue-400 transition flex items-center gap-2 text-xs font-semibold text-slate-800"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Algorithmic Rigor Note */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <span>
          <strong>Algorithmic Rigor:</strong> 182+ LeetCode problems solved with standard Two Pointers, DFS/BFS, Dynamic Programming, and Graph Traversals in C++.
        </span>
        <span className="font-mono text-blue-600 font-bold shrink-0">182+ SOLVED</span>
      </div>
    </div>
  );
}
