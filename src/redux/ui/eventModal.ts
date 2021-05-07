import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/rootReducer";

type State = {
  event: null | {
    calendarId: string;
    storyId: string;
    eventId: string;
  };
};

type PushPayload = {
  calendarId: string;
  storyId: string;
  eventId: string;
};

type PopPayload = undefined;

const slice = createSlice({
  name: "eventModal",
  initialState: {
    event: null,
  } as State,
  reducers: {
    push(state, action: PayloadAction<PushPayload>) {
      const _payload = action.payload;
      state.event = _payload;
    },
    pop(state, _action: PayloadAction<PopPayload>) {
      state.event = null;
    },
  },
});

export const selectIsOpen = (state: RootState) => !!state.ui.eventModal.event;

export const selectEventModal = (state: RootState) => state.ui.eventModal.event;

export const selectEvent = (state: RootState) => {
  const event = state.ui.eventModal.event;
  if (!event) return null;
  const { calendarId, storyId, eventId } = event;

  // calendar
  const calendarIdx = state.features.userCalendars.calendars.findIndex(
    (calendar) => calendar.id === calendarId
  );
  const cannotFind = calendarIdx === -1;
  if (cannotFind) {
    console.warn("cannot find calendar on removeResource", calendarId);
    return;
  }

  // story
  const storyIdx = state.features.userCalendars.calendars[
    calendarIdx
  ].stories.findIndex((story) => story.id === storyId);
  const cannotFindStory = storyIdx === -1;
  if (cannotFindStory) {
    console.warn("cannot find story on removeResource", calendarId);
    return;
  }

  //
  return state.features.userCalendars.calendars[calendarIdx].stories[
    storyIdx
  ].events.find((event) => event.id === eventId);
};

export const { push: pushAction, pop: popAction } = slice.actions;

export default slice.reducer;
