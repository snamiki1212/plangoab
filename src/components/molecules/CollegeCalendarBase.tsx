import React from "react";
import { CalendarBaseContainer } from "../atoms/CalendarBaseContainer";
import { useResourceGroupLabelContentInTemplateCalendar } from "../../hooks/useResourceGroupLabelContentInTemplateCalendar";
import { useStory } from "../../hooks/useStory";
import { BaseStory } from "../../core/story/BaseStory";
import { OPEN_OPTION_BUTTON } from "../../hooks/useTemplateCustomButtons";

const configs = {
  selectable: false,
  editable: false,
  resourcesInitiallyExpanded: false,
} as const;

const headerToolbar = {
  left: `${OPEN_OPTION_BUTTON}`,
  center: "title",
  right: "prev,next",
} as const;

export function CollegeCalendarBase(props: any) {
  const { create: createStory } = useStory();

  const createClickHandel = React.useCallback(
    ({ story, calendarId }: { story: BaseStory; calendarId: string }) => () => {
      if (!window.confirm("Do you copy this story to My Calendar?")) return;
      createStory({ calendarId }, story);
    },
    [createStory]
  );

  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInTemplateCalendar({ createClickHandel });

  return (
    <CalendarBaseContainer
      {...props}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
      headerToolbar={headerToolbar}
      {...configs}
    />
  );
}
