import { EventInput } from "@fullcalendar/react";
import { uuid } from "../../lib/uuid";

export type BaseEvent = EventInput & {
  extendedProps: {
    calendarId: string;
    storyId: string;
  };
};

export const initEvent = (props?: Partial<BaseEvent>): BaseEvent => {
  const {
    id,
    calendarId,
    resourceId: _resourceId,
    storyId: _storyId,
    title: _title,
    start,
    end,
  } = props ?? {};

  const storyId = _storyId ?? uuid();
  const resourceId = _resourceId ?? uuid();
  const title = _title ?? "New Event";

  return {
    id: id ?? uuid(),
    resourceId,
    storyId,
    title,
    start: start ?? new Date().toISOString(),
    end: end ?? new Date().toISOString(),
    extendedProps: {
      calendarId,
      storyId,
      resourceId,
    },
  };
};

export const updateEvent = (
  event: BaseEvent,
  params: Partial<Omit<BaseEvent, "id" | "storyId">>
): BaseEvent => {
  const title = params.title;
  const newEvent = Object.assign(
    { ...event },
    title !== undefined && { title }
  );

  return newEvent;
};
