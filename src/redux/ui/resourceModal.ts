import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type State = {
  resource: null | {
    calendarId: string;
    storyId: string;
    resourceId: string;
  };
};

type PushPayload = {
  calendarId: string;
  storyId: string;
  resourceId: string;
};

type PopPayload = undefined;

const slice = createSlice({
  name: "resourceModal",
  initialState: {
    resource: null,
  } as State,
  reducers: {
    push(state, action: PayloadAction<PushPayload>) {
      console.log("start push", action);
      const _payload = action.payload;
      state.resource = _payload;
    },
    pop(state, _action: PayloadAction<PopPayload>) {
      state.resource = null;
    },
  },
});

export const selectIsOpen = (state: RootState) =>
  !!state.resourceModal.resource;

export const selectResource = (state: RootState) =>
  state.resourceModal.resource;

export const { push: pushAction, pop: popAction } = slice.actions;

export default slice.reducer;
