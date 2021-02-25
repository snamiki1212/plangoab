import React from "react";
import { TemplateList } from "../templates/TemplateList";
import { UserCalendarCreater } from "../molecules/UserCalendarCreater";
import { useUserCalendar } from "../../hooks/useUserCalendar";

const TemplateHeader = () => <h2>Temapltes</h2>;

export function TemplateCalendarArea() {
  const { calendar } = useUserCalendar();
  const existsCalendar = !!calendar;
  return (
    <div>
      {existsCalendar ? (
        <div>
          <TemplateHeader />
          <TemplateList />
        </div>
      ) : (
        <UserCalendarCreater />
      )}
    </div>
  );
}
