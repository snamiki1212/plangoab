import React from "react";
import { CalendarBase } from "@/components/v1/atoms/CalendarBase";
import { useEvent } from "@/hooks/v1/useEvent";
import { useUserCalendarCustomButtons } from "@/hooks/v2/useUserCalendarCustomButtons";
import { EventClickArg } from "@fullcalendar/react";
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";
import { useResourceGroupLabelContentInUserCalendar } from "@/hooks/v1/useResourceGroupLabelContentInUserCalendar";
import { useStoryModal } from "@/hooks/v1/useStoryModal";
import { useEventModal } from "@/hooks/v1/useEventModal";
import { convertUpdateFC } from "@/lib/date";

const headerToolbar = {
  left: "",
  center: "",
  right: "",
} as const;

const previewConfig = { height: 3000 } as const;
const nonPreviewConfig = { height: 600 } as const;

type Props = { isPreviewMode?: boolean };

export function UserCalendar({ isPreviewMode = false }: Props) {
  const { push: pushStoryModal } = useStoryModal();
  const { push: pushEventModal } = useEventModal();

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

  const config = isPreviewMode ? previewConfig : nonPreviewConfig;

  // const { birth } = useUser();
  // const calendarId = React.useMemo(() => uuid(), []);
  // const normalized = normalizeCalendar({ id: calendarId, stories });

  // const [doCreateCalendar, { isLoading: isUpdating }] =
  //   useCreateCalendarMutation();

  // const createCalendarApi = React.useCallback(
  //   () =>
  //     doCreateCalendar({
  //       calendar: normalized,
  //       birthday: birth,
  //       licenseKey: PLANGOAB_LICENSE_KEY,
  //     }),
  //   [doCreateCalendar, normalized, birth]
  // );

  return (
    <>
      {/* {isUpdating ? (
        "isUpdating"
      ) : (
        <button onClick={createCalendarApi}>POST</button>
      )} */}
      <CalendarBase
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
        headerToolbar={headerToolbar}
        resourcesInitiallyExpanded
        {...config}
      />
    </>
  );
}
