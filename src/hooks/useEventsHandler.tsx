import React from 'react'
import {
  DateSelectArg,
  EventClickArg,
  EventInput,
} from "@fullcalendar/react";
import { uuid } from "../lib/uuid";

export const useEventsHandler = () => {
  const [events, setEvents] = React.useState<EventInput[]>([]);

  const select = React.useCallback((info: DateSelectArg) => {
    setEvents((prev) => {
      return [
        ...prev,
        {
          id: uuid(),
          resourceId: info.resource?.id,
          start: info.startStr,
          end: info.endStr,
        },
      ];
    });
  }, []);

  const click = React.useCallback((info: EventClickArg) => {
    if (!window.confirm("Would you like to remove this event?")) return;
    const id = info.event.id;
    setEvents((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  }, []);

  return {events, select, click, set: setEvents}
}
