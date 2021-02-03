import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { generate as generateAction, selectAllStories } from "../redux/features/stories";

export const useStoryList = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    (_birth: string) => {
      const birth = new Date(_birth)
      dispatch(generateAction({ birth }));
    },
    [dispatch]
  );

  const stories = useSelector(selectAllStories);

  return { stories, generate } as const;
};
