import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/rootReducer";

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

export const selectStory = (state: RootState) => {
  const _story = state.ui.storyModal.story;
  if (!_story) return null;
  const { calendarId, storyId } = _story;

  // calendar
  const calendarIdx = state.features.userCalendars.calendars.findIndex(
    (calendar) => calendar.id === calendarId
  );
  const cannotFind = calendarIdx === -1;
  if (cannotFind) {
    console.warn("cannot find calendar on removeStory", calendarId);
    return;
  }

  // story
  return state.features.userCalendars.calendars[calendarIdx].stories.find(
    (story) => story.id === storyId
  );
};

export const { push: pushAction, pop: popAction } = slice.actions;

export default slice.reducer;
