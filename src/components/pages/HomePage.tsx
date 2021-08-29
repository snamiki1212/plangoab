import { WebHeader } from "@/components/molecules/WebHeader";
import { WebFooter } from "@/components/molecules/WebFooter";
import { LpFeatureSection } from "@/components/molecules/LpFeatureSection";
import { LpCollaborationsSection } from "@/components/molecules/LpCollaborationsSection";
import { LpCreaterSection } from "@/components/molecules/LpCreaterSection";
import { LpHeroSection } from "@/components/molecules/LpHeroSection";
import { LpPriceSection } from "@/components/molecules/LpPriceSection";
import { LpExplanationSection } from "@/components/molecules/LpExplanationSection";
import { LpDemoSection } from "@/components/molecules/LpDemoSection";

export function HomePage() {
  return (
    <div>
      <WebHeader />
      <LpHeroSection />
      <LpExplanationSection />
      <LpDemoSection />
      <LpFeatureSection />
      <LpPriceSection />
      <LpCollaborationsSection />
      <LpCreaterSection />
      <WebFooter />
    </div>
  );
}
