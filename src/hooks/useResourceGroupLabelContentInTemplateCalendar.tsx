import React from "react";
import { useSelector } from "react-redux";
import {
  selectPrivateCollegeCalendar,
  selectPublicCollegeCalendar,
} from "../redux/features/templateCalendarTable";
import { selectUserCalendar } from "../redux/features/userCalendars";
import { updateStory } from "../core/story/BaseStory";

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

      const nameElement = document.createElement("i");
      nameElement.innerHTML = name + " "; // NOTE: space is for design, so not good way
      nameElement.style.marginLeft = "1rem";

      const buttonElement = document.createElement("button");
      buttonElement.innerHTML = "Copy to my calendar";
      buttonElement.style.marginLeft = "1rem";
      buttonElement.onclick = clickHandle;

      const arrayOfDomNodes = [nameElement, buttonElement];
      return { domNodes: arrayOfDomNodes };
    },
    [myCalendar, privateCollegeTemplate, publicCollegeTemplate, createClickHandel]
  );

  return { resourceGroupLabelContent };
};
