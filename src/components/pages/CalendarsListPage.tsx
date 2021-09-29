import { useMemo } from "react";
import styled from "styled-components";
import { CalendarListContent } from "@/components/templates/CalendarListContent";
import { Footer } from "@/components/molecules/Footer";
import { AppHeader } from "@/components/molecules/AppHeader";
import { useFetchCalendarsQuery } from "@/redux/v2/services/calendarApi";
import { ErrorPage } from "@/components/pages/ErrorPage";
import { LoadingPage } from "@/components/pages/LoadingPage";
//

export const CalendarsListPage = () => {
  const { data = [], error, isLoading } = useFetchCalendarsQuery("");

  const rows = useMemo(
    () =>
      data.map((item) => ({ id: item.id, birthday: item.visitor.birthday })),
    [data]
  );

  if (error) return <ErrorPage />;
  if (isLoading) return <LoadingPage />;

  return (
    <Container>
      <AppHeader renderAbout={false} renderHowTo={false} />
      <Content>
        <CalendarListContent rows={rows} />
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
