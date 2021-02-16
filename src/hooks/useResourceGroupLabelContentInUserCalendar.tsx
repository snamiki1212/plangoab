import React from "react";
import { useSelector } from "react-redux";
import { selectUserCalendar } from "../redux/features/userCalendars";
import { MY_CALENDAR_ID } from "../constants/fullcalendar/settings";


type Props = {
  createOpenHandle: Function;
}

type ContentProps = {
  // REF: https://fullcalendar.io/docs/resource-group-render-hooks
  groupValue: string;
};

export const useResourceGroupLabelContentInUserCalendar = ({createOpenHandle}: Props) => {
  const calendar = useSelector(
    selectUserCalendar
  );

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

      const calendarId = MY_CALENDAR_ID;
      const openHandle = createOpenHandle({calendarId, storyId})

      const nameElement = document.createElement('i')
      nameElement.innerHTML = name + ' ' // NOTE: space is for design, so not good way

      const buttonElement = document.createElement('button')
      buttonElement.innerHTML = '︙'
      buttonElement.onclick = openHandle

      const arrayOfDomNodes = [nameElement, buttonElement];
      return { domNodes: arrayOfDomNodes };
    },
    [calendar, createOpenHandle]
  );

  return {resourceGroupLabelContent};
};
