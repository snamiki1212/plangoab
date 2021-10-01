import React, { PropsWithChildren } from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import { FULL_CALENDAR_CONFIGS } from "@/constants/fullcalendar";
import { eventContent } from "@/components/v1/atoms/eventContent";

const styleConfigs = {
  // NOTE: if no height props, another calendar after opening tab would become 0 height
  height: 600,

  // NOTE: Because of capture feature. When to open preview page, need this setting.
  resourceAreaWidth: "250px",
};

export function CalendarBase<T>(props: PropsWithChildren<T>) {
  return (
    <FullCalendarLib
      {...FULL_CALENDAR_CONFIGS}
      {...styleConfigs}
      plugins={[interactionPlugin, resourceTimelinePlugin]}
      {...props}
      eventContent={eventContent}
    />
  );
}
