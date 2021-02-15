import React from "react";
import styled from "styled-components";
import { UserCalendarContainer } from "../molecules/UserCalendarContainer";
import { TemplateCalendarContainer } from "../molecules/TemplateCalendarContainer";

export function CalendarList() {
  return (
    <Container>
      <div>
        <h2>User Calendar</h2>
        <UserCalendarContainer />
      </div>

      <hr />
      <div>
        <h2>Community College</h2>
        <TemplateCalendarContainer />
      </div>
    </Container>
  );
}

const Container = styled.div``;
