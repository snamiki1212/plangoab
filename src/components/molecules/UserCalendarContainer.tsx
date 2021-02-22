import React from "react";
import { EventClickArg } from "@fullcalendar/react";
import { useUserCalendar } from "../../hooks/useUserCalendar";
import { useUser } from "../../hooks/useUser";
import { BaseCalendarContainer } from "../../components/atoms/BaseCalendarContainer";
import { useResourceGroupLabelContentInUserCalendar } from "../../hooks/useResourceGroupLabelContentInUserCalendar";
import { useStoryModal } from "../../hooks/useStoryModal";
import { useEventModal } from "../../hooks/useEventModal";
import { useEvent } from "../../hooks/useEvent";
import { useStory } from "../../hooks/useStory";
import { StoryModal } from "../../components/molecules/StoryModal";
import { EventModal } from "../../components/molecules/EventModal";
import { createProfileStory } from "../../core/story/ProfileStory/createProfileStory";

export function UserCalendarContainer() {
  const {
    push: pushStoryModal,
    pop: popStoryModal,
    isOpen: isOpenStoryModal,
  } = useStoryModal();

  const {
    push: pushEventModal,
    pop: popEventModal,
    isOpen: isOpenEventModal,
  } = useEventModal();

  const { birth } = useUser();

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

  const {
    events,
    resources,
    // init: initUserCalendar,
    select,
  } = useUserCalendar();

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
      console.log("data", data);
    },
    [updateById]
  );

  const { updateById: updateStoryById, profileStoryId } = useStory();

  // React.useEffect(() => {
  //   initUserCalendar(birth);
  // }, [birth, initUserCalendar]);

  const { calendar } = useUserCalendar();
  const calendarId = calendar.id;

  React.useEffect(() => {
    const idSet = { calendarId, storyId: profileStoryId };
    const story = createProfileStory({ birth, calendarId });
    updateStoryById(idSet, story);
  }, [updateStoryById, calendarId, profileStoryId, birth]);

  return (
    <>
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
        initialDate={"2020-06-01"}
        resourceGroupLabelContent={resourceGroupLabelContent}
      />

      {/* Modal */}
      <StoryModal isOpen={isOpenStoryModal} onClose={popStoryModal} />
      <EventModal isOpen={isOpenEventModal} onClose={popEventModal} />
    </>
  );
}
