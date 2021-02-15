import React from "react";
import { useDispatch } from "react-redux";
import { BaseCalendarContainer } from "../../components/atoms/BaseCalendarContainer";
import { useCommunityCollegeCalendar } from "../../hooks/useCommunityCollegeCalendar";
import { useUser } from "../../hooks/useUser";
import { useResourceGroupLabelContentInTemplateCalendar } from "../../hooks/useResourceGroupLabelContentInTemplateCalendar";
import { FIELD1, FIELD2 } from "../../constants/fullcalendar/settings";
import { addStoryAction } from "../../redux/features/userCalendars";
import { BaseStory } from "../../core/story/BaseStory";

const ableConfis = {
  selectable: false,
  editable: false,
} as const;

const resourceAreaColumns = [
  {
    field: FIELD1,
    headerContent: "Category",
  },
  {
    field: FIELD2,
    headerContent: "Event",
  },
];

export function TemplateCalendarContainer() {
  const dispatch = useDispatch();
  const { birth, canWorkingholiday } = useUser();
  const { resources, events, generate } = useCommunityCollegeCalendar();

  const createClickHandel = React.useCallback(
    ({ story, calendarId }: { story: BaseStory; calendarId: string }) => () => {
      if (!window.confirm("Copy to my calendar?")) return;
      dispatch(addStoryAction({ calendarId, story }));
    },
    [dispatch]
  );

  const {
    resourceGroupLabelContent,
  } = useResourceGroupLabelContentInTemplateCalendar({ createClickHandel });

  React.useEffect(() => {
    generate({ birth, canWorkingholiday });
  }, [generate, birth, canWorkingholiday]);

  return (
    <BaseCalendarContainer
      events={events}
      resources={resources}
      initialDate={"2020-06-01"}
      resourceGroupLabelContent={resourceGroupLabelContent}
      resourceAreaColumns={resourceAreaColumns}
      {...ableConfis}
    />
  );
}
