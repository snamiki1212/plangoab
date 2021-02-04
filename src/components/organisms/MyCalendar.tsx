import React from "react";
import { useMyCalendar } from "../../hooks/useMyCalendar";
import { useUser } from "../../hooks/useUser";
import { useEventsHandler } from "../../hooks/useEventsHandler";
import { FullCalendarWithConfigs } from "../atoms/FullCalendarWithConfigs";

export const MyCalendar = function () {
  const { birth } = useUser();
  const { events, select, click, set: setEvents } = useEventsHandler();
  const [_events, _resources, initMyCalendar] = useMyCalendar();

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