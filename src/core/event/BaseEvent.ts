import { EventInput } from "@fullcalendar/react";
import { uuid } from "../../lib/uuid";
import { convertIsoToYearAndMonth } from "../../lib/date";

export type BaseEvent = EventInput & {
  extendedProps: {
    calendarId: string;
    storyId: string;
    description: string;
  };
};

export const initEvent = (props?: Partial<BaseEvent>): BaseEvent => {
  const {
    id,
    calendarId,
    resourceId: _resourceId,
    storyId: _storyId,
    title: _title,
    start: _start,
    end: _end,
    description = "",
    ...rest
  } = props ?? {};

  const storyId = _storyId ?? uuid();
  const resourceId = _resourceId ?? uuid();
  const title = _title ?? "New Event";
  const start = _start ? convertIsoToYearAndMonth(_start as Date) : undefined;
  const end = _end ? convertIsoToYearAndMonth(_end as Date) : undefined;

  return {
    id: id ?? uuid(),
    resourceId,
    storyId,
    title,
    start,
    end,
    extendedProps: {
      calendarId,
      storyId,
      resourceId,
      description,
    },
    ...rest,
  };
};

export const updateEvent = (
  event: BaseEvent,
  params: Partial<Omit<BaseEvent, "id" | "storyId">>
): BaseEvent => {
  const title = params.title;
  const description = params.description;
  const start = params.start
    ? convertIsoToYearAndMonth(params.start as Date)
    : undefined;
  const end = params.end
    ? convertIsoToYearAndMonth(params.end as Date)
    : undefined;

  const newEvent = Object.assign(
    { ...event },
    title !== undefined && { title },
    description !== undefined && { description },
    start !== undefined && { start },
    end !== undefined && { end }
  );

  return newEvent;
};
