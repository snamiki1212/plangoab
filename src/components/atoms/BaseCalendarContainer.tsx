import React from "react";
import styled from "styled-components";
import { BaseFullCalendar } from "./BaseFullCalendar";

export function BaseCalendarContainer(props: any) {
  const args = {
    //
  };

  return (
    <StyledContainer>
      <BaseFullCalendar {...props} {...args} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  .fc-button {
    background: transparent;
    color: #000;
    border-color: lightgray;
    &:hover {
      background: transparent;
      opacity: 0.7;
      color: #000;
    }
  }
`;
