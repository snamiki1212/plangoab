import React, { useMemo, useCallback } from "react";
import { convertUpdateFC } from "~/src/lib/date";
import { EventClickArg } from "@fullcalendar/react";
import { CalendarBase } from "~/src/components/v2/0a_atoms/CalendarBase";
import { useHideCalendarHeader } from "~/src/hooks/v2/useHideCalendarHeader";
import { useSelectTabOfStoryId } from "~/src/hooks/v2/useSelectedTab";
import { useCanEditCalendar } from "~/src/hooks/v2/useCanEditCalendar";

// TODO: v1 to v2
import { useEvent } from "~/src/hooks/v1/useEvent";
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";
import { useResourceGroupLabelContentInUserCalendar } from "~/src/hooks/v1/useResourceGroupLabelContentInUserCalendar";
import { useStoryModal } from "~/src/hooks/v1/useStoryModal";
import { useEventModal } from "~/src/hooks/v1/useEventModal";

const headerToolbar = {
  left: "",
  center: "",
  right: "",
} as const;

type Props = { isPreviewMode?: boolean };

const useHandleUpdateEvent = (enable: boolean) => {
  const { updateById } = useEvent();

  const updateEvent = React.useCallback(
    (info: any) => {
      if (!enable) return;
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
    [updateById, enable]
  );
  return updateEvent;
};

const useHandleClickEvent = (enable: boolean) => {
  const { push: pushEventModal } = useEventModal();
  const click = React.useCallback(
    (info: EventClickArg) => {
      if (!enable) return;
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
    [pushEventModal, enable]
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

const useGetEventsAndResources = () => {
  const selectedStoryId = useSelectTabOfStoryId();
  const { stories } = useUserCalendar();
  const result = useMemo(() => {
    const story = stories.find((story) => story.id === selectedStoryId);
    const events = story?.events ?? [];
    const resources = story?.resources ?? [];
    return [events, resources] as const;
  }, [stories, selectedStoryId]);
  return result;
};

const useHandleSelectEventCell = (enable: boolean) => {
  const { select } = useUserCalendar();
  const noop = useCallback(() => {}, []);
  return enable ? select : noop;
};

export function UserCalendar() {
  useHideCalendarHeader();

  // const resourceGroupLabelContent = useRGLC();
  const canEdit = useCanEditCalendar();
  const selectEventCell = useHandleSelectEventCell(canEdit);
  const updateEvent = useHandleUpdateEvent(canEdit);
  const clickEvent = useHandleClickEvent(canEdit);
  const [events, resources] = useGetEventsAndResources();

  return (
    <CalendarBase
      events={events}
      resources={resources}
      // click event
      eventClick={clickEvent}
      // select empty space
      selectable={canEdit}
      select={selectEventCell}
      // drag or resize event
      editable={canEdit}
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
