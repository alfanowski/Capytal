"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Bug, Lock, FileText, Radio, Terminal, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";

const services = [
  { icon: Search, title: "Reconnaissance", desc: "OSINT e raccolta informazioni su infrastruttura, dipendenti e superficie d'attacco esposta." },
  { icon: Bug, title: "Penetration Testing", desc: "Simulazione di attacchi reali su applicazioni web, API REST e reti interne aziendali." },
  { icon: Lock, title: "Security Hardening", desc: "Configurazione sicura di server Linux, firewall, policy IAM e controlli d'accesso." },
  { icon: Radio, title: "Network Analysis", desc: "Analisi del traffico di rete, rilevamento anomalie, segmentazione e monitoraggio attivo." },
  { icon: FileText, title: "Vulnerability Assessment", desc: "Scan sistematico e classificazione CVSS delle vulnerabilità per priorità di rischio." },
  { icon: Terminal, title: "Report & Remediation", desc: "Report tecnico dettagliato con remediation plan step-by-step e supporto post-fix." },
];

const threats = [
  "SQL Injection", "XSS & CSRF", "IDOR", "Remote Code Execution",
  "Broken Auth", "SSRF", "Path Traversal", "Misconfiguration",
  "XXE Injection", "Open Redirect", "SSTI", "Privilege Escalation",
  "Business Logic Flaws", "JWT Vulnerabilities", "Insecure Deserialization",
];

const whyUs = [
  "Report scritto da chi ha eseguito il test, non da uno scanner automatico.",
  "Metodologia OWASP Top 10 + test manuali su logica applicativa.",
  "Disclosure responsabile: nessun dato cliente viene esposto o conservato.",
  "Supporto post-remediation incluso: ti seguiamo fino alla chiusura delle vulnerabilità.",
];

export function CybersecSection() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(88,28,135,0.25) 0%, transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">
            // Sicurezza Offensiva
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <GlitchText text="CYBERSECURITY" as="h1" className="text-[clamp(2.5rem,8vw,6rem)] font-black font-mono tracking-tighter text-white leading-none block" />
            <GlitchText text="AUDITING" as="h1" className="text-[clamp(1.5rem,5vw,3rem)] font-black font-mono tracking-[0.25em] text-purple-400 leading-none block mt-1" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 text-zinc-400 font-mono text-sm leading-relaxed max-w-2xl">
            Il tuo sistema ha vulnerabilità che non conosci. Noi le troviamo prima che
            lo facciano soggetti non autorizzati — con metodologia, reportistica chiara
            e un piano di remediation concreto.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Richiedi un audit <ArrowRight className="size-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Cosa facciamo
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-black p-8 group hover:bg-purple-950/10 transition-colors">
                <s.icon className="size-5 text-purple-600 group-hover:text-purple-400 transition-colors mb-4" />
                <h3 className="font-mono font-black text-sm tracking-widest uppercase text-white mb-2">{s.title}</h3>
                <p className="font-mono text-xs text-zinc-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat marquee */}
      <section className="py-20 border-t border-zinc-900 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 mb-10">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase">
            // Vettori di attacco che copriamo
          </motion.p>
        </div>
        <InfiniteMarquee items={threats} speed={55} />
        <div className="mt-3">
          <InfiniteMarquee items={[...threats].reverse()} speed={40} />
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12">
            // Perché scegliere Capytal
          </motion.p>
          <div className="space-y-4">
            {whyUs.map((item, i) => (
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
            <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-3">// Zero vulnerabilità accettate</p>
            <h2 className="font-mono font-black text-2xl text-white">Il tuo sistema è davvero sicuro?</h2>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Scoprilo ora <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}


const services = [
  { icon: Search, title: "Reconnaissance", desc: "OSINT e raccolta informazioni su infrastruttura, dipendenti e superficie d'attacco." },
  { icon: Bug, title: "Penetration Testing", desc: "Simulazione di attacchi reali su applicazioni web, API e reti interne." },
  { icon: Lock, title: "Security Hardening", desc: "Configurazione sicura di server, firewall, policy e controlli d'accesso." },
  { icon: Radio, title: "Network Analysis", desc: "Analisi del traffico di rete, rilevamento anomalie e segmentazione." },
  { icon: FileText, title: "Vulnerability Assessment", desc: "Scan sistematico e classificazione delle vulnerabilità per priorità di rischio." },
  { icon: Terminal, title: "Report & Remediation", desc: "Report tecnico dettagliato con remediation plan step-by-step." },
];

const threats = [
  "SQL Injection", "XSS & CSRF", "IDOR", "RCE",
  "Broken Auth", "SSRF", "Path Traversal", "Misconfiguration",
];

export function CybersecSection() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-700/40 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(88,28,135,0.25) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6"
          >
            // Sicurezza Offensiva
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <GlitchText
              text="CYBERSECURITY"
              as="h1"
              className="text-[clamp(2.5rem,8vw,6rem)] font-black font-mono tracking-tighter text-white leading-none block"
            />
            <GlitchText
              text="AUDITING"
              as="h1"
              className="text-[clamp(1.5rem,5vw,3rem)] font-black font-mono tracking-[0.25em] text-purple-400 leading-none block mt-1"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-zinc-400 font-mono text-sm leading-relaxed max-w-2xl"
          >
            Il tuo sistema ha vulnerabilità che non conosci. Noi le troviamo prima che
            lo facciano soggetti non autorizzati — con metodologia, reportistica chiara
            e un piano di remediation concreto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <Button size="lg" asChild>
              <Link href="/contact">Richiedi un audit <ArrowRight className="size-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-12"
          >
            // Cosa facciamo
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-black p-8 group hover:bg-purple-950/10 transition-colors"
              >
                <s.icon className="size-5 text-purple-600 group-hover:text-purple-400 transition-colors mb-4" />
                <h3 className="font-mono font-black text-sm tracking-widest uppercase text-white mb-2">{s.title}</h3>
                <p className="font-mono text-xs text-zinc-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat tags */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-8"
          >
            // Vettori di attacco che copriamo
          </motion.p>
          <div className="flex flex-wrap gap-2">
            {threats.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="font-mono text-xs border border-zinc-800 text-zinc-500 px-3 py-1.5 hover:border-purple-700 hover:text-purple-400 transition-colors cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-3">// Zero vulnerabilità accettate</p>
            <h2 className="font-mono font-black text-2xl text-white">Il tuo sistema è davvero sicuro?</h2>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Scoprilo ora <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

