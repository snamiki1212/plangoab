import { WebHeader } from "@/components/molecules/WebHeader";
import { WebFooter } from "@/components/molecules/WebFooter";
import { LpDemoSection } from "@/components/molecules/LpDemoSection";
import { LpCollaborationsSection } from "@/components/molecules/LpCollaborationsSection";
import { LpHeroSection } from "@/components/molecules/LpHeroSection";
import { LpPriceSection } from "@/components/molecules/LpPriceSection";
import { LpExplanationSection } from "@/components/molecules/LpExplanationSection";

export function HomePage() {
  return (
    <div>
      <WebHeader />
      <LpHeroSection />
      <LpExplanationSection />
      <LpDemoSection />
      <LpPriceSection />
      <LpCollaborationsSection />
      <WebFooter />
    </div>
  );
}
