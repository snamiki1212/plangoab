import React from "react";
import { useSelector } from "react-redux";
import { selectUserCalendar } from "../redux/features/userCalendars";

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

      const containerEl = document.createElement("span");
      containerEl.style.display = "flex";
      containerEl.style.justifyContent = "space-between";

      const nameElement = document.createElement("i");
      nameElement.innerHTML = name + " "; // NOTE: space is for design, so not good way
      containerEl.appendChild(nameElement);

      const buttonElement = document.createElement("button");
      buttonElement.innerHTML = "︙";
      buttonElement.onclick = openHandle;
      containerEl.appendChild(buttonElement);

      const arrayOfDomNodes = [containerEl];
      return { domNodes: arrayOfDomNodes };
    },
    [calendar, createOpenHandle]
  );

  return { resourceGroupLabelContent };
};
