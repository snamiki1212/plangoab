// import { EventInput } from "@fullcalendar/react";

// type _Date = Date | string;
// type _Event = {
//   id: string;
//   resourceId: string;
//   title?: string;
//   start: Date | string;
//   end: Date | string;
// }; // TODO: maybe should not use fullcalendar type.

type Event = any;
type Resource = any; // TODO:

export type BaseStory = {
  events: Event[];
  resources: Resource[];
};

export const removeEvent = (story: BaseStory, eventId: string): BaseStory => {
  const newEvents = story.events.filter((event) => event.id !== eventId);
  return { ...story, events: newEvents };
};
