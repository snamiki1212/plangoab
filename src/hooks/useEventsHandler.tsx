import React from "react";
import { DateSelectArg, EventClickArg, EventInput } from "@fullcalendar/react";
import { uuid } from "../lib/uuid";
import { BaseCalendar, removeEvent } from "../core/calendar/BaseCalendar";

export const useEventsHandler = () => {
  // const [events, setEvents] = React.useState<EventInput[]>([]);

  // const select = React.useCallback((info: DateSelectArg) => {
  //   if(!info.resource) return console.warn("Unexpected data that info does not have resource.")
  //   const newEvent = {
  //     id: uuid(),
  //     resourceId: info.resource.id,
  //     start: info.startStr,
  //     end: info.endStr,
  //   };
  //   setEvents((prev) => [...prev, newEvent]);
  // }, []);

  const click = React.useCallback(
    (calendar: BaseCalendar | undefined) => (info: EventClickArg) => {
      if (!calendar) return null;
      if (!window.confirm("Would you like to remove this event?")) return null;
      const id = info.event.id;
      if (!id) {
        console.error("cannot find id in event.");
        return null;
      }

      const newCalendar = removeEvent(calendar, id);
      return newCalendar;
    },
    []
  );

  return { click };
};
