"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Collectible } from "@/types/game";

interface CollectiblesWorldProps {
  collectibles: Collectible[];
  playerPos: [number, number, number];
  onCollectChip: (chip: Collectible) => void;
}

export default function CollectiblesWorld({
  collectibles,
  playerPos,
  onCollectChip,
}: CollectiblesWorldProps) {
  const chipsGroupRef = useRef<THREE.Group>(null);

  // Proximity check in useFrame
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Check distance from player to uncollected chips
    collectibles.forEach((chip) => {
      if (chip.collected) return;
      const dx = playerPos[0] - chip.position[0];
      const dz = playerPos[2] - chip.position[2];
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < 2.4) {
        onCollectChip(chip);
      }
    });

    // Gentle rotation animation for all chips
    if (chipsGroupRef.current) {
      chipsGroupRef.current.children.forEach((child, idx) => {
        child.rotation.y = time * 1.5 + idx;
        child.position.y =
          (collectibles[idx]?.position[1] || 1) + Math.sin(time * 2.5 + idx) * 0.2;
      });
    }
  });

  return (
    <group ref={chipsGroupRef}>
      {collectibles.map((chip, idx) => {
        if (chip.collected) return null;
        return (
          <group key={chip.id} position={[chip.position[0], chip.position[1], chip.position[2]]}>
            {/* Outer Rotating Diamond / Data Crystal */}
            <mesh castShadow>
              <octahedronGeometry args={[0.38, 0]} />
              <meshStandardMaterial
                color="#06b6d4"
                emissive="#0284c7"
                emissiveIntensity={0.6}
                roughness={0.2}
                metalness={0.8}
                wireframe={false}
              />
            </mesh>

            {/* Glowing Inner Core */}
            <mesh>
              <sphereGeometry args={[0.18, 12, 12]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>

            {/* Halo Ring */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <ringGeometry args={[0.5, 0.58, 24]} />
              <meshBasicMaterial
                color="#38bdf8"
                transparent
                opacity={0.65}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Floor Projection Beacon */}
            <mesh position={[0, -chip.position[1] + 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.2, 0.7, 32]} />
              <meshBasicMaterial
                color="#06b6d4"
                transparent
                opacity={0.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
