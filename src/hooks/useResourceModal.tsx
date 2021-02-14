import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushAction, popAction, selectIsOpen } from "../redux/ui/resourceModal";

export const useResourceModal = () => {
  const dispatch = useDispatch();

  const push = React.useCallback(
    ({
      resourceId,
      storyId,
      calendarId,
    }: {
      resourceId: string;
      storyId: string;
      calendarId: string;
    }) => {
      dispatch(pushAction({ calendarId, resourceId, storyId }));
    },
    [dispatch]
  );

  const pop = React.useCallback(() => {
    dispatch(popAction());
  }, [dispatch]);

  const isOpen = useSelector(selectIsOpen);

  return { push, pop, isOpen } as const;
};
