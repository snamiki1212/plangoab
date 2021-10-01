import React from "react";
import { CalendarBase } from "~/src/components/v1/atoms/CalendarBase";
import { useResourceGroupLabelContentInTemplateCalendar } from "~/src/hooks/v1/useResourceGroupLabelContentInTemplateCalendar";
import { useStory } from "~/src/hooks/v1/useStory";
import { BaseStory } from "~/src/core/v1/story/BaseStory";
import { OPEN_OPTION_BUTTON } from "~/src/hooks/v1/useTemplateCustomButtons";

const configs = {
  selectable: false,
  editable: false,
  resourcesInitiallyExpanded: false,
} as const;

const headerToolbar = {
  left: `${OPEN_OPTION_BUTTON}`,
  center: "",
  right: "prev,next",
} as const;

export function CollegeCalendarBase(props: any) {
  const { create: createStory } = useStory();

  const createClickHandel = React.useCallback(
    ({ story, calendarId }: { story: BaseStory; calendarId: string }) =>
      () => {
        if (!window.confirm("Do you copy this story to My Calendar?")) return;
        createStory({ calendarId }, story);
      },
    [createStory]
  );

  const { resourceGroupLabelContent } =
    useResourceGroupLabelContentInTemplateCalendar({ createClickHandel });

  return (
    <CalendarBase
      {...props}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
      headerToolbar={headerToolbar}
      {...configs}
    />
  );
}
