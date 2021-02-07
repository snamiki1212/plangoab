import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateSelectArg, EventClickArg } from "@fullcalendar/react";
import { uuid } from "../lib/uuid";
import { createProfileStory } from "../core/story/ProfileStory/createProfileStory";
import { createUserCalendar } from "../core/calendar/UserCalendar/createUserCalendar";
import {
  update as updateAction,
  addEvent as addEventAction,
  removeEvent as removeEventAction,
  selectUserCalendar,
} from "../redux/features/userCalendars";

export const useUserCalendar = () => {
  const dispatch = useDispatch();
  const calendars = useSelector(selectUserCalendar);
  const calendar = calendars[0]; // TODO: later there is plan to become list.

  const init = React.useCallback(
    (birthday: string | Date) => {
      const story = createProfileStory({ birth: birthday });
      const calendar = createUserCalendar({ stories: [story] });
      const _calendars = [calendar];
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

  const stories = React.useMemo(() => calendar?.stories ?? [], [calendar]);

  const events = React.useMemo(
    () => calendar?.stories.flatMap((story) => story.events) ?? [],
    [calendar]
  );

  const resources = React.useMemo(
    () => calendar?.stories.flatMap((story) => story.resources) ?? [],
    [calendar]
  );

  return { calendar, stories, events, resources, init, click, select } as const;
};
