import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/src/redux/reducers/rootReducer";

type State = {
  isConfirmBeforeLeave: boolean;
};

const initialState: State = {
  isConfirmBeforeLeave: true,
};

const slice = createSlice({
  name: "v2/ui/navigation",
  initialState,
  reducers: {
    disableConfirmBeforeLeave(state) {
      state.isConfirmBeforeLeave = false;
    },
  },
});

export const selectIsConfirmBeforeLeave = (state: RootState) =>
  state.v2.ui.navigation.isConfirmBeforeLeave;

export const { disableConfirmBeforeLeave: disableConfirmBeforeLeaveAction } =
  slice.actions;

export default slice.reducer;
