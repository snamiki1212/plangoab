import React, { PropsWithChildren } from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import { FULL_CALENDAR_CONFIGS } from "@/constants/fullcalendar";
import { eventContent } from "@/components/atoms/eventContent";

export function CalendarBase<T>(props: PropsWithChildren<T>) {
  return (
    <FullCalendarLib
      {...FULL_CALENDAR_CONFIGS}
      plugins={[interactionPlugin, resourceTimelinePlugin]}
      {...props}
      eventContent={eventContent}
    />
  );
}
