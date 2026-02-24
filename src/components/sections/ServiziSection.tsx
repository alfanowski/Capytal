"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Layers, Smartphone, Database, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";

const features = [
  { icon: Globe, text: "Web app React / Next.js performanti e scalabili" },
  { icon: Smartphone, text: "Design responsive e mobile-first su ogni dispositivo" },
  { icon: Database, text: "Backend Node.js, API REST e database relazionali e non" },
  { icon: Layers, text: "Architetture modulari e microservizi pronti alla crescita" },
  { icon: Zap, text: "Ottimizzazione SEO, performance e Core Web Vitals al top" },
  { icon: Code2, text: "Codice TypeScript pulito, testato e documentato" },
];

const process = [
  { step: "01", title: "Brief", desc: "Analizziamo le tue esigenze, il mercato target e gli obiettivi di business." },
  { step: "02", title: "Design", desc: "Wireframe e prototipo interattivo. Approvi prima che venga scritto codice." },
  { step: "03", title: "Build", desc: "Sviluppo agile con aggiornamenti frequenti. Nessuna sorpresa a fine corsa." },
  { step: "04", title: "Deploy", desc: "Rilascio su infrastruttura cloud con zero-downtime e monitoraggio attivo." },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB",
  "Tailwind CSS", "Docker", "Vercel", "GitHub Actions", "REST API", "GraphQL",
];

const promises = [
  "Nessun template: ogni riga di codice è scritta per il tuo caso specifico.",
  "Consegna nei tempi concordati — o ti diciamo prima che non è possibile.",
  "Proprietà del codice sorgente al 100% tua dalla prima riga.",
  "Manutenzione e supporto post-lancio disponibili senza costi nascosti.",
];

export function ServiziSection() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(88,28,135,0.25) 0%, transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">
            // Sviluppo Web
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <GlitchText text="FULL STACK" as="h1" className="text-[clamp(3rem,10vw,7rem)] font-black font-mono tracking-tighter text-white leading-none block" />
            <GlitchText text="DEVELOPMENT" as="h1" className="text-[clamp(1.5rem,5vw,3rem)] font-black font-mono tracking-[0.2em] text-purple-400 leading-none block mt-1" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 text-zinc-400 font-mono text-sm leading-relaxed max-w-2xl">
            Realizziamo prodotti digitali che funzionano. Non template, non soluzioni preconfezionate —
            ogni progetto è costruito da zero per risolvere il problema specifico del cliente.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Inizia il tuo progetto <ArrowRight className="size-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tech marquee */}
      <section className="py-10 border-t border-zinc-900 overflow-hidden">
        <InfiniteMarquee items={techStack} speed={50} separator="·" />
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Cosa include
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
            {features.map((f, i) => (
              <motion.div key={f.text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-black p-6 flex items-start gap-4 group hover:bg-purple-950/10 transition-colors">
                <f.icon className="size-4 text-purple-500 group-hover:text-purple-400 shrink-0 mt-0.5 transition-colors" />
                <p className="font-mono text-xs text-zinc-400 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Il nostro processo
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black p-8">
                <div className="font-mono text-4xl font-black text-purple-900 mb-4">{p.step}</div>
                <h3 className="font-mono font-black text-sm tracking-widest uppercase text-white mb-2">{p.title}</h3>
                <p className="font-mono text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Le nostre promesse
          </motion.p>
          <div className="space-y-4">
            {promises.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 border border-zinc-900 bg-zinc-950/50 p-5">
                <CheckCircle2 className="size-4 text-purple-500 shrink-0 mt-0.5" />
                <p className="font-mono text-sm text-zinc-400 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-3">// Pronti a partire</p>
            <h2 className="font-mono font-black text-2xl text-white">Hai un progetto in mente?</h2>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Contattaci ora <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}


const features = [
  { icon: Globe, text: "Web app React / Next.js performanti e scalabili" },
  { icon: Smartphone, text: "Design responsive e mobile-first" },
  { icon: Database, text: "Backend Node.js, API REST e database" },
  { icon: Layers, text: "Architetture modulari pronte alla crescita" },
  { icon: Zap, text: "Ottimizzazione SEO e Core Web Vitals" },
  { icon: Code2, text: "Codice pulito, tipizzato e documentato" },
];

const process = [
  { step: "01", title: "Brief", desc: "Analizziamo le tue esigenze, il mercato e gli obiettivi del progetto." },
  { step: "02", title: "Design", desc: "Wireframe e prototipo interattivo. Approvi prima che venga scritto codice." },
  { step: "03", title: "Build", desc: "Sviluppo agile con aggiornamenti frequenti. Nessuna sorpresa." },
  { step: "04", title: "Deploy", desc: "Rilascio su infrastruttura cloud con zero-downtime e monitoraggio attivo." },
];

export function ServiziSection() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-700/40 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(88,28,135,0.25) 0%, transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">
            // Sviluppo Web
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <GlitchText text="FULL STACK" as="h1" className="text-[clamp(3rem,10vw,7rem)] font-black font-mono tracking-tighter text-white leading-none block" />
            <GlitchText text="DEVELOPMENT" as="h1" className="text-[clamp(1.5rem,5vw,3rem)] font-black font-mono tracking-[0.2em] text-purple-400 leading-none block mt-1" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 text-zinc-400 font-mono text-sm leading-relaxed max-w-2xl">
            Realizziamo prodotti digitali che funzionano. Non template, non soluzioni preconfezionate —
            ogni progetto è costruito da zero per risolvere il problema specifico del cliente.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Inizia il tuo progetto <ArrowRight className="size-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Cosa include
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
            {features.map((f, i) => (
              <motion.div key={f.text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-black p-6 flex items-start gap-4">
                <f.icon className="size-4 text-purple-500 shrink-0 mt-0.5" />
                <p className="font-mono text-xs text-zinc-400 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Il nostro processo
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black p-8">
                <div className="font-mono text-4xl font-black text-purple-900 mb-4">{p.step}</div>
                <h3 className="font-mono font-black text-sm tracking-widest uppercase text-white mb-2">{p.title}</h3>
                <p className="font-mono text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-3">// Pronti a partire</p>
            <h2 className="font-mono font-black text-2xl text-white">Hai un progetto in mente?</h2>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Contattaci ora <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

