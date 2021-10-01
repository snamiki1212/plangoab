import { useMemo, useCallback } from "react";
import { CalendarTab } from "@/components/v2/x0_atoms/CalendarTab";
import { CalendarBase } from "@/components/v1/atoms/CalendarBase";
import { useEvent } from "@/hooks/v1/useEvent";
import {
  useUserCalendarCustomButtons,
  ADD_STORY_BUTTON,
  REMOVE_CALENDAR_BUTTON,
} from "@/hooks/v1/useUserCalendarCustomButtons";
import { EventClickArg } from "@fullcalendar/react";
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";
import { useResourceGroupLabelContentInUserCalendar } from "@/hooks/v1/useResourceGroupLabelContentInUserCalendar";
import { useStoryModal } from "@/hooks/v1/useStoryModal";
import { useEventModal } from "@/hooks/v1/useEventModal";
import { convertDateSelectArgToRange, convertUpdateFC } from "@/lib/date";
import { normalizeCalendar } from "@/core/v1/normalize";
import { useCreateCalendarMutation } from "@/redux/v2/services/calendarApi";
import { PLANGOAB_LICENSE_KEY } from "@/constants/fullcalendar";
import { useUser } from "@/hooks/v1/useUser";
import { uuid } from "@/lib/uuid";

export const SaveTab = () => {
  const { stories } = useUserCalendar();

  const { birth } = useUser();
  const calendarId = useMemo(() => uuid(), []);
  const normalized = normalizeCalendar({ id: calendarId, stories });

  const [doCreateCalendar, { isLoading: isUpdating }] =
    useCreateCalendarMutation();

  const createCalendarApi = useCallback(
    () =>
      doCreateCalendar({
        calendar: normalized,
        birthday: birth,
        licenseKey: PLANGOAB_LICENSE_KEY,
      }),
    [doCreateCalendar, normalized, birth]
  );

  const title = isUpdating ? "Saving..." : "Save";

  return (
    <div onClick={createCalendarApi}>
      <CalendarTab title={title} />
    </div>
  );
};
