import React, { PropsWithChildren } from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { FULL_CALENDAR_CONFIGS } from "@/constants/fullcalendar/options";

export function CalendarBase<T>(props: PropsWithChildren<T>) {
  return (
    <FullCalendarLib
      {...FULL_CALENDAR_CONFIGS}
      plugins={[interactionPlugin, resourceTimelinePlugin, listPlugin]}
      {...props}
    />
  );
}
