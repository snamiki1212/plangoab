import React from "react";
import { ProfileStory } from "../core/story/ProfileStory";
import { MyCalendar } from "../core/calendar/MyCalendar";

export const useMyCalendar = () => {
  const [calendar, setCalendar] = React.useState<MyCalendar>();

  const init = React.useCallback((birthday: string | Date) => {
    const story = new ProfileStory(birthday);
    const calendar = new MyCalendar([story]);
    setCalendar(calendar);
  }, []);

  const events = React.useMemo(() => calendar?.events ?? [], [calendar]);
  const resources = React.useMemo(() => calendar?.resources ?? [], [calendar]);

  return [events, resources, init] as const;
};
