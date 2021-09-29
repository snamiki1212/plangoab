import React from "react";
import { useSelector } from "react-redux";
import { selectUserCalendar } from "@/redux/v1/features/userCalendars";
import styled from "styled-components";
import Button from "@mui/material/Button";

type Props = {
  createOpenHandle: Function;
};

type ContentProps = {
  // REF: https://fullcalendar.io/docs/resource-group-render-hooks
  groupValue: string;
};

export const useResourceGroupLabelContentInUserCalendar = ({
  createOpenHandle,
}: Props) => {
  const calendar = useSelector(selectUserCalendar);

  const resourceGroupLabelContent = React.useCallback(
    ({ groupValue: storyId }: ContentProps) => {
      if (!calendar) return;

      // story validation
      const story = calendar.stories.find((story) => story.id === storyId);
      if (!story) {
        console.warn("cannot find story", storyId);
        return;
      }

      // name handler
      const name = (() => {
        if (story.name) return story.name;
        console.warn("cannot find this story name", storyId);
        return "No Name";
      })();

      const calendarId = calendar.id;
      const openHandle = createOpenHandle({ calendarId, storyId });

      return (
        <Container>
          <Text>{name}</Text>
          <Button onClick={openHandle} variant="outlined">
            ✏️
          </Button>
        </Container>
      );
    },
    [calendar, createOpenHandle]
  );

  return { resourceGroupLabelContent };
};

const Text = styled.i`
  font-family: var(--font-text1);
  color: var(--color-dark1);
`;

const Container = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex-direction: column;
`;
