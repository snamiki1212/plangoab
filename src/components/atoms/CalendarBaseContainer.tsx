import React from "react";
import styled from "styled-components";
import { CalendarBase } from "./CalendarBase";
import Tooltip from "@material-ui/core/Tooltip";

const eventContent = function (arg: any) {
  const text = arg.event.title ?? "";
  const description = arg.event.extendedProps.description ?? text;
  if (description === "") return <span>{text}</span>;
  return (
    <Tooltip
      title={<span style={{ whiteSpace: "pre-line" }}>{description}</span>}
    >
      <span>{text}</span>
    </Tooltip>
  );
};

export function CalendarBaseContainer(props: any) {
  const args = { eventContent };
  return (
    <StyledContainer>
      <CalendarBase {...props} {...args} />
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
