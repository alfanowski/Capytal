"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, ShieldCheck, Mail, User } from "lucide-react";

const pages = [
  {
    icon: Code2,
    label: "Sviluppo Web",
    href: "/servizi",
    description: "Applicazioni web su misura. Performance, scalabilità e design impeccabile.",
  },
  {
    icon: ShieldCheck,
    label: "Cybersecurity",
    href: "/cybersecurity",
    description: "Penetration testing e security audit. Troviamo le falle prima degli attaccanti.",
  },
  {
    icon: User,
    label: "Chi siamo",
    href: "/about",
    description: "Il profilo di Capytal Studio e il metodo di lavoro.",
  },
  {
    icon: Mail,
    label: "Contatti",
    href: "/contact",
    description: "Hai un progetto? Parliamone. Risposta entro 24 ore.",
  },
];

export function HomePreviewStrip() {
  return (
    <section className="relative bg-black border-t border-zinc-900 py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12"
        >
          // Esplora il sito
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900">
          {pages.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className="group flex flex-col gap-4 bg-black p-8 h-full hover:bg-purple-950/10 transition-colors"
              >
                <div className="w-10 h-10 border border-zinc-800 group-hover:border-purple-700/60 flex items-center justify-center transition-colors">
                  <item.icon className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-black text-sm tracking-widest uppercase text-white group-hover:text-purple-300 transition-colors mb-2">
                    {item.label}
                  </h3>
                  <p className="font-mono text-xs text-zinc-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center gap-2 text-zinc-700 group-hover:text-purple-400 transition-colors font-mono text-xs tracking-widest">
                  <span>Scopri</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

