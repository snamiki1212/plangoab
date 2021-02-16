import React from "react";
import { useSelector } from "react-redux";
import { selectCommunityCollegeCalendar } from "../redux/features/templateCalendarTable";
import { MY_CALENDAR_ID } from "../constants/fullcalendar/settings";

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
  const calendar = useSelector(selectCommunityCollegeCalendar);

  const resourceGroupLabelContent = React.useCallback(
    ({ groupValue: storyId }: ResourceContentProps) => {
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

      const clickHandle = createClickHandel({
        calendarId: MY_CALENDAR_ID,
        story,
      });

      const nameElement = document.createElement("i");
      nameElement.innerHTML = name + " "; // NOTE: space is for design, so not good way

      const buttonElement = document.createElement("button");
      buttonElement.innerHTML = "copy";
      buttonElement.onclick = clickHandle;

      const arrayOfDomNodes = [nameElement, buttonElement];
      return { domNodes: arrayOfDomNodes };
    },
    [calendar, createClickHandel]
  );

  return { resourceGroupLabelContent };
};
