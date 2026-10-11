"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import PlayerController from "./PlayerController";
import WorldEnvironment from "./WorldEnvironment";
import CollectiblesWorld from "./CollectiblesWorld";
import { Collectible, InteractiveObject } from "@/types/game";

interface GameCanvasProps {
  playerPos: [number, number, number];
  onPositionUpdate: (pos: [number, number, number]) => void;
  mobileMove: { x: number; z: number };
  mobileJumpTrigger: number;
  mobileSprint: boolean;
  collectibles: Collectible[];
  onCollectChip: (chip: Collectible) => void;
  activeInteraction: InteractiveObject | null;
  teleportPos?: [number, number, number] | null;
  reducedMotion?: boolean;
}

export default function GameCanvas({
  playerPos,
  onPositionUpdate,
  mobileMove,
  mobileJumpTrigger,
  mobileSprint,
  collectibles,
  onCollectChip,
  activeInteraction,
  teleportPos = null,
  reducedMotion = false,
}: GameCanvasProps) {
  const [mounted, setMounted] = useState(false);
  const playerPosRef = useRef<[number, number, number]>(playerPos);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-900 text-cyan-400">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-xs tracking-widest uppercase">Initializing 3D World...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative select-none">
      <Canvas
        shadows
        camera={{ position: [0, 5, 8], fov: 55 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        {/* World Architectural Environment */}
        <WorldEnvironment
          playerPos={playerPos}
          activeInteraction={activeInteraction}
        />

        {/* 3D Collectible Data Chips */}
        <CollectiblesWorld
          collectibles={collectibles}
          playerPos={playerPos}
          onCollectChip={onCollectChip}
        />

        {/* Stylized Developer Character Controller */}
        <PlayerController
          playerPosRef={playerPosRef}
          onPositionUpdate={onPositionUpdate}
          mobileMove={mobileMove}
          mobileJumpTrigger={mobileJumpTrigger}
          mobileSprint={mobileSprint}
          reducedMotion={reducedMotion}
          teleportPos={teleportPos}
        />
      </Canvas>
    </div>
  );
}
