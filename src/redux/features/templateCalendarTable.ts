import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createCalendar,
  createPublicCollegeCalendar,
} from "../../core/calendar/PrivateCollegeCalendar/createCalendar";
import {
  PRIVATE_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "../../core/calendar/PrivateCollegeCalendar/model";
import { BaseCalendar, TemplateOption } from "../../core/calendar/BaseCalendar";
import { RootState } from "../rootReducer";

type UpsertPrivateCollegeStoriesPayload = {
  birth: string;
  canWorkingholiday: boolean;
  options: TemplateOption;
};

type UpsertPublicCollegeStoriesPayload = {
  birth: string;
  canWorkingholiday: boolean;
  options: TemplateOption;
};

const templateCalendarTable = createSlice({
  name: "templateCalendarTable",
  initialState: {
    [PRIVATE_COLLEGE_CALENDAR_ID]: undefined as BaseCalendar | undefined, // TODO: not base calendar
    [PUBLIC_COLLEGE_CALENDAR_ID]: undefined as BaseCalendar | undefined, // TODO: not base calendar
  },
  reducers: {
    upsertPrivateCollegeStories(
      state,
      action: PayloadAction<UpsertPrivateCollegeStoriesPayload>
    ) {
      const { birth, canWorkingholiday, options } = action.payload;

      // TODO: for private
      const _calendar = createCalendar(
        {
          birth: new Date(birth),
          canWorkingholiday,
        },
        options
      );
      state[PRIVATE_COLLEGE_CALENDAR_ID] = _calendar;
    },
    upsertPublicCollegeStories(
      state,
      action: PayloadAction<UpsertPublicCollegeStoriesPayload>
    ) {
      const { birth, canWorkingholiday, options } = action.payload;

      const _calendar = createPublicCollegeCalendar(
        {
          birth: new Date(birth),
          canWorkingholiday,
        },
        options
      );
      state[PUBLIC_COLLEGE_CALENDAR_ID] = _calendar;
    },
  },
});

export default templateCalendarTable.reducer;

export const {
  upsertPrivateCollegeStories: upsertPrivateCollegeStoriesAction,
  upsertPublicCollegeStories: upsertPublicCollegeStoriesAction,
} = templateCalendarTable.actions;

export const selectPrivateCollegeCalendar = (state: RootState) =>
  state.features.templateCalendar[PRIVATE_COLLEGE_CALENDAR_ID];

export const selectPublicCollegeCalendar = (state: RootState) =>
  state.features.templateCalendar[PUBLIC_COLLEGE_CALENDAR_ID];
