import React from "react";
import styled from "styled-components";
import { MyCalendar } from "./MyCalendar";
import { GeneratedCalendar } from "./GeneratedCalendar";

export function CalendarList() {
  return (
    <Container>
      <div>
        <h2>MyCalendar</h2>
        <MyCalendar />
      </div>

      <hr />
      <div>
        <h2>CommunityCollegeAfterwardsWorkingHolidayStory</h2>
        <GeneratedCalendar />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem;
`;
