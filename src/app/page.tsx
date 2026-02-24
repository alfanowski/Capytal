import { HeroSection } from "@/components/sections/HeroSection";
import { HomePreviewStrip } from "@/components/sections/HomePreviewStrip";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <HomePreviewStrip />
      <FooterSection />
    </main>
  );
}
