import React from "react";
import FullCalendarLib, {
  DateSelectArg,
  EventClickArg,
  EventInput,
} from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { uuid } from "../../lib/uuid";
import { useAgeEvents } from "../../hooks/useAgeEvents";
import { useStoryList } from "../../hooks/useStoryList";
import { useAgeContext } from "../../hooks/useAgeContext";
import {
  FULL_CALENDAR_CONFIGS,
  GROUP_ID_KEY,
} from "../../constants/fullcalendar";


export const FullCalendar = () => {
  const [_events, setEvents] = React.useState<EventInput[]>([]);

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
  
  const _resources = storyResources;

  React.useEffect(() => {
    calcAgeEvents(birth);
  }, [birth, calcAgeEvents]);

  React.useEffect(() => {
    setEvents([...ageEvents, ...storyEvents]);
  }, [ageEvents, storyEvents]);

  const select = (info: DateSelectArg) => {
    setEvents((prev) => {
      return [
        ...prev,
        {
          id: uuid(),
          resourceId: info.resource?.id,
          start: info.startStr,
          end: info.endStr,
        },
      ];
    });
  };

  const click = (info: EventClickArg) => {
    if (!window.confirm("Would you like to remove this event?")) return;

    const id = info.event.id;
    setEvents((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  };

  return (
    <FullCalendarLib
      selectable={true}
      editable={true}
      plugins={[interactionPlugin, resourceTimelinePlugin, listPlugin]}
      events={_events}
      resources={_resources}
      select={select}
      eventClick={click}
      {...FULL_CALENDAR_CONFIGS}
      initialDate={"2020-06-01"}
    />
  );
};
