import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeStoryAction } from "../redux/features/userCalendars";
import { selectUserCalendar } from "../redux/features/userCalendars";
import { MY_CALENDAR_ID } from "../constants/fullcalendar/settings";

type Props = {
  // REF: https://fullcalendar.io/docs/resource-group-render-hooks
  groupValue: string;
};

export const useResourceGroupLabelContentInUserCalendar = () => {
  const dispatch = useDispatch();
  const calendars = useSelector(
    selectUserCalendar
  );

  const calendar = calendars[0] // TODO: 

  const resourceGroupLabelContent = React.useCallback(
    ({ groupValue: storyId }: Props) => {
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

      const onClick = () => {
        if (!window.confirm("Remove this story?")) return;
        dispatch(removeStoryAction({ calendarId: MY_CALENDAR_ID, storyId }));
      };

      const nameElement = document.createElement('i')
      nameElement.innerHTML = name + ' ' // NOTE: space is for design, so not good way

      const buttonElement = document.createElement('button')
      buttonElement.innerHTML = 'remove'
      buttonElement.onclick = onClick

      const arrayOfDomNodes = [nameElement, buttonElement];
      return { domNodes: arrayOfDomNodes };
    },
    [dispatch, calendar]
  );

  return {resourceGroupLabelContent};
};
