import React from "react";
import { useDispatch } from "react-redux";
import { resetAction as resetUserCalendarsAction } from "~/src/redux/v1/features/userCalendars";
import { resetAction as resetUserAction } from "~/src/redux/v1/features/user";
import { resetAction as resetTemplateOptionAction } from "~/src/redux/v1/features/templateOption";
import { resetAction as resetTemplateCalendarAction } from "~/src/redux/v1/features/templateCalendar";
import { resetAction as resetStepAction } from "~/src/redux/v1/ui/step";

export function useResetAllData() {
  const dispatch = useDispatch();

  const reset = React.useCallback(() => {
    dispatch(resetUserCalendarsAction());
    dispatch(resetUserAction());
    dispatch(resetTemplateOptionAction());
    dispatch(resetTemplateCalendarAction());
    dispatch(resetStepAction());
  }, [dispatch]);

  return { reset } as const;
}
