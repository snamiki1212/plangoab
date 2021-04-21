import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type State = {
  isOpen: boolean;
};

const slice = createSlice({
  name: "previewModal",
  initialState: {
    isOpen: false,
  } as State,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const selectIsOpen = (state: RootState) => state.ui.previewModal.isOpen;

export const { toggle: toggleAction } = slice.actions;

export default slice.reducer;
