import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/src/redux/rootReducer";

const STEP_NAME = {
  0: "INPUT_BIRTHDAY",
  1: "SELECT_TEMPLATE",
  2: "SHOW_CALENDAR",
} as const;

type State = {
  store: {
    stepIdx: number;
    isFinished: boolean;
  };
};

type GotoPayload = {
  stepIdx: number;
};

const initialState = {
  store: {
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
      state.store.stepIdx = payload.stepIdx;
    },
    next(state) {
      if (state.store.stepIdx >= MAX) return;
      state.store.stepIdx += 1;
      if (state.store.stepIdx === MAX) state.store.isFinished = true;
    },
    back(state) {
      if (state.store.stepIdx <= MIN) return;
      state.store.stepIdx -= 1;
    },
  },
});

export const selectStepIdx = (state: RootState) =>
  state.v2.ui.step.store.stepIdx as 0 | 1 | 2;

export const selectStepName = (state: RootState) =>
  STEP_NAME[selectStepIdx(state)];

export const selectIsFinished = (state: RootState) =>
  state.v2.ui.step.store.isFinished;

export const {
  reset: resetAction,
  goto: gotoAction,
  next: nextAction,
  back: backAction,
} = slice.actions;

export default slice.reducer;
