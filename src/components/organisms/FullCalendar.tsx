import React from "react";
import { useSharedStory } from "../../hooks/useSharedStory";
import { useStoryList } from "../../hooks/useStoryList";
import { useUser } from "../../hooks/useUser";
import { useEventsHandler } from "../../hooks/useEventsHandler";
import { FullCalendarWithConfigs } from "../atoms/FullCalendarWithConfigs";

const MyCalendar = function () {
  const { birth } = useUser();
  const { events, select, click, set: setEvents } = useEventsHandler();
  const [
    sharedEvents,
    sharedResources,
    generateSharedEvents,
  ] = useSharedStory();

  React.useEffect(() => {
    generateSharedEvents(birth);
  }, [birth, generateSharedEvents]);
  React.useEffect(() => {
    setEvents(sharedEvents);
  }, [setEvents, sharedEvents]);

  return (
    <FullCalendarWithConfigs
      events={events}
      resources={sharedResources}
      select={select}
      eventClick={click}
      initialDate={"2020-06-01"}
    />
  );
};

function GeneratedCalendar() {
  const { birth } = useUser();

  const { events, select, click, set: setEvents } = useEventsHandler();
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

export const FullCalendar = () => {
  return (
    <div>
      <MyCalendar />
      <GeneratedCalendar />
    </div>
  );
};
