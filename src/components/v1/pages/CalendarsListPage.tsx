import { useMemo } from "react";
import styled from "styled-components";
import { CalendarListContent } from "~/src/components/v1/templates/CalendarListContent";
import { Footer } from "~/src/components/v1/molecules/Footer";
import { AppHeader } from "~/src/components/v1/molecules/AppHeader";
import { useFetchCalendarsQuery } from "~/src/hooks/v2/useCalendarApi";
import { ErrorPage } from "~/src/components/v1/pages/ErrorPage";
import { LoadingPage } from "~/src/components/v1/pages/LoadingPage";
import { renderYYYYMMDDfromStr } from "~/src/lib/date";
//

export const CalendarsListPage = () => {
  const { data = [], error, isLoading } = useFetchCalendarsQuery("");

  const rows = useMemo(
    () =>
      data.map((item) => ({
        id: item.id,
        birthday: renderYYYYMMDDfromStr(item.visitor.birthday),
      })),
    [data]
  );

  if (error) return <ErrorPage />;
  if (isLoading) return <LoadingPage />;

  return (
    <Container>
      <AppHeader renderAbout={false} renderHowTo={false} />
      <Content>
        <Title>Calendar List</Title>
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

const Title = styled.h2`
  font-family: var(--font-header1);
  color: var(--color-dark1);
  font-weight: 900;
`;
