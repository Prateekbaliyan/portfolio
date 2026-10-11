"use client";

import { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Light Laboratory Technical Grid */}
      <div className="absolute inset-0 bg-lab-grid opacity-75" />

      {/* Top Ambient Light Vignette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl opacity-80" />

      {/* Soft Ambient Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/8 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] -right-32 w-[500px] h-[500px] bg-violet-400/6 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 left-[15%] w-[450px] h-[450px] bg-cyan-400/8 rounded-full blur-[130px]" />

      {/* Interactive Cursor Following Light Glow */}
      {isClient && mousePos.x >= 0 && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none transition-transform duration-100 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, rgba(6, 182, 212, 0.02) 45%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
