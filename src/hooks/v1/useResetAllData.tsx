import React from "react";
import { useDispatch } from "react-redux";
import { resetAction as resetUserCalendarsAction } from "@/redux/v1/features/userCalendars";
import { resetAction as resetUserAction } from "@/redux/v1/features/user";
import { resetAction as resetTemplateOptionAction } from "@/redux/v1/features/templateOption";
import { resetAction as resetTemplateCalendarAction } from "@/redux/v1/features/templateCalendar";
import { resetAction as resetStepAction } from "@/redux/v1/ui/step";

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
