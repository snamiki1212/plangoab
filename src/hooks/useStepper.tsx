import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleAction,
  nextAction,
  backAction,
  selectActiveStepIdx,
  selectIsOpen,
} from "@/redux/ui/step";

export const useStepper = () => {
  const isOpen = useSelector(selectIsOpen);
  const activeStepIdx = useSelector(selectActiveStepIdx);
  const dispatch = useDispatch();
  const next = React.useCallback(() => dispatch(nextAction({})), [dispatch]);
  const back = React.useCallback(() => dispatch(backAction({})), [dispatch]);

  const open = React.useCallback(
    () => dispatch(toggleAction({ isOpen: true })),
    [dispatch]
  );

  const close = React.useCallback(
    () => dispatch(toggleAction({ isOpen: false })),
    [dispatch]
  );

  return { isOpen, activeStepIdx, open, close, next, back };
};
