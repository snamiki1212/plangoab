import React from "react";
import styled from "styled-components";
import { UserCalendarArea } from "../organisms/UserCalendarArea";
import { TemplateCalendarArea } from "../organisms/TemplateCalendarArea";
import { UserCalendarCreater } from "../molecules/UserCalendarCreater";
import { useUserCalendar } from "../../hooks/useUserCalendar";

export function CalendarPageContent() {
  const { calendar } = useUserCalendar();
  const existsCalendar = !!calendar;
  return (
    <div>
      {existsCalendar ? (
        <InnerContainer>
          <UserCalendarArea />
          <TemplateCalendarArea />
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
