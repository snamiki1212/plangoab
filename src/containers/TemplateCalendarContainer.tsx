import React from "react";
import { BaseCalendarContainer } from "./BaseCalendarContainer";
import { useCommunityCollegeAfterwardsWorkingHolidayCalendar } from "../hooks/useCommunityCollegeAfterwardsWorkingHolidayCalendar";
import { useUser } from "../hooks/useUser";
import { useResourceGroupLabelContentInTemplateCalendar } from "../hooks/useResourceGroupLabelContentInTemplateCalendar";
import { FIELD1, FIELD2 } from "../constants/fullcalendar/settings";

const ableConfis = {
  selectable: false,
  editable: false,
} as const;

const resourceAreaColumns = [
  {
    field: FIELD1,
    headerContent: "Category",
  },
  {
    field: FIELD2,
    headerContent: "Event",
  },
];

export function TemplateCalendarContainer() {
  const { birth } = useUser();
  const {
    resources,
    events,
    generate,
  } = useCommunityCollegeAfterwardsWorkingHolidayCalendar();
  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInTemplateCalendar();

  React.useEffect(() => {
    generate(birth);
  }, [generate, birth]);

  return (
    <BaseCalendarContainer
      events={events}
      resources={resources}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
      resourceAreaColumns={resourceAreaColumns}
      {...ableConfis}
    />
  );
}
