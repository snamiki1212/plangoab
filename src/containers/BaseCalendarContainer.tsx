import React from "react";
import { FullCalendarWithConfigs } from "../components/atoms/FullCalendarWithConfigs";
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

  return <FullCalendarWithConfigs {...props} {...args} />;
}
