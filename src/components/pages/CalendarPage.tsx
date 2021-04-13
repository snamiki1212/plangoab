import React from "react";
import styled from "styled-components";
import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";
import { CalendarPageContent } from "../templates/CalendarPageContent";
import { IntroFlow } from "./IntroFlow";
import { useSelectCaputre } from "../../hooks/useCapture";

export function CalendarPage() {
  const { widthPx } = useSelectCaputre();
  return (
    <>
      <Container widthPx={widthPx}>
        <Header />
        <ContentContainer>
          <CalendarPageContent />
        </ContentContainer>
        <Footer />
      </Container>

      {/* Modal */}
      <IntroFlow />
    </>
  );
}

const Container = styled.div<{ widthPx: string | undefined }>`
  width: ${({ widthPx }) => widthPx};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  padding: 0 3rem;
  display: grid;
  gap: 5rem;
`;
