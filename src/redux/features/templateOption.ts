import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type UpdatePayload = {
  schoolPeriod: number;
  coopPeriod: number;
  workingholidayPeriod: number;
};

const slices = createSlice({
  name: "templateOption",
  initialState: {
    option: {
      schoolPeriod: 12 * 2,
      coopPeriod: 12 * 2,
      workingholidayPeriod: 12,
    },
  },
  reducers: {
    update(state, action: PayloadAction<UpdatePayload>) {
      state.option = action.payload;
    },
  },
});

export const selectTemplateOption = (state: RootState) =>
  state.features.templateOption.option;

export const { update: updateAction } = slices.actions;

export default slices.reducer;
