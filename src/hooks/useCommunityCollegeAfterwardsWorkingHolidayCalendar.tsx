import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/rootReducer";
import { upsertCommunityCollegeAfterwardsWorkingHolidayStories, selectCalendar } from "../redux/features/calendars";

export const useCommunityCollegeAfterwardsWorkingHolidayCalendar = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    (birth: string) => {
      dispatch(upsertCommunityCollegeAfterwardsWorkingHolidayStories({ birth }));
    },
    [dispatch]
  );

  const calendar = useSelector(selectCalendar('COMMUNITY_COLLEGE_AFTERWARDS_WORKING_HOLIDAY'));

  const stories = React.useMemo(() => calendar?.stories ?? [], [calendar])

  return { stories, generate } as const;
};
