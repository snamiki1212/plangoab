// import { EventInput } from "@fullcalendar/react";

// type _Date = Date | string;
type _Event = {
  id: string;
  resourceId: string;
  title?: string;
  start: Date | string;
  end: Date | string;
}; // TODO: maybe should not use fullcalendar type.
type _Resource = any; // TODO:

export interface BaseStory {
  // periodMonths: number;
  // constraints: unknown; // TODO: e.g. workingholiday should apply by age of 31.
  events: _Event[];
  resources: _Resource[];
  removeEvent(eventId: string): void;
}
