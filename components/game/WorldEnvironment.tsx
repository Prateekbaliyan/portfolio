"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ZONES, INTERACTIVE_OBJECTS } from "@/data/gameWorld";
import { InteractiveObject } from "@/types/game";

interface WorldEnvironmentProps {
  playerPos: [number, number, number];
  activeInteraction: InteractiveObject | null;
  onHoverObject?: (obj: InteractiveObject | null) => void;
}

export default function WorldEnvironment({
  playerPos,
  activeInteraction,
}: WorldEnvironmentProps) {
  const centralMonolithRef = useRef<THREE.Group>(null);
  const aiCoreRef = useRef<THREE.Group>(null);
  const pdfDocRef = useRef<THREE.Group>(null);
  const pdfLaserRef = useRef<THREE.Mesh>(null);
  const quantBarsRef = useRef<THREE.Group>(null);
  const commTowerRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate Central Monolith
    if (centralMonolithRef.current) {
      centralMonolithRef.current.rotation.y = time * 0.4;
    }

    // AI Core pulsing & rotating
    if (aiCoreRef.current) {
      aiCoreRef.current.rotation.y = -time * 0.6;
      aiCoreRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }

    // Floating DocuAudit PDF Document & Scanning Laser
    if (pdfDocRef.current) {
      pdfDocRef.current.position.y = 3.2 + Math.sin(time * 1.5) * 0.25;
      pdfDocRef.current.rotation.y = Math.sin(time * 0.4) * 0.25;
    }
    if (pdfLaserRef.current) {
      pdfLaserRef.current.position.y = 3.2 + Math.sin(time * 3.0) * 1.6;
    }

    // Quant Order Book Animated Depth
    if (quantBarsRef.current) {
      quantBarsRef.current.children.forEach((child, i) => {
        child.scale.y = 1 + Math.sin(time * 2 + i * 0.6) * 0.4;
      });
    }

    // Communication Tower Beacon Pulse
    if (commTowerRef.current) {
      commTowerRef.current.rotation.y = time * 0.25;
    }
  });

  return (
    <group>
      {/* ============================================================== */}
      {/* 1. SKY & ATMOSPHERIC LIGHTING (Bright Futuristic Aesthetic)   */}
      {/* ============================================================== */}
      <color attach="background" args={["#f0f4f8"]} />
      <fog attach="fog" args={["#f0f4f8", 50, 140]} />

      {/* Ambient Light (Soft Daylight Fill) */}
      <ambientLight intensity={0.95} color="#e0f2fe" />

      {/* Main Directional Sun */}
      <directionalLight
        position={[40, 60, 30]}
        intensity={1.4}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-80}
        shadow-camera-right={80}
        shadow-camera-top={80}
        shadow-camera-bottom={-80}
        shadow-camera-near={1}
        shadow-camera-far={180}
      />

      {/* Subtle Cyan / Blue Rim Light */}
      <directionalLight position={[-50, 30, -40]} intensity={0.65} color="#38bdf8" />
      <directionalLight position={[0, -20, 0]} intensity={0.3} color="#bae6fd" />

      {/* Deep Atmosphere Grid Floor */}
      <mesh position={[0, -8, 20]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[320, 320]} />
        <meshBasicMaterial color="#e2e8f0" transparent opacity={0.6} />
      </mesh>

      {/* ============================================================== */}
      {/* 2. ISLAND PLATFORMS (8 DISTINCT REGIONS)                      */}
      {/* ============================================================== */}

      {/* ZONE 1: DEVELOPER CITY (Center: [0, 0, 0]) */}
      <group position={[0, 0, 0]}>
        {/* Main Plaza Slab */}
        <mesh position={[0, -0.2, 0]} receiveShadow>
          <cylinderGeometry args={[26, 28, 0.6, 64]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.35} metalness={0.1} />
        </mesh>
        {/* Inner Glass Ring Accent */}
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[14, 15.5, 64]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#1d4ed8"
            emissiveIntensity={0.5}
            roughness={0.2}
          />
        </mesh>
        {/* Campus Outer Ring Pathway */}
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[22, 24.5, 64]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.4} />
        </mesh>

        {/* Central Holographic Monolith [0, 0, 0] */}
        <group ref={centralMonolithRef} position={[0, 0, 0]}>
          <mesh position={[0, 3.5, 0]} castShadow>
            <octahedronGeometry args={[1.8, 0]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#1d4ed8"
              emissiveIntensity={0.8}
              roughness={0.15}
              metalness={0.9}
            />
          </mesh>
          {/* Inner Light Core */}
          <mesh position={[0, 3.5, 0]}>
            <sphereGeometry args={[0.8, 16, 16]} />
            <meshBasicMaterial color="#60a5fa" />
          </mesh>
          {/* Floating Orbit Rings */}
          <mesh position={[0, 3.5, 0]} rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[2.8, 0.06, 16, 64]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <mesh position={[0, 3.5, 0]} rotation={[-Math.PI / 4, 0, 0]}>
            <torusGeometry args={[3.2, 0.05, 16, 64]} />
            <meshBasicMaterial color="#818cf8" />
          </mesh>
        </group>

        {/* Monolith Pedestal */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[2.5, 3.2, 1.2, 32]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Holographic Projection Beam from Monolith */}
        <mesh position={[0, 10, 0]}>
          <cylinderGeometry args={[0.08, 0.4, 18, 16]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} />
        </mesh>

        {/* Biometric Holographic Photo Terminal Frame at [-8, 0, -4] */}
        <group position={[-8, 0, -4]}>
          <mesh position={[0, 2.2, 0]}>
            <boxGeometry args={[2.4, 3.4, 0.15]} />
            <meshStandardMaterial
              color="#0284c7"
              emissive="#0369a1"
              emissiveIntensity={0.6}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0, 2.2, 0.1]}>
            <planeGeometry args={[2.1, 3.1]} />
            <meshBasicMaterial color="#e0f2fe" transparent opacity={0.85} />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <cylinderGeometry args={[1.2, 1.5, 0.6, 24]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
        </group>

        {/* Developer City Tech Pylons */}
        {[-14, 14].map((px) =>
          [-14, 14].map((pz) => (
            <group key={`pylon_${px}_${pz}`} position={[px, 0, pz]}>
              <mesh position={[0, 3.5, 0]}>
                <boxGeometry args={[0.6, 7, 0.6]} />
                <meshStandardMaterial color="#cbd5e1" roughness={0.3} metalness={0.6} />
              </mesh>
              <mesh position={[0, 7.2, 0]}>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshBasicMaterial color="#38bdf8" />
              </mesh>
            </group>
          ))
        )}
      </group>

      {/* ZONE 2: AI ISLAND (North-West: [-45, 0, -25]) */}
      <group position={[-45, 0, -25]}>
        {/* Island Platform */}
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <cylinderGeometry args={[20, 22, 0.8, 48]} />
          <meshStandardMaterial color="#f0fdfa" roughness={0.3} metalness={0.15} />
        </mesh>
        {/* Neural Circuit Ground Ring */}
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[11, 13, 48]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Central Floating AI Core */}
        <group ref={aiCoreRef} position={[0, 3.8, 0]}>
          <mesh>
            <icosahedronGeometry args={[2.0, 1]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#0e7490"
              emissiveIntensity={0.8}
              wireframe={false}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
          {/* Wireframe Cage */}
          <mesh>
            <icosahedronGeometry args={[2.4, 1]} />
            <meshBasicMaterial color="#67e8f9" wireframe />
          </mesh>
        </group>
        {/* Floating Data Cubes around AI Core */}
        {[-3, 3].map((dx, idx) => (
          <mesh
            key={`cube_${idx}`}
            position={[dx, 2.5 + idx * 0.8, idx === 0 ? 3 : -3]}
            rotation={[0.4, 0.4, 0]}
          >
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#06b6d4"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}

        {/* AI Lab Pillars */}
        {[-10, 10].map((dx, idx) => (
          <mesh key={`ai_col_${idx}`} position={[dx, 2.5, 0]}>
            <cylinderGeometry args={[0.5, 0.8, 5, 16]} />
            <meshStandardMaterial color="#e2e8f0" metalness={0.5} />
          </mesh>
        ))}
      </group>

      {/* ZONE 3: FORENSICS ISLAND (North-East: [45, 0, -35]) */}
      <group position={[45, 0, -35]}>
        {/* Island Platform */}
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <cylinderGeometry args={[26, 28, 0.8, 56]} />
          <meshStandardMaterial color="#f0fdf4" roughness={0.35} metalness={0.2} />
        </mesh>
        {/* Forensic Perimeter Ring */}
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[16, 17.5, 48]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* BUILDING A: VeriStream Deepfake Telemetry Chamber (Position offset [-5, 0, -3]) */}
        <group position={[-5, 0, -3]}>
          {/* Chamber Structure Arches */}
          <mesh position={[0, 3, 0]}>
            <torusGeometry args={[3.2, 0.35, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} />
          </mesh>
          <mesh position={[0, 3, 2.5]}>
            <torusGeometry args={[3.2, 0.35, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} />
          </mesh>
          {/* Biometric Hologram Face Mesh Model */}
          <mesh position={[0, 2.4, 1.25]}>
            <sphereGeometry args={[1.1, 16, 16]} />
            <meshBasicMaterial color="#34d399" wireframe />
          </mesh>
          {/* Telemetry Console */}
          <mesh position={[0, 0.6, 2.8]}>
            <boxGeometry args={[1.8, 1.2, 0.8]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
          <mesh position={[0, 1.3, 2.8]} rotation={[-0.4, 0, 0]}>
            <planeGeometry args={[1.6, 0.8]} />
            <meshBasicMaterial color="#10b981" />
          </mesh>
        </group>

        {/* BUILDING B: DocuAudit Digital Document Forensics (Position offset [5, 0, 3]) */}
        <group position={[5, 0, 3]}>
          {/* Giant Floating PDF Document & Scanner */}
          <group ref={pdfDocRef} position={[0, 3.2, 0]}>
            {/* White Document Sheet */}
            <mesh>
              <boxGeometry args={[2.4, 3.4, 0.08]} />
              <meshStandardMaterial color="#ffffff" roughness={0.2} />
            </mesh>
            {/* Holographic Analysis Layer (ELA Noise Simulation) */}
            <mesh position={[0, 0, 0.06]}>
              <planeGeometry args={[2.1, 3.1]} />
              <meshBasicMaterial color="#10b981" transparent opacity={0.35} wireframe />
            </mesh>
          </group>

          {/* Interactive Laser Scanning Sweep Beam */}
          <mesh ref={pdfLaserRef} position={[0, 3.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 2.8, 16]} />
            <meshBasicMaterial color="#ef4444" />
          </mesh>

          {/* Pedestal & Scanner Rig */}
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[1.8, 2.2, 1, 24]} />
            <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.7} />
          </mesh>
        </group>
      </group>

      {/* ZONE 4: QUANT ISLAND (East: [60, 0, 15]) */}
      <group position={[60, 0, 15]}>
        {/* Island Platform */}
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <cylinderGeometry args={[22, 24, 0.8, 48]} />
          <meshStandardMaterial color="#faf5ff" roughness={0.3} metalness={0.2} />
        </mesh>
        {/* Trading Floor Circular Perimeter Accent */}
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[12, 13.6, 48]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Holographic Level 2 Order Book Simulation (3D Depth Bars) */}
        <group ref={quantBarsRef} position={[0, 1.5, 0]}>
          {/* Bid Depth Bars (Green side) */}
          {[-2.2, -1.5, -0.8].map((bx, i) => (
            <mesh key={`bid_${i}`} position={[bx, (i + 1) * 0.45, 0]}>
              <boxGeometry args={[0.5, (i + 1) * 0.9, 0.5]} />
              <meshStandardMaterial
                color="#10b981"
                emissive="#059669"
                emissiveIntensity={0.6}
                roughness={0.2}
              />
            </mesh>
          ))}

          {/* Mid-Market Price Axis */}
          <mesh position={[0, 2.2, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 4.4, 16]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>

          {/* Ask Depth Bars (Red/Violet side) */}
          {[0.8, 1.5, 2.2].map((ax, i) => (
            <mesh key={`ask_${i}`} position={[ax, (3 - i) * 0.45, 0]}>
              <boxGeometry args={[0.5, (3 - i) * 0.9, 0.5]} />
              <meshStandardMaterial
                color="#f43f5e"
                emissive="#e11d48"
                emissiveIntensity={0.6}
                roughness={0.2}
              />
            </mesh>
          ))}
        </group>

        {/* Quant Terminal Console */}
        <mesh position={[0, 0.5, 2.5]}>
          <boxGeometry args={[2.5, 1, 1]} />
          <meshStandardMaterial color="#1e1b4b" roughness={0.3} />
        </mesh>
        <mesh position={[0, 1.2, 2.4]} rotation={[-0.4, 0, 0]}>
          <planeGeometry args={[2.2, 0.9]} />
          <meshBasicMaterial color="#c084fc" />
        </mesh>
      </group>

      {/* ZONE 5: BUILDER ISLAND (West: [-50, 0, 25]) */}
      <group position={[-50, 0, 25]}>
        {/* Platform Slab */}
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <cylinderGeometry args={[24, 26, 0.8, 48]} />
          <meshStandardMaterial color="#fffbeb" roughness={0.35} metalness={0.15} />
        </mesh>
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[13, 14.8, 48]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#d97706"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Software Foundry Structures */}
        {/* 1. AI Productivity Tracker Hub at [-47, 0, 20] -> relative offset [3, 0, -5] */}
        <group position={[3, 0, -5]}>
          <mesh position={[0, 2, 0]}>
            <boxGeometry args={[2.2, 4, 2.2]} />
            <meshStandardMaterial color="#1e293b" roughness={0.3} />
          </mesh>
          <mesh position={[0, 4.4, 0]}>
            <octahedronGeometry args={[0.7, 0]} />
            <meshBasicMaterial color="#fbbf24" />
          </mesh>
        </group>

        {/* 2. Location Intelligence Geospatial Radar at [-53, 0, 28] -> relative offset [-3, 0, 3] */}
        <group position={[-3, 0, 3]}>
          <mesh position={[0, 1.8, 0]}>
            <cylinderGeometry args={[1.5, 1.8, 3.6, 24]} />
            <meshStandardMaterial color="#0f172a" roughness={0.4} />
          </mesh>
          <mesh position={[0, 3.7, 0]} rotation={[0.4, 0, 0]}>
            <torusGeometry args={[1.2, 0.1, 16, 32]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        </group>

        {/* 3. ML Research Stations District at [-43, 0, 32] -> relative offset [7, 0, 7] */}
        <group position={[7, 0, 7]}>
          <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[1.2, 1.4, 3, 16]} />
            <meshStandardMaterial color="#334155" />
          </mesh>
          <mesh position={[0, 3.2, 0]}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshBasicMaterial color="#10b981" />
          </mesh>
        </group>
      </group>

      {/* ZONE 6: ACADEMY (South-West: [-20, 0, 52]) */}
      <group position={[-20, 0, 52]}>
        {/* Scholastic Campus Base */}
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <cylinderGeometry args={[18, 20, 0.8, 48]} />
          <meshStandardMaterial color="#eff6ff" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[9, 10.4, 48]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#2563eb"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* KIET Academic Portal / Monument */}
        <group position={[0, 0, 0]}>
          {/* Left Column */}
          <mesh position={[-2.2, 3, 0]}>
            <cylinderGeometry args={[0.45, 0.55, 6, 24]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.2} />
          </mesh>
          {/* Right Column */}
          <mesh position={[2.2, 3, 0]}>
            <cylinderGeometry args={[0.45, 0.55, 6, 24]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.2} />
          </mesh>
          {/* Archway Header Beam */}
          <mesh position={[0, 6.2, 0]}>
            <boxGeometry args={[5.8, 0.6, 1.2]} />
            <meshStandardMaterial color="#1e3a8a" roughness={0.2} metalness={0.7} />
          </mesh>
          {/* Floating KIET Crest Emblem */}
          <mesh position={[0, 4.2, 0]}>
            <octahedronGeometry args={[1.0, 0]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#1d4ed8"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      </group>

      {/* ZONE 7: ACHIEVEMENT MOUNTAIN (South-East: [25, 0, 55]) */}
      <group position={[25, 0, 55]}>
        {/* Mountain Base */}
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <cylinderGeometry args={[18, 20, 0.8, 48]} />
          <meshStandardMaterial color="#fdf2f8" roughness={0.3} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[10, 11.5, 48]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#db2777"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Stepped Terraces / Monument */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[5, 6.5, 1.6, 24]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} />
        </mesh>
        <mesh position={[0, 2.2, 0]}>
          <cylinderGeometry args={[3.2, 4.2, 1.4, 24]} />
          <meshStandardMaterial color="#334155" roughness={0.3} />
        </mesh>

        {/* 182+ LeetCode Obelisk Summit */}
        <mesh position={[0, 5.2, 0]} castShadow>
          <boxGeometry args={[1.2, 4.8, 1.2]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#be185d"
            emissiveIntensity={0.8}
            metalness={0.8}
          />
        </mesh>
        {/* AWS Cloud Halo */}
        <mesh position={[0, 7.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.6, 0.12, 16, 32]} />
          <meshBasicMaterial color="#f59e0b" />
        </mesh>
      </group>

      {/* ZONE 8: CONNECTION HUB (Far South: [0, 0, 85]) */}
      <group position={[0, 0, 85]}>
        {/* Base Platform */}
        <mesh position={[0, -0.3, 0]} receiveShadow>
          <cylinderGeometry args={[20, 22, 0.8, 48]} />
          <meshStandardMaterial color="#eef2ff" roughness={0.35} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[11, 12.5, 48]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#4f46e5"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* High-Frequency Telemetry Tower */}
        <group ref={commTowerRef} position={[0, 0, 0]}>
          <mesh position={[0, 6, 0]}>
            <cylinderGeometry args={[0.3, 1.8, 12, 16]} />
            <meshStandardMaterial color="#1e1b4b" metalness={0.8} />
          </mesh>
          {/* Transmission Dishes & Rings */}
          <mesh position={[0, 11, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.2, 0.1, 16, 32]} />
            <meshBasicMaterial color="#818cf8" />
          </mesh>
          <mesh position={[0, 8.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[3.2, 0.1, 16, 32]} />
            <meshBasicMaterial color="#a5b4fc" />
          </mesh>
          {/* Top Energy Beacon */}
          <mesh position={[0, 12.8, 0]}>
            <sphereGeometry args={[0.6, 16, 16]} />
            <meshBasicMaterial color="#c7d2fe" />
          </mesh>
        </group>

        {/* GitHub Terminal Beacon at [-7, 0, 0] */}
        <group position={[-7, 0, 0]}>
          <mesh position={[0, 1.6, 0]}>
            <boxGeometry args={[1.2, 3.2, 1.2]} />
            <meshStandardMaterial color="#0f172a" />
          </mesh>
          <mesh position={[0, 3.5, 0]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshBasicMaterial color="#f8fafc" />
          </mesh>
        </group>

        {/* LinkedIn Terminal Beacon at [7, 0, 0] */}
        <group position={[7, 0, 0]}>
          <mesh position={[0, 1.6, 0]}>
            <boxGeometry args={[1.2, 3.2, 1.2]} />
            <meshStandardMaterial color="#0f172a" />
          </mesh>
          <mesh position={[0, 3.5, 0]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshBasicMaterial color="#0284c7" />
          </mesh>
        </group>
      </group>

      {/* ============================================================== */}
      {/* 3. CONNECTING SKYBRIDGES & HIGHWAYS (Walking Paths)            */}
      {/* ============================================================== */}
      {/* Bridge 1: Developer City -> AI Island */}
      <mesh position={[-22.5, -0.2, -12.5]} rotation={[0, Math.atan2(-25, -45) + Math.PI / 2, 0]}>
        <boxGeometry args={[4.5, 0.35, 50]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
      </mesh>

      {/* Bridge 2: Developer City -> Forensics Island */}
      <mesh position={[22.5, -0.2, -17.5]} rotation={[0, Math.atan2(-35, 45) + Math.PI / 2, 0]}>
        <boxGeometry args={[4.5, 0.35, 55]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
      </mesh>

      {/* Bridge 3: Developer City -> Quant Island */}
      <mesh position={[30, -0.2, 7.5]} rotation={[0, Math.atan2(15, 60) + Math.PI / 2, 0]}>
        <boxGeometry args={[4.5, 0.35, 60]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
      </mesh>

      {/* Bridge 4: Developer City -> Builder Island */}
      <mesh position={[-25, -0.2, 12.5]} rotation={[0, Math.atan2(25, -50) + Math.PI / 2, 0]}>
        <boxGeometry args={[4.5, 0.35, 55]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
      </mesh>

      {/* Bridge 5: Developer City -> Academy */}
      <mesh position={[-10, -0.2, 26]} rotation={[0, Math.atan2(52, -20) + Math.PI / 2, 0]}>
        <boxGeometry args={[4.5, 0.35, 55]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
      </mesh>

      {/* Bridge 6: Developer City -> Achievement Mountain */}
      <mesh position={[12.5, -0.2, 27.5]} rotation={[0, Math.atan2(55, 25) + Math.PI / 2, 0]}>
        <boxGeometry args={[4.5, 0.35, 60]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
      </mesh>

      {/* Highway: Developer City / Academy / Mountain -> Connection Hub */}
      <mesh position={[0, -0.2, 55]}>
        <boxGeometry args={[6.0, 0.35, 62]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
      </mesh>

      {/* ============================================================== */}
      {/* 4. INTERACTIVE OBJECT VISUAL BEACONS (Proximity Glow)          */}
      {/* ============================================================== */}
      {INTERACTIVE_OBJECTS.map((obj) => {
        const dx = playerPos[0] - obj.position[0];
        const dz = playerPos[2] - obj.position[2];
        const dist = Math.sqrt(dx * dx + dz * dz);
        const isNear = dist <= obj.radius;

        return (
          <group key={obj.id} position={[obj.position[0], 0.05, obj.position[2]]}>
            {/* Ground Proximity Interaction Ring */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[obj.radius * 0.7, obj.radius * 0.9, 32]} />
              <meshBasicMaterial
                color={isNear ? "#38bdf8" : "#94a3b8"}
                transparent
                opacity={isNear ? 0.75 : 0.25}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Glowing Pillar Light when player is within radius */}
            {isNear && (
              <mesh position={[0, 1.8, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 3.6, 16]} />
                <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}
