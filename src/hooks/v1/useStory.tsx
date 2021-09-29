import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeStoryAction,
  updateStoryAction,
  addStoryAction,
  selectStoryByIdFilter,
} from "@/redux/v1/features/userCalendars";
import { BaseStory, updateStory } from "@/core/v1/story/BaseStory";
import { initStory } from "@/core/v1/story/BaseStory";
import { PROFILE_ID } from "@/constants/fullcalendar";

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

  const filterStory = useSelector(selectStoryByIdFilter);

  const updateById = React.useCallback(
    (idSet: IdSet, params: Partial<BaseStory>) => {
      const { calendarId, storyId } = idSet;
      const oldStory = filterStory(calendarId, storyId);
      const newStory = updateStory(oldStory, params);
      dispatch(updateStoryAction({ ...idSet, newStory }));
    },
    [dispatch, filterStory]
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
