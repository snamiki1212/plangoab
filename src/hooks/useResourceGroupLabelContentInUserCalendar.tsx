import React from "react";
import { useSelector } from "react-redux";
import { selectUserCalendar } from "@/redux/features/userCalendars";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

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
      let name: string;
      if (story.name) {
        name = story.name;
      } else {
        console.warn("cannot find this story name", storyId);
        name = "No Name";
      }

      const calendarId = calendar.id;
      const openHandle = createOpenHandle({ calendarId, storyId });

      return (
        <Container>
          <i>{name}</i>
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
