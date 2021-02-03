import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { generate as generateAction } from "../redux/features/stories";

export const useStoryList = () => {
  const dispatch = useDispatch();
  const generate = React.useCallback(
    (birth: string) => {
      dispatch(generateAction({ birth }));
    },
    [dispatch]
  );

  const {stories} = useSelector((state: RootState) => state.stories);

  return { stories, generate } as const;
};
