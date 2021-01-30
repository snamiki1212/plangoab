import { EventInput } from "@fullcalendar/react";
import React from "react";
import { DEPRECATED_SHARED__RESOURCES } from "../constants/fullcalendar/templates";
import { generateEvents } from "../core/story/sharedStory";

export const useSharedStory = () => {
  const [events, setEvents] = React.useState<EventInput[]>([]);

  const resources = DEPRECATED_SHARED__RESOURCES;

  const _generateEvents = React.useCallback((birthday: string | Date) => {
    const birthDate = new Date(birthday);
    const _events = generateEvents(birthDate);
    setEvents(_events);
  }, []);

  return [events, resources, _generateEvents] as const;
};
