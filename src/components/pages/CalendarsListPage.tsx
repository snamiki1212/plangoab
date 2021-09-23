import styled from "styled-components";
import { CalendarListContent } from "@/components/templates/CalendarListContent";
import { Footer } from "@/components/molecules/Footer";
import { AppHeader } from "@/components/molecules/AppHeader";
import { useGetCalendarsQuery } from "@/redux/services/calendarApiV1";
//

export const CalendarsListPage = () => {
  const { data, error, isLoading } = useGetCalendarsQuery("");

  if (error) return <div>Error</div>;
  if (isLoading) return <div>loading...</div>;

  console.log({ data });
  return (
    <Container>
      <AppHeader renderAbout={false} renderHowTo={false} />
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
