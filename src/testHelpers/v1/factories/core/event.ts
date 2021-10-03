import { Factory } from "fishery";
import { BaseEvent } from "~/src/core/v1/event/BaseEvent";

const decorateId = (id: number) => `EVENT_${id}`;

export const eventFactory = Factory.define<BaseEvent>(({ sequence }) => ({
  id: decorateId(sequence),
  calendarId: "calendarId",
  resourceId: "resourceId",
  storyId: "storyId",
  title: "event title",
  start: "1990-01-01 00:00:00",
  end: "1990-01-01 00:00:00",
  description: "description-title",
  //
  extendedProps: {
    calendarId: "calendarId",
    storyId: "storyId",
    resourceId: "resourceId",
    description: "description",
  },
  backgroundColor: "red",
}));
