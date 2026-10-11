"use client";

import { ZONES } from "@/data/gameWorld";
import { ZoneId, InteractiveObject } from "@/types/game";
import MiniMap from "./MiniMap";
import {
  Compass,
  Trophy,
  Map as MapIcon,
  Briefcase,
  Menu,
  Sparkles,
  Zap,
} from "lucide-react";

interface GameHUDProps {
  playerPos: [number, number, number];
  activeZone: ZoneId;
  discoveredZones: ZoneId[];
  completedQuestsCount: number;
  totalQuestsCount: number;
  collectedChipsCount: number;
  totalChipsCount: number;
  nearbyInteraction: InteractiveObject | null;
  latestChipFact: string | null;
  onInteract: () => void;
  onOpenMap: () => void;
  onOpenQuests: () => void;
  onOpenRecruiter: () => void;
  onOpenPause: () => void;
}

export default function GameHUD({
  playerPos,
  activeZone,
  discoveredZones,
  completedQuestsCount,
  totalQuestsCount,
  collectedChipsCount,
  totalChipsCount,
  nearbyInteraction,
  latestChipFact,
  onInteract,
  onOpenMap,
  onOpenQuests,
  onOpenRecruiter,
  onOpenPause,
}: GameHUDProps) {
  const currentZoneDef = ZONES.find((z) => z.id === activeZone) || ZONES[0];

  return (
    <div className="fixed inset-0 pointer-events-none z-30 flex flex-col justify-between p-4 sm:p-6 font-sans select-none">
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-4">
        {/* Top-Left: Player & Zone Status */}
        <div className="flex flex-col gap-1.5 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
            <span className="font-mono text-xs font-bold text-slate-900 tracking-wider">
              PRATEEKVERSE
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-mono font-semibold text-blue-700">
              EXPLORER
            </span>
          </div>

          <div
            onClick={onOpenMap}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xs cursor-pointer hover:bg-white text-xs font-mono transition-all"
            title="Click to view Zone on Map [M]"
          >
            <Compass
              className="w-3.5 h-3.5"
              style={{ color: currentZoneDef.color }}
            />
            <span className="font-bold text-slate-800">
              ZONE: {currentZoneDef.name.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Top-Right: Missions, Chips, Fast Actions & Minimap */}
        <div className="flex flex-col sm:flex-row items-end gap-3 pointer-events-auto">
          {/* Quick HUD Action Badges */}
          <div className="flex flex-wrap items-center justify-end gap-1.5">
            {/* Missions Badge */}
            <button
              onClick={onOpenQuests}
              className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xs hover:bg-white hover:border-amber-300 text-xs font-mono font-semibold text-slate-700 flex items-center gap-1.5 cursor-pointer"
              title="View Exploration Missions"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>
                MISSIONS {completedQuestsCount}/{totalQuestsCount}
              </span>
            </button>

            {/* Chips Count */}
            <div className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xs text-xs font-mono font-semibold text-slate-700 items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>
                CHIPS {collectedChipsCount}/{totalChipsCount}
              </span>
            </div>

            {/* Recruiter Mode Shortcut */}
            <button
              onClick={onOpenRecruiter}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
              title="Instant Recruiter Mode (No Gameplay)"
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>RECRUITER</span>
            </button>

            {/* Map Shortcut */}
            <button
              onClick={onOpenMap}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-white/90 hover:bg-white border border-slate-200 shadow-xs text-xs font-mono text-slate-700 cursor-pointer"
              title="World Map [M]"
            >
              <MapIcon className="w-4 h-4 text-blue-600 sm:hidden" />
              <span className="hidden sm:inline">MAP [M]</span>
            </button>

            {/* Menu Shortcut */}
            <button
              onClick={onOpenPause}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-white/90 hover:bg-white border border-slate-200 shadow-xs text-xs font-mono text-slate-700 cursor-pointer"
              title="Pause Menu [ESC]"
            >
              <Menu className="w-4 h-4 text-slate-600 sm:hidden" />
              <span className="hidden sm:inline">ESC</span>
            </button>
          </div>

          {/* Minimap Widget */}
          <div className="hidden md:block">
            <MiniMap
              playerPos={playerPos}
              activeZone={activeZone}
              discoveredZones={discoveredZones}
              onOpenMap={onOpenMap}
            />
          </div>
        </div>
      </div>

      {/* Collectible Fact Toast Notification */}
      {latestChipFact && (
        <div className="self-center pointer-events-auto max-w-lg px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-400 shadow-2xl animate-in slide-in-from-top-6 duration-200 text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-blue-700 font-mono text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            <span>DATA CHIP ACQUIRED // PROFILE FACT UNLOCKED</span>
          </div>
          <p className="text-xs font-medium text-slate-800 leading-snug">
            {latestChipFact}
          </p>
        </div>
      )}

      {/* Center-Bottom Contextual Interaction Prompt */}
      {nearbyInteraction && (
        <div className="self-center pointer-events-auto transform -translate-y-4">
          <button
            onClick={onInteract}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs sm:text-sm font-bold shadow-[0_10px_30px_rgba(37,99,235,0.4)] animate-bounce cursor-pointer border border-blue-400"
          >
            <span className="px-2 py-0.5 rounded-md bg-white text-blue-700 font-extrabold text-xs">
              E
            </span>
            <span>{nearbyInteraction.prompt}</span>
          </button>
        </div>
      )}

      {/* Bottom Row: Controls Reminder */}
      <div className="flex items-end justify-between">
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 text-[11px] font-mono text-slate-600 shadow-xs pointer-events-auto">
          <span>
            <strong className="text-slate-900">WASD</strong> Move
          </span>
          <span>•</span>
          <span>
            <strong className="text-slate-900">SPACE</strong> Jump
          </span>
          <span>•</span>
          <span>
            <strong className="text-slate-900">SHIFT</strong> Sprint
          </span>
          <span>•</span>
          <span>
            <strong className="text-slate-900">E</strong> Interact
          </span>
          <span>•</span>
          <span>
            <strong className="text-slate-900">M</strong> Map
          </span>
          <span>•</span>
          <span>
            <strong className="text-slate-900">ESC</strong> Menu
          </span>
        </div>

        {/* Mobile quick interaction button if near object */}
        <div className="lg:hidden" />
      </div>
    </div>
  );
}
