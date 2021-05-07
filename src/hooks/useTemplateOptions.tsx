import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTemplateOption,
  selectWithWorkingholiday,
  updateAction,
} from "@/redux/features/templateOption";
import { TemplateOption } from "@/core/calendar/BaseCalendar";

export const useTemplateOptions = () => {
  const dispatch = useDispatch();

  const options = useSelector(selectTemplateOption);
  const withWorkingholiday = useSelector(selectWithWorkingholiday);

  const update = React.useCallback(
    (params: Partial<TemplateOption>) => {
      const newTemplateOption = { ...options, ...params };
      dispatch(updateAction(newTemplateOption));
    },
    [dispatch, options]
  );

  return { options, update, withWorkingholiday } as const;
};
