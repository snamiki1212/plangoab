import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStory } from "../redux/features/userCalendars";
import { selectCommunityCollegeAfterwardsWorkingHolidayCalendar } from "../redux/features/templateCalendarTable";
import { MY_CALENDAR_ID } from "../constants/fullcalendar/settings";

type Props = {
  // REF: https://fullcalendar.io/docs/resource-group-render-hooks
  groupValue: string;
};

const calendarId = MY_CALENDAR_ID; // TODO:

export const useResourceGroupLabelContent = () => {
  const dispatch = useDispatch();
  const calendar = useSelector(
    selectCommunityCollegeAfterwardsWorkingHolidayCalendar
  );

  const resourceGroupLabelContent = React.useCallback(
    ({ groupValue: storyId }: Props) => {
      if (!calendar) return;
      const story = calendar.stories.find((story) => story.id === storyId);
      if (!story) {
        console.warn("cannot find story", storyId);
        return;
      }
      let name: string;
      if (story.name) {
        name = story.name;
      } else {
        console.warn("cannot find this story name", storyId);
        name = "No Name";
      }

      const onClick = () => {
        console.log("clicked");
        dispatch(addStory({ calendarId, story }));
      };

      return { html: `<i><button onClick=${onClick}>${name}</button></i>` };
    },
    [dispatch, calendar]
  );

  return resourceGroupLabelContent;
};
