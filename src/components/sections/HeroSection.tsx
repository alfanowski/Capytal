"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground, FloatingOrbs } from "@/components/ui/animated-background";
import { GlitchText } from "@/components/ui/glitch-text";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <ParticlesBackground />
      <FloatingOrbs />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(88,28,135,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-purple-700/30 pointer-events-none" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-700/30 pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-700/30 pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r-2 border-b-2 border-purple-700/30 pointer-events-none" />

      {/* Scan line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-700/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 border border-purple-700/50 bg-purple-950/30 text-purple-300 font-mono text-xs px-4 py-1.5 rounded-full tracking-widest uppercase backdrop-blur-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Web Dev &amp; Cybersecurity Studio
          </span>
        </motion.div>

        {/* Glitch title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GlitchText
            text="CAPYTAL"
            as="h1"
            className="text-[clamp(4rem,16vw,10rem)] font-black font-mono tracking-tighter text-white leading-none block"
          />
          <GlitchText
            text="STUDIO"
            as="h1"
            className="text-[clamp(1.5rem,6vw,3.5rem)] font-black font-mono tracking-[0.35em] text-purple-400 leading-none block mt-1"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 text-zinc-500 font-mono text-sm md:text-base tracking-widest max-w-xl mx-auto leading-relaxed"
        >
          Costruiamo prodotti digitali ad alte prestazioni.
          <br />
          Li rendiamo impossibili da violare.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild className="group">
            <Link href="/servizi">
              <Globe className="size-4" />
              I nostri servizi
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Richiedi preventivo</Link>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto"
        >
          {[
            { value: "100%", label: "Custom Build" },
            { value: "24h", label: "Risposta Garantita" },
            { value: "0", label: "Vulnerability accettate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono font-black text-2xl text-purple-400">{stat.value}</div>
              <div className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-zinc-700"
        >
          <ArrowDown className="size-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
