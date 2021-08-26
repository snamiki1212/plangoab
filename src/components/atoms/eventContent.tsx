import React from "react";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

// REF: https://fullcalendar.io/docs/content-injection
export const eventContent = function (arg: any) {
  const text = arg.event.title ?? "";
  const description = arg.event.extendedProps.description ?? text;
  if (description === "") return <Text>{text}</Text>;
  return (
    <Tooltip title={<Title>{description}</Title>}>
      <Text>{text}</Text>
    </Tooltip>
  );
};

const Text = styled.span`
  color: var(--base-light1);
  font-family: var(--font-text1);
`;

const Title = styled(Text)`
  white-space: pre-line;
`;
