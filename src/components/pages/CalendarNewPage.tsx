import styled from "styled-components";
import { Footer } from "@/components/molecules/Footer";
import { AppHeader } from "@/components/molecules/AppHeader";
import { CalendarPageContent } from "@/components/templates/CalendarPageContent";
import { WelcomeModal } from "@/components/organisms/WelcomeModal";
import { EmptyApp } from "@/components/templates/EmptyApp";
import { useUserCalendar } from "@/hooks/useUserCalendar";

export function CalendarNewPage() {
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
