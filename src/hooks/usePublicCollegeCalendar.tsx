import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseEvent } from "@/core/event/BaseEvent";
import { BaseResource } from "@/core/resource/BaseResource";
import { TemplateOption } from "@/core/calendar/BaseCalendar";
import { createPublicCollegeCalendar } from "@/core/calendar/TemplateCalendar/createCalendar";
import {
  upsertPublicCollegeCalendarAction,
  selectPublicCollegeCalendar,
} from "@/redux/features/templateCalendarTable";

export const usePublicCollegeCalendar = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    ({
      birth,
      canWorkingholiday,
      options,
    }: {
      birth: string;
      canWorkingholiday: boolean;
      options: TemplateOption;
    }) => {
      const calendar = createPublicCollegeCalendar(
        {
          birth: new Date(birth),
          canWorkingholiday,
        },
        options
      );
      dispatch(upsertPublicCollegeCalendarAction({ calendar }));
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
