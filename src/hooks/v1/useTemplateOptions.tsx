import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTemplateOption,
  selectWithWorkingholiday,
  updateAction,
} from "~/src/redux/v1/features/templateOption";
import { TemplateOption } from "~/src/core/v1/calendar/BaseCalendar";

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
