import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseStory } from "../../core/story/BaseStory";
import { RootState } from "../rootReducer";

type UpdatePayload = {
  story: BaseStory;
};

const slices = createSlice({
  name: "userProfileStory",
  initialState: {
    story: undefined as BaseStory | undefined,
  },
  reducers: {
    update(state, action: PayloadAction<UpdatePayload>) {
      const { story } = action.payload;
      state.story = story;
    },
  },
});

export const selectUserProfileStory = (state: RootState) =>
  state.features.userProfileStory.story;

export const { update: updateAction } = slices.actions;

export default slices.reducer;
