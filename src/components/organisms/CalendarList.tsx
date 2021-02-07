import React from "react";
import styled from "styled-components";
import { MyCalendarContainer } from "../../containers/MyCalendarContainer";
import { GeneratedCalendarContainer } from "../../containers/GeneratedCalendarContainer";

export function CalendarList() {
  return (
    <Container>
      <div>
        <h2>MyCalendar</h2>
        <MyCalendarContainer />
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
