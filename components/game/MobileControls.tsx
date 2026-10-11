"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp, Zap, Sparkles, Map, Briefcase } from "lucide-react";

interface MobileControlsProps {
  onMoveChange: (moveX: number, moveZ: number) => void;
  onJump: () => void;
  onInteract: () => void;
  onSprintToggle: (sprint: boolean) => void;
  onOpenMap: () => void;
  onOpenRecruiter: () => void;
  showInteract: boolean;
}

export default function MobileControls({
  onMoveChange,
  onJump,
  onInteract,
  onSprintToggle,
  onOpenMap,
  onOpenRecruiter,
  showInteract,
}: MobileControlsProps) {
  const joystickRef = useRef<HTMLDivElement>(null);
  const [joystickActive, setJoystickActive] = useState(false);
  const [knobPos, setKnobPos] = useState({ x: 0, y: 0 });
  const [isSprinting, setIsSprinting] = useState(false);

  const touchIdRef = useRef<number | null>(null);
  const centerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const maxRadius = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (touchIdRef.current !== null) return;
    const touch = e.changedTouches[0];
    touchIdRef.current = touch.identifier;

    if (joystickRef.current) {
      const rect = joystickRef.current.getBoundingClientRect();
      centerRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }

    setJoystickActive(true);
    handleTouchMove(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchIdRef.current === null) return;
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === touchIdRef.current) {
        const dx = touch.clientX - centerRef.current.x;
        const dy = touch.clientY - centerRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const clampedDist = Math.min(dist, maxRadius);
        const angle = Math.atan2(dy, dx);

        const knobX = Math.cos(angle) * clampedDist;
        const knobY = Math.sin(angle) * clampedDist;

        setKnobPos({ x: knobX, y: knobY });

        // Normalize movement vector between -1 and 1
        const normX = knobX / maxRadius;
        const normZ = knobY / maxRadius;
        onMoveChange(normX, normZ);
        break;
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchIdRef.current === null) return;
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === touchIdRef.current) {
        touchIdRef.current = null;
        setJoystickActive(false);
        setKnobPos({ x: 0, y: 0 });
        onMoveChange(0, 0);
        break;
      }
    }
  };

  const toggleSprint = () => {
    const next = !isSprinting;
    setIsSprinting(next);
    onSprintToggle(next);
  };

  return (
    <div className="lg:hidden fixed inset-0 pointer-events-none z-30 flex items-end justify-between p-4 sm:p-6 select-none">
      {/* Left: Virtual Touch Joystick */}
      <div
        ref={joystickRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className="w-32 h-32 rounded-full bg-white/70 backdrop-blur-md border border-slate-300 shadow-lg relative pointer-events-auto flex items-center justify-center touch-none"
      >
        {/* Joystick Base Guides */}
        <div className="w-16 h-16 rounded-full border border-slate-200 pointer-events-none" />

        {/* Dynamic Joystick Knob */}
        <div
          className="w-12 h-12 rounded-full bg-blue-600 shadow-md border-2 border-white absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75"
          style={{
            left: `calc(50% + ${knobPos.x}px)`,
            top: `calc(50% + ${knobPos.y}px)`,
          }}
        />
      </div>

      {/* Right: Action Buttons (Jump, Sprint, Interact, Map) */}
      <div className="flex flex-col items-end gap-3 pointer-events-auto">
        <div className="flex items-center gap-2">
          {/* Quick Recruiter Mode Button */}
          <button
            onClick={onOpenRecruiter}
            className="p-3 rounded-2xl bg-slate-900 text-white shadow-md active:scale-95"
            title="Recruiter Mode"
          >
            <Briefcase className="w-5 h-5 text-emerald-400" />
          </button>

          {/* World Map Button */}
          <button
            onClick={onOpenMap}
            className="p-3 rounded-2xl bg-white/90 text-slate-800 border border-slate-200 shadow-md active:scale-95"
            title="World Map"
          >
            <Map className="w-5 h-5 text-blue-600" />
          </button>

          {/* Sprint Toggle Button */}
          <button
            onClick={toggleSprint}
            className={`p-3 rounded-2xl border shadow-md active:scale-95 transition-colors ${
              isSprinting
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white/90 text-slate-700 border-slate-200"
            }`}
            title="Sprint Toggle"
          >
            <Zap className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Contextual Interact Button */}
          {showInteract && (
            <button
              onClick={onInteract}
              className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-mono font-bold text-xs shadow-lg animate-pulse active:scale-95 border border-blue-400"
            >
              [E] INTERACT
            </button>
          )}

          {/* Jump Button */}
          <button
            onClick={onJump}
            className="w-16 h-16 rounded-3xl bg-blue-600 active:bg-blue-700 text-white shadow-xl flex items-center justify-center font-bold active:scale-95 border-2 border-white/50"
            title="Jump"
          >
            <ArrowUp className="w-7 h-7 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
