import React from "react";
import { useSelector } from "react-redux";
import {
  selectPrivateCollegeCalendar,
  selectPublicCollegeCalendar,
} from "@/redux/features/templateCalendarTable";
import { selectUserCalendar } from "@/redux/features/userCalendars";
import { updateStory } from "@/core/story/BaseStory";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

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
      let name: string;
      if (story.name) {
        name = story.name;
      } else {
        console.warn("cannot find this story name", storyId);
        name = "No Name";
      }

      const updatedStory = updateStory(story, { calendarId: myCalendarId });

      const clickHandle = createClickHandel({
        calendarId: myCalendarId,
        story: updatedStory,
      });

      return (
        <span>
          <i>{name}</i>
          <br />

          <ButtonContainer>
            <Button
              onClick={clickHandle}
              variant="outlined"
              style={{ textTransform: "none" }}
            >
              🗒Copy to my calendar
            </Button>
          </ButtonContainer>
        </span>
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

const ButtonContainer = styled.div`
  margin-left: 1rem;
`;
