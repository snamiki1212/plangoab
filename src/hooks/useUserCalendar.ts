import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateSelectArg } from "@fullcalendar/react";
import { uuid } from "../lib/uuid";
import { createProfileStory } from "../core/story/ProfileStory/createProfileStory";
import { initEvent } from "../core/event/BaseEvent";
import { createUserCalendar } from "../core/calendar/UserCalendar/createUserCalendar";
import {
  updateCalendarsAction,
  addEventAction,
  selectUserCalendar,
} from "../redux/features/userCalendars";
import { MY_CALENDAR_ID } from "../constants/fullcalendar/settings";

export const useUserCalendar = () => {
  const dispatch = useDispatch();
  const calendar = useSelector(selectUserCalendar);

  const init = React.useCallback(
    (birthday: string | Date) => {
      const calendarId = MY_CALENDAR_ID; // TODO: use selected my calendar id not constant value
      const story = createProfileStory({ birth: birthday, calendarId });
      const _calendar = createUserCalendar({
        id: calendarId,
        stories: [story],
      });
      const _calendars = [_calendar];
      dispatch(updateCalendarsAction({ calendars: _calendars }));
    },
    [dispatch]
  );

  const select = React.useCallback(
    (info: DateSelectArg) => {
      if (!info.resource) {
        console.warn("Unexpected data that info does not have resource.");
        return;
      }

      // storyId
      const storyId = info.resource.extendedProps.storyId;
      if (!storyId) {
        console.warn("Unexpected data not including storyId.");
        return;
      }

      // calendarId
      const calendarId = info.resource.extendedProps.calendarId;
      if (!calendarId) {
        console.warn("Unexpected data not including calendarId.");
        return;
      }

      const newEvent = initEvent({
        id: uuid(),
        resourceId: info.resource.id,
        calendarId,
        storyId,
        start: info.startStr,
        end: info.endStr,
      });

      dispatch(addEventAction({ event: newEvent, calendarId, storyId }));
    },
    [dispatch]
  );

  const stories = React.useMemo(() => calendar?.stories ?? [], [calendar]);

  const events = React.useMemo(
    () => calendar?.stories.flatMap((story) => story.events) ?? [],
    [calendar]
  );

  const resources = React.useMemo(
    () => calendar?.stories.flatMap((story) => story.resources) ?? [],
    [calendar]
  );

  return {
    calendar,
    stories,
    events,
    resources,
    init,
    select,
  } as const;
};
