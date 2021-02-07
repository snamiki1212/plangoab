import React from "react";
import { useCommunityCollegeAfterwardsWorkingHolidayCalendar } from "../hooks/useCommunityCollegeAfterwardsWorkingHolidayCalendar";
import { useUser } from "../hooks/useUser";
import { DEPRECATED_useEventsHandler } from "../hooks/DEPRECATED_useEventsHandler";
import { BaseCalendarContainer } from "./BaseCalendarContainer";
import { useResourceGroupLabelContentInTemplateCalendar } from "../hooks/useResourceGroupLabelContentInTemplateCalendar";

export function TemplateCalendarContainer() {
  const { birth } = useUser();
  const {
    events: _events,
    select,
    click,
    set: setEvents,
  } = DEPRECATED_useEventsHandler();
  const {
    resources,
    events,
    generate,
  } = useCommunityCollegeAfterwardsWorkingHolidayCalendar();
  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInTemplateCalendar();

  React.useEffect(() => {
    generate(birth);
  }, [generate, birth]);

  React.useEffect(() => {
    setEvents(events);
  }, [events, setEvents]);

  return (
    <BaseCalendarContainer
      events={_events}
      resources={resources}
      select={select}
      eventClick={click}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
    />
  );
}
