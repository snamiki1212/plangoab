import React from "react";
import { BaseCalendarContainer } from "../atoms/BaseCalendarContainer";
import { useEvent } from "../../hooks/useEvent";
import {
  useUserCalendarCustomButtons,
  ADD_STORY_BUTTON,
  REMOVE_CALENDAR_BUTTON,
} from "../../hooks/useUserCalendarCustomButtons";
import { EventClickArg } from "@fullcalendar/react";
import { useUserCalendar } from "../../hooks/useUserCalendar";
import { useResourceGroupLabelContentInUserCalendar } from "../../hooks/useResourceGroupLabelContentInUserCalendar";
import { useStoryModal } from "../../hooks/useStoryModal";
import { useEventModal } from "../../hooks/useEventModal";

const configs = {
  resourcesInitiallyExpanded: true,
} as const;

const headerToolbar = {
  left: `${ADD_STORY_BUTTON},${REMOVE_CALENDAR_BUTTON}`,
  center: "title",
  right: "prev,next",
} as const;

export function UserCalendar() {
  const { push: pushStoryModal } = useStoryModal();
  const { push: pushEventModal } = useEventModal();

  const createOpenStoryHandle = React.useCallback(
    (idSet: { calendarId: string; storyId: string }) => () => {
      pushStoryModal(idSet);
    },
    [pushStoryModal]
  );

  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInUserCalendar({
    createOpenHandle: createOpenStoryHandle,
  });
  const { events, resources, select } = useUserCalendar();

  const click = React.useCallback(
    (info: EventClickArg) => {
      const calendarId = info.event.extendedProps.calendarId as
        | string
        | undefined;
      if (!calendarId) {
        return console.warn("Invalid data. cannot find calendarId.");
      }

      const eventId = info.event.id;
      if (!eventId) {
        return console.warn("Invalid data. cannot find eventId.");
      }

      const storyId = info.event.extendedProps.storyId as string | undefined;
      if (!storyId) {
        return console.warn("Invalid data. cannot find storyId.");
      }

      const idSet = {
        calendarId,
        eventId,
        storyId,
      } as const;

      pushEventModal(idSet);
    },
    [pushEventModal]
  );
  const { updateById } = useEvent();
  const updateEvent = React.useCallback(
    (data: any) => {
      if (!data.event || !data.event.extendedProps) {
        return console.warn("Invalid data. cannot find event data.");
      }
      const start = data.event.start;
      const end = data.event.end;
      const idSet = { ...data.event.extendedProps, eventId: data.event.id };

      const params = { start, end };
      updateById(idSet, params);
    },
    [updateById]
  );

  const { customButtons } = useUserCalendarCustomButtons();

  return (
    <BaseCalendarContainer
      events={events}
      resources={resources}
      // click event
      eventClick={click}
      // select empty space
      selectable={true}
      select={select}
      // drag or resize event
      editable={true}
      eventResize={updateEvent}
      eventDrop={updateEvent}
      // etc
      initialDate={"2020-06-01"} // TODO: change dynamically
      resourceGroupLabelContent={resourceGroupLabelContent}
      customButtons={customButtons}
      headerToolbar={headerToolbar}
      {...configs}
    />
  );
}
