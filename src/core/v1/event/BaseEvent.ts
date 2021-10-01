import { EventInput } from "@fullcalendar/react";
import { uuid } from "~/src/lib/uuid";
import { DEPRECATED_convertDateToIso, convertUpdateFC } from "~/src/lib/date";

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
  const start = _start
    ? DEPRECATED_convertDateToIso(_start as Date)
    : undefined;
  const end = _end ? DEPRECATED_convertDateToIso(_end as Date) : undefined;

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
  const extendedProps = params.extendedProps;
  const [start, end] = convertUpdateFC(params.start, params.end);
  const newEvent = Object.assign(
    { ...event },
    !isEmpty(title) && { title },
    !isEmpty(start) && { start },
    !isEmpty(end) && { end },

    // extendedProps
    !isEmpty(extendedProps) &&
      !isEmpty(extendedProps.description) && {
        extendedProps: {
          ...event.extendedProps,
          description: extendedProps.description,
        },
      }
  );

  return newEvent;
};

const isEmpty = (...val: any) => {
  if (Array.isArray(val)) return val.some((item: any) => item == undefined);
  return val == undefined;
};
