import { EventInput } from "@fullcalendar/react";
import { uuid } from "../../lib/uuid";

export type BaseEvent = EventInput;

export const initEvent = (props?: Partial<BaseEvent>): BaseEvent => {
  const { id, resourceId, storyId, title, start, end } = props ?? {};
  return {
    id: id ?? uuid(),
    resourceId: resourceId ?? uuid(),
    storyId: storyId ?? uuid(),
    title,
    start: start ?? new Date().toISOString(),
    end: end ?? new Date().toISOString(),
  };
};
