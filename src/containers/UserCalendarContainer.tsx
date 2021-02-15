import React from "react";
import { useUserCalendar } from "../hooks/useUserCalendar";
import { useUser } from "../hooks/useUser";
import { BaseCalendarContainer } from "./BaseCalendarContainer";
import { useResourceGroupLabelContentInUserCalendar } from "../hooks/useResourceGroupLabelContentInUserCalendar";
import { useResourceModal } from "../hooks/useResourceModal";
//
import { FIELD1, FIELD2 } from "../constants/fullcalendar/settings";
import { ResourceModal } from "../components/molecules/ResourceModal";

const ableConfis = {
  selectable: true,
  editable: true,
} as const;

export function UserCalendarContainer() {
  const { push, pop, isOpen } = useResourceModal();

  const { birth } = useUser();

  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInUserCalendar();

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
          if(!storyId) {
            return console.warn("Invalid data that extended props doesn't storyId.")
          }
          const resourceId = arg.resource.id;
          if(!resourceId) {
            return console.warn("Invalid data that extended props doesn't resourceId.")
          }
          const calendarId = arg.resource.calendarId;
          if(!calendarId) {
            return console.warn("Invalid data that extended props doesn't calendarId.")
          }
          

          let message = arg.fieldValue;
          console.log("RENDER", arg);
          message += "!!!";

          const containerEl = document.createElement("div");

          const buttonEl = document.createElement("button");
          buttonEl.innerHTML = "︙";
          buttonEl.onclick = () => push({ calendarId, storyId, resourceId });
          containerEl.appendChild(buttonEl);

          const messageEl = document.createElement("span");
          messageEl.innerHTML = message;
          containerEl.appendChild(messageEl);

          const arrayOfDomNodes = [containerEl];
          return { domNodes: arrayOfDomNodes };
        },
      },
    ],
    [push]
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
        {/* <button onClick={push}>resource:open</button> */}
        <button onClick={createStory}>story:add</button>
      </div>
      <ResourceModal isOpen={isOpen} onClose={pop} />
    </>
  );
}
