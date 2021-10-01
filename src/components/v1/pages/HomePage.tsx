import { WebHeader } from "~/src/components/v1/molecules/WebHeader";
import { WebFooter } from "~/src/components/v1/molecules/WebFooter";
import { LpFeatureSection } from "~/src/components/v1/molecules/LpFeatureSection";
import { LpCollaborationsSection } from "~/src/components/v1/molecules/LpCollaborationsSection";
import { LpCreaterSection } from "~/src/components/v1/molecules/LpCreaterSection";
import { LpHeroSection } from "~/src/components/v1/molecules/LpHeroSection";
import { LpPriceSection } from "~/src/components/v1/molecules/LpPriceSection";
import { LpExplanationSection } from "~/src/components/v1/molecules/LpExplanationSection";
import { LpDemoSection } from "~/src/components/v1/molecules/LpDemoSection";
import { HomeLayout } from "~/src/components/v1/templates/HomeLayout";

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
