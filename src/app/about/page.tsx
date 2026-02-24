import type { Metadata } from "next";
import { BackHome } from "@/components/ui/back-home";
import { AboutSection } from "@/components/sections/AboutSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Chi siamo — Capytal Tech",
  description: "Capytal Tech: sviluppo web e cybersecurity con approccio diretto, codice pulito e zero compromessi sulla sicurezza.",
};

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <BackHome />
      <AboutSection />
      <FooterSection />
    </main>
  );
}

