import styled, { keyframes } from "styled-components";
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

const bg = keyframes`
  0% {
    background-position: 0%;
  }

  50% {
    background-position: 100%;
  }
  
  100% {
    background-position: 0%;
  }

`;

const BackgroundColor = styled.div`
  width: 100%;
  height: 100%;

  background: linear-gradient(
    45deg,
    var(--color-lp-bg1),
    var(--color-lp-bg2),
    var(--color-lp-bg1),
    var(--color-lp-bg3)
  );
  background-size: 400% 100%;
  animation: ${bg} 3s linear infinite;
`;

const Container = styled.div``;
