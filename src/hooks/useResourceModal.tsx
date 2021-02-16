import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushAction, popAction, selectIsOpen } from "../redux/ui/resourceModal";

type IdSet = {
  resourceId: string;
  storyId: string;
  calendarId: string;
};

export const useResourceModal = () => {
  const dispatch = useDispatch();

  const push = React.useCallback(
    ({ resourceId, storyId, calendarId }: IdSet) => {
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
