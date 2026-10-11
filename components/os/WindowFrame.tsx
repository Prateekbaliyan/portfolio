"use client";

import { useState, useRef } from "react";
import { WindowState } from "@/types/os";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";

interface WindowFrameProps {
  win: WindowState;
  isActive: boolean;
  isDark?: boolean;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  children: React.ReactNode;
}

export default function WindowFrame({
  win,
  isActive,
  isDark = false,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  children,
}: WindowFrameProps) {
  const [position, setPosition] = useState(win.position);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const initialPosRef = useRef({ x: 0, y: 0 });

  // Dragging support
  const handleMouseDown = (e: React.MouseEvent) => {
    if (win.isMaximized) return;
    onFocus();
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    initialPosRef.current = { ...position };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = moveEvent.clientX - dragStartRef.current.x;
      const dy = moveEvent.clientY - dragStartRef.current.y;

      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
      const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;
      const newX = Math.max(10, Math.min(screenWidth - 300, initialPosRef.current.x + dx));
      const newY = Math.max(35, Math.min(screenHeight - 150, initialPosRef.current.y + dy));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  if (win.isMinimized) return null;

  return (
    <div
      onClick={onFocus}
      style={{
        zIndex: win.zIndex,
        ...(win.isMaximized
          ? {
              position: "fixed",
              top: 36,
              left: 0,
              right: 0,
              bottom: 64,
              width: "100%",
              height: "calc(100vh - 100px)",
            }
          : {
              position: "fixed",
              top: position.y,
              left: position.x,
              width: typeof win.size.width === "number" ? `${win.size.width}px` : "90vw",
              maxWidth: "96vw",
              maxHeight: "calc(100vh - 120px)",
            }),
      }}
      className={`rounded-2xl flex flex-col backdrop-blur-2xl border transition-all duration-200 overflow-hidden ${
        isDark
          ? isActive
            ? "bg-slate-900/95 border-cyan-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-cyan-500/20 text-slate-100"
            : "bg-slate-900/90 border-slate-800 shadow-[0_10px_35px_rgba(0,0,0,0.4)] opacity-95 text-slate-200"
          : isActive
          ? "bg-white/95 border-blue-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.18)] ring-1 ring-blue-500/20 text-slate-900"
          : "bg-white/90 border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] opacity-95 text-slate-800"
      }`}
    >
      {/* OS Window Titlebar */}
      <div
        onMouseDown={handleMouseDown}
        className={`px-4 py-2.5 flex items-center justify-between border-b select-none cursor-move transition-colors ${
          isDark
            ? isActive
              ? "bg-slate-800/90 border-slate-750 text-slate-100"
              : "bg-slate-850/80 border-slate-800 text-slate-400"
            : isActive
            ? "bg-slate-100/90 border-slate-200 text-slate-800"
            : "bg-slate-50/80 border-slate-200/60 text-slate-500"
        }`}
      >
        {/* Apple-style Window Controls */}
        <div className="flex items-center gap-2">
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 border border-rose-600/30 flex items-center justify-center group cursor-pointer transition"
            aria-label="Close"
          >
            <X className="w-2 h-2 text-rose-950 opacity-0 group-hover:opacity-100 transition" />
          </button>
          {/* Minimize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 border border-amber-500/30 flex items-center justify-center group cursor-pointer transition"
            aria-label="Minimize"
          >
            <Minus className="w-2 h-2 text-amber-950 opacity-0 group-hover:opacity-100 transition" />
          </button>
          {/* Maximize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleMaximize();
            }}
            className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 border border-emerald-600/30 flex items-center justify-center group cursor-pointer transition"
            aria-label="Maximize"
          >
            {win.isMaximized ? (
              <Minimize2 className="w-2 h-2 text-emerald-950 opacity-0 group-hover:opacity-100 transition" />
            ) : (
              <Maximize2 className="w-2 h-2 text-emerald-950 opacity-0 group-hover:opacity-100 transition" />
            )}
          </button>
        </div>

        {/* Window Title */}
        <div className="flex items-center gap-1.5 font-sans font-bold text-xs tracking-tight">
          <span>{win.title}</span>
        </div>

        {/* Status indicator on right */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span className="hidden sm:inline">ONLINE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>

      {/* Window Body Container */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-0 relative">
        {children}
      </div>
    </div>
  );
}
