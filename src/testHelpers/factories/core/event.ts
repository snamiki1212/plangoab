import { Factory } from "fishery";
import { BaseEvent } from "@/core/event/BaseEvent";

const decorateId = (id: number) => `EVENT_${id}`;

export const eventFactory = Factory.define<BaseEvent>(({ sequence }) => ({
  id: decorateId(sequence),
  extendedProps: {
    calendarId: "dummy calendarId",
    storyId: "dummy storyId",
    description: "dummy description",
  },
}));
