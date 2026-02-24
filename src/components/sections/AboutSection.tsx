"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Terminal, Shield, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { CONTACT_EMAIL } from "@/lib/constants";

const values = [
  { label: "Codice", desc: "Scritto per durare. Modulare, tipizzato, documentato. Nessun spaghetti code." },
  { label: "Sicurezza", desc: "Non è un plus opzionale. Ogni progetto viene costruito con la sicurezza in mente dal giorno uno." },
  { label: "Chiarezza", desc: "Comunicazione diretta, nessun gergo inutile. Sai sempre a che punto siamo." },
];

const stack = [
  { icon: Code2, label: "Full Stack", items: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"] },
  { icon: Shield, label: "Security", items: ["Kali Linux", "Burp Suite", "Metasploit", "OSINT", "Wireshark"] },
  { icon: Cpu, label: "AI & Tools", items: ["Python", "OpenAI API", "LangChain", "Docker", "Git"] },
];

export function AboutSection() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(88,28,135,0.2) 0%, transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">
            // Chi siamo
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <GlitchText text="CAPYTAL" as="h1" className="text-[clamp(3rem,10vw,7rem)] font-black font-mono tracking-tighter text-white leading-none block" />
            <GlitchText text="STUDIO" as="h1" className="text-[clamp(1.5rem,5vw,3rem)] font-black font-mono tracking-[0.3em] text-purple-400 leading-none block mt-1" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 text-zinc-400 font-mono text-sm leading-relaxed max-w-2xl">
            Capytal è uno studio specializzato in sviluppo web full stack e cybersecurity.
            Lavoriamo con aziende e professionisti che vogliono un prodotto digitale serio —
            costruito bene, protetto meglio.
          </motion.p>
        </div>
      </section>

      {/* Founder profile */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Il fondatore
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-900">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-black p-10"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 border border-purple-700/50 bg-purple-950/30 flex items-center justify-center shrink-0">
                  <Terminal className="size-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="font-mono font-black text-lg text-white tracking-tight">Andrea Alfano</h2>
                  <p className="font-mono text-xs text-purple-400 tracking-widest mt-0.5">alias <span className="text-purple-300">alfanowski</span></p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm text-zinc-400 leading-relaxed">
                <p>
                  Full Stack Developer con una specializzazione in cybersecurity offensiva.
                  Scrivo codice che funziona e trovo le falle in quello che non dovrebbe.
                </p>
                <p>
                  Anni di esperienza nel settore: dalla costruzione di architetture web scalabili
                  all&apos;esecuzione di penetration test su applicazioni reali in produzione.
                </p>
                <p>
                  Linux come sistema operativo principale, terminale come interfaccia preferita,
                  caffè come carburante.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Hacking Etico", "Open Source", "Linux", "AI Engineering", "CTF Player"].map((tag) => (
                  <span key={tag} className="font-mono text-[10px] border border-zinc-800 text-zinc-600 px-2.5 py-1 tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-900">
                <a
                  href="https://github.com/alfanowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-purple-400 transition-colors"
                >
                  <Github className="size-3.5" />
                  github.com/alfanowski
                </a>
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-black p-10 space-y-8"
            >
              {stack.map((cat) => (
                <div key={cat.label}>
                  <div className="flex items-center gap-2 mb-3">
                    <cat.icon className="size-3.5 text-purple-600" />
                    <span className="font-mono text-[10px] text-purple-500/70 tracking-widest uppercase">{cat.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="font-mono text-xs border border-zinc-800 bg-zinc-950 text-zinc-400 px-2.5 py-1 hover:border-purple-700/50 hover:text-purple-300 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Il nostro approccio
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-900">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-black p-8"
              >
                <div className="font-mono font-black text-3xl text-purple-900 mb-4">0{i + 1}</div>
                <h3 className="font-mono font-black text-sm tracking-widest uppercase text-white mb-3">{v.label}</h3>
                <p className="font-mono text-xs text-zinc-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-3">// Lavoriamo insieme</p>
            <h2 className="font-mono font-black text-2xl text-white">Porta il tuo progetto da noi.</h2>
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono text-xs text-zinc-600 hover:text-purple-400 transition-colors mt-2 inline-block">
              {CONTACT_EMAIL}
            </a>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Inizia ora <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}


const values = [
  { label: "Codice", desc: "Scritto per durare. Modulare, tipizzato, documentato. Nessun spaghetti code." },
  { label: "Sicurezza", desc: "Non è un plus opzionale. Ogni progetto viene costruito con la sicurezza in mente dal giorno uno." },
  { label: "Chiarezza", desc: "Comunicazione diretta, nessun gergo inutile. Sai sempre a che punto siamo." },
];

export function AboutSection() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-700/40 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(88,28,135,0.2) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6"
          >
            // Chi siamo
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <GlitchText
              text="CAPYTAL"
              as="h1"
              className="text-[clamp(3rem,10vw,7rem)] font-black font-mono tracking-tighter text-white leading-none block"
            />
            <GlitchText
              text="STUDIO"
              as="h1"
              className="text-[clamp(1.5rem,5vw,3rem)] font-black font-mono tracking-[0.3em] text-purple-400 leading-none block mt-1"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-zinc-400 font-mono text-sm leading-relaxed max-w-2xl"
          >
            Capytal è uno studio specializzato in sviluppo web full stack e cybersecurity.
            Lavoriamo con aziende e professionisti che vogliono un prodotto digitale serio —
            costruito bene, protetto meglio.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12"
          >
            // Il nostro approccio
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-900">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black p-8"
              >
                <div className="font-mono font-black text-3xl text-purple-900 mb-4">0{i + 1}</div>
                <h3 className="font-mono font-black text-sm tracking-widest uppercase text-white mb-3">{v.label}</h3>
                <p className="font-mono text-xs text-zinc-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-3">// Lavoriamo insieme</p>
            <h2 className="font-mono font-black text-2xl text-white">Porta il tuo progetto da noi.</h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-mono text-xs text-zinc-600 hover:text-purple-400 transition-colors mt-2 inline-block"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Inizia ora <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

