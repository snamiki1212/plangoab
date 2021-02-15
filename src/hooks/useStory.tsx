import React from "react";
import { useDispatch } from "react-redux";
import { removeStoryAction, updateStoryAction } from "../redux/features/userCalendars";
import { BaseStory,updateStory } from "../core/story/BaseStory";

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

  const update = React.useCallback(
    (idSet:IdSet, story: BaseStory, data: any) => {
      const newStory = updateStory(story, data);
      dispatch(updateStoryAction({ ...idSet, newStory }));
    },
    [updateStory, updateStoryAction, dispatch]
  );

  return { remove, update } as const;
};
