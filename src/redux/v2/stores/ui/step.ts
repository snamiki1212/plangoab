import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/src/redux/rootReducer";

const STEP_NAME = {
  0: "INPUT_BIRTHDAY",
  1: "SELECT_TEMPLATE",
  2: "SHOW_CALENDAR",
} as const;

type State = {
  step: {
    stepIdx: number;
    isFinished: boolean;
  };
};

type GotoPayload = {
  stepIdx: number;
};

const initialState = {
  step: {
    stepIdx: 0,
    isFinished: false,
  },
} as State;

const MAX = 2;
const MIN = 0;

const slice = createSlice({
  name: "v2/ui/step",
  initialState,
  reducers: {
    reset: () => initialState,
    goto(state, { payload }: PayloadAction<GotoPayload>) {
      if (payload.stepIdx >= MAX) return;
      if (payload.stepIdx <= MIN) return;
      state.step.stepIdx = payload.stepIdx;
    },
    next(state, _action) {
      if (state.step.stepIdx >= MAX) return;
      state.step.stepIdx += 1;
      if (state.step.stepIdx === MAX) state.step.isFinished = true;
    },
    back(state, _action) {
      if (state.step.stepIdx <= MIN) return;
      state.step.stepIdx -= 1;
    },
  },
});

export const selectStepIdx = (state: RootState) =>
  state.v2.ui.step.step.stepIdx as 0 | 1 | 2;

export const selectStepName = (state: RootState) =>
  STEP_NAME[selectStepIdx(state)];

export const selectIsFinished = (state: RootState) =>
  state.v2.ui.step.step.isFinished;

export const {
  reset: resetAction,
  goto: gotoAction,
  next: nextAction,
  back: backAction,
} = slice.actions;

export default slice.reducer;
