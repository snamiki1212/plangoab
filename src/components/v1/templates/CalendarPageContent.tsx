import styled from "styled-components";
import { UserCalendarSection } from "./UserCalendarSection";
import { CollegeCalendarSection } from "./CollegeCalendarSection";

export function CalendarPageContent() {
  return (
    <Container>
      <UserCalendarSection />
      <CollegeCalendarSection />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 3rem;
`;
