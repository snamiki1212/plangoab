import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type State = {
  widthPx: string | undefined;
};

type UpdateWidthPx = {
  widthPx: string;
};

/**
 * Handle screen shot feature
 */
const slice = createSlice({
  name: "capture",
  initialState: {
    widthPx: undefined,
  } as State,
  reducers: {
    updateWidthPx(state, action: PayloadAction<UpdateWidthPx>) {
      const { widthPx } = action.payload;
      state.widthPx = widthPx;
    },
  },
});

export const selectWidthPx = (state: RootState) => state.ui.capture.widthPx;

export const { updateWidthPx: updateWidthPxAction } = slice.actions;

export default slice.reducer;
