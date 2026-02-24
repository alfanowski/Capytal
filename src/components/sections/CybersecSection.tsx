"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Bug, Lock, FileText, Radio, Terminal, ShieldAlert, Eye, Network, KeyRound, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";

const stats = [
	{ value: "0", label: "Vulnerabilità accettate" },
	{ value: "100%", label: "Test manuali" },
	{ value: "OWASP", label: "Metodologia" },
	{ value: "24h", label: "Report consegnato" },
];

const services = [
	{ icon: Search, title: "Reconnaissance", desc: "OSINT avanzato su infrastruttura, dipendenti, domini, email e superficie d'attacco esposta. Raccolta passiva e attiva." },
	{ icon: Bug, title: "Penetration Testing", desc: "Simulazione di attacchi reali su applicazioni web, API REST/GraphQL, autenticazione e logica applicativa." },
	{ icon: Lock, title: "Security Hardening", desc: "Configurazione sicura di server Linux, Nginx, firewall UFW/iptables, policy IAM e controlli d'accesso." },
	{ icon: Network, title: "Network Analysis", desc: "Analisi del traffico con Wireshark, rilevamento anomalie, segmentazione VLAN e monitoraggio attivo." },
	{ icon: FileText, title: "Vulnerability Assessment", desc: "Scan sistematico con Nmap, Nuclei, Nikto e validazione manuale. Classificazione CVSS per priorità di rischio." },
	{ icon: Terminal, title: "Report & Remediation", desc: "Report tecnico e executive summary. Remediation plan step-by-step con supporto fino alla chiusura delle CVE." },
	{ icon: Eye, title: "OSINT & Social Eng.", desc: "Mappatura della superficie d'attacco esposta online: metadati, credenziali leaked, footprint digitale." },
	{ icon: KeyRound, title: "Auth & Session Testing", desc: "Analisi di JWT, OAuth2, session hijacking, brute force, credential stuffing e broken access control." },
	{ icon: ShieldAlert, title: "Red Team Simulation", desc: "Scenario di attacco realistico multi-fase: da reconnaissance a post-exploitation, con report completo." },
];

const threats = [
	"SQL Injection", "XSS & CSRF", "IDOR", "Remote Code Execution",
	"Broken Auth", "SSRF", "Path Traversal", "Misconfiguration",
	"XXE Injection", "Open Redirect", "SSTI", "Privilege Escalation",
	"Business Logic Flaws", "JWT Vulnerabilities", "Insecure Deserialization",
	"CORS Misconfiguration", "Host Header Injection", "OAuth Flaws",
];

const methodology = [
	{ step: "01", title: "Scoping", desc: "Definiamo perimetro, obiettivi, regole di ingaggio e asset in scope. Nessun test al di fuori degli accordi." },
	{ step: "02", title: "Recon", desc: "Raccolta informazioni passiva e attiva. OSINT, fingerprinting, enumerazione servizi e mapping della superficie." },
	{ step: "03", title: "Exploitation", desc: "Test manuali e strumenti offensivi per identificare e sfruttare vulnerabilità reali. Zero false positives da scanner." },
	{ step: "04", title: "Report", desc: "Report tecnico con PoC, severity CVSS, remediation plan e executive summary leggibile anche dai non tecnici." },
];

const whyUs = [
	{ icon: Terminal, text: "Test eseguiti da un professionista reale — non da uno scanner automatico." },
	{ icon: FileText, text: "Report con PoC funzionante, severity CVSS e remediation step-by-step." },
	{ icon: Lock, text: "Metodologia OWASP Top 10 + test manuali su logica applicativa specifica." },
	{ icon: ShieldAlert, text: "Disclosure responsabile: nessun dato cliente viene esposto o conservato." },
	{ icon: AlertTriangle, text: "Supporto post-remediation incluso: ti seguiamo fino alla chiusura delle vulnerabilità." },
	{ icon: Eye, text: "Comunicazione diretta e trasparente durante tutto il processo di audit." },
];

const containerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CybersecSection() {
	return (
		<div className="bg-black min-h-screen">

			{/* Hero */}
			<section className="relative py-32 overflow-hidden">
				<div className="absolute inset-0 pointer-events-none" style={{
					backgroundImage: "linear-gradient(rgba(139,92,246,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.045) 1px,transparent 1px)",
					backgroundSize: "60px 60px",
				}} />
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />

				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
							<motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
								className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">
								// Sicurezza Offensiva
							</motion.p>
							<GlitchText text="CYBERSECURITY" as="h1" className="text-[clamp(2rem,7vw,5.5rem)] font-black font-mono tracking-tighter text-white leading-none block" />
							<GlitchText text="AUDITING" as="h1" className="text-[clamp(1.2rem,4vw,2.5rem)] font-black font-mono tracking-[0.25em] text-purple-400 leading-none block mt-1" />
							<p className="mt-6 text-zinc-400 font-mono text-sm leading-relaxed max-w-lg">
								Il tuo sistema ha vulnerabilità che non conosci. Noi le troviamo prima che
								lo facciano soggetti non autorizzati — con metodologia OWASP, test manuali approfonditi
								e un piano di remediation concreto e verificabile.
							</p>
							<div className="mt-8 flex gap-4 flex-wrap">
								<Button size="lg" asChild>
									<Link href="/contact">Richiedi un audit <ArrowRight className="size-4" /></Link>
								</Button>
								<Button size="lg" variant="outline" asChild>
									<Link href="/servizi">Vedi Sviluppo Web</Link>
								</Button>
							</div>
						</motion.div>

						<motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
							className="grid grid-cols-2 gap-px bg-white/5">
							{stats.map((s) => (
								<div key={s.label} className="bg-black p-8 flex flex-col gap-2">
									<span className="font-mono font-black text-4xl text-purple-400">{s.value}</span>
									<span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{s.label}</span>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section className="relative py-24 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Cosa facciamo</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
							Ogni vettore<br /><span className="text-purple-400">analizzato</span>
						</h2>
					</motion.div>
					<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{services.map((s) => (
							<motion.div key={s.title} variants={itemVariants}
								className="group border border-white/10 hover:border-purple-600/40 p-6 transition-all duration-300">
								<div className="w-10 h-10 border border-white/10 group-hover:border-purple-600/40 flex items-center justify-center mb-4 transition-colors">
									<s.icon className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
								</div>
								<h3 className="font-mono font-bold text-sm text-white tracking-widest uppercase mb-2 group-hover:text-purple-300 transition-colors">{s.title}</h3>
								<p className="font-mono text-xs text-zinc-600 leading-relaxed">{s.desc}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Threat marquee */}
			<section className="py-16 border-t border-white/10 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 mb-10">
					<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
						className="font-mono text-xs text-purple-500/60 tracking-widest uppercase">
						// Vettori di attacco che copriamo
					</motion.p>
				</div>
				<InfiniteMarquee items={threats} speed={55} />
				<div className="mt-3">
					<InfiniteMarquee items={[...threats].reverse()} speed={40} />
				</div>
			</section>

			{/* Methodology */}
			<section className="relative py-24 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Come lavoriamo</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
							La metodologia<br /><span className="text-purple-400">in 4 fasi</span>
						</h2>
					</motion.div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
						{methodology.map((m, i) => (
							<motion.div key={m.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
								className="bg-black p-8">
								<div className="font-mono text-5xl font-black text-purple-900 mb-4">{m.step}</div>
								<h3 className="font-mono font-black text-sm tracking-widest uppercase text-white mb-2">{m.title}</h3>
								<p className="font-mono text-xs text-zinc-600 leading-relaxed">{m.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Why us */}
			<section className="relative py-24 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Perché scegliere Capytal</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
							Security<br /><span className="text-purple-400">senza scorciatoie</span>
						</h2>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{whyUs.map((item, i) => (
							<motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
								className="group flex items-start gap-4 border border-white/10 hover:border-purple-600/40 p-6 transition-all duration-300">
								<div className="w-8 h-8 border border-white/10 group-hover:border-purple-600/40 flex items-center justify-center shrink-0 transition-colors">
									<item.icon className="size-3.5 text-zinc-600 group-hover:text-purple-400 transition-colors" />
								</div>
								<p className="font-mono text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{item.text}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative py-24 border-t border-white/10">
				<div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(88,28,135,0.08) 0%, transparent 70%)" }} />
				<div className="max-w-7xl mx-auto px-6 text-center">
					<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">// Zero vulnerabilità accettate</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
							Il tuo sistema<br /><span className="text-purple-400">è davvero sicuro?</span>
						</h2>
						<p className="font-mono text-sm text-zinc-500 max-w-md mx-auto mb-8 leading-relaxed">
							Scoprilo prima che lo scopra qualcun altro. Un audit parte da una conversazione.
						</p>
						<Button size="lg" asChild>
							<Link href="/contact">Richiedi un audit <ArrowRight className="size-4" /></Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
