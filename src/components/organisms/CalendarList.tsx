import React from "react";
import styled from "styled-components";
import { UserCalendarContainer } from "../../containers/UserCalendarContainer";
import { TemplateCalendarContainer } from "../../containers/TemplateCalendarContainer";

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
        <TemplateCalendarContainer />
      </div>
    </Container>
  );
}

const Container = styled.div``;
