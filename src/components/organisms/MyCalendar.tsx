import React from "react";
import { useMyCalendar } from "../../hooks/useMyCalendar";
import { useUser } from "../../hooks/useUser";
import { DEPRECATED_useEventsHandler } from "../../hooks/DEPRECATED_useEventsHandler";
import { FullCalendarWithConfigs } from "../atoms/FullCalendarWithConfigs";

export const MyCalendar = function () {
  const { birth } = useUser();
  const { events, select, click, set: setEvents } = DEPRECATED_useEventsHandler();
  const {
    events: _events,
    resources: _resources,
    init: initMyCalendar,
  } = useMyCalendar();

  React.useEffect(() => {
    initMyCalendar(birth);
  }, [birth, initMyCalendar]);

  React.useEffect(() => {
    setEvents(_events);
  }, [setEvents, _events]);

  return (
    <FullCalendarWithConfigs
      events={events}
      resources={_resources}
      select={select}
      eventClick={click}
      initialDate={"2020-06-01"}
    />
  );
};
