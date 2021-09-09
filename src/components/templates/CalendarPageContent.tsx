import React from "react";
import styled from "styled-components";
import { UserCalendarSection } from "./UserCalendarSection";
import { CollegeCalendarSection } from "./CollegeCalendarSection";
import { EmptyCalendar } from "@/components/molecules/EmptyCalendar";
import { useUserCalendar } from "@/hooks/useUserCalendar";

export function CalendarPageContent() {
  const { isAlreadyCreated: shouldRenderCalendarSection } = useUserCalendar();
  return (
    <div>
      {shouldRenderCalendarSection ? (
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
