"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Layers, Smartphone, Database, Globe, CheckCircle2, GitBranch, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";

const stats = [
	{ value: "100%", label: "Custom Build" },
	{ value: "0", label: "Template usati" },
	{ value: "24h", label: "Risposta garantita" },
	{ value: "∞", label: "Scalabilità" },
];

const features = [
	{ icon: Globe, title: "Web App moderne", desc: "React e Next.js con App Router, SSR/SSG ottimizzato, performance al top sin dal primo render." },
	{ icon: Smartphone, title: "Mobile-first", desc: "Design responsive progettato prima per mobile. Ogni breakpoint testato, ogni pixel curato." },
	{ icon: Database, title: "Backend & API", desc: "Node.js, API REST e GraphQL. Database relazionali e non — scelti in base al tuo caso d'uso." },
	{ icon: Layers, title: "Architetture scalabili", desc: "Microservizi, monorepo, separazione dei layer. Costruiamo per la crescita futura fin dal giorno uno." },
	{ icon: Zap, title: "Performance & SEO", desc: "Core Web Vitals al top, ottimizzazione bundle, lazy loading, meta strutturati per il ranking." },
	{ icon: Shield, title: "Secure by design", desc: "Autenticazione, autorizzazione, input sanitization, rate limiting. La sicurezza non è un afterthought." },
	{ icon: GitBranch, title: "CI/CD & DevOps", desc: "Pipeline GitHub Actions, deploy automatizzati su Vercel o infrastruttura cloud dedicata." },
	{ icon: Cpu, title: "AI Integration", desc: "Integrazione di modelli LLM, OpenAI API, RAG pipelines e automazioni intelligenti nel tuo prodotto." },
	{ icon: Code2, title: "Codice TypeScript", desc: "Ogni riga tipizzata, testata e documentata. Nessun debito tecnico nascosto sotto il cofano." },
];

const process = [
	{ step: "01", title: "Brief", desc: "Analizziamo esigenze, obiettivi di business e vincoli tecnici. Nessun questionario di 40 pagine — una chiamata basta." },
	{ step: "02", title: "Architettura", desc: "Definiamo stack, struttura del progetto e roadmap. Approvi tutto prima che venga scritto codice." },
	{ step: "03", title: "Build", desc: "Sviluppo iterativo con aggiornamenti frequenti. Accesso al repo dal primo giorno, deploy preview ad ogni PR." },
	{ step: "04", title: "Deploy", desc: "Rilascio su infrastruttura cloud con zero-downtime. Monitoraggio, alerting e supporto post-lancio inclusi." },
];

const techStack = [
	"React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB",
	"Tailwind CSS", "Docker", "Vercel", "GitHub Actions", "REST API", "GraphQL",
	"Prisma", "Redis", "Stripe", "OpenAI", "Supabase", "AWS",
];

const promises = [
	{ text: "Nessun template: ogni riga di codice è scritta per il tuo caso specifico.", icon: Code2 },
	{ text: "Consegna nei tempi concordati — o ti diciamo prima che non è possibile.", icon: CheckCircle2 },
	{ text: "Proprietà del codice sorgente al 100% tua dalla prima riga.", icon: Shield },
	{ text: "Manutenzione e supporto post-lancio disponibili senza costi nascosti.", icon: Zap },
];

const containerVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServiziSection() {
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
								// Sviluppo Web
							</motion.p>
							<GlitchText text="FULL STACK" as="h1" className="text-[clamp(3rem,10vw,7rem)] font-black font-mono tracking-tighter text-white leading-none block" />
							<GlitchText text="DEVELOPMENT" as="h1" className="text-[clamp(1.2rem,4vw,2.5rem)] font-black font-mono tracking-[0.2em] text-purple-400 leading-none block mt-1" />
							<p className="mt-6 text-zinc-400 font-mono text-sm leading-relaxed max-w-lg">
								Realizziamo prodotti digitali che funzionano — e continuano a farlo quando scalano.
								Non template, non soluzioni preconfezionate: architettura costruita da zero per il tuo problema specifico.
							</p>
							<div className="mt-8 flex gap-4 flex-wrap">
								<Button size="lg" asChild>
									<Link href="/contact">Inizia il progetto <ArrowRight className="size-4" /></Link>
								</Button>
								<Button size="lg" variant="outline" asChild>
									<Link href="/cybersecurity">Vedi Cybersecurity</Link>
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

			{/* Tech marquee */}
			<section className="py-10 border-t border-white/10 overflow-hidden">
				<InfiniteMarquee items={techStack} speed={50} separator="·" />
			</section>

			{/* Features */}
			<section className="relative py-24 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Cosa costruiamo</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
							Ogni layer<br /><span className="text-purple-400">coperto</span>
						</h2>
					</motion.div>
					<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{features.map((f) => (
							<motion.div key={f.title} variants={itemVariants}
								className="group border border-white/10 hover:border-purple-600/40 p-6 transition-all duration-300">
								<div className="w-10 h-10 border border-white/10 group-hover:border-purple-600/40 flex items-center justify-center mb-4 transition-colors">
									<f.icon className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
								</div>
								<h3 className="font-mono font-bold text-sm text-white tracking-widest uppercase mb-2 group-hover:text-purple-300 transition-colors">{f.title}</h3>
								<p className="font-mono text-xs text-zinc-600 leading-relaxed">{f.desc}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Process */}
			<section className="relative py-24 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Come lavoriamo</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
							Il processo<br /><span className="text-purple-400">in 4 fasi</span>
						</h2>
					</motion.div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
						{process.map((p, i) => (
							<motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
								className="bg-black p-8">
								<div className="font-mono text-5xl font-black text-purple-900 mb-4">{p.step}</div>
								<h3 className="font-mono font-black text-sm tracking-widest uppercase text-white mb-2">{p.title}</h3>
								<p className="font-mono text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Promises */}
			<section className="relative py-24 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Le nostre promesse</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
							Zero<br /><span className="text-purple-400">compromessi</span>
						</h2>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{promises.map((item, i) => (
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
						<p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">// Iniziamo</p>
						<h2 className="font-mono font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
							Hai un progetto<br /><span className="text-purple-400">in mente?</span>
						</h2>
						<p className="font-mono text-sm text-zinc-500 max-w-md mx-auto mb-8 leading-relaxed">
							Il brief non deve essere perfetto. Contattaci con un&apos;idea — definiamo insieme scope, stack e timeline.
						</p>
						<Button size="lg" asChild>
							<Link href="/contact">Richiedi un preventivo <ArrowRight className="size-4" /></Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
