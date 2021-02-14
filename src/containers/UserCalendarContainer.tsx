import React from "react";
import { useUserCalendar } from "../hooks/useUserCalendar";
import { useUser } from "../hooks/useUser";
import { BaseCalendarContainer } from "./BaseCalendarContainer";
import { useResourceGroupLabelContentInUserCalendar } from "../hooks/useResourceGroupLabelContentInUserCalendar";

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

  return (
    <div>
    <BaseCalendarContainer
      events={events}
      resources={resources}
      select={select}
      eventClick={click}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
      {...ableConfis}
    />
    <button>resource:add</button>
    <button>resource:remove</button>
    <button>resource:modify</button>
    <button onClick={createStory}>story:add</button>
    </div>
  );
}
