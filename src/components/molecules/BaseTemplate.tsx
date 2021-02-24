import React from "react";
import { useDispatch } from "react-redux";
import { BaseCalendarContainer } from "../atoms/BaseCalendarContainer";
import { useResourceGroupLabelContentInTemplateCalendar } from "../../hooks/useResourceGroupLabelContentInTemplateCalendar";
import { FIELD } from "../../constants/fullcalendar/settings";
import { addStoryAction } from "../../redux/features/userCalendars";
import { BaseStory } from "../../core/story/BaseStory";

const ableConfis = {
  selectable: false,
  editable: false,
} as const;

const resourceAreaColumns = [
  {
    field: FIELD,
    headerContent: "Field",
  },
];

const headerToolbar = {
  left: "",
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
      resourceAreaColumns={resourceAreaColumns}
      headerToolbar={headerToolbar}
      {...ableConfis}
    />
  );
}
