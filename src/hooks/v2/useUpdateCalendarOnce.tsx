import { useEffect, useMemo } from "react";
import { usePrevious } from "react-use";

// TODO: v1 to v2
import {
  denormalizeCalendar,
  ResponseCalendar,
} from "~/src/core/v1/denormalize";
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";

export const useUpdateCalendarOnce = (calendar: ResponseCalendar) => {
  const { replace } = useUserCalendar();
  const denormalized = useMemo(() => denormalizeCalendar(calendar), [calendar]);
  const prevCalendar = usePrevious(denormalized);
  const shouldUpdate = prevCalendar == undefined;

  useEffect(() => {
    if (shouldUpdate) replace(denormalized);
  }, [denormalized, shouldUpdate]);
};
