"use client";

import { Quest } from "@/types/game";
import { X, CheckCircle2, Circle, Trophy } from "lucide-react";

interface QuestModalProps {
  quests: Quest[];
  onClose: () => void;
}

export default function QuestModal({ quests, onClose }: QuestModalProps) {
  const completedCount = quests.filter((q) => q.completed).length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-150 font-sans"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                PRATEEKVERSE // EXPLORATION MISSIONS
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Progress: {completedCount} / {quests.length} Completed
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300"
            style={{ width: `${(completedCount / quests.length) * 100}%` }}
          />
        </div>

        {/* Quest List */}
        <div className="space-y-2.5 max-h-80 overflow-y-auto p-1">
          {quests.map((q) => (
            <div
              key={q.id}
              className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                q.completed
                  ? "bg-emerald-50/50 border-emerald-200 text-slate-800"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {q.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-400" />
                )}
              </div>
              <div className="space-y-0.5">
                <div
                  className={`text-xs font-bold font-mono ${
                    q.completed ? "text-emerald-800 line-through" : "text-slate-900"
                  }`}
                >
                  {q.title}
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {q.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
