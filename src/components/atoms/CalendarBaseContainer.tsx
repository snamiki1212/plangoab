import React from "react";
import styled from "styled-components";
import { CalendarBase } from "@/components/atoms/CalendarBase";
import Tooltip from "@material-ui/core/Tooltip";

const eventContent = function (arg: any) {
  const text = arg.event.title ?? "";
  const description = arg.event.extendedProps.description ?? text;
  if (description === "") return <ItemText>{text}</ItemText>;
  return (
    <Tooltip
      title={
        <ItemText style={{ whiteSpace: "pre-line" }}>{description}</ItemText>
      }
    >
      <ItemText>{text}</ItemText>
    </Tooltip>
  );
};

export function CalendarBaseContainer(props: any) {
  return <CalendarBase {...props} eventContent={eventContent} />;
}

const ItemText = styled.span`
  color: var(--base-light1);
  font-family: var(--font-text1);
`;
