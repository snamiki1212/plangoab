import React from "react";
import styled from "styled-components";
import { UserCalendarSection } from "../molecules/UserCalendarSection";
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
          <UserCalendarSection />
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
