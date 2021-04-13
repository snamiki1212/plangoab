import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type State = {
  widthPx: string | undefined;
};

type UpdateWidthPx = {
  widthPx: string | undefined;
};

const initialState: State = {
  widthPx: undefined,
};

/**
 * Handle screen shot feature
 */
const slice = createSlice({
  name: "capture",
  initialState,
  reducers: {
    reset: () => initialState,
    updateWidthPx(state, action: PayloadAction<UpdateWidthPx>) {
      const { widthPx } = action.payload;
      state.widthPx = widthPx;
    },
  },
});

export const selectWidthPx = (state: RootState) => state.ui.capture.widthPx;

export const {
  updateWidthPx: updateWidthPxAction,
  reset: resetAction,
} = slice.actions;

export default slice.reducer;
