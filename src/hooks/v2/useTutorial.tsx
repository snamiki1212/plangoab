import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextAction,
  backAction,
  gotoAction,
  selectStepIdx,
  selectStepName,
} from "@/redux/v2/stores/ui/step";

export const useTutorial = () => {
  const dispatch = useDispatch();

  const next = useCallback(() => dispatch(nextAction({})), [dispatch]);
  const back = useCallback(() => dispatch(backAction({})), [dispatch]);
  const goto = useCallback(
    (stepIdx: number) => dispatch(gotoAction({ stepIdx })),
    [dispatch]
  );

  const gotoSelectionTemplate = useCallback(() => goto(1), [goto]);

  return { next, back, gotoSelectionTemplate };
};

export const useSelectStepIdx = () => useSelector(selectStepIdx);
export const useSelectStepName = () => useSelector(selectStepName);
