import React from "react";
import styled from "styled-components";
import { Footer } from "@/components/molecules/Footer";
import { Header } from "@/components/molecules/Header";
import { CalendarPageContent } from "@/components/templates/CalendarPageContent";
import { WelcomeModal } from "@/components/organisms/WelcomeModal";

export function CalendarPage() {
  return (
    <>
      <Container>
        <Header />
        <ContentContainer>
          <CalendarPageContent />
        </ContentContainer>
        <Footer />
      </Container>

      {/* Modal */}
      <WelcomeModal />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const ContentContainer = styled.div`
  padding: 0 3rem;
  display: grid;
`;
