"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL } from "@/lib/constants";
import { Mail, Send, CheckCircle2, Clock, MessageSquare, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { GlitchText } from "@/components/ui/glitch-text";

const schema = z.object({
  name: z.string().min(2, "Minimo 2 caratteri"),
  email: z.string().email("Email non valida"),
  subject: z.string().min(3, "Oggetto troppo breve"),
  message: z.string().min(10, "Minimo 10 caratteri"),
});

type FormData = z.infer<typeof schema>;

const infoItems = [
  { icon: Clock, title: "Risposta garantita", desc: "Rispondiamo entro 24 ore lavorative. Nessun bot, nessuna risposta automatica." },
  { icon: MessageSquare, title: "Prima chiamata gratuita", desc: "La prima call di briefing è sempre gratuita. Capiamo il progetto prima di parlare di costi." },
  { icon: Shield, title: "NDA su richiesta", desc: "Firmiamo un accordo di riservatezza prima di discutere dettagli sensibili del tuo progetto." },
];

const subjects = [
  "Sviluppo sito web",
  "Web app su misura",
  "Penetration test",
  "Security audit",
  "Altro",
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const body = encodeURIComponent(`Nome: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(data.subject)}&body=${body}`;
    setSent(true);
    reset();
  };

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
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">
            // Parliamoci
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <GlitchText text="CONTATTI" as="h1"
              className="text-[clamp(3rem,10vw,7rem)] font-black font-mono tracking-tighter text-white leading-none block" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-zinc-400 font-mono text-sm leading-relaxed max-w-xl">
            Hai un progetto da costruire o un sistema da proteggere?
            Scrivici — il brief non deve essere perfetto, basta un&apos;idea di partenza.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="relative pb-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/5">

            {/* Left — info */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-black p-10 space-y-10">

              <div>
                <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6">// Contatto diretto</p>
                <a href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-3 group">
                  <div className="w-10 h-10 border border-white/10 group-hover:border-purple-600/40 flex items-center justify-center transition-colors">
                    <Mail className="size-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="font-mono text-sm text-zinc-400 group-hover:text-purple-300 transition-colors">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </div>

              <div className="space-y-6">
                <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase">// Cosa aspettarsi</p>
                {infoItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 border border-white/10 group-hover:border-purple-600/40 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                      <item.icon className="size-3.5 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-xs text-white tracking-widest uppercase mb-1">{item.title}</h4>
                      <p className="font-mono text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-4">// Tipi di richiesta</p>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <span key={s} className="font-mono text-[10px] border border-white/10 text-zinc-500 px-3 py-1.5 tracking-widest uppercase hover:border-purple-600/40 hover:text-purple-400 transition-colors cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3 bg-black p-10">
              <p className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-8">// Invia un messaggio</p>

              {sent ? (
                <div className="flex flex-col items-center gap-6 py-24 text-center border border-white/10">
                  <div className="w-16 h-16 border border-purple-600/40 flex items-center justify-center">
                    <CheckCircle2 className="size-8 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-mono font-black text-white tracking-widest uppercase text-sm mb-2">Messaggio inviato</p>
                    <p className="font-mono text-xs text-zinc-600">Ti risponderemo entro 24 ore lavorative.</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                    Invia un altro <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-xs tracking-widest uppercase text-zinc-500">Nome</Label>
                      <Input id="name" placeholder="Il tuo nome" {...register("name")}
                        className="font-mono text-sm rounded-none border-white/10 bg-black focus:border-purple-600/60" />
                      {errors.name && <p className="font-mono text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono text-xs tracking-widest uppercase text-zinc-500">Email</Label>
                      <Input id="email" type="email" placeholder="tua@email.com" {...register("email")}
                        className="font-mono text-sm rounded-none border-white/10 bg-black focus:border-purple-600/60" />
                      {errors.email && <p className="font-mono text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-mono text-xs tracking-widest uppercase text-zinc-500">Oggetto</Label>
                    <Input id="subject" placeholder="Es. Sviluppo web / Security audit / Altro" {...register("subject")}
                      className="font-mono text-sm rounded-none border-white/10 bg-black focus:border-purple-600/60" />
                    {errors.subject && <p className="font-mono text-xs text-red-500">{errors.subject.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-xs tracking-widest uppercase text-zinc-500">Messaggio</Label>
                    <Textarea id="message" rows={7}
                      placeholder="Descrivi il progetto o la richiesta. Non serve un documento formale — va bene anche un'idea approssimativa."
                      {...register("message")}
                      className="font-mono text-sm rounded-none border-white/10 bg-black focus:border-purple-600/60 resize-none" />
                    {errors.message && <p className="font-mono text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full group">
                    {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
                    <Send className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
