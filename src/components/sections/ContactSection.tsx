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
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { GlitchText } from "@/components/ui/glitch-text";

const schema = z.object({
  name: z.string().min(2, "Minimo 2 caratteri"),
  email: z.string().email("Email non valida"),
  subject: z.string().min(3, "Oggetto troppo breve"),
  message: z.string().min(10, "Minimo 10 caratteri"),
});

type FormData = z.infer<typeof schema>;

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const body = encodeURIComponent(
      `Nome: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      data.subject
    )}&body=${body}`;
    setSent(true);
    reset();
  };

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-700/40 to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(88,28,135,0.2) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-purple-500/60 tracking-widest uppercase mb-6"
          >
            // Parliamoci
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <GlitchText
              text="CONTATTI"
              as="h1"
              className="text-[clamp(3rem,10vw,6rem)] font-black font-mono tracking-tighter text-white leading-none block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-purple-400 transition-colors mt-6 mb-12"
            >
              <Mail className="size-3" />
              {CONTACT_EMAIL}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-20 text-center border border-zinc-900">
                <CheckCircle2 className="size-10 text-purple-500" />
                <p className="font-mono font-black text-white tracking-widest uppercase text-sm">
                  Messaggio inviato
                </p>
                <p className="font-mono text-xs text-zinc-600">
                  Ti risponderemo entro 24 ore.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSent(false)}
                >
                  Invia un altro
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="border border-zinc-900 p-8 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-mono text-xs tracking-widest uppercase text-zinc-500"
                    >
                      Nome
                    </Label>
                    <Input
                      id="name"
                      placeholder="Il tuo nome"
                      {...register("name")}
                      className="font-mono text-sm"
                    />
                    {errors.name && (
                      <p className="font-mono text-xs text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-mono text-xs tracking-widest uppercase text-zinc-500"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tua@email.com"
                      {...register("email")}
                      className="font-mono text-sm"
                    />
                    {errors.email && (
                      <p className="font-mono text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="subject"
                    className="font-mono text-xs tracking-widest uppercase text-zinc-500"
                  >
                    Oggetto
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Sviluppo web / Audit sicurezza / Altro"
                    {...register("subject")}
                    className="font-mono text-sm"
                  />
                  {errors.subject && (
                    <p className="font-mono text-xs text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-mono text-xs tracking-widest uppercase text-zinc-500"
                  >
                    Messaggio
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Descrivi brevemente il progetto o la richiesta..."
                    {...register("message")}
                    className="font-mono text-sm"
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group font-mono tracking-widest uppercase text-xs"
                >
                  {isSubmitting ? "Invio..." : "Invia messaggio"}
                  <Send className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

