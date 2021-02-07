import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { upsertCommunityCollegeAfterwardsWorkingHolidayStories, selectCommunityCollegeAfterwardsWorkingHolidayCalendar } from "../redux/features/templateCalendarTable";

export const useCommunityCollegeAfterwardsWorkingHolidayCalendar = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    (birth: string) => {
      dispatch(upsertCommunityCollegeAfterwardsWorkingHolidayStories({ birth }));
    },
    [dispatch]
  );

  const calendar = useSelector(selectCommunityCollegeAfterwardsWorkingHolidayCalendar);

  const stories = React.useMemo(() => calendar?.stories ?? [], [calendar])

  return { stories, generate } as const;
};
