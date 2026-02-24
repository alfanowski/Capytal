"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Code2, Shield, Cpu, Zap, Target, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { CONTACT_EMAIL } from "@/lib/constants";

const stats = [
	{ value: "100%", label: "Custom Build" },
	{ value: "0", label: "Vulnerabilità accettate" },
	{ value: "24h", label: "Risposta garantita" },
	{ value: "∞", label: "Righe di codice scritte" },
];

const values = [
	{
		icon: Code2,
		title: "Code-First",
		description:
			"Niente template, niente soluzioni preconfezionate. Ogni progetto è architettura costruita da zero per il tuo caso specifico.",
	},
	{
		icon: Lock,
		title: "Security by Design",
		description:
			"La sicurezza non è un layer aggiuntivo — è integrata nell'architettura dal giorno uno. OWASP Top 10, threat modeling, hardening.",
	},
	{
		icon: Zap,
		title: "Performance",
		description:
			"Core Web Vitals al top, SSR/SSG ottimizzato, query efficienti. La velocità non è un opzione, è un requisito di progetto.",
	},
	{
		icon: Target,
		title: "Delivery",
		description:
			"Timeline realistiche, aggiornamenti frequenti, zero sorprese a fine corsa. Sai sempre a che punto siamo.",
	},
];

const stack = [
	{ icon: Globe, label: "Full Stack", items: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"] },
	{ icon: Shield, label: "Security", items: ["Kali Linux", "Burp Suite", "Metasploit", "OSINT", "Wireshark", "Nmap"] },
	{ icon: Cpu, label: "AI & DevOps", items: ["Python", "OpenAI API", "Docker", "GitHub Actions", "Vercel", "Linux"] },
];

const containerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutSection() {
	return (
		<div className="bg-black min-h-screen">
			{/* Hero */}
			<section className="relative py-32 overflow-hidden">
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage:
							"linear-gradient(rgba(139,92,246,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.045) 1px,transparent 1px)",
						backgroundSize: "60px 60px",
					}}
				/>
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent" />

				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left — titolo + descrizione + CTA */}
						<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
							<motion.p
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6"
							>
								// Chi siamo
							</motion.p>
							<GlitchText
								text="CAPYTAL"
								as="h1"
								className="text-[clamp(3rem,10vw,7rem)] font-black font-mono tracking-tighter text-white leading-none block"
							/>
							<GlitchText
								text="TECH"
								as="h1"
								className="text-[clamp(1.5rem,5vw,3rem)] font-black font-mono tracking-[0.3em] text-purple-400 leading-none block mt-1"
							/>
							<p className="mt-6 text-zinc-400 font-mono text-sm leading-relaxed max-w-lg">
								Uno studio tech specializzato in sviluppo web full stack e cybersecurity offensiva. Costruiamo prodotti digitali ad alte
								prestazioni — e li rendiamo impossibili da violare.
							</p>
							<div className="mt-8 flex gap-4 flex-wrap">
								<Button asChild size="lg">
									<Link href="/contact">
										Lavora con noi <ArrowRight className="size-4" />
									</Link>
								</Button>
								<Button asChild size="lg" variant="outline">
									<Link href="/servizi">I nostri servizi</Link>
								</Button>
							</div>
						</motion.div>

						{/* Right — stats 2x2 */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="grid grid-cols-2 gap-px bg-white/5"
						>
							{stats.map((stat) => (
								<div key={stat.label} className="bg-black p-8 flex flex-col gap-2">
									<span className="font-mono font-black text-4xl text-purple-400">{stat.value}</span>
									<span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</span>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Founder */}
			<section className="relative py-24 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-14"
					>
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Founder</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
							La persona
							<br />
							<span className="text-purple-400">dietro il codice</span>
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/5">
						{/* Bio card */}
						<motion.div
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="lg:col-span-3 bg-black p-10"
						>
							<div className="flex items-center gap-5 mb-8">
								<div className="w-14 h-14 bg-purple-600 flex items-center justify-center font-mono font-black text-white text-lg shrink-0">
									AA
								</div>
								<div>
									<h3 className="font-mono font-black text-lg text-white tracking-tight">Andrea Alfano</h3>
									<p className="font-mono text-xs text-purple-400 tracking-widest mt-0.5">
										alias <span className="text-purple-300">alfanowski</span> — Founder & Lead Developer
									</p>
								</div>
							</div>

							<div className="space-y-4 font-mono text-sm text-zinc-400 leading-relaxed">
								<p>
									Sviluppatore Full Stack con specializzazione in cybersecurity offensiva. Progetta e implementa architetture web
									scalabili, dalla scelta dello stack all&apos;infrastruttura cloud, con un approccio orientato alle performance e alla
									sicurezza fin dall&apos;inizio.
								</p>
								<p>
									Sul fronte security, esegue penetration test su applicazioni web e API, vulnerability assessment e attività di
									hardening su sistemi Linux. Metodologia OWASP, strumenti offensivi e reportistica tecnica dettagliata.
								</p>
								<p>
									Linux come ambiente nativo, terminale come strumento principale. Partecipa attivamente a CTF e ricerca di
									vulnerabilità in ambienti controllati.
								</p>
							</div>

							<div className="mt-8 flex flex-wrap gap-2">
								{["Penetration Testing", "Full Stack Dev", "Linux", "CTF Player", "AI Engineering", "Open Source"].map((tag) => (
									<span
										key={tag}
										className="font-mono text-[10px] border border-purple-700/30 text-purple-400/70 px-2.5 py-1 tracking-widest uppercase hover:border-purple-500/60 hover:text-purple-300 transition-colors cursor-default"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="mt-8 pt-8 border-t border-white/5">
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

						{/* Stack card */}
						<motion.div
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.15 }}
							className="lg:col-span-2 bg-black p-10 space-y-8"
						>
							{stack.map((cat) => (
								<div key={cat.label}>
									<div className="flex items-center gap-2 mb-3">
										<cat.icon className="size-3.5 text-purple-600" />
										<span className="font-mono text-[10px] text-purple-500/70 tracking-widest uppercase">{cat.label}</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{cat.items.map((item) => (
											<span
												key={item}
												className="font-mono text-xs border border-white/10 bg-black text-zinc-400 px-2.5 py-1 hover:border-purple-700/50 hover:text-purple-300 transition-colors cursor-default"
											>
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

			{/* Valori */}
			<section className="relative py-24 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-14"
					>
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Come lavoriamo</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
							Il nostro
							<br />
							<span className="text-purple-400">approccio</span>
						</h2>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
					>
						{values.map((v) => (
							<motion.div
								key={v.title}
								variants={itemVariants}
								className="group border border-white/10 hover:border-purple-600/40 p-6 transition-all duration-300"
							>
								<div className="w-10 h-10 border border-white/10 group-hover:border-purple-600/40 flex items-center justify-center mb-4 transition-colors">
									<v.icon className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
								</div>
								<h3 className="font-mono font-bold text-sm text-white tracking-widest uppercase mb-2 group-hover:text-purple-300 transition-colors">
									{v.title}
								</h3>
								<p className="font-mono text-xs text-zinc-600 leading-relaxed">{v.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative py-24 border-t border-white/10">
				<div
					className="absolute inset-0 pointer-events-none"
					style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(88,28,135,0.08) 0%, transparent 70%)" }}
				/>
				<div className="max-w-7xl mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">// Parliamoci</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
							Costruiamo
							<br />
							<span className="text-purple-400">insieme</span>
						</h2>
						<p className="font-mono text-sm text-zinc-500 max-w-md mx-auto mb-8 leading-relaxed">
							Hai un progetto in mente? Il brief non deve essere perfetto — basta un&apos;idea. Risposta garantita entro 24 ore.
						</p>
						<div className="flex gap-4 justify-center flex-wrap">
							<Button asChild size="lg">
								<Link href="/contact">
									Inizia un progetto <ArrowRight className="size-4" />
								</Link>
							</Button>
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="inline-flex items-center font-mono text-xs text-zinc-500 hover:text-purple-400 transition-colors tracking-widest"
							>
								{CONTACT_EMAIL}
							</a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

