import { Factory } from "fishery";
import { BaseEvent } from "@/core/v1/event/BaseEvent";

const decorateId = (id: number) => `EVENT_${id}`;

export const eventFactory = Factory.define<BaseEvent>(({ sequence }) => ({
  id: decorateId(sequence),
  extendedProps: {
    calendarId: "calendarId",
    storyId: "storyId",
    description: "description",
  },
}));
