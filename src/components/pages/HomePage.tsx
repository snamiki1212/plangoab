import styled from "styled-components";
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
    <Container>
      <WebHeader />
      <LpHeroSection />
      <BackgroundColor>
        <LpExplanationSection />
        <LpDemoSection />
        <LpFeatureSection />
        <LpPriceSection />
        <LpCollaborationsSection />
        <LpCreaterSection />
        <WebFooter />
      </BackgroundColor>
    </Container>
  );
}

const BackgroundColor = styled.div`
  background: linear-gradient(
    190deg,
    white 10rem,
    var(--color-lp-bg1),
    var(--color-lp-bg2),
    var(--color-lp-bg1),
    var(--color-lp-bg2)
  );
`;

const Container = styled.div``;
