import React from "react";
import { useDispatch } from "react-redux";
import { resetAction as resetUserCalendarsAction } from "../redux/features/userCalendars";
import { resetAction as resetUserAction } from "../redux/features/user";
import { resetAction as resetTemplateOptionAction } from "../redux/features/templateOption";
import { resetAction as resetTemplateCalendarAction } from "../redux/features/templateCalendarTable";
import { resetAction as resetStepAction } from "../redux/ui/step";

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
