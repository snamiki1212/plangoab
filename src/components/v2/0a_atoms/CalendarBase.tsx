import React, { PropsWithChildren } from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import { FULL_CALENDAR_CONFIGS } from "~/src/constants/fullcalendar";
import { eventContent } from "~/src/components/v2/0a_atoms/eventContent";

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
