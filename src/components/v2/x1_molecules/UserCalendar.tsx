import React, { useMemo } from "react";
import { convertUpdateFC } from "@/lib/date";
import { EventClickArg } from "@fullcalendar/react";
import { CalendarBase } from "@/components/v2/x0_atoms/CalendarBase";
import { useHideCalendarHeader } from "@/hooks/v2/useHideCalendarHeader";
import { useSelectTabOfStoryId } from "@/hooks/v2/useSelectedTab";
// TODO: v1 to v2
import { useEvent } from "@/hooks/v1/useEvent";
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";
import { useResourceGroupLabelContentInUserCalendar } from "@/hooks/v1/useResourceGroupLabelContentInUserCalendar";
import { useStoryModal } from "@/hooks/v1/useStoryModal";
import { useEventModal } from "@/hooks/v1/useEventModal";

const headerToolbar = {
  left: "",
  center: "",
  right: "",
} as const;

type Props = { isPreviewMode?: boolean };

const useHandleUpdateEvent = () => {
  const { updateById } = useEvent();

  const updateEvent = React.useCallback(
    (info: any) => {
      if (!info.event || !info.event.extendedProps) {
        return console.error("Invalid data. cannot find event data.");
      }
      const calendarId: string | undefined =
        info.event.extendedProps?.calendarId;
      const storyId: string | undefined = info.event.extendedProps?.storyId;
      const eventId: string | undefined = info.event.id;
      if (!calendarId)
        return console.error(
          "Invalid data. Cannot find calendarId in extendedProps"
        );
      if (!storyId)
        return console.error(
          "Invalid data. Cannot find storyId in extendedProps"
        );
      if (!eventId) return console.error("Invalid data. Cannot find eventId");

      const [start, end] = convertUpdateFC(info.event.start, info.event.end);
      const idSet = { calendarId, storyId, eventId };

      const params = { start, end };
      updateById(idSet, params);
    },
    [updateById]
  );
  return updateEvent;
};

const useHandleClickEvent = () => {
  const { push: pushEventModal } = useEventModal();
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
  return click;
};

const useRGLC = () => {
  const { push: pushStoryModal } = useStoryModal();

  const createOpenStoryHandle = React.useCallback(
    (idSet: { calendarId: string; storyId: string }) => () => {
      pushStoryModal(idSet);
    },
    [pushStoryModal]
  );

  const { resourceGroupLabelContent } =
    useResourceGroupLabelContentInUserCalendar({
      createOpenHandle: createOpenStoryHandle,
    });
  return resourceGroupLabelContent;
};

export function UserCalendar() {
  useHideCalendarHeader();
  const selectedStoryId = useSelectTabOfStoryId();
  const { stories, select } = useUserCalendar();

  const resourceGroupLabelContent = useRGLC();
  const updateEvent = useHandleUpdateEvent();
  const clickEvent = useHandleClickEvent();

  const [events, resources] = useMemo(() => {
    const story = stories.find((story) => story.id === selectedStoryId);
    const events = story?.events ?? [];
    const resources = story?.resources ?? [];
    return [events, resources] as const;
  }, [stories, selectedStoryId]);

  return (
    <CalendarBase
      events={events}
      resources={resources}
      // click event
      eventClick={clickEvent}
      // select empty space
      selectable={true}
      select={select}
      // drag or resize event
      editable={true}
      eventResize={updateEvent}
      eventDrop={updateEvent}
      // etc
      initialDate={"2020-06-01"} // TODO: change dynamically
      // resourceGroupLabelContent={resourceGroupLabelContent}
      headerToolbar={headerToolbar}
      resourcesInitiallyExpanded
      resourceGroupField={undefined}
    />
  );
}
