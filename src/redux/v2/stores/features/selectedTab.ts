import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/src/redux/rootReducer";

type SelectPayload = {
  storyId: string;
};

const initialState = {
  store: {
    selectedStoryId: undefined as undefined | string,
  },
};

const slices = createSlice({
  name: "v2/features/selectedTab",
  initialState,
  reducers: {
    reset: () => initialState,
    select(state, action: PayloadAction<SelectPayload>) {
      state.store.selectedStoryId = action.payload.storyId;
    },
  },
});

export const selectedStoryId = (state: RootState) =>
  state.v2.features.selectedTab.store.selectedStoryId;

export const { reset: resetAction, select: selectAction } = slices.actions;

export default slices.reducer;
