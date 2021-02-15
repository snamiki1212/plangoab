import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateSelectArg, EventClickArg } from "@fullcalendar/react";
import { uuid } from "../lib/uuid";
import { createProfileStory } from "../core/story/ProfileStory/createProfileStory";
import { initStory } from "../core/story/BaseStory";
import { createUserCalendar } from "../core/calendar/UserCalendar/createUserCalendar";
import {
  // events
  updateAction,
  addEventAction,
  removeEventAction,

  // storeis
  addStoryAction,
  // resources

  // selector
  selectUserCalendar,
} from "../redux/features/userCalendars";
import { MY_CALENDAR_ID } from "../constants/fullcalendar/settings";

export const useUserCalendar = () => {
  const dispatch = useDispatch();
  const calendars = useSelector(selectUserCalendar);
  const calendar = calendars[0]; // NOTE: now calendars have only 1 calendar.

  const init = React.useCallback(
    (birthday: string | Date) => {
      const calendarId = MY_CALENDAR_ID;
      const story = createProfileStory({ birth: birthday, calendarId });
      const _calendar = createUserCalendar({
        id: calendarId,
        stories: [story],
      });
      const _calendars = [_calendar];
      dispatch(updateAction({ calendars: _calendars }));
    },
    [dispatch]
  );

  const select = React.useCallback(
    (info: DateSelectArg) => {
      if (!info.resource) {
        console.warn("Unexpected data that info does not have resource.");
        return;
      }
      const storyId = info.resource.extendedProps.storyId;
      if (!storyId) {
        console.warn("Unexpected data not including storyId.");
        return;
      }

      const calendarId = calendar.id;
      const newEvent = {
        id: uuid(),
        resourceId: info.resource.id,
        start: info.startStr,
        end: info.endStr,
      };

      dispatch(addEventAction({ event: newEvent, calendarId, storyId }));
    },
    [calendar, dispatch]
  );

  const click = React.useCallback(
    (info: EventClickArg) => {
      if (!window.confirm("Would you like to remove this event?")) return;

      const calendarId = calendar.id;
      const eventId = info.event.id;
      if (!eventId) {
        console.warn("Unexpected data. cannot find event id.");
        return;
      }

      dispatch(removeEventAction({ calendarId, eventId }));
    },
    [dispatch, calendar]
  );

  const createStory = React.useCallback(() => {
    const calendarId = calendar.id;
    const story = initStory({ calendarId });
    dispatch(addStoryAction({ calendarId, story }));
  }, [dispatch, calendar]);

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
    click,
    select,
    createStory,
  } as const;
};
