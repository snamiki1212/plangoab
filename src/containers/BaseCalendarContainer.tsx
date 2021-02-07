import React from "react";
import { BaseFullCalendar } from "../components/atoms/BaseFullCalendar";
import { useStoryIdNameTable } from "../hooks/useStoryIdNameTable";
import { useResourceGroupLabelContent } from "../hooks/useResourceGroupLabelContent";

export function BaseCalendarContainer(props: any) {
  const storyIdNameTable = useStoryIdNameTable();
  const resourceGroupLabelContent = useResourceGroupLabelContent(
    storyIdNameTable
  );

  const args = {
    resourceGroupLabelContent,
  };

  return <BaseFullCalendar {...props} {...args} />;
}
