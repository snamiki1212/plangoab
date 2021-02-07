import React from "react";
import { BaseFullCalendar } from "../components/atoms/BaseFullCalendar";
import { useResourceGroupLabelContent } from "../hooks/useResourceGroupLabelContent";

export function BaseCalendarContainer(props: any) {
  const resourceGroupLabelContent = useResourceGroupLabelContent();

  const args = {
    resourceGroupLabelContent,
  };

  return <BaseFullCalendar {...props} {...args} />;
}
