import React from "react";
import { useDispatch } from "react-redux";
import { BaseCalendarContainer } from "../atoms/BaseCalendarContainer";
import { useResourceGroupLabelContentInTemplateCalendar } from "../../hooks/useResourceGroupLabelContentInTemplateCalendar";
import { addStoryAction } from "../../redux/features/userCalendars";
import { BaseStory } from "../../core/story/BaseStory";
import { OPEN_OPTION_BUTTON } from "../../hooks/useTemplateCustomButtons";

const ableConfis = {
  selectable: false,
  editable: false,
} as const;

const headerToolbar = {
  left: `${OPEN_OPTION_BUTTON}`,
  center: "title",
  right: "prev,next",
} as const;

export function BaseTemplate(props: any) {
  // TODO: move to custom hooks
  const dispatch = useDispatch();
  const createClickHandel = React.useCallback(
    ({ story, calendarId }: { story: BaseStory; calendarId: string }) => () => {
      if (!window.confirm("Do you copy this story to My Calendar?")) return;
      dispatch(addStoryAction({ calendarId, story }));
    },
    [dispatch]
  );

  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInTemplateCalendar({ createClickHandel });

  return (
    <BaseCalendarContainer
      {...props}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
      headerToolbar={headerToolbar}
      {...ableConfis}
    />
  );
}
