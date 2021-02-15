import React from "react";
import { useDispatch } from "react-redux";
import { useUserCalendar } from "../hooks/useUserCalendar";
import { useUser } from "../hooks/useUser";
import { BaseCalendarContainer } from "./BaseCalendarContainer";
import { useResourceGroupLabelContentInUserCalendar } from "../hooks/useResourceGroupLabelContentInUserCalendar";
import { useResourceModal } from "../hooks/useResourceModal";
import { useStoryModal } from "../hooks/useStoryModal";
import { pushAction } from "../redux/ui/storyModal";
import { FIELD1, FIELD2 } from "../constants/fullcalendar/settings";
import { ResourceModal } from "../components/molecules/ResourceModal";
import { StoryModal } from "../components/molecules/StoryModal";

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
      dispatch(pushAction({ calendarId, storyId }));
      pushStoryModal({ calendarId, storyId });
    },
    [pushStoryModal, dispatch]
  );

  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInUserCalendar({ createOpenHandle:createOpenStoryHandle });

  const {
    events,
    resources,
    init: initUserCalendar,
    click,
    select,
    createStory,
  } = useUserCalendar();

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
        {/* <button onClick={pushResourceModal}>resource:open</button> */}
        <button onClick={createStory}>story:add</button>
      </div>
      <ResourceModal isOpen={isOpenResourceModal} onClose={popResourceModal} />
      <StoryModal isOpen={isOpenStoryModal} onClose={popStoryModal} />
    </>
  );
}
