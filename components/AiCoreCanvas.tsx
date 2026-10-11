"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface AiCoreCanvasProps {
  onSelectProject: (projectId: string) => void;
  onOverrideTrigger?: () => void;
}

export default function AiCoreCanvas({
  onSelectProject,
  onOverrideTrigger,
}: AiCoreCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<{
    id: string;
    name: string;
    category: string;
    stack: string;
    x: number;
    y: number;
  } | null>(null);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for entire interactive core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central PRATEEK_CORE
    // Outer wireframe cage (Icosahedron)
    const cageGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cage);

    // Inner pulsating core sphere
    const coreSphereGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreSphereMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const coreSphere = new THREE.Mesh(coreSphereGeo, coreSphereMat);
    coreGroup.add(coreSphere);

    // Dense central glow point
    const innerGeo = new THREE.OctahedronGeometry(0.45, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: false,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // Orbital Rings
    const ringGeo1 = new THREE.RingGeometry(2.5, 2.52, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    scene.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(3.3, 3.32, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    // 2. Orbiting Satellite Nodes (3 Flagship Projects)
    const satellites = [
      {
        id: "veristream",
        name: "VERISTREAM",
        category: "Computer Vision & Deepfake Telemetry",
        stack: "FastAPI • OpenCV • rPPG • C2PA • WebSockets",
        color: 0x059669, // Emerald
        radius: 2.5,
        speed: 0.6,
        mesh: new THREE.Mesh(
          new THREE.SphereGeometry(0.24, 16, 16),
          new THREE.MeshBasicMaterial({ color: 0x10b981 })
        ),
      },
      {
        id: "docuaudit",
        name: "DOCUAUDIT",
        category: "Digital Document Forensics",
        stack: "PyMuPDF • ELA • ORB • DBSCAN • PKCS#7",
        color: 0x0891b2, // Cyan
        radius: 3.1,
        speed: -0.45,
        mesh: new THREE.Mesh(
          new THREE.BoxGeometry(0.35, 0.35, 0.35),
          new THREE.MeshBasicMaterial({ color: 0x06b6d4 })
        ),
      },
      {
        id: "liquiditypulse",
        name: "LIQUIDITYPULSE",
        category: "Quantitative Market Microstructure",
        stack: "L2 Depth • OFI • VPIN • Redis • TradingView",
        color: 0x7c3aed, // Violet
        radius: 2.8,
        speed: 0.35,
        mesh: new THREE.Mesh(
          new THREE.OctahedronGeometry(0.28, 0),
          new THREE.MeshBasicMaterial({ color: 0x8b5cf6 })
        ),
      },
    ];

    satellites.forEach((sat) => {
      scene.add(sat.mesh);
    });

    // 3. Floating Ambient Data Particles
    const particlesCount = 140;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 11;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x2563eb,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction
    const mouse = new THREE.Vector2(-10, -10);
    const raycaster = new THREE.Raycaster();

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleClick = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const clickY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(new THREE.Vector2(clickX, clickY), camera);

      // Check satellites
      const intersects = raycaster.intersectObjects(
        satellites.map((s) => s.mesh)
      );
      if (intersects.length > 0) {
        const hitSat = satellites.find((s) => s.mesh === intersects[0].object);
        if (hitSat) {
          onSelectProject(hitSat.id);
        }
      } else {
        // Check central core for triple-click easter egg
        const coreHits = raycaster.intersectObject(cage);
        if (coreHits.length > 0) {
          setClickCount((prev) => {
            const next = prev + 1;
            if (next >= 3) {
              if (onOverrideTrigger) onOverrideTrigger();
              return 0;
            }
            return next;
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("click", handleClick);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate core
      coreGroup.rotation.y = elapsedTime * 0.25;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15;
      innerCore.rotation.y = -elapsedTime * 0.5;
      innerCore.rotation.z = elapsedTime * 0.4;

      // Pulse inner sphere scale
      const scale = 1 + Math.sin(elapsedTime * 2.5) * 0.05;
      coreSphere.scale.set(scale, scale, scale);

      // Orbit satellites
      satellites.forEach((sat, i) => {
        const angle = elapsedTime * sat.speed + (i * Math.PI * 2) / 3;
        sat.mesh.position.x = Math.cos(angle) * sat.radius;
        sat.mesh.position.z = Math.sin(angle) * sat.radius;
        sat.mesh.position.y = Math.sin(angle * 2) * 0.4;

        sat.mesh.rotation.x += 0.02;
        sat.mesh.rotation.y += 0.03;
      });

      // Raycasting for Hover state
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        satellites.map((s) => s.mesh)
      );

      if (intersects.length > 0) {
        const hitSat = satellites.find((s) => s.mesh === intersects[0].object);
        if (hitSat) {
          const vector = new THREE.Vector3();
          hitSat.mesh.getWorldPosition(vector);
          vector.project(camera);
          const rect = container.getBoundingClientRect();
          const screenX = ((vector.x + 1) * rect.width) / 2;
          const screenY = ((-vector.y + 1) * rect.height) / 2;

          setHoveredNode({
            id: hitSat.id,
            name: hitSat.name,
            category: hitSat.category,
            stack: hitSat.stack,
            x: screenX,
            y: screenY,
          });
          document.body.style.cursor = "pointer";
        }
      } else {
        setHoveredNode(null);
        document.body.style.cursor = "default";
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onSelectProject, onOverrideTrigger]);

  return (
    <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full absolute inset-0 z-0" />

      {/* Floating HUD Tooltip when Satellite Node is Hovered */}
      {hoveredNode && (
        <div
          className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-4 px-4 py-3 rounded-xl bg-white/95 backdrop-blur-md border border-blue-500/30 shadow-[0_10px_25px_rgba(37,99,235,0.15)] text-left min-w-[240px] animate-in fade-in zoom-in-95 duration-150"
          style={{
            left: `${hoveredNode.x}px`,
            top: `${hoveredNode.y}px`,
          }}
        >
          <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-200">
            <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
              {hoveredNode.name}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              CLICK TO ENTER
            </span>
          </div>
          <p className="text-[11px] font-medium text-slate-700 mt-1.5 leading-snug">
            {hoveredNode.category}
          </p>
          <div className="text-[10px] font-mono text-slate-500 mt-1">
            {hoveredNode.stack}
          </div>
        </div>
      )}

      {/* Subdued Central Label Overlays */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm text-[11px] font-mono text-slate-600">
        <span className="flex items-center gap-1.5 text-blue-600 font-semibold">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          PRATEEK_CORE
        </span>
        <span className="text-slate-300">|</span>
        <span className="hidden sm:inline text-slate-500">
          Orbiting: VERISTREAM • DOCUAUDIT • LIQUIDITYPULSE
        </span>
      </div>
    </div>
  );
}
