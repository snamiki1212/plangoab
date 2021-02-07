import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStory } from "../redux/features/userCalendars";
import { selectCommunityCollegeAfterwardsWorkingHolidayCalendar } from "../redux/features/templateCalendarTable";
import { MY_CALENDAR_ID } from "../constants/fullcalendar/settings";

type Props = {
  // REF: https://fullcalendar.io/docs/resource-group-render-hooks
  groupValue: string;
};

export const useResourceGroupLabelContentInTemplateCalendar = () => {
  const dispatch = useDispatch();
  const calendar = useSelector(
    selectCommunityCollegeAfterwardsWorkingHolidayCalendar
  );

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
        if (!window.confirm("Copy to my calendar?")) return;
        console.log("clicked");
        dispatch(addStory({ calendarId: MY_CALENDAR_ID, story }));
      };

      const nameElement = document.createElement('i')
      nameElement.innerHTML = name + ' ' // NOTE: space is for design, so not good way

      const buttonElement = document.createElement('button')
      buttonElement.innerHTML = 'copy'
      buttonElement.onclick = onClick

      const arrayOfDomNodes = [nameElement, buttonElement];
      return { domNodes: arrayOfDomNodes };
    },
    [dispatch, calendar]
  );

  return {resourceGroupLabelContent};
};
