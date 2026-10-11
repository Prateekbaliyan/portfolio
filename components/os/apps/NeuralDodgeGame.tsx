"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, Trophy, RotateCcw, X, ShieldAlert, Cpu } from "lucide-react";

interface NeuralDodgeGameProps {
  onClose: () => void;
}

export default function NeuralDodgeGame({ onClose }: NeuralDodgeGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<"intro" | "playing" | "gameover" | "victory">("intro");
  const [score, setScore] = useState(0);
  const [collectedNodes, setCollectedNodes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45); // 45 second run

  const gameLoopRef = useRef<number | null>(null);
  const playerRef = useRef({ x: 250, y: 350, radius: 14, speed: 6 });
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const packetsRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string }>>([]);
  const collectiblesRef = useRef<Array<{ x: number; y: number; radius: number; type: "ai" | "data" }>>([]);

  // Start the game
  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setCollectedNodes(0);
    setTimeLeft(45);
    playerRef.current = { x: 250, y: 350, radius: 14, speed: 6 };
    packetsRef.current = [];
    collectiblesRef.current = [];
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, []);

  // Timer countdown
  useEffect(() => {
    if (gameState !== "playing") return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameState("victory");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState]);

  // Main canvas loop
  useEffect(() => {
    if (gameState !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameCount = 0;

    const render = () => {
      frameCount++;
      const width = canvas.width;
      const height = canvas.height;

      // Update player position
      if (keysRef.current["ArrowLeft"] || keysRef.current["a"] || keysRef.current["A"]) {
        playerRef.current.x = Math.max(playerRef.current.radius, playerRef.current.x - playerRef.current.speed);
      }
      if (keysRef.current["ArrowRight"] || keysRef.current["d"] || keysRef.current["D"]) {
        playerRef.current.x = Math.min(width - playerRef.current.radius, playerRef.current.x + playerRef.current.speed);
      }
      if (keysRef.current["ArrowUp"] || keysRef.current["w"] || keysRef.current["W"]) {
        playerRef.current.y = Math.max(playerRef.current.radius, playerRef.current.y - playerRef.current.speed);
      }
      if (keysRef.current["ArrowDown"] || keysRef.current["s"] || keysRef.current["S"]) {
        playerRef.current.y = Math.min(height - playerRef.current.radius, playerRef.current.y + playerRef.current.speed);
      }

      // Spawn corrupted packets (obstacles)
      if (frameCount % 30 === 0) {
        const side = Math.floor(Math.random() * 4);
        let px = 0, py = 0, vx = 0, vy = 0;
        const speed = 2 + Math.random() * 2.5;

        if (side === 0) {
          px = Math.random() * width;
          py = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = speed;
        } else if (side === 1) {
          px = width + 10;
          py = Math.random() * height;
          vx = -speed;
          vy = (Math.random() - 0.5) * 2;
        } else if (side === 2) {
          px = Math.random() * width;
          py = height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -speed;
        } else {
          px = -10;
          py = Math.random() * height;
          vx = speed;
          vy = (Math.random() - 0.5) * 2;
        }

        packetsRef.current.push({
          x: px,
          y: py,
          vx,
          vy,
          radius: 8 + Math.random() * 8,
          color: Math.random() > 0.5 ? "#f43f5e" : "#8b5cf6",
        });
      }

      // Spawn good data packets
      if (frameCount % 55 === 0 && collectiblesRef.current.length < 5) {
        collectiblesRef.current.push({
          x: 30 + Math.random() * (width - 60),
          y: 30 + Math.random() * (height - 60),
          radius: 10,
          type: Math.random() > 0.4 ? "ai" : "data",
        });
      }

      // Move packets
      packetsRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
      });

      // Filter off-screen packets
      packetsRef.current = packetsRef.current.filter(
        (p) => p.x > -30 && p.x < width + 30 && p.y > -30 && p.y < height + 30
      );

      // Collision check with packets
      for (const p of packetsRef.current) {
        const dx = playerRef.current.x - p.x;
        const dy = playerRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < playerRef.current.radius + p.radius - 2) {
          setGameState("gameover");
          return;
        }
      }

      // Collision check with collectibles
      collectiblesRef.current = collectiblesRef.current.filter((c) => {
        const dx = playerRef.current.x - c.x;
        const dy = playerRef.current.y - c.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < playerRef.current.radius + c.radius) {
          setScore((s) => s + (c.type === "ai" ? 150 : 100));
          setCollectedNodes((n) => n + 1);
          return false;
        }
        return true;
      });

      // Clear & Draw
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, width, height);

      // Grid background
      ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Collectibles
      collectiblesRef.current.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = c.type === "ai" ? "#06b6d4" : "#10b981";
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Pulsing outer ring
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius + 4 + Math.sin(frameCount * 0.1) * 2, 0, Math.PI * 2);
        ctx.strokeStyle = c.type === "ai" ? "rgba(6,182,212,0.4)" : "rgba(16,185,129,0.4)";
        ctx.stroke();
      });

      // Draw Corrupted Packets
      packetsRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Draw Player Neural Node
      ctx.beginPath();
      ctx.arc(playerRef.current.x, playerRef.current.y, playerRef.current.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#38bdf8";
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Neural aura
      ctx.beginPath();
      ctx.arc(playerRef.current.x, playerRef.current.y, playerRef.current.radius + 6, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
      ctx.lineWidth = 2;
      ctx.stroke();

      gameLoopRef.current = requestAnimationFrame(render);
    };

    gameLoopRef.current = requestAnimationFrame(render);

    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameState]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900 text-white font-sans select-none">
      {/* Top Header */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2 text-cyan-400">
          <Cpu className="w-4 h-4" />
          <span className="font-bold">NEURAL DODGE // OS EASTER EGG</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">SCORE: <strong className="text-white">{score}</strong></span>
          <span className="text-slate-400">TIME: <strong className="text-cyan-300">{timeLeft}s</strong></span>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative mt-8 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
        <canvas
          ref={canvasRef}
          width={520}
          height={380}
          className="bg-slate-950 block"
        />

        {/* INTRO SCREEN */}
        {gameState === "intro" && (
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-6 h-6 animate-spin" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">NEURAL DODGE</h3>
              <p className="text-xs text-slate-400 max-w-xs mt-1">
                Guide your neural core with <strong>W A S D</strong> or <strong>Arrow Keys</strong>.
                Collect clean cyan & emerald data nodes while dodging corrupted packets.
              </p>
            </div>
            <button
              onClick={startGame}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer"
            >
              Start Simulation (45s)
            </button>
          </div>
        )}

        {/* GAME OVER SCREEN */}
        {gameState === "gameover" && (
          <div className="absolute inset-0 bg-rose-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
            <ShieldAlert className="w-12 h-12 text-rose-400" />
            <div>
              <h3 className="text-lg font-bold text-rose-200">PACKET COLLISION DETECTED</h3>
              <p className="text-xs text-rose-300/80 mt-1">
                Data stream disrupted. Nodes Collected: <strong>{collectedNodes}</strong> | Score: <strong>{score}</strong>
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={startGame}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retry
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs cursor-pointer"
              >
                Return to PRATEEK OS
              </button>
            </div>
          </div>
        )}

        {/* VICTORY SCREEN */}
        {gameState === "victory" && (
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
            <Trophy className="w-12 h-12 text-amber-400 animate-bounce" />
            <div>
              <h3 className="text-lg font-bold text-white">SIMULATION COMPLETE</h3>
              <p className="text-xs text-slate-300 mt-1">
                You successfully gathered <strong>{collectedNodes} data nodes</strong> with a score of <strong>{score}</strong>!
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={startGame}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Play Again
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer"
              >
                Return to PRATEEK OS
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="text-[11px] font-mono text-slate-500 mt-3">
        Use WASD or Arrow Keys to navigate // Fast 45s round
      </div>
    </div>
  );
}
