import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { BaseCalendar } from "../../core/calendar/BaseCalendar";

type Calendar = BaseCalendar;
type SetAction = { calendars: Calendar[] };

const userCalendarsSlice = createSlice({
  name: "userCalendars",
  initialState: {
    calendars: [] as Calendar[],
  },
  reducers: {
    update(state, action: PayloadAction<SetAction>) {
      const { calendars } = action.payload;
      state.calendars = calendars;
    },
  },
});

export const { update } = userCalendarsSlice.actions;

export default userCalendarsSlice.reducer;

export const selectUserCalendar = (state: RootState) =>
  state.userCalendars.calendars;
