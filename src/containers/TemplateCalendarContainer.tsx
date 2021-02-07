import React from "react";
import { useCommunityCollegeAfterwardsWorkingHolidayCalendar } from "../hooks/useCommunityCollegeAfterwardsWorkingHolidayCalendar";
import { useUser } from "../hooks/useUser";
import { BaseCalendarContainer } from "./BaseCalendarContainer";
import { useResourceGroupLabelContentInTemplateCalendar } from "../hooks/useResourceGroupLabelContentInTemplateCalendar";

const ableConfis = {
  selectable: false,
  editable: false,
} as const;

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
      {...ableConfis}
    />
  );
}
