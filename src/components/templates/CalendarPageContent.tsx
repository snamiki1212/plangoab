import React from "react";
import styled from "styled-components";
import { UserCalendarContainer } from "../molecules/UserCalendarContainer";
import { TemplateList } from "../templates/TemplateList";
import { UserCalendarCreater } from "../molecules/UserCalendarCreater";
import { useUserCalendar } from "../../hooks/useUserCalendar";

export function CalendarPageContent() {
  const { calendar } = useUserCalendar();
  const existsCalendar = !!calendar;
  return (
    <div>
      {existsCalendar ? (
        <InnerContainer>
          <UserCalendarContainer />
          <TemplateList />
        </InnerContainer>
      ) : (
        <UserCalendarCreater />
      )}
    </div>
  );
}

const InnerContainer = styled.div`
  display: grid;
  gap: 3rem;
`;
