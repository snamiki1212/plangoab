import React from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useAgeEvents } from "../../hooks/useAgeEvents";
import { useStoryList } from "../../hooks/useStoryList";
import { useAgeContext } from "../../hooks/useAgeContext";
import { useEventsHandler } from "../../hooks/useEventsHandler";
import { FULL_CALENDAR_CONFIGS } from "../../constants/fullcalendar";
import { SHARED__RESOURCES } from "../../constants/fullcalendar";

export const FullCalendar = () => {
  const { birth } = useAgeContext();
  const [ageEvents, calcAgeEvents] = useAgeEvents();
  const {
    events: storyEvents,
    resources: storyResources,
    generate,
  } = useStoryList();

  React.useEffect(() => {
    generate(birth);
  }, [generate, birth]);

  const _resources = React.useMemo(
    () => [...SHARED__RESOURCES, ...storyResources],
    [storyResources]
  );

  const _events = React.useMemo(() => [...ageEvents, ...storyEvents], [
    ageEvents,
    storyEvents,
  ]);

  const { events, select, click, set: setEvents } = useEventsHandler();

  React.useEffect(() => {
    setEvents(_events)
  }, [_events, setEvents])

  React.useEffect(() => {
    calcAgeEvents(birth);
  }, [birth, calcAgeEvents]);

  return (
    <FullCalendarLib
      selectable={true}
      editable={true}
      plugins={[interactionPlugin, resourceTimelinePlugin, listPlugin]}
      events={events}
      resources={_resources}
      select={select}
      eventClick={click}
      {...FULL_CALENDAR_CONFIGS}
      initialDate={"2020-06-01"}
    />
  );
};
