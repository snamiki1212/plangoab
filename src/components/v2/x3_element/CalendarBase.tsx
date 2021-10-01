import React, { PropsWithChildren } from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import { FULL_CALENDAR_CONFIGS } from "@/constants/fullcalendar";
import { eventContent } from "@/components/v2/x3_element/eventContent";

const styleConfigs = {
  height: "100%",

  // NOTE: Because of capture feature. When to open preview page, need this setting.
  resourceAreaWidth: "250px",
};

export function CalendarBase<T>(props: PropsWithChildren<T>) {
  return (
    <FullCalendarLib
      {...styleConfigs}
      {...FULL_CALENDAR_CONFIGS}
      plugins={[interactionPlugin, resourceTimelinePlugin]}
      {...props}
      eventContent={eventContent}
    />
  );
}
