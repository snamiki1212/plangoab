import React from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useAgeEvents } from "../../hooks/useAgeEvents";
import { useStoryList } from "../../hooks/useStoryList";
import { useAgeContext } from "../../hooks/useAgeContext";
import { useEventsHandler } from "../../hooks/useEventsHandler";
import { FULL_CALENDAR_CONFIGS } from "../../constants/fullcalendar/options";
import { DEPRECATED_SHARED__RESOURCES } from "../../constants/fullcalendar/templates";

export const FullCalendar = () => {
  const { birth } = useAgeContext();
  const [ageEvents, calcAgeEvents] = useAgeEvents();
  const { events, select, click, set: setEvents } = useEventsHandler();
  const { stories, generate } = useStoryList();
  
  const storyResources = React.useMemo(() => stories.reduce((prev,story) => ([...prev, ...story.resources]), []), [stories]);
  const storyEvents = React.useMemo(() => stories.reduce((prev, story) => ([...prev, ...story.events]), []), [stories]);

  const _resources = React.useMemo(
    () => [...DEPRECATED_SHARED__RESOURCES, ...storyResources],
    [storyResources]
  );

  const tmpAllEvents = React.useMemo(() => [...ageEvents, ...storyEvents], [
    ageEvents,
    storyEvents,
  ]);


  React.useEffect(() => {
    generate(birth);
  }, [generate, birth]);

  React.useEffect(() => {
    setEvents(tmpAllEvents);
  }, [tmpAllEvents, setEvents]);

  React.useEffect(() => {
    calcAgeEvents(birth);
  }, [birth, calcAgeEvents]);

  console.log("events", events, "resources", _resources);

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
