import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushAction, popAction, selectIsOpen } from "@/redux/ui/storyModal";

export const useStoryModal = () => {
  const dispatch = useDispatch();

  const push = React.useCallback(
    ({ storyId, calendarId }: { storyId: string; calendarId: string }) => {
      dispatch(pushAction({ calendarId, storyId }));
    },
    [dispatch]
  );

  const pop = React.useCallback(() => {
    dispatch(popAction());
  }, [dispatch]);

  const isOpen = useSelector(selectIsOpen);

  return { push, pop, isOpen } as const;
};
