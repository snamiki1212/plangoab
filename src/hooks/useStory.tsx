import React from "react";
import { useDispatch } from "react-redux";
import {
  removeStoryAction,
  updateStoryAction,
  addStoryAction,
} from "../redux/features/userCalendars";
import { BaseStory, updateStory } from "../core/story/BaseStory";
import { initStory } from "../core/story/BaseStory";

type IdSet = { calendarId: string; storyId: string };

export const useStory = () => {
  const dispatch = useDispatch();

  const remove = React.useCallback(({ calendarId, storyId }: IdSet) => {
    // TODO: move this line outside
    if (!window.confirm("Do you remove this story?")) return;
    dispatch(
      removeStoryAction({
        storyId,
        calendarId,
      })
    );
  }, [dispatch]);

  const update = React.useCallback(
    (idSet: IdSet, story: BaseStory, data: any) => {
      const newStory = updateStory(story, data);
      dispatch(updateStoryAction({ ...idSet, newStory }));
    },
    [dispatch]
  );

  const create  = React.useCallback(({calendarId}: {calendarId: string}, params?: Partial<BaseStory>) => {
    const story = initStory({ calendarId });
    dispatch(addStoryAction({ calendarId, story }));
  }, [dispatch]);

  return { remove, update, create } as const;
};
