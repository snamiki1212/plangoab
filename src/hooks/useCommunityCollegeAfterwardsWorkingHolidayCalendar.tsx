import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseEvent } from "../core/event/BaseEvent";
import { BaseResource } from "../core/resource/BaseResource";
import {
  upsertCommunityCollegeAfterwardsWorkingHolidayStoriesAction,
  selectCommunityCollegeAfterwardsWorkingHolidayCalendar,
} from "../redux/features/templateCalendarTable";

export const useCommunityCollegeAfterwardsWorkingHolidayCalendar = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    (birth: string) => {
      dispatch(
        upsertCommunityCollegeAfterwardsWorkingHolidayStoriesAction({ birth })
      );
    },
    [dispatch]
  );

  const calendar = useSelector(
    selectCommunityCollegeAfterwardsWorkingHolidayCalendar
  );

  const stories = React.useMemo(() => calendar?.stories ?? [], [calendar]);

  const resources = React.useMemo(
    () =>
      stories.reduce<BaseResource[]>(
        (prev, story) => [...prev, ...story.resources],
        []
      ),
    [stories]
  );

  const events = React.useMemo(
    () =>
      stories.reduce<BaseEvent[]>(
        (prev, story) => [...prev, ...story.events],
        [] as any[]
      ),
    [stories]
  );

  return { stories, generate, resources, events } as const;
};
