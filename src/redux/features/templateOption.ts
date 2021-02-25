import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

type UpdatePayload = {
  schoolPeriod: number;
  coopPeriod: number;
  pgwpPeriod: number;
  workingholidayPeriod: number;
  monthsOfStartSchool: number[];
};

const initialState = {
  option: {
    schoolPeriod: 12 * 2,
    coopPeriod: 12 * 2,
    pgwpPeriod: 12 * 3,
    workingholidayPeriod: 12,
    monthsOfStartSchool: [1, 5, 9],
  },
};

const slices = createSlice({
  name: "templateOption",
  initialState,
  reducers: {
    reset: () => initialState,
    update(state, action: PayloadAction<UpdatePayload>) {
      state.option = action.payload;
    },
  },
});

export const selectTemplateOption = (state: RootState) =>
  state.features.templateOption.option;

export const selectWithWorkingholiday = (state: RootState) =>
  state.features.templateOption.option.workingholidayPeriod > 0;

export const { reset: resetAction, update: updateAction } = slices.actions;

export default slices.reducer;
