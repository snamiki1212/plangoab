import React from "react";
import { useDispatch } from "react-redux";
import {
  removeStoryAction,
  updateStoryAction,
  updateStoryByIdAction,
  addStoryAction,
} from "@/redux/features/userCalendars";
import { BaseStory, updateStory } from "@/core/story/BaseStory";
import { initStory } from "@/core/story/BaseStory";
import { PROFILE_ID } from "@/constants/fullcalendar/settings";

type IdSet = { calendarId: string; storyId: string };

export const useStory = () => {
  const dispatch = useDispatch();

  const remove = React.useCallback(
    ({ calendarId, storyId }: IdSet) => {
      // TODO: move this line outside
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
    (idSet: IdSet, story: BaseStory, data: Partial<BaseStory>) => {
      const newStory = updateStory(story, data);
      dispatch(updateStoryAction({ ...idSet, newStory }));
    },
    [dispatch]
  );

  const updateById = React.useCallback(
    (idSet: IdSet, params: Partial<BaseStory>) => {
      dispatch(updateStoryByIdAction({ ...idSet, params }));
    },
    [dispatch]
  );

  const create = React.useCallback(
    ({ calendarId }: { calendarId: string }, story?: BaseStory) => {
      const _story = !!story ? story : initStory({ calendarId });
      dispatch(addStoryAction({ calendarId, story: _story }));
    },
    [dispatch]
  );

  return {
    remove,
    update,
    updateById,
    create,
    profileStoryId: PROFILE_ID,
  } as const;
};
