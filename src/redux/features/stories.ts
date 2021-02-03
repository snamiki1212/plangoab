import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import { addYears, addMonths } from "date-fns";
import { CommunityCollegeAfterwardsWorkingHolidayStory } from "../../core/story/CommunityCollegeAfterwardsWorkingHolidayStory";
import { AGE_OF_START_STORY } from "../../constants/fullcalendar/options";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../constants/visa";
import { COMMUNITY_COLLEGE_EXAMPLE1 } from "../../constants/school";
import { range } from "../../lib/util";
import { RootState } from "../rootReducer";

const startMonths = COMMUNITY_COLLEGE_EXAMPLE1.startMonths;

const storyAdapter = createEntityAdapter<CommunityCollegeAfterwardsWorkingHolidayStory>();
const initialState = storyAdapter.getInitialState();

const addingNumbers = range(
  AGE_OF_START_STORY,
  WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
);

type GeneratePayload = {
  birth: Date;
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    generate(state, action: PayloadAction<GeneratePayload>) {
      const { birth } = action.payload;

      // TODO: fix me. we should avoid to create object here.
      const _stories = addingNumbers
        .map((num) => addYears(birth, num))
        .flatMap((startDate) => {
          const datesInYear = startMonths.map((month) =>
            addMonths(startDate, month)
          );
          return datesInYear;
        })
        .map((startDate) => {
          return new CommunityCollegeAfterwardsWorkingHolidayStory(startDate);
        });

      // TODO: Use Adapter functions
      state.entities = _stories.reduce(
        (prev, story) => ({ ...prev, [story.id]: story }),
        {}
      );
      state.ids = _stories.map((story) => story.id);
    },
  },
});

export const { generate } = storiesSlice.actions;

export const { selectAll: selectAllStories } = storyAdapter.getSelectors(
  (state: RootState) => state.stories
);

export default storiesSlice.reducer;
