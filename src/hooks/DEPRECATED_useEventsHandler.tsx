import React from "react";
import { DateSelectArg, EventClickArg, EventInput } from "@fullcalendar/react";
import { uuid } from "../lib/uuid";

export const DEPRECATED_useEventsHandler = () => {
  const [events, setEvents] = React.useState<EventInput[]>([]);

  const select = React.useCallback((info: DateSelectArg) => {
    if(!info.resource) return console.warn("Unexpected data that info does not have resource.")
    const newEvent = {
      id: uuid(),
      resourceId: info.resource.id,
      start: info.startStr,
      end: info.endStr,
    };
    setEvents((prev) => [...prev, newEvent]);
  }, []);

  const click = React.useCallback((info: EventClickArg) => {
    if (!window.confirm("Would you like to remove this event?")) return;
    const id = info.event.id;
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }, []);

  return { events, select, click, set: setEvents };
};
