import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { BaseCalendar } from "../../core/calendar/BaseCalendar";
import { BaseStory } from "../../core/story/BaseStory";

type Calendar = BaseCalendar;
type UpdatePayload = { calendars: Calendar[] };
type AddStoryPayload = { calendarId: string; story: BaseStory };
type RemoveStoryPayload = { calendarId: string; storyId: string };

const userCalendarsSlice = createSlice({
  name: "userCalendars",
  initialState: {
    calendars: [] as Calendar[],
  },
  reducers: {
    update(state, action: PayloadAction<UpdatePayload>) {
      const { calendars } = action.payload;
      state.calendars = calendars;
    },
    addStory(state, action: PayloadAction<AddStoryPayload>) {
      const { calendarId, story } = action.payload;
      const idx = state.calendars.findIndex(
        (calendar) => calendar.id === calendarId
      );
      const cannotFind = idx === -1;
      if (cannotFind) {
        console.warn("cannot find calendar on addStory", calendarId);
        return;
      }
      state.calendars[idx].stories.push(story);
    },
    removeStory(state, action: PayloadAction<RemoveStoryPayload>) {
      const { calendarId, storyId } = action.payload;
      const idx = state.calendars.findIndex(
        (calendar) => calendar.id === calendarId
      );
      const cannotFind = idx === -1;
      if (cannotFind) {
        console.warn("cannot find calendar on addStory", calendarId);
        return;
      }
      state.calendars[idx].stories = state.calendars[idx].stories.filter(
        (story) => story.id !== storyId
      );
    },
  },
});

export const { update, addStory, removeStory } = userCalendarsSlice.actions;

export default userCalendarsSlice.reducer;

export const selectUserCalendar = (state: RootState) =>
  state.userCalendars.calendars;
