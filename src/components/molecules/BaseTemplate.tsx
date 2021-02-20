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

export function BaseTemplate(props: any) {
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
      {...ableConfis}
    />
  );
}
