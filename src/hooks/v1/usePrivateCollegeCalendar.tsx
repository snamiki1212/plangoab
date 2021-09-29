import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseEvent } from "@/core/v1/event/BaseEvent";
import { BaseResource } from "@/core/v1/resource/BaseResource";
import { TemplateOption } from "@/core/v1/calendar/BaseCalendar";
import { createPrivateCollegeCalendar } from "@/core/v1/calendar/TemplateCalendar/createCalendar";
import { createDate } from "@/lib/date";
import {
  upsertPrivateCollegeCalendarAction,
  selectPrivateCollegeCalendar,
} from "@/redux/v1/features/templateCalendar";

type GenerateArg = {
  birth: string;
  canWorkingholiday: boolean;
  options: TemplateOption;
};

export const usePrivateCollegeCalendar = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    ({ birth, canWorkingholiday, options }: GenerateArg) => {
      const props = {
        birth: createDate(birth),
        canWorkingholiday,
      };
      const calendar = createPrivateCollegeCalendar(props, options);
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
