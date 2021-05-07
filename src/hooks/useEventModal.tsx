import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushAction, popAction, selectIsOpen } from "@/redux/ui/eventModal";

export const useEventModal = () => {
  const dispatch = useDispatch();

  const push = React.useCallback(
    ({
      eventId,
      storyId,
      calendarId,
    }: {
      eventId: string;
      storyId: string;
      calendarId: string;
    }) => {
      dispatch(pushAction({ calendarId, eventId, storyId }));
    },
    [dispatch]
  );

  const pop = React.useCallback(() => {
    dispatch(popAction());
  }, [dispatch]);

  const isOpen = useSelector(selectIsOpen);

  return { push, pop, isOpen } as const;
};
