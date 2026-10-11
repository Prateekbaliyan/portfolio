"use client";

import { ZONES } from "@/data/gameWorld";
import { ZoneId } from "@/types/game";

interface MiniMapProps {
  playerPos: [number, number, number];
  activeZone: ZoneId;
  discoveredZones: ZoneId[];
  onOpenMap: () => void;
}

export default function MiniMap({
  playerPos,
  activeZone,
  discoveredZones,
  onOpenMap,
}: MiniMapProps) {
  // Map world space [-75, 75] x [-50, 95] into radar [0, 100]%
  const mapWidth = 160;
  const mapHeight = 160;

  const toMapCoord = (x: number, z: number) => {
    const minX = -80;
    const maxX = 80;
    const minZ = -55;
    const maxZ = 105;

    const normX = (x - minX) / (maxX - minX);
    const normZ = (z - minZ) / (maxZ - minZ);

    return {
      x: normX * mapWidth,
      y: normZ * mapHeight,
    };
  };

  const playerCoord = toMapCoord(playerPos[0], playerPos[2]);

  return (
    <div
      onClick={onOpenMap}
      className="relative w-40 h-40 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md p-2 overflow-hidden cursor-pointer group hover:border-blue-400 transition-all select-none"
      title="Click to open full World Map [M]"
    >
      {/* Radar Grid Lines */}
      <div className="absolute inset-0 bg-lab-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-28 h-28 rounded-full border border-slate-200/60" />
        <div className="w-16 h-16 rounded-full border border-slate-200/80 absolute" />
      </div>

      {/* Zone Dots */}
      {ZONES.map((zone) => {
        const coord = toMapCoord(zone.position[0], zone.position[2]);
        const isDiscovered = discoveredZones.includes(zone.id);
        const isCurrent = activeZone === zone.id;

        return (
          <div
            key={zone.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${coord.x}px`, top: `${coord.y}px` }}
          >
            <div
              className={`rounded-full transition-all ${
                isCurrent
                  ? "w-3 h-3 ring-2 ring-blue-500 animate-ping"
                  : isDiscovered
                  ? "w-2 h-2 opacity-90"
                  : "w-1.5 h-1.5 opacity-40 bg-slate-400"
              }`}
              style={{ backgroundColor: zone.color }}
            />
          </div>
        );
      })}

      {/* Player Position Dot */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ left: `${playerCoord.x}px`, top: `${playerCoord.y}px` }}
      >
        <div className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
      </div>

      {/* Radar Label Bottom */}
      <div className="absolute bottom-1.5 inset-x-0 text-center font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider">
        MINIMAP [M]
      </div>
    </div>
  );
}
