import { createSelector } from "@reduxjs/toolkit";
import { selectUserCalendar as selectRowUserCalendar } from "./features/userCalendars";
import { selectUserProfileStory } from "./features/userProfileStory";

export const selectUserCalendar = createSelector(
  selectRowUserCalendar,
  selectUserProfileStory,
  (rowUserCalendar, userProfileStory) => {
    if (!rowUserCalendar) return rowUserCalendar;
    if (!userProfileStory) return rowUserCalendar;
    return {
      ...rowUserCalendar,
      stories: [userProfileStory, ...rowUserCalendar.stories],
    };
  }
);
