import React from "react";
import { ProfileStory } from "../core/story/ProfileStory";
import { MyCalendar } from "../core/calendar/MyCalendar";
// import { useEventsHandler } from "./useEventsHandler";

export const useMyCalendar = () => {
  const [calendar, setCalendar] = React.useState<MyCalendar>();

  const init = React.useCallback((birthday: string | Date) => {
    const story = new ProfileStory(birthday);
    const calendar = new MyCalendar([story]);
    setCalendar(calendar);
  }, []);

  const stories = React.useMemo(() => calendar?.stories ?? [], [calendar]);
  const events = React.useMemo(() => calendar?.events ?? [], [calendar]);
  const resources = React.useMemo(() => calendar?.resources ?? [], [calendar]);

  // const { click } = useEventsHandler();

  // const click = React.useCallback(
  //   (arg) => {
  //     console.log("[click]1, arg", arg);
  //     // const newCalendar = _click(calendar)(arg);

  //     const info = arg;
  //     if (!calendar) return null;
  //     if (!window.confirm("Would you like to remove this event?")) return null;
  //     const id = info.event.id;
  //     if (!id) {
  //       console.error("cannot find id in event.");
  //       return null;
  //     }

  //     const newCalendar = calendar;
  //     console.log("[click]1.2, newCalendar", newCalendar, id);
  //     newCalendar.removeEvent(id);
  //     // return calendar

  //     console.log("[click]2, newCalendar", newCalendar);
  //     if (!newCalendar) return;
  //     console.log("[click]3");
  //     setCalendar(newCalendar as MyCalendar);
  //   },
  //   [calendar]
  // );

  return { calendar, stories, events, resources, init /* click */ } as const;
};
