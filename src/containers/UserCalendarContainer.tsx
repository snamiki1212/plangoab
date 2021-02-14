import React from "react";
import { useUserCalendar } from "../hooks/useUserCalendar";
import { useUser } from "../hooks/useUser";
import { BaseCalendarContainer } from "./BaseCalendarContainer";
import { useResourceGroupLabelContentInUserCalendar } from "../hooks/useResourceGroupLabelContentInUserCalendar";
import {FIELD_NAME} from '../constants/fullcalendar/settings'
import {ResourceModal} from '../components/molecules/ResourceModal'

const ableConfis = {
  selectable: true,
  editable: true,
} as const;

export function UserCalendarContainer() {
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

const resourceAreaColumns = [
  {
    field: FIELD_NAME["H1"],
    headerContent: "Category",
  },
  {
    field: FIELD_NAME["H2"],
    headerContent: "Event",
    cellContent: function (arg: any) {
      // MEMO:
      // const props = arg.resource.extendedProps;
      // const stroyId = props["storyId"]
      // const h1 = props["FIELD__H1"]
      // const h2 = props["FIELD__H2"]
      // const resourceId = arg.resource.id;

      let message = arg.fieldValue;
      console.log("RENDER", arg);
      message += "!!!";

      const containerEl = document.createElement("div");

      const messageEl = document.createElement("span");
      messageEl.innerHTML = message;
      containerEl.appendChild(messageEl);

      const buttonEl = document.createElement("button");
      buttonEl.innerHTML = "ok";
      containerEl.appendChild(buttonEl);

      const arrayOfDomNodes = [containerEl];
      return { domNodes: arrayOfDomNodes };
    },
  },
];

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
        <button>resource:add</button>
        <button>resource:remove</button>
        <button>resource:modify</button>
        <button onClick={createStory}>story:add</button>
      </div>
      <ResourceModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
}
