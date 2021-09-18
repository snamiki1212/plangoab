import { WebHeader } from "@/components/molecules/WebHeader";
import { WebFooter } from "@/components/molecules/WebFooter";
import { LpFeatureSection } from "@/components/molecules/LpFeatureSection";
import { LpCollaborationsSection } from "@/components/molecules/LpCollaborationsSection";
import { LpCreaterSection } from "@/components/molecules/LpCreaterSection";
import { LpHeroSection } from "@/components/molecules/LpHeroSection";
import { LpPriceSection } from "@/components/molecules/LpPriceSection";
import { LpExplanationSection } from "@/components/molecules/LpExplanationSection";
import { LpDemoSection } from "@/components/molecules/LpDemoSection";
import { HomeLayout } from "@/components/templates/HomeLayout";

export function HomePage() {
  return (
    <HomeLayout
      header={<WebHeader />}
      footer={<WebFooter />}
      content={
        <>
          <LpHeroSection />
          <LpExplanationSection />
          <LpDemoSection />
          <LpFeatureSection />
          <LpPriceSection />
          <LpCollaborationsSection />
          <LpCreaterSection />
        </>
      }
    />
  );
}
