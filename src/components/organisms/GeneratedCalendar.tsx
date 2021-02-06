import React from "react";
import { useStoryList } from "../../hooks/useStoryList";
import { useUser } from "../../hooks/useUser";
import { DEPRECATED_useEventsHandler } from "../../hooks/DEPRECATED_useEventsHandler";
import { FullCalendarWithConfigs } from "../atoms/FullCalendarWithConfigs";

export function GeneratedCalendar() {
  const { birth } = useUser();

  const { events, select, click, set: setEvents } = DEPRECATED_useEventsHandler();
  const { stories, generate } = useStoryList();

  const storyResources = React.useMemo(
    () =>
      stories.reduce(
        (prev, story) => [...prev, ...story.resources],
        [] as any[]
      ),
    [stories]
  );
  const storyEvents = React.useMemo(
    () =>
      stories.reduce((prev, story) => [...prev, ...story.events], [] as any[]),
    [stories]
  );

  React.useEffect(() => {
    generate(birth);
  }, [generate, birth]);

  React.useEffect(() => {
    setEvents(storyEvents);
  }, [storyEvents, setEvents]);

  return (
    <FullCalendarWithConfigs
      events={events}
      resources={storyResources}
      select={select}
      eventClick={click}
      initialDate={"2020-06-01"}
    />
  );
}