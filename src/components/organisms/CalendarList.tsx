import React from "react";
import styled from "styled-components";
import { UserCalendarContainer } from "../../containers/UserCalendarContainer";
import { GeneratedCalendarContainer } from "../../containers/GeneratedCalendarContainer";

export function CalendarList() {
  return (
    <Container>
      <div>
        <h2>UserCalendar</h2>
        <UserCalendarContainer />
      </div>

      <hr />
      <div>
        <h2>CommunityCollegeAfterwardsWorkingHolidayStory</h2>
        <GeneratedCalendarContainer />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem;
`;
