import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAction,
  selectedStoryId,
} from "~/src/redux/v2/stores/features/selectedTab";

export const useSelectedTab = () => {
  const dispatch = useDispatch();

  const select = useCallback(
    (storyId: string) => dispatch(selectAction({ storyId })),
    [dispatch]
  );
  return select;
};

export const useSelectTabOfStoryId = () => useSelector(selectedStoryId);
