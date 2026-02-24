import type { Metadata } from "next";
import { BackHome } from "@/components/ui/back-home";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Contatti — Capytal Studio",
  description: "Hai un progetto? Parliamone. Risposta garantita entro 24 ore.",
};

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <BackHome />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

