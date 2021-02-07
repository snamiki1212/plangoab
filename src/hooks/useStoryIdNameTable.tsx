import React from "react";
import { useSelector } from "react-redux";

import { selectUserCalendar } from "../redux/features/userCalendars";
import { selectTable } from "../redux/features/templateCalendarTable";
import { BaseCalendar } from "../core/calendar/BaseCalendar";

export type Table = { [key: string]: string };

export const useStoryIdNameTable = () => {
  const userCalendars = useSelector(selectUserCalendar);
  const templateCalendarTable = useSelector(selectTable);

  const templateCalendars = React.useMemo(
    () =>
      Object.entries(templateCalendarTable).reduce((prev, table) => {
        const [, value] = table;
        return !!value ? [...prev, value] : prev;
      }, [] as BaseCalendar[]),
    [templateCalendarTable]
  );

  const allCalendars = React.useMemo(
    () => [...userCalendars, ...templateCalendars],
    [userCalendars, templateCalendars]
  );

  const storyIdNameTable = React.useMemo(() => {
    const table = allCalendars.reduce((prev, calendar) => {
      const _table = calendar.stories.reduce(
        (prev, story) => ({ ...prev, [story.id]: story.name }),
        {} as Table
      );
      return { ...prev, ..._table };
    }, {} as Table);

    return table;
  }, [allCalendars]);

  return storyIdNameTable;
};
