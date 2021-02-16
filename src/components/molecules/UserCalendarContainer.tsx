import React from "react";
import { useDispatch } from "react-redux";
import { useUserCalendar } from "../../hooks/useUserCalendar";
import { useUser } from "../../hooks/useUser";
import { BaseCalendarContainer } from "../../components/atoms/BaseCalendarContainer";
import { useResourceGroupLabelContentInUserCalendar } from "../../hooks/useResourceGroupLabelContentInUserCalendar";
import { useResourceModal } from "../../hooks/useResourceModal";
import { useStoryModal } from "../../hooks/useStoryModal";
import { useEventModal } from "../../hooks/useEventModal";
import { pushAction as pushStoryModalAction } from "../../redux/ui/storyModal";
import { FIELD1, FIELD2 } from "../../constants/fullcalendar/settings";
import { ResourceModal } from "../../components/molecules/ResourceModal";
import { StoryModal } from "../../components/molecules/StoryModal";
import { EventModal } from "../../components/molecules/EventModal";
import { EventClickArg } from "@fullcalendar/react";
import { pushAction as pushEventModalAction } from "../../redux/ui/eventModal";

const ableConfis = {
  selectable: true,
  editable: true,
} as const;

export function UserCalendarContainer() {
  const {
    push: pushResourceModal,
    pop: popResourceModal,
    isOpen: isOpenResourceModal,
  } = useResourceModal();

  const {
    push: pushStoryModal,
    pop: popStoryModal,
    isOpen: isOpenStoryModal,
  } = useStoryModal();

  const {
    pop: popEventModal,
    isOpen: isOpenEventModal,
  } = useEventModal();

  const { birth } = useUser();
  const dispatch = useDispatch();

  const createOpenStoryHandle = React.useCallback(
    ({
      calendarId,
      storyId,
    }: {
      calendarId: string;
      storyId: string;
    }) => () => {
      dispatch(pushStoryModalAction({ calendarId, storyId }));
      pushStoryModal({ calendarId, storyId });
    },
    [pushStoryModal, dispatch]
  );

  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInUserCalendar({
    createOpenHandle: createOpenStoryHandle,
  });

  const {
    events,
    resources,
    init: initUserCalendar,
    // click,
    select,
    createStory,
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
      };

      dispatch(pushEventModalAction(idSet));
    },
    [dispatch]
  );

  React.useEffect(() => {
    initUserCalendar(birth);
  }, [birth, initUserCalendar]);

  const resourceAreaColumns = React.useMemo(
    () => [
      {
        field: FIELD1,
        headerContent: "Category",
      },
      {
        field: FIELD2,
        headerContent: "Event",
        cellContent: function (arg: any) {
          const props = arg.resource.extendedProps;
          const storyId = props["storyId"];
          if (!storyId) {
            return console.warn(
              "Invalid data that extended props doesn't storyId."
            );
          }
          const resourceId = arg.resource.id;
          if (!resourceId) {
            return console.warn(
              "Invalid data that extended props doesn't resourceId."
            );
          }
          const calendarId = props["calendarId"];
          if (!calendarId) {
            return console.warn(
              "Invalid data that extended props doesn't calendarId."
            );
          }

          let message = arg.fieldValue;
          message += "!!!";

          const containerEl = document.createElement("div");

          const buttonEl = document.createElement("button");
          buttonEl.innerHTML = "︙";
          buttonEl.onclick = () =>
            pushResourceModal({ calendarId, storyId, resourceId });
          containerEl.appendChild(buttonEl);

          const messageEl = document.createElement("span");
          messageEl.innerHTML = message;
          containerEl.appendChild(messageEl);

          const arrayOfDomNodes = [containerEl];
          return { domNodes: arrayOfDomNodes };
        },
      },
    ],
    [pushResourceModal]
  );

  return (
    <>
      <div>
        <BaseCalendarContainer
          events={events}
          resources={resources}
          select={select}
          eventClick={click}
          initialDate={"2020-06-01"}
          resourceGroupLabelContent={resourceGroupLabelContent}
          resourceAreaColumns={resourceAreaColumns}
          {...ableConfis}
        />
        <button onClick={createStory}>story:add</button>
      </div>

      {/* Modal */}
      <ResourceModal isOpen={isOpenResourceModal} onClose={popResourceModal} />
      <StoryModal isOpen={isOpenStoryModal} onClose={popStoryModal} />
      <EventModal isOpen={isOpenEventModal} onClose={popEventModal} />
    </>
  );
}
