import React from "react";
import { useMyCalendar } from "../../hooks/useMyCalendar";
import { useStoryList } from "../../hooks/useStoryList";
import { useUser } from "../../hooks/useUser";
import { useEventsHandler } from "../../hooks/useEventsHandler";
import { FullCalendarWithConfigs } from "../atoms/FullCalendarWithConfigs";

const MyCalendar = function () {
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
