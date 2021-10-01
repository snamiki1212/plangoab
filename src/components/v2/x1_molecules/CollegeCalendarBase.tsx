import React from "react";
import { useTutorial } from "@/hooks/v2/useTutorial";
import { CalendarBase } from "@/components/v2/x0_atoms/CalendarBase";
// TODO: v1 to v2
import { useResourceGroupLabelContentInTemplateCalendar } from "@/hooks/v1/useResourceGroupLabelContentInTemplateCalendar";
import { useStory } from "@/hooks/v1/useStory";
import { BaseStory } from "@/core/v1/story/BaseStory";
import { OPEN_OPTION_BUTTON } from "@/hooks/v1/useTemplateCustomButtons";

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
  const { next } = useTutorial();

  const createClickHandel = React.useCallback(
    ({ story, calendarId }: { story: BaseStory; calendarId: string }) =>
      () => {
        if (!window.confirm("Do you copy this story to My Calendar?")) return;
        createStory({ calendarId }, story);
        next();
      },
    [createStory, next]
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
