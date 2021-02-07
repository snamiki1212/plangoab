import { EventInput } from "@fullcalendar/react";

type _Event = {
  id: string;
  resourceId: string;
  title?: string;
  start: Date | string;
  end: Date | string;
};

export type BaseEvent = _Event | EventInput;
