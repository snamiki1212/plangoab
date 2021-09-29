import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseEvent } from "@/core/event/BaseEvent";
import { BaseResource } from "@/core/resource/BaseResource";
import { TemplateOption } from "@/core/calendar/BaseCalendar";
import { createPublicCollegeCalendar } from "@/core/calendar/TemplateCalendar/createCalendar";
import { createDate } from "@/lib/date";
import {
  upsertPublicCollegeCalendarAction,
  selectPublicCollegeCalendar,
} from "@/redux/v1/features/templateCalendar";

type GenerateArg = {
  birth: string;
  canWorkingholiday: boolean;
  options: TemplateOption;
};

export const usePublicCollegeCalendar = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    ({ birth, canWorkingholiday, options }: GenerateArg) => {
      const props = {
        birth: createDate(birth),
        canWorkingholiday,
      };
      const calendar = createPublicCollegeCalendar(props, options);
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
