import { WebHeader } from "@/components/v1/molecules/WebHeader";
import { WebFooter } from "@/components/v1/molecules/WebFooter";
import { LpFeatureSection } from "@/components/v1/molecules/LpFeatureSection";
import { LpCollaborationsSection } from "@/components/v1/molecules/LpCollaborationsSection";
import { LpCreaterSection } from "@/components/v1/molecules/LpCreaterSection";
import { LpHeroSection } from "@/components/v1/molecules/LpHeroSection";
import { LpPriceSection } from "@/components/v1/molecules/LpPriceSection";
import { LpExplanationSection } from "@/components/v1/molecules/LpExplanationSection";
import { LpDemoSection } from "@/components/v1/molecules/LpDemoSection";
import { HomeLayout } from "@/components/v1/templates/HomeLayout";

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
