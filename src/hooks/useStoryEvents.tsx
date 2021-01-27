import React from "react";
import { EventInput } from "@fullcalendar/react";
import { events as list } from "../constants/index";

export const useStoryEvents = () => {
  const [events, setEvents] = React.useState<EventInput[]>([]);

  const createStoryEvents = React.useCallback((_birth: Date | string) => {
    const birth = new Date(_birth);
    setEvents(list);
  }, []);

  return [events, createStoryEvents] as const;
};
