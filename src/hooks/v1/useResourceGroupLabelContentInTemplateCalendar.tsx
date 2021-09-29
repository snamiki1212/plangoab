import React from "react";
import { useSelector } from "react-redux";
import {
  selectPrivateCollegeCalendar,
  selectPublicCollegeCalendar,
} from "@/redux/v1/features/templateCalendar";
import { selectUserCalendar } from "@/redux/v1/features/userCalendars";
import { updateStory } from "@/core/v1/story/BaseStory";
import styled from "styled-components";
import Button from "@mui/material/Button";

type ResourceContentProps = {
  // REF: https://fullcalendar.io/docs/resource-group-render-hooks
  groupValue: string;
};

type Props = {
  createClickHandel: Function;
};

export const useResourceGroupLabelContentInTemplateCalendar = ({
  createClickHandel,
}: Props) => {
  const privateCollegeTemplate = useSelector(selectPrivateCollegeCalendar);
  const publicCollegeTemplate = useSelector(selectPublicCollegeCalendar);
  const myCalendar = useSelector(selectUserCalendar);

  const resourceGroupLabelContent = React.useCallback(
    ({ groupValue: storyId }: ResourceContentProps) => {
      if (!myCalendar) {
        console.warn("cannot find selected myCalendar");
        return;
      }

      const myCalendarId = myCalendar.id;

      if (!privateCollegeTemplate && !publicCollegeTemplate) {
        console.warn("cannot find selected template calendar");
        return;
      }

      // story validation
      const story = [
        ...(privateCollegeTemplate?.stories ?? []),
        ...(publicCollegeTemplate?.stories ?? []),
      ].find((story) => story.id === storyId);
      if (!story) {
        console.warn("cannot find story", storyId);
        return;
      }

      // name handler
      const name = (() => {
        if (story.name) {
          return story.name;
        }
        console.warn("cannot find this story name", storyId);
        return "No Name";
      })();

      const updatedStory = updateStory(story, { calendarId: myCalendarId });

      const clickHandle = createClickHandel({
        calendarId: myCalendarId,
        story: updatedStory,
      });

      return (
        <Container>
          <Text>{name}</Text>
          <ButtonContainer>
            <Button
              onClick={clickHandle}
              variant="outlined"
              style={{
                textTransform: "none",
                color: `var(--color-dark1)`,
                fontFamily: `var(--font-text1)`,
              }}
            >
              🗒 Copy to my calendar
            </Button>
          </ButtonContainer>
        </Container>
      );
    },
    [
      myCalendar,
      privateCollegeTemplate,
      publicCollegeTemplate,
      createClickHandel,
    ]
  );

  return { resourceGroupLabelContent };
};

const Container = styled.span`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Text = styled.i`
  font-family: var(--font-text1);
  color: var(--color-dark1);
  font-weight: 800;
`;

const ButtonContainer = styled.div``;
