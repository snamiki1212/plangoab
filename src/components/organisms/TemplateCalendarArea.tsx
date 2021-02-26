import React from "react";
import { TemplateList } from "../templates/TemplateList";
import { UserCalendarCreater } from "../molecules/UserCalendarCreater";
import { useUserCalendar } from "../../hooks/useUserCalendar";

export function TemplateCalendarArea() {
  const { calendar } = useUserCalendar();
  const existsCalendar = !!calendar;
  return (
    <div>{existsCalendar ? <TemplateList /> : <UserCalendarCreater />}</div>
  );
}
