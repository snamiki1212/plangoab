import React from "react";
import { UserCalendarContainer } from "../molecules/UserCalendarContainer";
import { UserCalendarCreater } from "../molecules/UserCalendarCreater";
import { useUserCalendar } from "../../hooks/useUserCalendar";

export function UserCalendarArea() {
  const { calendar } = useUserCalendar();
  const existsCalendar = !!calendar;
  return (
    <div>
      {existsCalendar ? <UserCalendarContainer /> : <UserCalendarCreater />}
    </div>
  );
}
