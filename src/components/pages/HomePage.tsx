import { WebHeader } from "@/components/molecules/WebHeader";
import { WebFooter } from "@/components/molecules/WebFooter";
import { LpFeatureSection } from "@/components/molecules/LpFeatureSection";
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
      <LpFeatureSection />
      <LpPriceSection />
      <LpCollaborationsSection />
      <WebFooter />
    </div>
  );
}
