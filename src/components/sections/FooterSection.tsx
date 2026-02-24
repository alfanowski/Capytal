"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = { Github, Linkedin, Mail };

const navColumns = [
  {
    title: "Servizi",
    links: [
      { label: "Full Stack Development", href: "/servizi" },
      { label: "Cybersecurity Auditing", href: "/cybersecurity" },
      { label: "Richiedi un preventivo", href: "/contact" },
    ],
  },
  {
    title: "Tech",
    links: [
      { label: "Chi siamo", href: "/about" },
      { label: "Approccio", href: "/about#approccio" },
      { label: "Contatti", href: "/contact" },
    ],
  },
  {
    title: "Contatto diretto",
    links: [
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, external: true },
      { label: "github.com/alfanowski", href: "https://github.com/alfanowski", external: true },
      { label: "linkedin.com/in/alfanowski", href: "https://linkedin.com/in/alfanowski", external: true },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.025) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top — logo + nav columns */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <Link href="/" className="inline-block group">
              <span className="font-mono font-black text-lg tracking-widest text-white uppercase group-hover:text-purple-400 transition-colors">
                CAPYTAL
              </span>
            </Link>
            <p className="font-mono text-xs text-zinc-600 leading-relaxed max-w-[200px]">
              Full Stack Development & Cybersecurity Auditing.
              Build what matters. Secure what&apos;s critical.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.icon] ?? Mail;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.icon !== "Mail" ? "_blank" : undefined}
                    rel={link.icon !== "Mail" ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="inline-flex size-8 items-center justify-center border border-white/10 text-zinc-600 hover:border-purple-600/50 hover:text-purple-400 transition-all"
                  >
                    <Icon className="size-3.5" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Nav columns */}
          {navColumns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.08 }}
              className="flex flex-col gap-4"
            >
              <p className="font-mono text-[10px] text-purple-500/60 tracking-widest uppercase">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 hover:text-purple-400 transition-colors group"
                    >
                      <span className="truncate max-w-[180px]">{link.label}</span>
                      {"external" in link && link.external && (
                        <ArrowUpRight className="size-2.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom — copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <span className="font-mono text-[10px] text-zinc-700 tracking-widest">
            &copy; {new Date().getFullYear()} Capytal — Andrea Alfano. Tutti i diritti riservati.
          </span>
          <span className="font-mono text-[10px] text-zinc-800 tracking-widest uppercase">
            Build what matters. Secure what&apos;s critical.
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
