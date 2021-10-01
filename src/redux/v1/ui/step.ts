import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/src/redux/rootReducer";

type State = {
  step: {
    isOpen: boolean;
    activeStepIdx: number;
  };
};

type TogglePayload = {
  isOpen?: boolean;
};

const initialState = {
  step: {
    isOpen: true,
    activeStepIdx: 0,
  },
} as State;

const slice = createSlice({
  name: "step",
  initialState,
  reducers: {
    reset: () => initialState,
    toggle(state, _action: PayloadAction<TogglePayload>) {
      const isOpen =
        _action.payload === undefined
          ? !state.step.isOpen
          : !!_action.payload.isOpen;
      state.step.isOpen = isOpen;
    },
    next(state, _action) {
      state.step.activeStepIdx += 1;
    },
    back(state, _action) {
      state.step.activeStepIdx -= 1;
    },
  },
});

export const selectIsOpen = (state: RootState) => !!state.ui.step.step.isOpen;

export const selectActiveStepIdx = (state: RootState) =>
  state.ui.step.step.activeStepIdx;

export const {
  reset: resetAction,
  toggle: toggleAction,
  next: nextAction,
  back: backAction,
} = slice.actions;

export default slice.reducer;
