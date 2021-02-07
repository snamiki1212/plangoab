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
  } = useUserCalendar();

  React.useEffect(() => {
    initUserCalendar(birth);
  }, [birth, initUserCalendar]);

  return (
    <BaseCalendarContainer
      events={events}
      resources={resources}
      select={select}
      eventClick={click}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
      {...ableConfis}
    />
  );
}
