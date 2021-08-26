import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/rootReducer";
import { selectEventByIdFilter } from "@/redux/features/userCalendars";

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

export const selectEvent = createSelector(
  [selectEventModal, selectEventByIdFilter],
  (modalInfo, filter) => {
    if (!modalInfo) return null;
    const { calendarId, storyId, eventId } = modalInfo;
    return filter(calendarId, storyId, eventId);
  }
);

export const { push: pushAction, pop: popAction } = slice.actions;

export default slice.reducer;
