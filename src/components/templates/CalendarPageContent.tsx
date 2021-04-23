import React from "react";
import styled from "styled-components";
import { UserCalendarSection } from "./UserCalendarSection";
import { CollegeCalendarSection } from "./CollegeCalendarSection";
import { EmptyCalendar } from "../molecules/EmptyCalendar";
import { useUserCalendar } from "../../hooks/useUserCalendar";

export function CalendarPageContent() {
  const { calendar } = useUserCalendar();
  const existsCalendar = !!calendar;
  return (
    <div>
      {existsCalendar ? (
        <InnerContainer>
          <UserCalendarSection />
          <CollegeCalendarSection />
        </InnerContainer>
      ) : (
        <EmptyCalendar />
      )}
    </div>
  );
}

const InnerContainer = styled.div`
  display: grid;
  gap: 3rem;
`;
