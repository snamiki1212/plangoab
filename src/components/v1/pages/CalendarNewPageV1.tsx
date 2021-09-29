import styled from "styled-components";
import { Footer } from "@/components/v1/molecules/Footer";
import { AppHeader } from "@/components/v1/molecules/AppHeader";
import { CalendarPageContent } from "@/components/v1/templates/CalendarPageContent";
import { WelcomeModal } from "@/components/v1/organisms/WelcomeModal";
import { EmptyApp } from "@/components/v1/templates/EmptyApp";
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";

export function CalendarNewPageV1() {
  const { isAlreadyCreated: shouldRenderApp } = useUserCalendar();
  return (
    <>
      {shouldRenderApp ? (
        <Container>
          <AppHeader />
          <ContentContainer>
            <CalendarPageContent />
          </ContentContainer>
          <Footer />
        </Container>
      ) : (
        <EmptyApp />
      )}

      {/* Modal */}
      <WelcomeModal />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  padding: 0 3rem;
  margin-top: 1rem;
  margin-bottom: 6rem;
`;
