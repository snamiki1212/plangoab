import React from "react";
import { useSelector } from "react-redux";
import { selectPrivateCollegeCalendar } from "../redux/features/templateCalendarTable";
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
  const templateCalendar = useSelector(selectPrivateCollegeCalendar);
  const myCalendar = useSelector(selectUserCalendar);

  const resourceGroupLabelContent = React.useCallback(
    ({ groupValue: storyId }: ResourceContentProps) => {
      if (!templateCalendar) {
        console.warn("cannot find selected templateCalendar");
        return;
      }
      
      if (!myCalendar) {
        console.warn("cannot find selected myCalendar");
        return;
      }

      const myCalendarId = myCalendar.id;

      // story validation
      const story = templateCalendar.stories.find((story) => story.id === storyId);
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
    [templateCalendar, myCalendar, createClickHandel]
  );

  return { resourceGroupLabelContent };
};
