import React from "react";
import { useUserCalendar } from "../hooks/useUserCalendar";
import { useUser } from "../hooks/useUser";
import { DEPRECATED_useEventsHandler } from "../hooks/DEPRECATED_useEventsHandler";
import { BaseCalendarContainer } from "./BaseCalendarContainer";
import { useResourceGroupLabelContentInUserCalendar } from "../hooks/useResourceGroupLabelContentInUserCalendar";

export function UserCalendarContainer() {
  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInUserCalendar();
  const { birth } = useUser();
  const {
    events,
    select,
    click,
    set: setEvents,
  } = DEPRECATED_useEventsHandler();
  const {
    events: _events,
    resources: _resources,
    init: initUserCalendar,
  } = useUserCalendar();

  React.useEffect(() => {
    initUserCalendar(birth);
  }, [birth, initUserCalendar]);

  React.useEffect(() => {
    setEvents(_events);
  }, [setEvents, _events]);

  return (
    <BaseCalendarContainer
      events={events}
      resources={_resources}
      select={select}
      eventClick={click}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
    />
  );
}
