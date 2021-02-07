import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyCalendar } from "../../core/calendar/MyCalendar/MyCalendar";

type Calendar = MyCalendar;
type SetAction = { calendars: Calendar[] };

const calendarsSlice = createSlice({
  name: "calendars",
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

export const { update } = calendarsSlice.actions;

export default calendarsSlice.reducer;
