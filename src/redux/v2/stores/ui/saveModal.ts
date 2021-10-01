import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/src/redux/rootReducer";

type State = {
  isOpen: boolean;
};

const initialState: State = {
  isOpen: false,
};

const slice = createSlice({
  name: "v2/ui/saveModal",
  initialState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const selectIsOpen = (state: RootState) => state.ui.previewModal.isOpen;

export const { toggle: toggleAction } = slice.actions;

export default slice.reducer;
