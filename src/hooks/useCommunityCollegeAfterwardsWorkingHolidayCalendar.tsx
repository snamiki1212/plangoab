import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/rootReducer";
import { generateCommunityCollegeAfterwardsWorkingHolidayStories, selectCalendar } from "../redux/features/calendars";

export const useCommunityCollegeAfterwardsWorkingHolidayCalendar = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    (_birth: string) => {
      const birth = new Date(_birth)
      dispatch(generateCommunityCollegeAfterwardsWorkingHolidayStories({ birth }));
    },
    [dispatch]
  );

  const calendar = useSelector(selectCalendar('COMMUNITY_COLLEGE_AFTERWARDS_WORKING_HOLIDAY'));

  const stories = React.useMemo(() => calendar?.stories ?? [], [calendar])

  return { stories, generate } as const;
};
