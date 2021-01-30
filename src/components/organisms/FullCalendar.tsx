import React from "react";
import FullCalendarLib from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useSharedStory } from "../../hooks/useSharedStory";
import { useStoryList } from "../../hooks/useStoryList";
import { useAgeContext } from "../../hooks/useAgeContext";
import { useEventsHandler } from "../../hooks/useEventsHandler";
import { FULL_CALENDAR_CONFIGS } from "../../constants/fullcalendar/options";

export const FullCalendar = () => {
  const { birth } = useAgeContext();
  const [sharedEvents, sharedResources, generateSharedEvents] = useSharedStory();
  const { events, select, click, set: setEvents } = useEventsHandler();
  const { stories, generate } = useStoryList();
  
  const storyResources = React.useMemo(() => stories.reduce((prev,story) => ([...prev, ...story.resources]), []), [stories]);
  const storyEvents = React.useMemo(() => stories.reduce((prev, story) => ([...prev, ...story.events]), []), [stories]);

  const _resources = React.useMemo(
    () => [...sharedResources, ...storyResources],
    [sharedResources, storyResources]
  );

  const _events = React.useMemo(() => [...sharedEvents, ...storyEvents], [
    sharedEvents,
    storyEvents,
  ]);


  React.useEffect(() => {
    generate(birth);
  }, [generate, birth]);

  React.useEffect(() => {
    setEvents(_events);
  }, [_events, setEvents]);

  React.useEffect(() => {
    generateSharedEvents(birth);
  }, [birth, generateSharedEvents]);

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
