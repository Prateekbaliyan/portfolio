"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface PlayerControllerProps {
  playerPosRef: React.MutableRefObject<[number, number, number]>;
  onPositionUpdate: (pos: [number, number, number]) => void;
  mobileMove: { x: number; z: number };
  mobileJumpTrigger: number;
  mobileSprint: boolean;
  reducedMotion?: boolean;
  teleportPos?: [number, number, number] | null;
}

export default function PlayerController({
  playerPosRef,
  onPositionUpdate,
  mobileMove,
  mobileJumpTrigger,
  mobileSprint,
  reducedMotion = false,
  teleportPos = null,
}: PlayerControllerProps) {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  // Sync teleport target if provided
  useEffect(() => {
    if (teleportPos && groupRef.current) {
      groupRef.current.position.set(teleportPos[0], teleportPos[1], teleportPos[2]);
      playerPosRef.current = [teleportPos[0], teleportPos[1], teleportPos[2]];
      onPositionUpdate(playerPosRef.current);
    }
  }, [teleportPos, onPositionUpdate, playerPosRef]);

  // Mesh refs for limbs procedural animation
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  // Movement State
  const velocity = useRef(new THREE.Vector3());
  const isGrounded = useRef(true);
  const keys = useRef<{ [key: string]: boolean }>({});
  const lastJumpTrigger = useRef(mobileJumpTrigger);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.code] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.code] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const clampedDelta = Math.min(delta, 0.1);

    // Read keyboard inputs
    const forward =
      (keys.current["KeyW"] || keys.current["ArrowUp"] ? 1 : 0) -
      (keys.current["KeyS"] || keys.current["ArrowDown"] ? 1 : 0);
    const strafe =
      (keys.current["KeyD"] || keys.current["ArrowRight"] ? 1 : 0) -
      (keys.current["KeyA"] || keys.current["ArrowLeft"] ? 1 : 0);
    const sprint = keys.current["ShiftLeft"] || keys.current["ShiftRight"] || mobileSprint;
    const jump = keys.current["Space"];

    // Mobile jump trigger check
    if (mobileJumpTrigger !== lastJumpTrigger.current) {
      lastJumpTrigger.current = mobileJumpTrigger;
      if (isGrounded.current) {
        velocity.current.y = 7.5;
        isGrounded.current = false;
      }
    }

    if (jump && isGrounded.current) {
      velocity.current.y = 7.5;
      isGrounded.current = false;
    }

    // Combine keyboard & mobile joystick movement
    let moveX = strafe + mobileMove.x;
    let moveZ = -forward + mobileMove.z;

    const inputLength = Math.sqrt(moveX * moveX + moveZ * moveZ);
    if (inputLength > 1) {
      moveX /= inputLength;
      moveZ /= inputLength;
    }

    const speed = (sprint ? 9.5 : 5.5) * (inputLength > 0.05 ? 1 : 0);

    // Apply movement relative to world direction
    const currentPos = groupRef.current.position;

    if (inputLength > 0.05) {
      currentPos.x += moveX * speed * clampedDelta;
      currentPos.z += moveZ * speed * clampedDelta;

      // Face walking direction
      const angle = Math.atan2(moveX, moveZ);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        angle,
        0.2
      );

      // Limb swing animation
      const walkCycle = state.clock.getElapsedTime() * (sprint ? 16 : 10);
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = Math.sin(walkCycle) * 0.6;
        rightLegRef.current.rotation.x = -Math.sin(walkCycle) * 0.6;
      }
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = -Math.sin(walkCycle) * 0.5;
        rightArmRef.current.rotation.x = Math.sin(walkCycle) * 0.5;
      }
    } else {
      // Idle pose
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = THREE.MathUtils.lerp(
          leftLegRef.current.rotation.x,
          0,
          0.2
        );
        rightLegRef.current.rotation.x = THREE.MathUtils.lerp(
          rightLegRef.current.rotation.x,
          0,
          0.2
        );
      }
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.x = THREE.MathUtils.lerp(
          leftArmRef.current.rotation.x,
          0,
          0.2
        );
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
          rightArmRef.current.rotation.x,
          0,
          0.2
        );
      }
    }

    // Apply Gravity & Ground Clamp
    velocity.current.y -= 18 * clampedDelta;
    currentPos.y += velocity.current.y * clampedDelta;

    // Ground level clamp
    const groundHeight = 0.5;
    if (currentPos.y <= groundHeight) {
      currentPos.y = groundHeight;
      velocity.current.y = 0;
      isGrounded.current = true;
    }

    // World Map boundary clamping [-75, 75] x [-50, 95]
    currentPos.x = THREE.MathUtils.clamp(currentPos.x, -75, 75);
    currentPos.z = THREE.MathUtils.clamp(currentPos.z, -50, 95);

    // Update player position reference
    playerPosRef.current = [currentPos.x, currentPos.y, currentPos.z];
    onPositionUpdate(playerPosRef.current);

    // Smooth Third-Person Camera Tracking
    const cameraTarget = new THREE.Vector3(
      currentPos.x,
      currentPos.y + 1.2,
      currentPos.z
    );
    const cameraOffset = new THREE.Vector3(
      currentPos.x,
      currentPos.y + 4.8,
      currentPos.z + 8.5
    );

    camera.position.lerp(cameraOffset, 0.12);
    camera.lookAt(cameraTarget);
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {/* 3D Stylized Futuristic Developer Character */}
      {/* Torso / Developer Hoodie */}
      <mesh position={[0, 0.75, 0]} castShadow>
        <boxGeometry args={[0.55, 0.65, 0.35]} />
        <meshStandardMaterial color="#2563eb" roughness={0.4} />
      </mesh>

      {/* Backpack / Tech Rig */}
      <mesh position={[0, 0.8, -0.22]}>
        <boxGeometry args={[0.42, 0.5, 0.16]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} />
      </mesh>

      {/* Glowing ID Badge on Chest */}
      <mesh position={[0.15, 0.88, 0.185]}>
        <boxGeometry args={[0.1, 0.14, 0.02]} />
        <meshBasicMaterial color="#06b6d4" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.25, 0]} castShadow>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color="#fed7aa" roughness={0.6} />
      </mesh>

      {/* Hair / Headset */}
      <mesh position={[0, 1.34, -0.04]}>
        <boxGeometry args={[0.3, 0.18, 0.3]} />
        <meshStandardMaterial color="#1e293b" roughness={0.5} />
      </mesh>

      {/* Left Arm */}
      <mesh ref={leftArmRef} position={[-0.38, 0.75, 0]}>
        <boxGeometry args={[0.14, 0.55, 0.16]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.4} />
      </mesh>

      {/* Right Arm */}
      <mesh ref={rightArmRef} position={[0.38, 0.75, 0]}>
        <boxGeometry args={[0.14, 0.55, 0.16]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.4} />
      </mesh>

      {/* Left Leg */}
      <mesh ref={leftLegRef} position={[-0.16, 0.22, 0]}>
        <boxGeometry args={[0.18, 0.55, 0.2]} />
        <meshStandardMaterial color="#1e293b" roughness={0.5} />
      </mesh>

      {/* Right Leg */}
      <mesh ref={rightLegRef} position={[0.16, 0.22, 0]}>
        <boxGeometry args={[0.18, 0.55, 0.2]} />
        <meshStandardMaterial color="#1e293b" roughness={0.5} />
      </mesh>

      {/* Feet / Futuristic Sneakers */}
      <mesh position={[-0.16, -0.05, 0.05]}>
        <boxGeometry args={[0.18, 0.1, 0.28]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </mesh>
      <mesh position={[0.16, -0.05, 0.05]}>
        <boxGeometry args={[0.18, 0.1, 0.28]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.2} />
      </mesh>

      {/* Subtle Player Aura Glow on Ground */}
      <mesh position={[0, -0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.75, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
