"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_NAME, CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = { Github, Linkedin, Mail };

export function FooterSection() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start gap-1"
        >
          <span className="font-mono font-black text-sm tracking-widest text-white uppercase">
            {SITE_NAME}
          </span>
          <span className="font-mono text-[10px] text-zinc-700 tracking-widest">
            &copy; {new Date().getFullYear()} — Web Dev &amp; Cybersecurity Studio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3"
        >
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICON_MAP[link.icon] ?? Mail;
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.icon !== "Mail" ? "_blank" : undefined}
                rel={link.icon !== "Mail" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex size-8 items-center justify-center border border-zinc-800 text-zinc-600 hover:border-purple-700 hover:text-purple-400 transition-all"
              >
                <Icon className="size-3.5" />
              </Link>
            );
          })}
        </motion.div>

        <motion.a
          href={`mailto:${CONTACT_EMAIL}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-mono text-[10px] text-zinc-700 hover:text-purple-400 transition-colors tracking-widest"
        >
          {CONTACT_EMAIL}
        </motion.a>
      </div>
    </footer>
  );
}
