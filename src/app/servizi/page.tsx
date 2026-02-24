import type { Metadata } from "next";
import { BackHome } from "@/components/ui/back-home";
import { ServiziSection } from "@/components/sections/ServiziSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Servizi — Capytal Studio",
  description: "Sviluppo web full stack e cybersecurity auditing. Soluzioni su misura per chi non accetta compromessi.",
};

export default function ServiziPage() {
  return (
    <main className="bg-black min-h-screen">
      <BackHome />
      <ServiziSection />
      <FooterSection />
    </main>
  );
}

