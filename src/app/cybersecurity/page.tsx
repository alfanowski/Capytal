import type { Metadata } from "next";
import { BackHome } from "@/components/ui/back-home";
import { CybersecSection } from "@/components/sections/CybersecSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Cybersecurity — Capytal Studio",
  description: "Penetration testing, vulnerability assessment e hardening. Identifichiamo le falle prima che lo facciano gli attaccanti.",
};

export default function CybersecPage() {
  return (
    <main className="bg-black min-h-screen">
      <BackHome />
      <CybersecSection />
      <FooterSection />
    </main>
  );
}

