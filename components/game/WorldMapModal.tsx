"use client";

import { ZONES } from "@/data/gameWorld";
import { ZoneId } from "@/types/game";
import { X, MapPin, Zap, Navigation } from "lucide-react";

interface WorldMapModalProps {
  discoveredZones: ZoneId[];
  activeZone: ZoneId;
  onFastTravel: (zoneId: ZoneId) => void;
  onClose: () => void;
}

export default function WorldMapModal({
  discoveredZones,
  activeZone,
  onFastTravel,
  onClose,
}: WorldMapModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-150 font-sans"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                PRATEEKVERSE // WORLD MAP &amp; FAST TRAVEL
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Click any zone below to instantly teleport. Discovered:{" "}
                {discoveredZones.length} / {ZONES.length}
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

        {/* 8 Zones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto p-1">
          {ZONES.map((zone) => {
            const isDiscovered = discoveredZones.includes(zone.id);
            const isCurrent = activeZone === zone.id;

            return (
              <div
                key={zone.id}
                onClick={() => {
                  onFastTravel(zone.id);
                  onClose();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  isCurrent
                    ? "bg-blue-50 border-blue-400 shadow-sm ring-2 ring-blue-500/20"
                    : isDiscovered
                    ? "bg-white hover:bg-slate-50 border-slate-200 hover:border-blue-300"
                    : "bg-slate-50 hover:bg-slate-100 border-dashed border-slate-300 opacity-80"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <MapPin
                        className="w-3.5 h-3.5"
                        style={{ color: zone.color }}
                      />
                      {zone.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 block">
                      {zone.tagline}
                    </span>
                  </div>

                  {isCurrent ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600 text-white">
                      YOU ARE HERE
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 text-slate-600 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-blue-500" />
                      FAST TRAVEL
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">
                  {zone.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-mono text-slate-500">
          <span>Press [M] to toggle map during gameplay</span>
          <span className="text-blue-600 font-semibold">Instant Teleport Active</span>
        </div>
      </div>
    </div>
  );
}
