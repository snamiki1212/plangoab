import React from "react";
import { useDispatch } from "react-redux";
import {
  removeEventAction,
  // updateEventAction,
} from "../redux/features/userCalendars";
// import { BaseStory, updateStory } from "../core/story/BaseStory";

type IdSet = { calendarId: string; storyId: string; eventId: string };

export const useEvent = () => {
  const dispatch = useDispatch();

  const remove = React.useCallback(
    ({ calendarId, storyId, eventId }: IdSet) => {
      if (!window.confirm("Do you remove this story?")) return;
      dispatch(
        removeEventAction({
          calendarId,
          storyId,
          eventId,
        })
      );
    },
    [dispatch]
  );

  // const update = React.useCallback(
  //   (idSet: IdSet, story: BaseStory, data: any) => {
  //     const newStory = updateStory(story, data);
  //     dispatch(updateEventAction({ ...idSet, newStory }));
  //   },
  //   [dispatch]
  // );

  return {
    remove,
    // update
  } as const;
};
