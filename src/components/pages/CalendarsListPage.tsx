import styled from "styled-components";
import { CalendarListContent } from "@/components/templates/CalendarListContent";
import { Footer } from "@/components/molecules/Footer";
import { AppHeader } from "@/components/molecules/AppHeader";

export const CalendarsListPage = () => {
  return (
    <Container>
      <AppHeader />
      <Content>
        <CalendarListContent />
      </Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: 70vh;
`;
