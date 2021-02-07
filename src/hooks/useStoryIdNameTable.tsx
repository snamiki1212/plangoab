import React from "react";

import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";

export type Table = {[key: string]: string}

export const useStoryIdNameTable = () => {
  const calendars = useSelector(
    (state: RootState) => state.calendars.calendars
  );

  const storyIdNameTable = React.useMemo(() => {
    const table = calendars.reduce((prev, calendar) => {
      const _table = calendar.stories.reduce(
        (prev, story) => ({ ...prev, [story.id]: story.name }),
        {} as Table
      );
      return { ...prev, ..._table };
    }, {} as Table);

    return table;
  }, [calendars]);

  return storyIdNameTable;
};
