import { EventInput } from "@fullcalendar/react";

type MyEvent = {
  id: string;
  resourceId: string;
  storyId: string;
  title?: string;
  start: Date | string;
  end: Date | string;
};

export type BaseEvent = MyEvent | EventInput;
