"use client";

import { X, MousePointer, AppWindow, Command, Briefcase, Sparkles } from "lucide-react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiter: () => void;
}

export default function HelpModal({ isOpen, onClose, onOpenRecruiter }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-150 font-sans"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">How to Explore PRATEEK OS</h3>
              <p className="text-xs text-slate-500 font-mono">Interactive Desktop Developer Environment</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3.5 text-xs text-slate-600">
          <div className="flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <MousePointer className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Click Desktop or Dock Icons</span>
              <span>Every icon opens a functional application window. You can keep multiple windows open simultaneously.</span>
            </div>
          </div>

          <div className="flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <AppWindow className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Window Management</span>
              <span>Drag windows by their titlebar. Use the red/yellow/green buttons to close, minimize, or maximize.</span>
            </div>
          </div>

          <div className="flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <Command className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Keyboard Shortcuts</span>
              <span>
                Press <strong>Ctrl + K</strong> for Command Search, <strong>Ctrl + `</strong> for Terminal CLI, or <strong>Esc</strong> to close active dialogs.
              </span>
            </div>
          </div>

          <div className="flex gap-3 p-3 rounded-2xl bg-blue-50/60 border border-blue-200">
            <Briefcase className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-blue-900 block mb-0.5">Need a Quick Summary?</span>
              <span>
                Click <strong>Recruiter Mode</strong> in the top bar to view a tabular, comprehensive profile in under 30 seconds.
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2.5 pt-2">
          <button
            onClick={() => {
              onClose();
              onOpenRecruiter();
            }}
            className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm text-center"
          >
            Open Recruiter Mode
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}
