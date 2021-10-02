import { EventInput } from "@fullcalendar/react";
import { uuid } from "~/src/lib/uuid";
import { DEPRECATED_convertDateToIso, convertUpdateFC } from "~/src/lib/date";

export type BaseEvent = {
  id: string;
  calendarId: string;
  resourceId: string;
  storyId: string;
  title: string;
  start: string;
  end: string;
  description: string;
  extendedProps: {
    calendarId: string;
    storyId: string;
    resourceId: string;
    description: string;
  };
  //
  backgroundColor?: string;
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
  const start = _start ? DEPRECATED_convertDateToIso(_start as any) : undefined;
  const end = _end ? DEPRECATED_convertDateToIso(_end as any) : undefined;

  const event: BaseEvent = {
    id: id ?? uuid(),
    calendarId,
    resourceId,
    storyId,
    title,
    start,
    end,
    description,
    extendedProps: {
      calendarId,
      storyId,
      resourceId,
      description,
    },
  };

  return {
    ...event,
    ...rest,
  };
};

export const updateEvent = (
  event: BaseEvent,
  params: Partial<Omit<BaseEvent, "id" | "storyId">>
): BaseEvent => {
  const title = params.title;
  const extendedProps = params.extendedProps;
  const [start, end] = convertUpdateFC(params.start as any, params.end as any);
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
