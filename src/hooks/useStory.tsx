import React from "react";
import { useDispatch } from "react-redux";
import { removeStoryAction } from "../redux/features/userCalendars";

type IdSet = { calendarId: string; storyId: string };

export const useStory = () => {
  const dispatch = useDispatch();

  const remove = React.useCallback(
    ({ calendarId, storyId }: IdSet) => {
      if (!window.confirm("Do you remove this story?")) return;
      dispatch(
        removeStoryAction({
          storyId,
          calendarId,
        })
      );
    },
    [dispatch]
  );

  return { remove } as const;
};
