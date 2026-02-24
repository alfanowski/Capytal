"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function BackHome() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="fixed top-6 left-6 z-50"
    >
      <Link
        href="/"
        className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-zinc-500 hover:text-purple-400 transition-colors border border-zinc-800 hover:border-purple-700 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-md"
      >
        <ArrowLeft className="size-3 group-hover:-translate-x-0.5 transition-transform" />
        Home
      </Link>
    </motion.div>
  );
}

