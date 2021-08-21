import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseEvent } from "@/core/event/BaseEvent";
import { BaseResource } from "@/core/resource/BaseResource";
import { TemplateOption } from "@/core/calendar/BaseCalendar";
import { createPrivateCollegeCalendar } from "@/core/calendar/TemplateCalendar/createCalendar";
import {
  upsertPrivateCollegeCalendarAction,
  selectPrivateCollegeCalendar,
} from "@/redux/features/templateCalendar";

export const usePrivateCollegeCalendar = () => {
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
      const calendar = createPrivateCollegeCalendar(
        {
          birth: new Date(birth),
          canWorkingholiday,
        },
        options
      );
      dispatch(upsertPrivateCollegeCalendarAction({ calendar }));
    },
    [dispatch]
  );

  const calendar = useSelector(selectPrivateCollegeCalendar);

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
