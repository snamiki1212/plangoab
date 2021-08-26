import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/redux/rootReducer";
import { selectStoryByIdFilter } from "@/redux/features/userCalendars";

type State = {
  story: null | {
    calendarId: string;
    storyId: string;
  };
};

type PushPayload = {
  calendarId: string;
  storyId: string;
};

type PopPayload = undefined;

const slice = createSlice({
  name: "storyModal",
  initialState: {
    story: null,
  } as State,
  reducers: {
    push(state, action: PayloadAction<PushPayload>) {
      const _payload = action.payload;
      state.story = _payload;
    },
    pop(state, _action: PayloadAction<PopPayload>) {
      state.story = null;
    },
  },
});

export const selectIsOpen = (state: RootState) => !!state.ui.storyModal.story;

export const selectStoryModal = (state: RootState) => state.ui.storyModal.story;

export const selectStory = createSelector(
  [selectStoryModal, selectStoryByIdFilter],
  (modal, filter) => {
    if (!modal) return null;
    const { calendarId, storyId } = modal;
    return filter(calendarId, storyId);
  }
);

export const { push: pushAction, pop: popAction } = slice.actions;

export default slice.reducer;
