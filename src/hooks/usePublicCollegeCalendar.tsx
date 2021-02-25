import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseEvent } from "../core/event/BaseEvent";
import { BaseResource } from "../core/resource/BaseResource";
import { TemplateOption } from "../core/calendar/BaseCalendar";
import {
  upsertPublicCollegeStoriesAction,
  selectPublicCollegeCalendar,
} from "../redux/features/templateCalendarTable";

export const usePublicCollegeCalendar = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    (args: { birth: string; options: TemplateOption }) => {
      dispatch(upsertPublicCollegeStoriesAction(args));
    },
    [dispatch]
  );

  const calendar = useSelector(selectPublicCollegeCalendar);

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
