import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateSelectArg } from "@fullcalendar/react";
import { uuid } from "../lib/uuid";
import { createProfileStory } from "../core/story/ProfileStory/createProfileStory";
import { initEvent } from "../core/event/BaseEvent";
import { createUserCalendar } from "../core/calendar/UserCalendar/createUserCalendar";
import {
  updateCalendarsAction,
  removeCalendarAction,
  addEventAction,
  selectUserCalendar,
} from "../redux/features/userCalendars";

export const useUserCalendar = () => {
  const dispatch = useDispatch();
  const calendar = useSelector(selectUserCalendar);

  const init = React.useCallback(
    ({
      birthday,
      workingholidayPeriod,
    }: {
      birthday: string | Date;
      workingholidayPeriod: number;
    }) => {
      const calendarId = uuid();
      const story = createProfileStory({
        birth: birthday,
        calendarId,
        workingholidayPeriod,
      });
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

  const remove = React.useCallback(
    (calendarId: string) => {
      dispatch(removeCalendarAction({ calendarId }));
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
    // callbacks
    init,
    select,
    remove,

    // params
    calendar,
    stories,
    events,
    resources,
  } as const;
};
