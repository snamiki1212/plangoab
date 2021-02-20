import React from "react";
import { useDispatch } from "react-redux";
import {
  removeEventAction,
  updateEventAction,
  updateEventByIdAction,
} from "../redux/features/userCalendars";
import { BaseEvent, updateEvent } from "../core/event/BaseEvent";

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

  const update = React.useCallback(
    (idSet: IdSet, event: BaseEvent, params: any) => {
      const newEvent = updateEvent(event, params);
      dispatch(updateEventAction({ ...idSet, newEvent }));
    },
    [dispatch]
  );

  const updateById = React.useCallback(
    (idSet: IdSet, params: Partial<BaseEvent>) => {
      dispatch(updateEventByIdAction({ ...idSet, params }));
    },
    [dispatch]
  );

  return {
    remove,
    update,
    updateById
  } as const;
};
