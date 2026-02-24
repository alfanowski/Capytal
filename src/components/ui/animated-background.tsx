"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

/**
 * ParticlesBackground — stile alfa-s-industries adattato alla palette viola.
 * Canvas con: griglia sottile, scan line, particelle con life cycle,
 * connessioni tra particelle vicine, repulsione dal mouse.
 */
export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = ["#a78bfa", "#8b5cf6", "#c4b5fd", "#ffffff", "#7c3aed66"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = (x?: number, y?: number): Particle => {
      const cx = x ?? Math.random() * canvas.width;
      const cy = y ?? Math.random() * canvas.height;
      return {
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6 - 0.15,
        size: Math.random() * 2 + 0.4,
        opacity: Math.random() * 0.65 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 300 + 150,
      };
    };

    for (let i = 0; i < 120; i++) {
      particlesRef.current.push(createParticle());
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (Math.random() > 0.75) {
        particlesRef.current.push(
          createParticle(
            e.clientX + (Math.random() - 0.5) * 30,
            e.clientY + (Math.random() - 0.5) * 30
          )
        );
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = "rgba(139, 92, 246, 0.045)";
      ctx.lineWidth = 1;
      const gridSize = 70;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Scan line
      const scanY = ((Date.now() / 6000) % 1) * canvas.height;
      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      grad.addColorStop(0, "rgba(139,92,246,0)");
      grad.addColorStop(0.5, "rgba(139,92,246,0.05)");
      grad.addColorStop(1, "rgba(139,92,246,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 40, canvas.width, 80);

      // Particles
      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);

      for (const p of particlesRef.current) {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          p.vx += (dx / dist) * 0.12;
          p.vy += (dy / dist) * 0.12;
        }

        const lifeRatio = p.life / p.maxLife;
        const alpha = p.opacity * (1 - Math.pow(lifeRatio, 2));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.includes("66")
          ? p.color
          : p.color + Math.floor(alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();

        // Connections
        for (const p2 of particlesRef.current) {
          if (p === p2) continue;
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139,92,246,${0.12 * (1 - dist2 / 110) * alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      while (particlesRef.current.length < 120) {
        particlesRef.current.push(createParticle());
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/** GridBackground — usato nelle hero delle pagine interne */
export function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
      }}
    />
  );
}
