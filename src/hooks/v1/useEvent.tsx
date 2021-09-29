import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeEventAction,
  updateEventAction,
  selectEventByIdFilter,
} from "@/redux/v1/features/userCalendars";
import { BaseEvent, updateEvent } from "@/core/event/BaseEvent";

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

  const filterEvent = useSelector(selectEventByIdFilter);

  const updateById = React.useCallback(
    (idSet: IdSet, params: Partial<BaseEvent>) => {
      const { calendarId, storyId, eventId } = idSet;
      const oldEvent = filterEvent(calendarId, storyId, eventId);
      const newEvent = updateEvent(oldEvent, params);
      dispatch(updateEventAction({ ...idSet, newEvent }));
    },
    [dispatch, filterEvent]
  );

  return {
    remove,
    update,
    updateById,
  } as const;
};
